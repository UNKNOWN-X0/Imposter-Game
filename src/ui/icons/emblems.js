/**
 * The emblems a player can take a seat with.
 *
 * Twelve, because a table seats twelve (`MAX_PLAYERS`), so no two players
 * ever have to share one. The drawings are from Lucide (lucide-static
 * 0.460.0, ISC licence, see NOTICE.md): beer, key-round, flame, dice-3,
 * feather, moon, anchor, leaf, star, bell, sun and fish, each flattened into
 * one path on the shared 24×24 grid and drawn with the same stroke as every
 * other icon. Each owns a colour from its own set: muted inks that
 * stay clear of crew green and imposter red, because those mean sides
 * (`emblems.test.js` beside this file holds that line).
 *
 * The id is what is stored; the name a reader sees is `emblem.<id>` in every
 * language.
 */

export const EMBLEMS = [
  { id: 'mug', colour: '#7a4a7e', d: 'M17 11h1a3 3 0 0 1 0 6h-1M9 12v6M13 12v6M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5ZM5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8' },
  { id: 'key', colour: '#4f6274', d: 'M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4zM16 7.5a0.5 0.5 0 1 0 1 0a0.5 0.5 0 1 0 -1 0' },
  { id: 'flame', colour: '#946626', d: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z' },
  { id: 'dice', colour: '#2f6f73', d: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2zM16 8h.01M12 12h.01M8 16h.01' },
  { id: 'feather', colour: '#5b4a8a', d: 'M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1zM16 8 2 22M17.5 15H9' },
  { id: 'moon', colour: '#8a6a3a', d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' },
  { id: 'anchor', colour: '#3d4f6e', d: 'M12 22V8M5 12H2a10 10 0 0 0 20 0h-3M9 5a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' },
  { id: 'leaf', colour: '#7a5a4a', d: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10ZM2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12' },
  { id: 'star', colour: '#44507a', d: 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z' },
  { id: 'bell', colour: '#6a4a6a', d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0' },
  { id: 'sun', colour: '#7b6d50', d: 'M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0M12 2v2M12 20v2m4.93 4.93 1.41 1.41m17.66 17.66 1.41 1.41M2 12h2M20 12h2m6.34 17.66-1.41 1.41m19.07 4.93-1.41 1.41' },
  { id: 'fish', colour: '#3f6a7a', d: 'M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6ZM18 12v.5M16 17.93a9.77 9.77 0 0 1 0-11.86M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98' },
];

export const EMBLEM_IDS = EMBLEMS.map((e) => e.id);
const byId = new Map(EMBLEMS.map((e) => [e.id, e]));

/** The emblem a name falls back on when its player has not picked one. */
export function defaultEmblem(name = '') {
  let hash = 0;
  for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  return EMBLEMS[hash % EMBLEMS.length].id;
}

export const emblemFor = (id) => byId.get(id) ?? EMBLEMS[0];

/** The first emblem nobody at the table has, for the picker to start on. */
export function firstFree(taken = []) {
  return EMBLEM_IDS.find((id) => !taken.includes(id)) ?? EMBLEM_IDS[0];
}
