/**
 * Every game in the catalog is complete: the library can draw it, every
 * language can name it, and App knows where to open it in each mode it
 * claims.
 */

import test from 'node:test';
import assert from 'node:assert/strict';

import { GAMES, MODES, gameById, gamesFor, wordGames } from './index.js';
import en from '../i18n/strings/en.js';
import th from '../i18n/strings/th.js';
import de from '../i18n/strings/de.js';

test('every game is complete', () => {
  assert.ok(GAMES.length >= 1);
  assert.equal(new Set(GAMES.map((g) => g.id)).size, GAMES.length, 'two games share an id');
  for (const g of GAMES) {
    assert.match(g.id, /^[a-z][a-z0-9-]*$/, `${g.id}: id`);
    assert.ok(Number.isInteger(g.minPlayers) && g.minPlayers >= 2, `${g.id}: minPlayers`);
    assert.ok(Number.isInteger(g.maxPlayers) && g.maxPlayers >= g.minPlayers, `${g.id}: maxPlayers`);
    assert.ok(g.modes.length > 0 && g.modes.every((m) => MODES.includes(m)), `${g.id}: modes`);
    for (const m of g.modes) assert.ok(g.screen?.[m], `${g.id}: no screen for ${m}`);
    for (const [lang, strings] of Object.entries({ en, th, de })) {
      assert.ok(strings[g.name], `${lang} has no ${g.name}`);
      assert.ok(strings[g.pitch], `${lang} has no ${g.pitch}`);
    }
  }
});

test('the library lists a game only in the modes it supports', () => {
  for (const m of MODES) for (const g of gamesFor(m)) assert.ok(g.modes.includes(m));
  assert.equal(gameById('imposter')?.id, 'imposter');
  assert.equal(gameById('nope'), null);
});

test('the games that use word packs come from the catalog', () => {
  assert.deepEqual(wordGames().map((g) => g.id), GAMES.filter((g) => g.words === true).map((g) => g.id));
  assert.ok(wordGames().some((g) => g.id === 'imposter'), 'Imposter is played with words');
  for (const g of GAMES) assert.ok(g.words === undefined || typeof g.words === 'boolean', `${g.id}: words`);
});
