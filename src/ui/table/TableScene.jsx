/**
 * The feast table: a top-down tabletop under a lamp, with chairs down both
 * long sides and a player in each chair that is taken.
 *
 * It knows nothing about the game. It takes the people who are seated, in
 * order, and how many chairs to set; whoever uses it (the hub, the lobby,
 * later the room and the round) decides what those are. Owner's choice,
 * 2026-11-25: "A · Feast table", turned upright on a phone so a full table
 * still fits at 390px without sideways scrolling.
 *
 * The drawing is one SVG in a fixed 820×560 space; the seats are HTML laid
 * over it at percentages, so names stay real text that wraps, translates and
 * reads aloud. Nothing here changes with a player's role, word or vote.
 */

import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { useT } from '../../i18n/index.jsx';
import { Avatar } from '../primitives/Avatar.jsx';

const W = 820;
const H = 560;
const TABLE = { x: 60, y: 150, w: 700, h: 260, r: 22 };
const PLANKS = 5;
const CHAIR_GAP = 72; // from the table edge to a chair's centre

/** How many chairs to set: always one free, never fewer than six, even sides. */
export function chairsFor(players, max = 12) {
  const wanted = Math.max(6, players + 1);
  return Math.min(max, wanted + (wanted % 2));
}

/**
 * Where each chair goes. Seats alternate sides, far then near, so a table
 * filling up looks like people sitting across from each other rather than
 * one bench filling before the other.
 */
export function seatPoints(chairs) {
  const perSide = Math.ceil(chairs / 2);
  return Array.from({ length: chairs }, (_, i) => {
    const near = i % 2 === 1;
    const slot = Math.floor(i / 2);
    const onThisSide = near ? Math.floor(chairs / 2) : perSide;
    return {
      x: TABLE.x + (TABLE.w * (slot + 0.5)) / onThisSide,
      y: near ? TABLE.y + TABLE.h + CHAIR_GAP : TABLE.y - CHAIR_GAP,
      near,
    };
  });
}

function useNarrow() {
  const query = '(max-width: 599px)';
  const [narrow, setNarrow] = useState(
    () => typeof matchMedia === 'function' && matchMedia(query).matches,
  );
  useEffect(() => {
    if (typeof matchMedia !== 'function') return undefined;
    const list = matchMedia(query);
    const update = () => setNarrow(list.matches);
    update();
    list.addEventListener('change', update);
    return () => list.removeEventListener('change', update);
  }, []);
  return narrow;
}

const Crown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 17h16l1-10-5 4-4-6-4 6-5-4z" />
  </svg>
);

function Mug({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`} className="ts-mug">
      <rect className="ts-mug-handle" x="14" y="-6" width="13" height="12" rx="6" />
      <circle className="ts-mug-body" r="17" />
      <circle className="ts-mug-ale" r="11" />
    </g>
  );
}

function Candle({ x, y, glow }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="64" fill={`url(#${glow})`} />
      <circle className="ts-candle" r="15" />
      <circle className="ts-wax" r="8" />
      <circle className="ts-flame" r="3.5" />
    </g>
  );
}

/**
 * @param seated  people in the chairs, in order: `{ key, name, host, away, you,
 *                speaking, out }` (speaking: whose turn it is; out: voted out)
 * @param chairs  how many chairs to set; at least `seated.length`
 * @param children what sits on the plate in the middle of the table
 * @param className for the screen to size its own table
 * @param picked  the key of the seat that is selected, if any
 * @param onPick  makes each taken seat a button; called with its key (or
 *                null when the selected seat is pressed again)
 */
export function TableScene({
  seated = [],
  chairs = chairsFor(seated.length),
  children,
  className = '',
  picked = null,
  onPick,
}) {
  const { t } = useT();
  const narrow = useNarrow();
  const id = useId().replace(/:/g, '');
  const ids = { grain: `${id}g`, lamp: `${id}l`, glow: `${id}c`, blur: `${id}b`, clip: `${id}k` };
  const points = seatPoints(Math.max(chairs, seated.length));
  // Whoever was already seated when the table first drew is not sitting
  // down now; only a seat filled after that plays the sit-down (#52).
  const firstSeated = useRef(null);
  if (firstSeated.current === null) firstSeated.current = new Set(seated.map((w) => w.key));
  const { x, y, w, h, r } = TABLE;

  // One speaking ring that glides from seat to seat (#110), measured from
  // the speaking seat's emblem, instead of a ring that jumps. It moves by
  // transform only; the first placement does not animate.
  const scene = useRef(null);
  const speakingKey = seated.find((s) => s.speaking)?.key ?? null;
  const [ring, setRing] = useState(null);
  useLayoutEffect(() => {
    const root = scene.current;
    if (!root || speakingKey === null) {
      setRing(null);
      return undefined;
    }
    const measure = () => {
      const token = root.querySelector('.ts-seat.speaking .avatar');
      if (!token) return;
      const a = root.getBoundingClientRect();
      const b = token.getBoundingClientRect();
      setRing((prev) => ({ x: b.left - a.left, y: b.top - a.top, size: b.width, live: Boolean(prev) }));
    };
    measure();
    const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(measure) : null;
    ro?.observe(root);
    return () => ro?.disconnect();
  }, [speakingKey, narrow, seated.length]);
  const ph = h / PLANKS;

  // Upright, the drawing turns a quarter: the table's long sides run down the
  // phone. A point (px, py) in the wide drawing lands at (H - py, px).
  const place = ({ x: px, y: py }) =>
    narrow
      ? { left: `${((H - py) / H) * 100}%`, top: `${(px / W) * 100}%` }
      : { left: `${(px / W) * 100}%`, top: `${(py / H) * 100}%` };

  return (
    <div
      ref={scene}
      className={`ts-scene${narrow ? ' upright' : ''}${ring ? ' has-ring' : ''} ${className}`.trim()}
      style={{ '--ts-slot': `${(w / W / Math.ceil(points.length / 2)) * 100}cqi` }}
    >
      <svg className="ts-drawing" viewBox={narrow ? `0 0 ${H} ${W}` : `0 0 ${W} ${H}`} aria-hidden="true">
        <defs>
          <filter id={ids.grain} x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.25" numOctaves="3" seed="4" />
            <feColorMatrix values="0 0 0 0 .2  0 0 0 0 .12  0 0 0 0 .05  0 0 0 1.4 -.5" />
          </filter>
          <radialGradient id={ids.lamp} cx="50%" cy="45%" r="60%">
            <stop offset="0" stopColor="#ffd38a" stopOpacity=".26" />
            <stop offset=".6" stopColor="#ffb55a" stopOpacity=".05" />
            <stop offset="1" stopColor="#000" stopOpacity=".22" />
          </radialGradient>
          <radialGradient id={ids.glow}>
            <stop offset="0" stopColor="#ffd27a" stopOpacity=".6" />
            <stop offset="1" stopColor="#ffd27a" stopOpacity="0" />
          </radialGradient>
          <filter id={ids.blur} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <clipPath id={ids.clip}>
            <rect x={x} y={y} width={w} height={h} rx={r} />
          </clipPath>
        </defs>
        <g transform={narrow ? `translate(${H} 0) rotate(90)` : undefined}>
          <rect className="ts-shadow" x={x + 10} y={y + 24} width={w} height={h} rx={r} filter={`url(#${ids.blur})`} />
          {points.map((p, i) => (
            <g key={i} transform={`translate(${p.x} ${p.y})`}>
              <rect className="ts-chair" x="-34" y="-26" width="68" height="52" rx="10" />
              <rect className="ts-chair-back" x="-36" y={p.near ? 28 : -40} width="72" height="12" rx="5" />
            </g>
          ))}
          <g clipPath={`url(#${ids.clip})`}>
            {Array.from({ length: PLANKS }, (_, i) => (
              <g key={i}>
                <rect className={`ts-plank-${[0, 1, 2, 1, 0][i]}`} x={x} y={y + i * ph} width={w} height={ph} />
                {i > 0 && <line className="ts-join" x1={x} y1={y + i * ph} x2={x + w} y2={y + i * ph} />}
                <line
                  className="ts-butt"
                  x1={x + w * (0.22 + ((i * 0.31) % 0.56))}
                  y1={y + i * ph}
                  x2={x + w * (0.22 + ((i * 0.31) % 0.56))}
                  y2={y + (i + 1) * ph}
                />
              </g>
            ))}
            <rect x={x} y={y} width={w} height={h} filter={`url(#${ids.grain})`} opacity=".35" />
            <rect x={x} y={y} width={w} height={h} fill={`url(#${ids.lamp})`} />
          </g>
          <rect className="ts-rim" x={x} y={y} width={w} height={h} rx={r} />
          <rect className="ts-inlay" x={x + 7} y={y + 7} width={w - 14} height={h - 14} rx={r - 6} />
          <Mug x={x + 70} y={y + 62} />
          <Mug x={x + w - 70} y={y + h - 62} />
          <Candle x={x + w - 80} y={y + 70} glow={ids.glow} />
        </g>
      </svg>

      <ol className="ts-seats" aria-label={t('table.seats')}>
        {points.map((p, i) => {
          const who = seated[i];
          if (!who) {
            return (
              <li className="ts-seat open" key={`open-${i}`} style={place(p)}>
                <span className="ts-token ts-empty" aria-hidden="true">+</span>
                <span className="ts-name">{t('table.open')}</span>
              </li>
            );
          }
          const pickable = onPick && !who.out && !who.locked;
          const Seat = pickable ? 'button' : 'span';
          const seatProps = pickable
            ? {
                type: 'button',
                'aria-pressed': picked === who.key,
                onClick: () => onPick(picked === who.key ? null : who.key),
              }
            : {};
          return (
            <li
              className={`ts-seat filled${firstSeated.current.has(who.key) ? '' : ' just-sat'}${who.away ? ' away' : ''}${who.out ? ' out' : ''}${who.speaking ? ' speaking' : ''}${picked === who.key ? ' picked' : ''}`}
              key={who.key}
              style={place(p)}
            >
              <Seat className="ts-seat-body" {...seatProps}>
                <span className="ts-token">
                  <Avatar name={who.name} dim={who.away || who.out} />
                  {who.host && (
                    <span className="ts-host" title={t('tag.host')}>
                      <Crown />
                    </span>
                  )}
                </span>
                <span className="ts-name">
                  <span className="ts-name-text" title={who.name}>{who.name}</span>
                  {who.host && <span className="sr-only"> · {t('tag.host')}</span>}
                  {who.you && <span className="ts-you">{t('tag.you')}</span>}
                  {who.away && <span className="ts-away"> · {t('table.away')}</span>}
                  {who.out && <span className="ts-away"> · {t('table.out')}</span>}
                  {who.speaking && <span className="ts-you">{t('table.speaking')}</span>}
                </span>
              </Seat>
            </li>
          );
        })}
      </ol>

      {ring && (
        <span
          className={`ts-ring${ring.live ? ' live' : ''}`}
          aria-hidden="true"
          style={{ width: ring.size, height: ring.size, transform: `translate(${ring.x}px, ${ring.y}px)` }}
        />
      )}

      {children && <div className="ts-plate">{children}</div>}
    </div>
  );
}
