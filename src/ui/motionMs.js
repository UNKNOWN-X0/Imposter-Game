/**
 * A motion token in milliseconds, read from the stylesheet, or 0 when the
 * reader asked for reduced motion: code that waits for an animation (a sheet
 * leaving, the verdict's beat) waits exactly as long as the CSS plays, and
 * not at all when nothing plays.
 */
export function motionMs(token) {
  if (typeof window === 'undefined' || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return 0;
  return toMs(getComputedStyle(document.documentElement).getPropertyValue(token));
}

/**
 * A CSS time in milliseconds. Both units, because the build's minifier
 * rewrites `600ms` as `.6s`: read as a bare number that was 0.6ms, and every
 * wait on a token finished at once in production.
 */
export function toMs(value) {
  const v = String(value ?? '').trim();
  const n = Number.parseFloat(v);
  if (!Number.isFinite(n)) return 0;
  return /ms$/i.test(v) ? n : /s$/i.test(v) ? n * 1000 : n;
}
