/**
 * The party is shared by every game, so its one rule about names and its
 * storage are checked here rather than through any one game.
 */

import test from 'node:test';
import assert from 'node:assert/strict';

import { MAX_PLAYERS, nameProblem } from '../core/rules.js';
import { createGame, reduce } from '../core/engine.js';
import { loadEmblems, loadRoster, saveEmblems, saveRoster } from './storage.js';

test('one rule for a name, wherever somebody sits down', () => {
  assert.equal(nameProblem([], 'Mali'), null);
  assert.equal(nameProblem([], '   ').code, 'emptyName');
  assert.equal(nameProblem([], 'x'.repeat(17)).code, 'longName');
  assert.deepEqual(nameProblem(['Mali'], ' mali '), { code: 'duplicateName', params: { name: 'mali' } });
  const full = Array.from({ length: MAX_PLAYERS }, (_, i) => `P${i}`);
  assert.equal(nameProblem(full, 'One more').code, 'roomFull');

  // The engine refuses with the same code the hub shows.
  const game = reduce(createGame(), { type: 'ADD_PLAYER', name: 'Mali' });
  assert.throws(() => reduce(game, { type: 'ADD_PLAYER', name: 'MALI' }), (e) => e.code === 'duplicateName');
});

test('the party is saved from plain names, as the hub keeps it', () => {
  const map = new Map();
  globalThis.localStorage = {
    getItem: (k) => (map.has(k) ? map.get(k) : null),
    setItem: (k, v) => map.set(k, String(v)),
    removeItem: (k) => map.delete(k),
  };
  try {
    saveRoster(['Mali', 'Nok']);
    saveEmblems(['Mali', 'Nok'], { Mali: 'moon', Nok: 'key', Gone: 'fish' });
    assert.deepEqual(loadRoster(), ['Mali', 'Nok']);
    assert.deepEqual(loadEmblems(), { Mali: 'moon', Nok: 'key' });
  } finally {
    delete globalThis.localStorage;
  }
});
