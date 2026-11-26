import test from 'node:test';
import assert from 'node:assert/strict';
import '../testing/ready.js';
import { onWinningSide } from './select.js';

const table = (winner, roles = {}) => ({ result: { winner }, imposterIds: ['i'], roles });

test('the winning side is the side that won, whoever was voted out on the way', () => {
  const crewWon = table('crew', { s: 'sidekick', j: 'jester' });
  assert.equal(onWinningSide(crewWon, 'c'), true);
  assert.equal(onWinningSide(crewWon, 'i'), false);
  assert.equal(onWinningSide(crewWon, 's'), false, 'the sidekick plays for the imposters');
  assert.equal(onWinningSide(crewWon, 'j'), false, 'the jester is on nobody\'s side');
  const impWon = table('imposters', { s: 'sidekick' });
  assert.equal(onWinningSide(impWon, 'i'), true);
  assert.equal(onWinningSide(impWon, 's'), true);
  assert.equal(onWinningSide(impWon, 'c'), false);
  const jesterWon = table('jester', { j: 'jester' });
  assert.equal(onWinningSide(jesterWon, 'j'), true);
  assert.equal(onWinningSide(jesterWon, 'c'), false);
  assert.equal(onWinningSide({ result: null, imposterIds: [], roles: {} }, 'c'), false);
});
