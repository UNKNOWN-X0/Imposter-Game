/**
 * The emblems players sit down with, checked as data.
 *
 * Twelve seats means twelve emblems nobody has to share; each one's ink has
 * to read on its circle (the issue asks 4.5:1, the same as text); and no
 * emblem colour may look like a side, because crew green and imposter red
 * are how the game says who won.
 */

import test from 'node:test';
import assert from 'node:assert/strict';

import { EMBLEMS, EMBLEM_IDS, defaultEmblem, emblemFor, firstFree } from './emblems.js';
import { MAX_PLAYERS } from '../../core/rules.js';
import en from '../../i18n/strings/en.js';
import th from '../../i18n/strings/th.js';
import de from '../../i18n/strings/de.js';

const INK = '#fff7e8'; // .avatar colour in game.css
const SIDES = ['#126a3b', '#55db8b', '#b51e3e', '#ff8294'];

const channels = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
const luminance = (hex) => {
  const [r, g, b] = channels(hex).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};
const hue = (hex) => {
  const [r, g, b] = channels(hex);
  const max = Math.max(r, g, b);
  const d = max - Math.min(r, g, b);
  if (d === 0) return 0;
  const h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return (h * 60 + 360) % 360;
};
const hueGap = (a, b) => {
  const d = Math.abs(hue(a) - hue(b));
  return Math.min(d, 360 - d);
};

test('there is one emblem per seat, each with its own id and colour', () => {
  assert.equal(EMBLEMS.length, MAX_PLAYERS);
  assert.equal(new Set(EMBLEM_IDS).size, EMBLEMS.length, 'two emblems share an id');
  assert.equal(new Set(EMBLEMS.map((e) => e.colour)).size, EMBLEMS.length, 'two emblems share a colour');
  for (const e of EMBLEMS) assert.match(e.colour, /^#[0-9a-f]{6}$/i, `${e.id} colour`);
});

test('the emblem ink reads on every emblem colour', () => {
  for (const e of EMBLEMS) {
    const ratio = contrast(INK, e.colour);
    assert.ok(ratio >= 4.5, `${e.id}: ink on ${e.colour} is ${ratio.toFixed(2)}:1`);
  }
});

test('no emblem colour can be taken for crew or imposter', () => {
  for (const e of EMBLEMS) {
    for (const side of SIDES) {
      const gap = hueGap(e.colour, side);
      assert.ok(gap >= 25, `${e.id} (${e.colour}) is ${Math.round(gap)}° from ${side}`);
    }
  }
});

test('every emblem has a name in every language', () => {
  for (const [lang, strings] of Object.entries({ en, th, de })) {
    for (const id of EMBLEM_IDS) {
      assert.ok(strings[`emblem.${id}`], `${lang} has no name for emblem.${id}`);
    }
  }
});

test('a name always falls back on the same emblem, and unknown ids stay drawable', () => {
  assert.equal(defaultEmblem('Mali'), defaultEmblem('Mali'));
  assert.ok(EMBLEM_IDS.includes(defaultEmblem('')));
  assert.equal(emblemFor('nonsense'), EMBLEMS[0]);
});

test('the picker starts on the first emblem nobody has', () => {
  assert.equal(firstFree([]), EMBLEM_IDS[0]);
  assert.equal(firstFree(EMBLEM_IDS.slice(0, 3)), EMBLEM_IDS[3]);
});
