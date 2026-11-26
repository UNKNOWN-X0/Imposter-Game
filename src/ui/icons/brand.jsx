/**
 * The marks: The Long Table's own, and Imposter's, the first game at it.
 */

/* ------------------------------------------------------------------ *
 * Brand
 * ------------------------------------------------------------------ */

/** The tabletop in perspective, its front edge (the thickness) and front legs. */
const TABLE_TOP = 'M20.50 5L27.50 5L36.50 32.50L11.50 32.50Z';
const TABLE_EDGE = 'M11.50 33.40H36.50V36.00H11.50Z';
const TABLE_LEGS = 'M13.70 36.00V43.20M34.30 36.00V43.20';

/**
 * The chairs, drawn in the table's own perspective, nearest pair first: a
 * solid seat and backrest each, then the posts and legs as lines, all four
 * legs standing on the same floor. Further chairs get thinner lines, so the
 * whole picture recedes together.
 */
const CHAIR_SOLIDS = [
  [0.97, 'M2.89 31.81L9.02 31.81L11.11 26.59L5.83 26.59ZM2.89 24.14L5.83 18.91L5.83 22.60L2.89 27.82Z'],
  [0.97, 'M45.11 31.81L38.98 31.81L36.89 26.59L42.17 26.59ZM45.11 24.14L42.17 18.91L42.17 22.60L45.11 27.82Z'],
  [0.75, 'M8.15 22.46L12.76 22.46L14.84 17.24L11.09 17.24ZM8.15 16.84L11.09 11.62L11.09 14.32L8.15 19.54Z'],
  [0.75, 'M39.85 22.46L35.24 22.46L33.16 17.24L36.91 17.24ZM39.85 16.84L36.91 11.62L36.91 14.32L39.85 19.54Z'],
  [0.55, 'M13.10 13.66L16.27 13.66L18.36 8.44L16.05 8.44ZM13.10 9.98L16.05 4.75L16.05 6.52L13.10 11.75Z'],
  [0.55, 'M34.90 13.66L31.73 13.66L29.64 8.44L31.95 8.44ZM34.90 9.98L31.95 4.75L31.95 6.52L34.90 11.75Z'],
];
const CHAIR_LINES = [
  [1.62, 'M2.89 35.65V24.14M5.83 30.42V18.91M9.02 31.81v3.84M11.11 26.59v3.84'],
  [1.62, 'M45.11 35.65V24.14M42.17 30.42V18.91M38.98 31.81v3.84M36.89 26.59v3.84'],
  [1.25, 'M8.15 25.27V16.84M11.09 20.05V11.62M12.76 22.46v2.81M14.84 17.24v2.81'],
  [1.25, 'M39.85 25.27V16.84M36.91 20.05V11.62M35.24 22.46v2.81M33.16 17.24v2.81'],
  [0.91, 'M13.10 15.50V9.98M16.05 10.28V4.75M16.27 13.66v1.84M18.36 8.44v1.84'],
  [0.91, 'M34.90 15.50V9.98M31.95 10.28V4.75M31.73 13.66v1.84M29.64 8.44v1.84'],
];

/**
 * The Long Table's mark (owner's pick, issue #62): the table seen from its
 * head, running away from you, with its front edge and legs showing and
 * chairs pulled up down both sides, all in one perspective. Still on
 * purpose; the games bring the motion.
 */
export function BrandMark({ size = 34 }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className="brandmark" aria-hidden="true" focusable="false">
      <path d={TABLE_TOP} fill="currentColor" />
      <path d={TABLE_EDGE} fill="currentColor" />
      <path d={TABLE_LEGS} stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <g fill="currentColor" stroke="currentColor" strokeLinejoin="round">
        {CHAIR_SOLIDS.map(([width, d]) => <path key={d} strokeWidth={width} d={d} />)}
      </g>
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        {CHAIR_LINES.map(([width, d]) => <path key={d} strokeWidth={width} d={d} />)}
      </g>
    </svg>
  );
}

/**
 * Imposter's mark: a pair of spectacles under a hat brim, with a glint that sweeps
 * across the lenses. The eyes blink on a long, irregular cycle so it reads as
 * alive rather than as a loading spinner.
 */
export function ImposterMark({ size = 34, animated = true }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={`brandmark${animated ? ' alive' : ''}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="bm-glint" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id="bm-lenses">
          <circle cx="16" cy="28" r="8" />
          <circle cx="32" cy="28" r="8" />
        </clipPath>
      </defs>

      {/* crown, band and brim — a fedora, read at a glance */}
      <path
        d="M13 16.5V11c0-3.4 4.4-5.4 11-5.4s11 2 11 5.4v5.5"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinejoin="round"
      />
      <path d="M13 16.4h22" stroke="currentColor" strokeWidth="2.6" opacity="0.45" />
      <path
        d="M5 18.4h38"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />

      {/* lenses */}
      <circle cx="16" cy="28" r="8" fill="currentColor" />
      <circle cx="32" cy="28" r="8" fill="currentColor" />
      <path d="M24 26h0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* pupils — these blink */}
      <g className="bm-eyes">
        <circle cx="16" cy="28" r="3" className="bm-pupil" />
        <circle cx="32" cy="28" r="3" className="bm-pupil" />
      </g>

      {/* glint sweeping across both lenses */}
      <g clipPath="url(#bm-lenses)">
        <rect className="bm-glint" x="-24" y="18" width="14" height="20" fill="url(#bm-glint)" />
      </g>
    </svg>
  );
}
