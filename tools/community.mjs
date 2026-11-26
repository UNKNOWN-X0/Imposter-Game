#!/usr/bin/env node
/**
 * Adds a shared pack to the community library.
 *
 *   npm run community -- add "<share code>" [--by "Name to credit"]
 *
 * The code is the one the pack editor makes ("Send this to anybody"), pasted
 * into a "Share a pack" issue. It writes
 * src/content/words/community/<lang>/<name>.json and refuses to overwrite a
 * pack that is already there. Review the words before committing: they go
 * out to everybody.
 */

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { decodePack, toText } from '../src/content/words/custom.js';
import { WORD_LANGUAGES } from '../src/content/words/index.js';
import { CREDIT_MAX, slugFor } from '../src/content/words/community-pack.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'content', 'words', 'community');
const [command, code, ...rest] = process.argv.slice(2);
const byAt = rest.indexOf('--by');
const by = byAt >= 0 ? String(rest[byAt + 1] ?? '').trim().slice(0, CREDIT_MAX) : '';

if (command !== 'add' || !code) {
  console.error('usage: npm run community -- add "<share code>" [--by "Name to credit"]');
  process.exit(2);
}

const pack = decodePack(code);
if (!pack) {
  console.error('That code did not open. Copy the whole thing and try again.');
  process.exit(1);
}
if (!WORD_LANGUAGES.some((l) => l.id === pack.lang)) {
  console.error(`Unknown word language "${pack.lang}".`);
  process.exit(1);
}

const file = join(root, pack.lang, `${slugFor(pack.name)}.json`);
if (existsSync(file)) {
  console.error(`${file} already exists. Rename the pack or edit that file.`);
  process.exit(1);
}

const data = { name: pack.name, emoji: pack.emoji, ...(by && { by }), words: toText(pack.pairs).split('\n') };
mkdirSync(dirname(file), { recursive: true });
writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
console.log(`added ${pack.emoji} ${pack.name} (${pack.pairs.length} words) → ${file}`);
