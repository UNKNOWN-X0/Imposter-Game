/**
 * Each game's mark. A catalog entry (./index.js) is plain data; its picture
 * lives here, so the library, How it works and the pack library draw the
 * same one.
 */

import { GamesIcon, ImposterMark } from '../ui/icons/index.jsx';

const MARKS = { imposter: ImposterMark };

/** A game's mark, or the plain games icon for one without its own yet. */
export function GameMark({ id, size = 24 }) {
  const Mark = MARKS[id];
  return Mark ? <Mark size={size} animated={false} /> : <GamesIcon size={size} />;
}
