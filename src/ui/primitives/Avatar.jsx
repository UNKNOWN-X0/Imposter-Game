/**
 * A player, as the emblem they sat down with.
 *
 * On one phone each player picks an emblem as they join; the mode that knows
 * who picked what provides it through `EmblemContext` (a map from name to
 * emblem id). Anywhere without one, such as a room until rooms carry
 * emblems, a name falls back on a stable default, so the same person keeps
 * the same mark from screen to screen.
 */

import { createContext, useContext } from 'react';
import { EmblemIcon, defaultEmblem, emblemFor } from '../icons/EmblemIcon.jsx';

export const EmblemContext = createContext({});

export function useEmblem(name) {
  const picked = useContext(EmblemContext);
  return picked[name] ?? defaultEmblem(name);
}

export function Avatar({ name, dim, size }) {
  const id = useEmblem(name);
  return (
    <span
      className={`avatar${dim ? ' dim' : ''}`}
      style={{ background: emblemFor(id).colour, ...(size && { width: size, height: size }) }}
      aria-hidden="true"
    >
      <EmblemIcon id={id} />
    </span>
  );
}
