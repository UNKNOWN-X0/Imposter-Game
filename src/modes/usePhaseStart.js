/**
 * Every phase opens at its top, with focus on its heading (#104).
 *
 * A phase change used to keep the last screen's scroll: tapping "Everyone
 * has spoken" at the foot of the clues opened the vote 180px down, its
 * heading and instructions above the screen. Shared by both modes.
 *
 * Focus goes to the new screen's first heading so a screen reader starts
 * there, unless the screen has already put focus somewhere of its own (the
 * clue box focuses itself, and its effect runs before this one). Not on the
 * first render: opening a game should not move focus about.
 */

import { useEffect, useRef } from 'react';
import { PHASE } from '../core/engine.js';
import { play } from '../ui/sound/index.js';

// The sound a phase opens with (#118): the deal, the vote's knock before the
// verdict's beat, and the win.
const OPENS_WITH = { [PHASE.REVEAL]: 'deal', [PHASE.VERDICT]: 'vote', [PHASE.GAME_OVER]: 'win' };

export function usePhaseStart(phase) {
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (OPENS_WITH[phase]) play(OPENS_WITH[phase]);
    window.scrollTo(0, 0);
    const column = document.querySelector('.game-column') ?? document.body;
    const active = document.activeElement;
    if (active && active !== document.body && column.contains(active)) return;
    const heading = column.querySelector('h1, h2');
    if (!heading) return;
    if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
    heading.focus({ preventScroll: true });
  }, [phase]);
}
