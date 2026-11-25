/**
 * An emblem drawn on the shared icon grid. Data lives in emblems.js so the
 * storage and the tests can read it without a JSX transform.
 */

import { emblemFor } from './emblems.js';

export { EMBLEMS, EMBLEM_IDS, defaultEmblem, emblemFor, firstFree } from './emblems.js';

export function EmblemIcon({ id, size = 24 }) {
  return (
    <svg
      className="emblem-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={emblemFor(id).d} />
    </svg>
  );
}
