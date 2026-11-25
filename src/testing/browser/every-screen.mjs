/**
 * Every screen, drawn for real, with any error treated as a failure.
 *
 * Run it with:  npm run build && npm run screens
 *
 * This exists because two crashes reached a phone in two days — one on the
 * verdict card, one on the game-over screen — and both were a missing
 * import. Reading the code is how they were eventually found, and reading is
 * not reliable: the check in ../checks had to be taught five separate
 * lessons about what is code and what only looks like it, and each lesson
 * came from something it had already let through.
 *
 * So this does not read anything. It plays the game — deals, reveals every
 * card, calls the word, votes somebody out, reaches the end — and visits
 * every other screen there is, and fails if the browser throws once. A
 * missing import cannot hide from a screen that actually gets drawn.
 *
 * It is not part of `npm test` because it needs a browser, and the game
 * itself needs nothing but React. Run it before releasing.
 */
import { existsSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '..', '..', '..');

const dist = path.join(root, 'dist', 'index.html');
if (!existsSync(dist)) {
  console.error('Build it first:  npm run build');
  process.exit(2); // 2 = cannot run, which npm run verify reads as a skip
}

// A stale build is worse than no build: it reports bugs that were fixed an
// hour ago, or misses ones written since. This caught its own author out.
const newest = (dir) =>
  readdirSync(dir, { withFileTypes: true }).reduce((latest, entry) => {
    const full = path.join(dir, entry.name);
    if (entry.name === 'browser') return latest;
    const when = entry.isDirectory() ? newest(full) : statSync(full).mtimeMs;
    return Math.max(latest, when);
  }, 0);

if (newest(path.join(root, 'src')) > statSync(dist).mtimeMs) {
  console.error('The build is older than the code it came from. Run:  npm run build');
  process.exit(2); // 2 = cannot run, which npm run verify reads as a skip
}

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error(
    'This one needs a real browser, which is not part of the game:\n' +
      '  npm install --no-save playwright && npx playwright install chromium\n' +
      'then run it again. `npm test` does not need any of this.',
  );
  process.exit(2); // 2 = cannot run, which npm run verify reads as a skip
}

const { snapshot } = await import('./layout.mjs');
const { createServer } = await import(path.join(root, 'server', 'server.js'));

const server = createServer();
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const BASE = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({
  // Whatever chromium is to hand: the one Playwright installed, or one
  // pointed at by PLAYWRIGHT_CHROMIUM.
  executablePath: process.env.PLAYWRIGHT_CHROMIUM || undefined,
  args: ['--no-sandbox'],
});
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/** Pick somebody in a vote or a "who" list, then press the confirm that names them. */
async function choose(page, name) {
  await page.locator('.vote-grid button, .ts-seat button.ts-seat-body', { hasText: name }).first().click();
  await page.locator('.confirm-bar .btn.primary').click();
}
let bad = 0;
const UPDATE = process.argv.includes('--update');
const browserStamp = `chromium ${browser.version()}`;
const moved = [];
/** A picture for a person, and a measurement for the diff. See ./layout.mjs. */
const look = async (page, name) => {
  const note = await snapshot(page, name, { update: UPDATE, browser: browserStamp });
  if (note) moved.push(note);
};
const fail = (m) => { console.log('FAIL:', m); bad++; process.exitCode = 1; };

async function openPage(lang = 'en', hash = '') {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.addInitScript((l) => {
    localStorage.setItem('imposter.seenRules', '1');
    localStorage.setItem('imposter.lang', l);
  }, lang);
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => m.type() === 'error' && /is not defined|is not a function/.test(m.text()) && errors.push(m.text()));
  await page.goto(BASE + hash);
  await wait(700);
  return { ctx, page, errors };
}

/** Deal a game and look at every card, remembering who got what. */
async function dealAndReveal(page, seats) {
  await page.locator('.hub-mode').first().click();
  await page.locator('.game-card .btn.primary').first().click();
  await wait(300);
  for (const n of ['Ann', 'Ben', 'Cal', 'Dee', 'Eli', 'Fay'].slice(0, seats)) {
    await page.locator('input:not([type=radio])').first().fill(n);
    await page.locator('.row button').first().click();
  }
  await page.getByRole('button', { name: /Deal the cards|แจกไพ่|Karten austeilen/ }).click();
  await wait(400);
  let word = null;
  const imposters = [];
  const roster = ['Ann', 'Ben', 'Cal', 'Dee', 'Eli', 'Fay'].slice(0, seats);
  for (let i = 0; i < seats; i++) {
    // Who is holding the phone now — the reveal order is shuffled, so the
    // position in this loop says nothing about the position in a vote grid.
    const onScreen = await page.locator('.shell').innerText();
    const whose = roster.find((n) => new RegExp(`\\b${n}\\b`).test(onScreen));
    await page.locator('.reveal.shield').click();
    const b = await page.locator('.reveal.shield').boundingBox();
    await page.mouse.move(b.x + b.width / 2, b.y + b.height / 2);
    await page.mouse.down();
    await wait(650);
    const card = page.locator('.reveal.crew, .reveal.imposter, .reveal.neutral');
    await card.waitFor();
    const isImposter = (await page.locator('.reveal.imposter').count()) > 0;
    const text = (await card.locator('.big-word').textContent().catch(() => '')).trim();
    if (isImposter) imposters.push(whose);
    else if (!word && text) word = text;
    await page.mouse.up();
    await wait(120);
    await page.getByRole('button', { name: /Got it|Covered|start the round|เข้าใจแล้ว|ปิดแล้ว|เริ่มรอบ|Verstanden|Verdeckt|Runde/i }).first().click();
    await wait(120);
  }
  return { word, imposters };
}

const seen = [];

/* --- a private card is covered again when the phone is backgrounded ------ */
{
  const { ctx, page, errors } = await openPage('en');
  await page.locator('.hub-mode').first().click();
  await page.locator('.game-card .btn.primary').first().click();
  await wait(300);
  for (const name of ['Ann', 'Ben', 'Cal', 'Dee']) {
    await page.locator('input:not([type=radio])').first().fill(name);
    await page.locator('.row button').first().click();
  }
  await page.getByRole('button', { name: /Deal the cards|แจกไพ่|Karten austeilen/ }).click();
  await wait(400);
  await page.locator('.reveal.shield').click();
  const gate = page.locator('.reveal.shield');
  const box = await gate.boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  await wait(650);
  await page.locator('.reveal.crew, .reveal.imposter, .reveal.neutral').waitFor();
  await page.mouse.up();
  await wait(60);
  // Letting go covers the card at once: nothing of it is left on screen.
  if (await page.locator('.reveal:not(.shield)').count())
    fail('releasing the hold left the private card visible');
  // Look again, and background the phone while the card is still held.
  await page.mouse.down();
  await wait(650);
  await page.locator('.reveal:not(.shield)').waitFor();
  await page.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, value: 'hidden' });
    document.dispatchEvent(new Event('visibilitychange'));
    Object.defineProperty(document, 'visibilityState', { configurable: true, value: 'visible' });
  });
  await gate.waitFor();
  // Checked with the finger still down: backgrounding alone must cover it.
  const stillShowing = await page.locator('.reveal:not(.shield)').count();
  await page.mouse.up();
  if (stillShowing) fail('backgrounding pass-and-play left the private card visible');
  else if (errors.length) fail(`backgrounding pass-and-play: ${errors[0]}`);
  else seen.push('backgrounding covers the private card');
  await ctx.close();
}

/* --- 1. an imposter calls the word: the road to the game-over screen ---- */
{
  const { ctx, page, errors } = await openPage('th');
  const { word, imposters } = await dealAndReveal(page, 4);
  // whoever is up taps the call button when it is their turn
  const callButton = page.getByRole('button', { name: /ฉันรู้คำแล้ว|I know the word/ });
  if (!(await callButton.count())) fail('no way to call the word');
  await callButton.click();
  await wait(400);
  // pick the imposter as the caller, take the phone, then name the word
  await choose(page, imposters[0]);
  await wait(350);
  const gate = page.getByRole('button', { name: /ถือไว้แล้วค่อยแตะ|tap when holding|Tippe/i }).first();
  if (await gate.count()) { await gate.click(); await wait(350); }
  if (!(await page.locator('input').count())) {
    console.log('  (call screen shows:', (await page.locator('.shell').innerText()).replace(/\n+/g, ' | ').slice(0, 200), ')');
    const buttons = await page.locator('button').allTextContents();
    console.log('  (buttons:', buttons.map((b) => b.trim()).filter(Boolean).join(' | '), ')');
  }
  await page.locator('input:not([type=radio])').first().fill(word);
  await page.getByRole('button', { name: /ทายเลย|Call it/ }).last().click();
  await wait(800);
  // the verdict of a call, then the game-over screen
  for (let i = 0; i < 3; i++) {
    const next = page.getByRole('button', { name: /ต่อไป|Continue|Got it|เล่นอีก|Play again/i }).first();
    if (await next.count()) { await next.click(); await wait(500); }
  }
  const over = await page.locator('.shell').innerText();
  const trophy = await page.locator('svg').count();
  if (errors.length) fail(`calling the word: ${errors[0]}`);
  else { seen.push(`game over after a call (${trophy} icons drawn)`); await look(page, 'game over after a call'); }
  await ctx.close();
}

/* --- 2. vote the imposter out, every ending the votes can reach --------- */
for (const lang of ['en', 'th', 'de']) {
  const { ctx, page, errors } = await openPage(lang);
  const { imposters } = await dealAndReveal(page, 4);
  await page.getByRole('button', { name: /Everyone has spoken|พูดครบ|abgestimmt|abstimmen|โหวต/i }).first().click();
  await wait(300);
  // One tap only picks: the table is still voting until the confirm is pressed.
  await page.locator('.ts-seat button.ts-seat-body', { hasText: imposters[0] }).first().click();
  await wait(300);
  if (!(await page.locator('.confirm-bar').count()) || (await page.locator('.reveal.crew, .reveal.imposter, .verdict').count()))
    fail(`${lang}: one tap on a seat decided the vote`);
  await page.locator('.confirm-bar .btn.primary').click();
  await wait(600);
  // verdict → steal or game over → play again
  for (let i = 0; i < 4; i++) {
    const guess = page.locator('input:not([type=radio])').first();
    if (await guess.count() && (await page.locator('.shell').innerText()).match(/guess|ทาย|raten/i)) {
      await guess.fill('not the word');
    }
    const next = page.getByRole('button', { name: /Continue|Got it|Play again|ต่อไป|เล่นอีก|Weiter|Nochmal|Guess|ทาย|Raten/i }).first();
    if (!(await next.count())) break;
    await next.click();
    await wait(450);
  }
  if (errors.length) fail(`${lang} voting it out: ${errors[0]}`);
  else { seen.push(`${lang}: vote → verdict → end`); await look(page, `${lang} game over`); }
  await ctx.close();
}

/* --- 3. every other screen there is ------------------------------------ */
for (const [name, hash] of [['icons', '#icons'], ['crash', '#crash']]) {
  const { ctx, page, errors } = await openPage('en', hash);
  await wait(600);
  const drawn = await page.locator('svg, .board-cell, .card').count();
  if (errors.length) fail(`${name}: ${errors[0]}`);
  else { seen.push(`${name} (${drawn} things drawn)`); await look(page, name); }
  await ctx.close();
}

{
  const { ctx, page, errors } = await openPage('de');
  // Each way to play opens the game library, with Imposter in it (#51).
  for (const nth of [0, 1]) {
    await page.locator('.hub-mode').nth(nth).click();
    await wait(400);
    if (!(await page.locator('.game-card').count())) fail(`mode ${nth} did not open the game library`);
    await page.getByRole('button', { name: /Zurück/ }).first().click();
    await wait(400);
  }
  for (const [scope, label] of [
    [page.locator('footer'), /Wie geht das/],
    [page.getByRole('navigation'), /Wortpakete/],
    [page.locator('footer'), /Was ist neu/],
  ]) {
    await scope.getByRole('button', { name: label }).click();
    await wait(500);
    await page.getByRole('button', { name: /Zurück|Alles klar/ }).first().click();
    await wait(400);
  }
  if (errors.length) fail(`the home-screen links: ${errors[0]}`);
  else { seen.push('game library from both modes, rules, pack library and what is new'); await look(page, 'home links'); }
  await ctx.close();
}

console.log(seen.map((s) => '  ✓ ' + s).join('\n'));
if (moved.length) {
  console.log(`\n${moved.length} screen(s) have moved since the baseline:\n`);
  for (const note of moved) console.log(note);
  process.exitCode = 1;
}
console.log(
  bad
    ? `${bad} screen(s) threw`
    : `every screen drew without throwing ✓${moved.length ? '' : ' · layout unchanged'}`,
);
await browser.close();
server.closeAllConnections?.();
server.close();
