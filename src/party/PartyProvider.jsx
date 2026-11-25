/**
 * The party, shared by the hub and every game.
 *
 * `useParty()` gives the names in seat order, each one's emblem, and the
 * ways to change them. The hub seats people before anyone picks a game; a
 * game reads `names` when it starts and hands its lobby's changes back with
 * `setNames`, so adding someone in either place adds them in both.
 *
 * A new game needs nothing else: read `names` for the roster, and every
 * `Avatar` already shows the right emblem, because this provider also feeds
 * `EmblemContext` for the whole app.
 */

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { nameProblem } from '../core/rules.js';
import { EmblemContext } from '../ui/primitives/Avatar.jsx';
import { loadEmblems, loadRoster, saveEmblems, saveRoster } from './storage.js';

const PartyContext = createContext(null);

export function PartyProvider({ children }) {
  const [names, setNamesState] = useState(loadRoster);
  const [emblems, setEmblems] = useState(loadEmblems);

  useEffect(() => {
    saveRoster(names);
    saveEmblems(names, emblems);
  }, [names, emblems]);

  /** Seats somebody; returns an error `{ code, params }` or null. */
  const add = useCallback(
    (rawName, emblem) => {
      const name = String(rawName || '').trim();
      const problem = nameProblem(names, name);
      if (problem) return problem;
      setNamesState([...names, name]);
      if (emblem) setEmblems((current) => ({ ...current, [name]: emblem }));
      return null;
    },
    [names],
  );

  const remove = useCallback((name) => {
    setNamesState((current) => current.filter((n) => n !== name));
  }, []);

  /** A game's lobby hands back its roster; same list, no update. */
  const setNames = useCallback((next) => {
    setNamesState((current) =>
      current.length === next.length && current.every((n, i) => n === next[i]) ? current : next,
    );
  }, []);

  const setEmblem = useCallback((name, emblem) => {
    setEmblems((current) => (current[name] === emblem ? current : { ...current, [name]: emblem }));
  }, []);

  const value = useMemo(
    () => ({ names, emblems, add, remove, setNames, setEmblem }),
    [names, emblems, add, remove, setNames, setEmblem],
  );

  return (
    <PartyContext.Provider value={value}>
      <EmblemContext.Provider value={emblems}>{children}</EmblemContext.Provider>
    </PartyContext.Provider>
  );
}

export function useParty() {
  const party = useContext(PartyContext);
  if (!party) throw new Error('useParty needs a <PartyProvider> above it');
  return party;
}
