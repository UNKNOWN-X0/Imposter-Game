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

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export function Sheet({ label, doneLabel, onClose, children }) {
  const card = useRef(null);
  // Held in a ref so that changing a setting inside the sheet, which hands
  // down a new onClose, does not rerun the effect and bounce focus about.
  const close = useRef(onClose);
  close.current = onClose;

  useEffect(() => {
    const opener = document.activeElement;
    card.current?.focus();
    const onKey = (e) => e.key === 'Escape' && close.current();
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, []);

  return createPortal(
    <div className="scrim sheet-scrim" onPointerDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal sheet stack" role="dialog" aria-modal="true" aria-label={label} tabIndex={-1} ref={card}>
        {children}
        <button className="btn primary block" onClick={onClose}>
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
 * for an on/off setting that one tap should change.
 */
export function SettingRow({ title, value, onOpen, control, disabled, icon }) {
  if (control) {
    return (
      <div className="setting-row">
        {icon}
        <span className="setting-row-title">{title}</span>
        <span className="setting-row-value">{value}</span>
        <span className="setting-row-end">{control}</span>
      </div>
    );
  }
  return (
    <button type="button" className="setting-row" onClick={onOpen} disabled={disabled} aria-haspopup="dialog">
      {icon}
      <span className="setting-row-title">{title}</span>
      <span className="setting-row-value">{value}</span>
      <span className="setting-row-end setting-row-chevron" aria-hidden="true" />
    </button>
  );
}
