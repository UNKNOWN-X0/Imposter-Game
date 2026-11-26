import test from 'node:test';
import assert from 'node:assert/strict';
import { toMs } from './motionMs.js';

test('a CSS time reads the same in either unit, as the minifier writes it', () => {
  assert.equal(toMs('600ms'), 600);
  assert.equal(toMs('.6s'), 600);
  assert.equal(toMs(' 0.2s '), 200);
  assert.equal(toMs('200ms'), 200);
  assert.equal(toMs(''), 0);
  assert.equal(toMs(undefined), 0);
});
