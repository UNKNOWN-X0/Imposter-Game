import test from 'node:test';
import assert from 'node:assert/strict';
import { loadSound, saveSound } from './store.js';

const memory = () => {
  const m = new Map();
  return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)) };
};

test('sound is off until this phone turns it on, and remembers the choice', () => {
  const s = memory();
  assert.equal(loadSound(s), false, 'off by default');
  saveSound(true, s);
  assert.equal(loadSound(s), true);
  saveSound(false, s);
  assert.equal(loadSound(s), false);
  assert.equal(loadSound({ getItem() { throw new Error('blocked'); } }), false, 'blocked storage is off');
});
