/**
 * The party: who is at the table, before and between games.
 *
 * Every game reads the same people from here, so a game added later gets the
 * roster and everyone's emblem without writing any of its own. The names and
 * emblems keep the keys they had when the one game owned them
 * (`imposter.roster`, `imposter.emblems`), so a saved table survives the move.
 *
 * Plain JavaScript and no React, so it can be tested with `node --test`.
 */

import { MAX_PLAYERS } from '../core/rules.js';
import { EMBLEM_IDS } from '../ui/icons/emblems.js';

export const ROSTER_KEY = 'imposter.roster';
export const EMBLEMS_KEY = 'imposter.emblems';

/** Remember the group between sessions — it is the same friends most nights. */
export function loadRoster() {
  try {
    const raw = localStorage.getItem(ROSTER_KEY);
    const names = raw ? JSON.parse(raw) : [];
    return Array.isArray(names)
      ? names.filter((n) => typeof n === 'string').slice(0, MAX_PLAYERS)
      : [];
  } catch {
    return [];
  }
}

/** Takes the players (anything with a `name`) or plain names. */
export function saveRoster(players) {
  try {
    const names = players.map((p) => (typeof p === 'string' ? p : p.name));
    localStorage.setItem(ROSTER_KEY, JSON.stringify(names));
  } catch {
    /* private browsing — no harm done */
  }
}

/**
 * The emblem each person sat down with, by name, so the same friends keep
 * the same marks next week. Unknown ids are dropped; the table falls back on
 * a default for anyone without one.
 */
export function loadEmblems() {
  try {
    const raw = localStorage.getItem(EMBLEMS_KEY);
    const saved = raw ? JSON.parse(raw) : {};
    const out = {};
    if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
      for (const [name, id] of Object.entries(saved)) {
        if (typeof id === 'string' && EMBLEM_IDS.includes(id)) out[name] = id;
      }
    }
    return out;
  } catch {
    return {};
  }
}

/** Only the people still at the table are kept, so the map never grows. */
export function saveEmblems(players, emblems) {
  try {
    const byName = {};
    for (const p of players) {
      const name = typeof p === 'string' ? p : p.name;
      if (emblems[name]) byName[name] = emblems[name];
    }
    localStorage.setItem(EMBLEMS_KEY, JSON.stringify(byName));
  } catch {
    /* private browsing — no harm done */
  }
}
