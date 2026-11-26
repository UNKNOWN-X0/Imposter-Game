/**
 * Every shared pack in ./community must play: it goes out to everybody, and
 * nobody reads a merged JSON file as carefully as the game does.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PACK_LIMITS, decodePack, encodePack, buildPack } from './custom.js';
import { WORD_LANGUAGES } from './index.js';
import { CREDIT_MAX, readCommunityPack, slugFor } from './community-pack.js';

const root = join(dirname(fileURLToPath(import.meta.url)), 'community');
const KEYS = new Set(['name', 'emoji', 'by', 'words']);

function files() {
  if (!existsSync(root)) return [];
  return readdirSync(root)
    .filter((dir) => statSync(join(root, dir)).isDirectory())
    .flatMap((lang) =>
      readdirSync(join(root, lang)).map((file) => ({ lang, file, path: join(root, lang, file) })),
    );
}

test('every community pack sits in a word language folder, as .json', () => {
  for (const { lang, file } of files()) {
    assert.ok(WORD_LANGUAGES.some((l) => l.id === lang), `${lang}/ is not a word language`);
    assert.match(file, /^[a-z0-9-]+\.json$/, `${lang}/${file}: name it in lower case letters, digits and dashes`);
  }
});

test('every community pack reads as a pack, with nothing skipped and nothing extra', () => {
  for (const { lang, file, path } of files()) {
    const where = `${lang}/${file}`;
    const data = JSON.parse(readFileSync(path, 'utf8'));
    for (const key of Object.keys(data)) assert.ok(KEYS.has(key), `${where}: unknown field "${key}"`);
    const pack = readCommunityPack(data, lang, file.replace(/\.json$/, ''));
    assert.ok(pack, `${where}: needs a name and at least ${PACK_LIMITS.minPairs} words`);
    assert.equal(pack.skipped.length, 0, `${where}: lines that do not read: ${pack.skipped.map((s) => s.line).join(' | ')}`);
    assert.ok(data.words.length <= PACK_LIMITS.pairs, `${where}: more than ${PACK_LIMITS.pairs} words`);
    assert.ok(String(data.name).length <= PACK_LIMITS.name, `${where}: name longer than ${PACK_LIMITS.name}`);
    assert.ok(!data.by || String(data.by).length <= CREDIT_MAX, `${where}: credit longer than ${CREDIT_MAX}`);
  }
});

test('no two community packs in one language share a name', () => {
  const seen = new Map();
  for (const { lang, file, path } of files()) {
    const key = `${lang}:${JSON.parse(readFileSync(path, 'utf8')).name.trim().toLowerCase()}`;
    assert.ok(!seen.has(key), `${lang}/${file} has the same name as ${seen.get(key)}`);
    seen.set(key, `${lang}/${file}`);
  }
});

test('a share code becomes the same pack as a community file', () => {
  const text = 'Kettle, Toaster\nSofa\nFridge, Freezer\nPlant\nRug';
  const code = encodePack(buildPack({ name: 'Our flat', emoji: '🏠', lang: 'en', text }).pack);
  const shared = decodePack(code);
  const pack = readCommunityPack({ name: shared.name, emoji: shared.emoji, words: text.split('\n') }, 'en', 'our-flat');
  assert.deepEqual(pack.pairs, shared.pairs);
  assert.equal(pack.id, 'community:en/our-flat');
  assert.equal(pack.by, null);
});

test('a pack name becomes a safe file name', () => {
  assert.equal(slugFor('Our Flat!'), 'our-flat');
  assert.equal(slugFor('Café & Bars'), 'cafe-bars');
  assert.match(slugFor('ของกิน'), /^pack-[a-z0-9]+$/);
  assert.equal(readCommunityPack({ name: 'x', words: ['a'] }, 'en', 'x'), null);
});
