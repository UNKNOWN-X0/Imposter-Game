/**
 * The game's sounds (#118), made with the Web Audio API rather than shipped
 * as files: nothing to license, nothing to download, nothing late on the
 * first tap. Each is a short envelope on an oscillator or a burst of noise.
 *
 * Rules: off until this phone turns it on (store.js); the card turning sounds
 * the same for the crew and the imposter, so a sound can never give a role
 * away; nothing loops; each phone in a room plays its own.
 *
 * Every play also fires a `sound` event on window with the name, so the
 * browser sweeps can check a moment made its sound without hearing it.
 */

import { loadSound } from './store.js';

let ctx = null;
let enabled = loadSound();

export const setSoundEnabled = (on) => {
  enabled = on;
};
export const soundEnabled = () => enabled;

function audio() {
  if (typeof window === 'undefined') return null;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  if (!ctx) ctx = new Ctx();
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}

/** A pitched note: type, frequency, start offset and length in seconds, peak gain. */
function tone(a, { type = 'sine', freq, at = 0, len = 0.12, peak = 0.18, glide }) {
  const t0 = a.currentTime + at;
  const osc = a.createOscillator();
  const gain = a.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (glide) osc.frequency.exponentialRampToValueAtTime(glide, t0 + len);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(peak, t0 + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + len);
  osc.connect(gain).connect(a.destination);
  osc.start(t0);
  osc.stop(t0 + len + 0.02);
}

/** A burst of filtered noise: a card sliding, a page turning. */
function noise(a, { at = 0, len = 0.1, peak = 0.12, freq = 2400, q = 0.8 }) {
  const t0 = a.currentTime + at;
  const buffer = a.createBuffer(1, Math.ceil(a.sampleRate * len), a.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const src = a.createBufferSource();
  src.buffer = buffer;
  const filter = a.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = freq;
  filter.Q.value = q;
  const gain = a.createGain();
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(peak, t0 + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + len);
  src.connect(filter).connect(gain).connect(a.destination);
  src.start(t0);
  src.stop(t0 + len + 0.02);
}

const SOUNDS = {
  // Cards going round the table: a few quick swishes.
  deal: (a) => [0, 0.07, 0.14, 0.21].forEach((at) => noise(a, { at, len: 0.07, peak: 0.09, freq: 3200 })),
  // The card turning over: a soft flick and a low tap. The same for every role.
  flip: (a) => {
    noise(a, { len: 0.06, peak: 0.1, freq: 2600 });
    tone(a, { freq: 220, at: 0.04, len: 0.09, peak: 0.12 });
  },
  // The vote confirmed: two knocks on the table.
  vote: (a) => {
    tone(a, { type: 'triangle', freq: 170, len: 0.07, peak: 0.22, glide: 120 });
    tone(a, { type: 'triangle', freq: 170, at: 0.13, len: 0.07, peak: 0.22, glide: 120 });
  },
  // The verdict lands: one stamp.
  stamp: (a) => {
    tone(a, { freq: 140, len: 0.2, peak: 0.28, glide: 70 });
    noise(a, { len: 0.08, peak: 0.08, freq: 900 });
  },
  // A win: a short rising chord.
  win: (a) => [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => tone(a, { type: 'triangle', freq, at: i * 0.09, len: 0.22, peak: 0.12 })),
  // The clue turn passes on.
  turn: (a) => tone(a, { freq: 1180, len: 0.05, peak: 0.07 }),
  // The timer's last seconds, and its end.
  tick: (a) => tone(a, { freq: 880, len: 0.07, peak: 0.08 }),
  timeUp: (a) => tone(a, { type: 'triangle', freq: 440, len: 0.32, peak: 0.14, glide: 330 }),
};

export function play(name) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('sound', { detail: { name, played: enabled } }));
  if (!enabled) return;
  const make = SOUNDS[name];
  const a = make && audio();
  if (!a) return;
  try {
    make(a);
  } catch {
    /* a sound that cannot play is not worth an error on screen */
  }
}
