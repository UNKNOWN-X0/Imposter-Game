/**
 * What is on a card: the two sides, the optional roles, and the back.
 */

import { Icon } from './Icon.jsx';

/* ------------------------------------------------------------------ *
 * Roles and the card
 *
 * All of these are drawn inside a 20×20 live area on the 24 grid, with the
 * outer 2 left clear, and sized by keyline rather than by bounding box: a
 * circle may run the full 20 because a circle reads smaller than a square of
 * the same width, a square stops around 18, and an upright shape is about
 * 16 across by 20 tall. Stroke is 1.8 everywhere with round caps and joins,
 * and no gap between two strokes is narrower than the stroke itself.
 * ------------------------------------------------------------------ */

/**
 * Crew: a shield with a tick. Steady, on-side.
 *
 * The tick carries `pathLength="1"`, so a dash the length of the whole path
 * can stroke it on from nothing when a card turns over.
 */
export const CrewIcon = (p) => (
  <Icon {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path className="draw-on" d="m9 12 2 2 4-4" pathLength="1" />
  </Icon>
);

/**
 * Imposter: a domino mask, with eyes behind it.
 *
 * They blink, and on `anim` they glance left and right — the tell you are
 * watching for at the table, drawn small.
 */
export const ImposterIcon = (p) => (
  <Icon {...p}>
    <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
    <g className="eyes">
      <g className="pupils">
        <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
        <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
      </g>
    </g>
  </Icon>
);

/**
 * The detective: a magnifier.
 *
 * On `anim` it sweeps a little, the way you look for something rather than
 * at it.
 */
export const DetectiveIcon = (p) => (
  <Icon {...p}>
    <g className="lens">
      <circle cx="11" cy="11" r="8" />
    </g>
    <path d="m21 21-4.3-4.3" />
  </Icon>
);

/**
 * The jester: a cap with two bells.
 *
 * On `anim` the whole cap tips side to side and the bells swing after it,
 * which is the role in one movement — they are playing the fool on purpose.
 */
export const JesterIcon = (p) => (
  <Icon {...p}>
    <g className="cap">
      <path d="M6.4 14.6c-.8-3 .4-6.2 2.6-7.6" />
      <path d="M17.6 14.6c.8-3-.4-6.2-2.6-7.6" />
      <path d="M12 5.2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
      <path d="M6.4 14.6h11.2a1.6 1.6 0 0 1 0 3.2H6.4a1.6 1.6 0 0 1 0-3.2Z" />
    </g>
    <g className="bells">
      <path d="M5.4 12.4h.01M18.6 12.4h.01" strokeWidth="2.6" />
    </g>
  </Icon>
);

/**
 * The sidekick: two figures, one a step behind the other.
 *
 * On `anim` the one behind edges closer, which is what a sidekick does.
 */
export const SidekickIcon = (p) => (
  <Icon {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <g className="shadow-figure">
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" opacity="0.65" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" opacity="0.65" />
    </g>
  </Icon>
);

/** Keeping score: a column chart, tallest first. */
export const ScoreIcon = (p) => (
  <Icon {...p}>
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <g className="bars">
      <path d="M8 17v-3" />
      <path d="M13 17V5" />
      <path d="M18 17V9" />
    </g>
  </Icon>
);

/** Blind mode: a card with a question on it. Gives nothing away. */
export const UnknownIcon = (p) => (
  <Icon {...p}>
    <rect x="4.6" y="2.8" width="14.8" height="18.4" rx="3" />
    <g className="question">
      <path d="M9.8 9.4c.2-1.3 1.1-2.1 2.4-2.1 1.3 0 2.3.9 2.3 2.1 0 1.8-2.2 1.9-2.2 3.5" />
      <path d="M12.2 16.3h.01" strokeWidth="2.4" />
    </g>
  </Icon>
);

/**
 * A hint: a bulb.
 *
 * It was a card with lines on it, which was the card-back icon with one line
 * fewer — two different things that looked the same. A bulb is the one
 * drawing everybody already reads as "here is a clue", and it can light up.
 */
export const HintIcon = (p) => (
  <Icon {...p}>
    <g className="bulb">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6M10 22h4" />
    </g>
    <g className="rays">
      <path d="M20.6 4.6l-1.1.8M3.4 4.6l1.1.8M20.4 9.4h1.4M2.2 9.4h1.4" />
    </g>
  </Icon>
);

/** Face-down card, used on the shield before a reveal. */
export const CardBackIcon = (p) => (
  <Icon {...p}>
    <rect x="4.6" y="2.8" width="14.8" height="18.4" rx="3" />
    <g className="lines" opacity="0.55">
      <path d="M8.4 7.6h7.2" />
      <path d="M8.4 12h7.2" />
      <path d="M8.4 16.4h3.6" />
    </g>
  </Icon>
);
