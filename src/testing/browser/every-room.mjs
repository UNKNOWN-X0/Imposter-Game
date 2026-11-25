/**
 * Every way into a room and back out of trouble, with real phones.
 *
 * Run it with:  npm run build && npm run rooms
 *
 * Four browser contexts are four phones on the same table. They host, join
 * by code, join by the shared link, reload, drop off, end a game and come
 * back to the same table, and hand the crown on, against the real server on
 * 127.0.0.1. Any page error fails it, and so does a word reaching a phone
 * that should not have it: the imposters' screens are searched for the crew's
 * word at every step.
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

const { createServer } = await import(path.join(root, 'server', 'server.js'));

const server = createServer();
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const BASE = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROMIUM || undefined,
  args: ['--no-sandbox'],
});
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const seen = [];
const fail = (m) => {
  console.log('FAIL:', m);
  process.exitCode = 1;
};
const errors = [];

async function phone(hash = '') {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.addInitScript(() => {
    localStorage.setItem('imposter.seenRules', '1');
    localStorage.setItem('imposter.lang', 'en');
  });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(BASE + hash);
  await wait(500);
  return { ctx, page };
}

const nameBox = (page) => page.getByPlaceholder('e.g. Fern');
const seats = (page) => page.locator('.ts-seat.filled').count();
const text = (page) => page.locator('body').innerText();

/* --- host, join by code, join by link ---------------------------------- */
const host = await phone();
await host.page.locator('.hub-mode').nth(1).click();
await host.page.locator('.game-card .btn.primary').first().click();
await wait(500);
await nameBox(host.page).fill('Ann');
await host.page.getByRole('button', { name: 'Start a new room' }).click();
await wait(900);
const code = (await host.page.locator('.code-word').textContent()).trim();
if (!/^[A-Z0-9]{4,12}$/.test(code)) fail(`no room code on the host's phone (${code})`);

const guests = {};
for (const [name, how] of [['Ben', 'code'], ['Cal', 'link'], ['Dee', 'code']]) {
  const g = how === 'link' ? await phone(`#join=${code}`) : await phone();
  if (how === 'code') {
    // A guest with a code skips the game choice: the host already made it.
    await g.page.locator('.hub-mode').nth(1).click();
    await g.page.getByRole('button', { name: 'Have a code? Join a room' }).click();
    await wait(400);
    await g.page.getByPlaceholder('CODE').fill(code);
  } else if ((await g.page.getByPlaceholder('CODE').inputValue()) !== code) {
    fail('the join link did not fill in the code');
  }
  await nameBox(g.page).fill(name);
  await g.page.getByRole('button', { name: 'Join room' }).click();
  await wait(800);
  guests[name] = g;
}
await wait(400);
if ((await seats(host.page)) !== 4) fail(`host sees ${await seats(host.page)} seated, not 4`);
else seen.push('host, join by code, join by link: four at the table');

/* --- a reload keeps your seat ------------------------------------------ */
await guests.Cal.page.reload();
await wait(1200);
if ((await guests.Cal.page.locator('.code-word').textContent())?.trim() !== code || (await seats(guests.Cal.page)) !== 4)
  fail('a reload lost the room');
else seen.push('a reload keeps the seat');

/* --- a phone that drops shows as away ---------------------------------- */
await guests.Dee.ctx.close();
await wait(900);
if ((await host.page.locator('.ts-seat.away').count()) !== 1) fail('a dropped phone does not show as away');
else seen.push('a dropped phone shows as away');

/* --- the host asks the away seat to leave, so every card is on a phone - */
await host.page.locator('.ts-seat.away button.ts-seat-body').click();
await host.page.locator('.seat-actions .btn.danger').click();
await wait(700);
if ((await seats(host.page)) !== 3) fail('removing the away seat did not free it');
else seen.push('the host can remove a seat that went away');

/* --- deal, end the game, and come back to the same table --------------- */
const phones = [host, guests.Ben, guests.Cal];
async function dealAndLook() {
  const hostNow = phones.find((p) => p.isHost) ?? host;
  await hostNow.page.getByRole('button', { name: 'Deal the cards' }).click();
  await wait(900);
  const cards = {};
  for (const p of phones) {
    if (p.gone) continue;
    const shield = p.page.locator('.reveal.shield');
    const box = await shield.boundingBox();
    if (!box) continue;
    await p.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await p.page.mouse.down();
    await wait(650);
    const imposter = (await p.page.locator('.reveal.imposter').count()) > 0;
    const word = imposter ? null : (await p.page.locator('.reveal .big-word').textContent().catch(() => ''))?.trim();
    await p.page.mouse.up();
    cards[p === host ? 'host' : Object.keys(guests).find((n) => guests[n] === p)] = { p, imposter, word };
  }
  return cards;
}
async function noLeak(cards, when) {
  const word = Object.values(cards).find((c) => c.word)?.word;
  // A check that found nothing to compare would pass by saying nothing.
  if (!word || !Object.values(cards).some((c) => c.imposter)) {
    fail(`could not read a crew word and an imposter ${when}`);
    return;
  }
  for (const c of Object.values(cards)) {
    if (c.imposter && word && (await text(c.p.page)).includes(word)) fail(`the crew's word reached an imposter's phone ${when}`);
  }
}

let cards = await dealAndLook();
await noLeak(cards, 'after the deal');
// The table should not be left holding anyone's card on screen.
await host.page.getByRole('button', { name: 'End this game' }).click();
await host.page.getByRole('button', { name: 'End it' }).click();
await wait(900);
const back = await Promise.all(phones.map(async (p) => (await p.page.locator('.code-word').textContent().catch(() => ''))?.trim()));
if (back.some((c) => c !== code) || (await seats(host.page)) !== 3) fail('ending a game did not bring everyone back to the same table');
else seen.push('ending a game returns everyone to the same table');

/* --- the host leaves: the crown moves, and nothing secret comes with it - */
await host.page.getByRole('button', { name: 'Leave this room' }).click();
await wait(1000);
host.gone = true;
const benHosts = (await guests.Ben.page.getByRole('button', { name: 'Deal the cards' }).count()) > 0;
const calHosts = (await guests.Cal.page.getByRole('button', { name: 'Deal the cards' }).count()) > 0;
if (!(benHosts || calHosts)) {
  fail('nobody holds the crown after the host left');
} else {
  const newHost = benHosts ? guests.Ben : guests.Cal;
  newHost.isHost = true;
  const note = (await newHost.page.locator('.banner').allInnerTexts()).join(' ');
  if (!/hosting now/i.test(note)) fail('the new host was not told');
  else seen.push('the crown moves when the host leaves, and the new host is told');
  phones.splice(phones.indexOf(host), 1);
  // Two are left; one more joins by code, so the new host can deal again.
  const eve = await phone();
  await eve.page.locator('.hub-mode').nth(1).click();
  await eve.page.getByRole('button', { name: 'Have a code? Join a room' }).click();
  await wait(400);
  await eve.page.getByPlaceholder('CODE').fill(code);
  await nameBox(eve.page).fill('Eve');
  await eve.page.getByRole('button', { name: 'Join room' }).click();
  await wait(900);
  guests.Eve = eve;
  phones.push(eve);
  cards = await dealAndLook();
  await noLeak(cards, 'after the crown moved');
  if (!process.exitCode) seen.push('no crew word on an imposter\'s phone, before or after the crown moved');
}

if (errors.length) fail(`page error: ${errors[0]}`);
for (const s of seen) console.log(`  ✓ ${s}`);
await browser.close();
server.closeAllConnections?.();
server.close();
if (!process.exitCode) console.log('every room path works ✓');
