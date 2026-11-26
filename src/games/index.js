/**
 * The games on the table.
 *
 * One entry per game. The hub and the library read only this list, so a new
 * game is an entry here plus its own screens; nothing else names a game.
 * Plain data, so it loads without a browser or a JSX transform and a test
 * can check every entry (`games.test.js`).
 *
 * - `modes`: where it can be played: `local` (one phone passed around) and
 *   `room` (everyone on their own phone).
 * - `minPlayers` / `maxPlayers`: checked against the party in the library.
 * - `name` / `pitch`: string keys, in every language.
 * - `screen`: which screen App opens for each mode.
 * - `words`: true for a game played with word packs. The pack library, the
 *   hub's packs section and the game card read it (#86).
 */

import { MAX_PLAYERS, MIN_PLAYERS } from '../core/rules.js';

export const GAMES = [
  {
    id: 'imposter',
    name: 'game.imposter.name',
    pitch: 'game.imposter.pitch',
    minPlayers: MIN_PLAYERS,
    maxPlayers: MAX_PLAYERS,
    modes: ['local', 'room'],
    screen: { local: 'local', room: 'online' },
    words: true,
  },
];

export const MODES = ['local', 'room'];

export const gamesFor = (mode) => GAMES.filter((g) => g.modes.includes(mode));
/** The games played with word packs: what the packs are for. */
export const wordGames = () => GAMES.filter((g) => g.words);
export const gameById = (id) => GAMES.find((g) => g.id === id) ?? null;
