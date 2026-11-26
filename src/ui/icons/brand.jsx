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
 * Imposter's mark (owner's pick B, issue #98): a disguise of a fedora over
 * square spectacles, drawn as solid shapes in the table mark's weight. The
 * hat band and a glint on each lens are cut out by a mask, so it works in
 * currentColor on any surface. On `animated` the eyes behind the lenses
 * blink now and then; `animated={false}` keeps it still.
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
        <mask id="imp-mark-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
          <rect width="48" height="48" fill="#fff" />
          <path d="M14 18.6h20" stroke="#000" strokeWidth="2.2" />
          <path d="M11.2 30.8v-2h3M27.6 30.8v-2h3" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </mask>
      </defs>
      <g mask="url(#imp-mark-cut)" fill="currentColor">
        {/* the fedora's crown and brim */}
        <path d="M14 20.6 15.6 11c.2-1.3 1.3-2.2 2.6-2.2h11.6c1.3 0 2.4.9 2.6 2.2L34 20.6Z" />
        <rect x="5" y="20" width="38" height="3.6" rx="1.8" />
        {/* square spectacles */}
        <rect x="9.4" y="27.2" width="12.8" height="10.2" rx="3.4" />
        <rect x="25.8" y="27.2" width="12.8" height="10.2" rx="3.4" />
      </g>
      <path d="M22 30.4h4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      {/* the eyes behind the lenses: these blink */}
      <g className="bm-eyes">
        <circle cx="16.4" cy="32.6" r="2.2" className="bm-pupil" />
        <circle cx="31.6" cy="32.6" r="2.2" className="bm-pupil" />
      </g>
    </svg>
  );
}
