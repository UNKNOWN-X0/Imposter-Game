/**
 * One of these, not the others.
 */

import { useEffect, useRef, useState } from 'react';
import { useT } from '../../i18n/index.jsx';

/**
 * A pill switch whose highlight slides to whatever is selected.
 *
 * The children stay plain <button aria-pressed> elements — this only measures
 * the pressed one and parks a single moving block behind it, so the markup at
 * each call site is unchanged and keyboard/screen-reader behaviour with it.
 * Until the first measurement lands (and if the row is ever empty) the buttons
 * paint their own background, so nothing depends on the effect having run.
 */
export function Segmented({ wide, children }) {
  const box = useRef(null);
  const [thumb, setThumb] = useState(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return undefined;

    const measure = () => {
      const on = el.querySelector('button[aria-pressed="true"]');
      if (!on) return setThumb(null);
      const outer = el.getBoundingClientRect();
      const inner = on.getBoundingClientRect();
      // clientLeft/Top discount the border, since the block is positioned
      // against the padding box while the rectangles above include it.
      const next = {
        x: Math.round(inner.left - outer.left - el.clientLeft),
        y: Math.round(inner.top - outer.top - el.clientTop),
        w: Math.round(inner.width),
        h: Math.round(inner.height),
      };
      // Bail out when nothing moved, or the observer below would re-render
      // this component forever.
      return setThumb((prev) =>
        prev && prev.x === next.x && prev.y === next.y && prev.w === next.w && prev.h === next.h
          ? prev
          : next,
      );
    };

    measure();
    // Labels change with the interface language and rows re-wrap as the phone
    // rotates, both of which move the target without a click.
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    for (const child of el.children) observer.observe(child);
    return () => observer.disconnect();
  });

  // The first paint puts the block in place; only later moves are animated,
  // so a freshly opened settings card does not slide in from the corner.
  useEffect(() => {
    if (!thumb || live) return undefined;
    const frame = requestAnimationFrame(() => setLive(true));
    return () => cancelAnimationFrame(frame);
  }, [thumb, live]);

  return (
    <div className={`segmented${wide ? ' wide' : ''}${thumb ? ' has-thumb' : ''}`} ref={box}>
      {thumb && (
        <span
          className={`seg-thumb${live ? ' live' : ''}`}
          aria-hidden="true"
          style={{
            transform: `translate(${thumb.x}px, ${thumb.y}px)`,
            width: thumb.w,
            height: thumb.h,
          }}
        />
      )}
      {children}
    </div>
  );
}

/**
 * An on/off setting, as a switch beside its label. It was an On/Off pair of
 * buttons, which took a third of the row on a phone and squeezed the line
 * explaining the setting into a narrow column beside it.
 */
export function OnOff({ value, onChange, disabled, label }) {
  const { t } = useT();
  return (
    <button
      type="button"
      role="switch"
      className="switch"
      aria-checked={!!value}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!value)}
    >
      <span className="switch-track" aria-hidden="true"><span className="switch-thumb" /></span>
      <span className="switch-state">{value ? t('settings.on') : t('settings.off')}</span>
    </button>
  );
}
