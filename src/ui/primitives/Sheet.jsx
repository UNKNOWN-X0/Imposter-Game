/**
 * A sheet that rises from the bottom of a phone (a centred panel on a wide
 * screen) holding one thing to change, and a Done button.
 *
 * It is the existing modal (.scrim and .modal) anchored to the bottom, so it
 * closes the same ways: Done, Escape, or a tap on the dimmed page. Focus goes
 * into the sheet when it opens and back to whatever opened it when it closes,
 * so a keyboard or screen reader lands where it started. It is drawn into
 * <body>, because the screen it opens from can hold a fixed layer to itself.
 */

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motionMs } from '../motionMs.js';

/** How long a leaving sheet or tip plays (#108); none under reduced motion. */
export const exitMs = () => motionMs('--motion-exit');

export function Sheet({ label, title, doneLabel, onClose, quietDone, children }) {
  const card = useRef(null);
  // Held in a ref so that changing a setting inside the sheet, which hands
  // down a new onClose, does not rerun the effect and bounce focus about.
  const close = useRef(onClose);
  close.current = onClose;
  // Leaving slides the sheet back down over --motion-exit before it goes
  // (#108); it used to vanish on the spot. A second close while it leaves
  // does nothing.
  const [leaving, setLeaving] = useState(false);
  const leave = useRef(() => {});
  leave.current = () => {
    if (leaving) return;
    const ms = exitMs();
    if (!ms) return close.current();
    setLeaving(true);
    setTimeout(() => close.current(), ms);
  };

  useEffect(() => {
    const opener = document.activeElement;
    card.current?.focus();
    const onKey = (e) => e.key === 'Escape' && leave.current();
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, []);

  return createPortal(
    <div
      className={`scrim bottom-sheet-scrim${leaving ? ' leaving' : ''}`}
      onPointerDown={(e) => e.target === e.currentTarget && leave.current()}
    >
      <div className={`modal bottom-sheet stack${leaving ? ' leaving' : ''}`} role="dialog" aria-modal="true" aria-label={label} tabIndex={-1} ref={card}>
        {title && <h2 className="sheet-title">{title}</h2>}
        {children}
        {/* A sheet with its own main action (Add, Delete) keeps Done quiet,
            so only one button on it is filled. */}
        <button className={quietDone ? 'btn block' : 'btn primary block'} onClick={() => leave.current()}>
          {doneLabel}
        </button>
      </div>
    </div>,
    document.body,
  );
}

/**
 * One setting as a row: its name, what it is set to underneath, and a chevron
 * when tapping it opens a sheet. `control` puts a switch on the row instead,
 * for an on/off setting that one tap should change. `icon` goes in a column
 * of its own on the left; `danger` is for a row that throws something away.
 * `end` replaces the chevron (a tick, for a row that is a choice, with
 * `pressed` saying whether it is the one chosen).
 */
export function SettingRow({ title, value, onOpen, control, disabled, icon, danger, end, pressed }) {
  const cls = `setting-row${icon ? ' has-icon' : ''}${danger ? ' danger' : ''}`;
  if (control) {
    return (
      <div className={cls}>
        {icon}
        <span className="setting-row-title">{title}</span>
        <span className="setting-row-value">{value}</span>
        <span className="setting-row-end">{control}</span>
      </div>
    );
  }
  return (
    <button
      type="button"
      className={cls}
      onClick={onOpen}
      disabled={disabled}
      aria-haspopup={end ? undefined : 'dialog'}
      aria-pressed={pressed}
    >
      {icon}
      <span className="setting-row-title">{title}</span>
      <span className="setting-row-value">{value}</span>
      {end ? (
        <span className="setting-row-end">{end}</span>
      ) : (
        <span className="setting-row-end setting-row-chevron" aria-hidden="true" />
      )}
    </button>
  );
}
