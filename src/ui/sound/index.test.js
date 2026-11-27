/**
 * The sounds, built against a stand-in AudioContext: every one makes its
 * nodes without throwing, nothing is made while sound is off, and the card
 * turning is one sound whoever holds the card.
 */

import test from 'node:test';
import assert from 'node:assert/strict';

const made = [];
const param = () => ({ setValueAtTime() {}, exponentialRampToValueAtTime() {}, value: 0 });
const node = (kind) => {
  const n = { kind, connect: (to) => to ?? n, start() {}, stop() {}, frequency: param(), gain: param(), Q: param(), type: '' };
  made.push(kind);
  return n;
};
class FakeAudio {
  currentTime = 0;
  sampleRate = 8000;
  state = 'running';
  destination = node('destination');
  createOscillator = () => node('osc');
  createGain = () => node('gain');
  createBiquadFilter = () => node('filter');
  createBufferSource = () => node('source');
  createBuffer = (_c, length) => ({ getChannelData: () => new Float32Array(length) });
}
const events = [];
globalThis.window = {
  AudioContext: FakeAudio,
  dispatchEvent: (e) => events.push(e.detail),
};
globalThis.CustomEvent = class { constructor(type, init) { this.type = type; this.detail = init.detail; } };

const { play, setSoundEnabled, soundEnabled } = await import('./index.js');

test('nothing sounds until sound is switched on, but the moment is still told', () => {
  setSoundEnabled(false);
  made.length = 0;
  events.length = 0;
  play('flip');
  assert.equal(soundEnabled(), false);
  assert.deepEqual(events, [{ name: 'flip', played: false }]);
  assert.equal(made.filter((k) => k !== 'destination').length, 0, 'no audio nodes while off');
});

test('every sound builds its nodes without throwing', () => {
  setSoundEnabled(true);
  for (const name of ['deal', 'flip', 'vote', 'stamp', 'win', 'turn', 'tick', 'timeUp']) {
    made.length = 0;
    play(name);
    assert.ok(made.some((k) => k === 'osc' || k === 'source'), `${name} made no sound`);
  }
  play('no such sound');
});

test('the card turning is one sound for every role', () => {
  setSoundEnabled(true);
  made.length = 0;
  play('flip');
  const first = [...made];
  made.length = 0;
  play('flip');
  assert.deepEqual(made, first, 'two flips build the same graph');
});
