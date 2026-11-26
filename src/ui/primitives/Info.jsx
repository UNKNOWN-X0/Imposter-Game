/**
 * The dot beside a setting, and what it says.
 */

import { useEffect, useId, useState } from 'react';
import { useT } from '../../i18n/index.jsx';
import { InfoIcon } from '../icons/index.jsx';
import { exitMs } from './Sheet.jsx';

/**
 * The ⓘ beside a setting.
 *
 * `lines` is for a setting with options: each one gets its name and a line
 * saying what it does, which is far easier to find an answer in than the
 * paragraph they used to be. `text` is the lead above them, or the whole
 * thing for a setting with nothing to compare.
 *
 * The explanation opens in place, on its own line under the setting's name,
 * and pushes what follows down. It used to float as a bubble, which a card's
 * edge or the top of a sheet cut off, and which covered the very line it was
 * explaining (#82). Nothing can clip a block that is part of the page.
 */
export function Info({ text, lines, label }) {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const id = useId();
  // Closing folds the explanation away over --motion-exit (#108).
  const close = () => {
    const ms = exitMs();
    if (!ms) return setOpen(false);
    setLeaving(true);
    setTimeout(() => {
      setLeaving(false);
      setOpen(false);
    }, ms);
  };

  // A second tap or Escape closes it. Not a tap elsewhere: the page moves
  // when it closes, and a tap on the switch below would land on whatever
  // slid under the finger.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <span className="info">
      <button
        type="button"
        className="info-dot"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        aria-label={label || t('common.whatsThis')}
        onClick={() => (open ? !leaving && close() : setOpen(true))}
      >
        <InfoIcon size={18} />
      </button>
      {open && (
        <span className={`tip pop-in${leaving ? ' leaving' : ''}`} id={id}>
          {text && <span className="tip-lead">{text}</span>}
          {lines?.length > 0 && (
            <span className="tip-lines">
              {lines.map(([term, definition]) => (
                <span className="tip-line" key={term}>
                  <b>{term}</b>
                  <span>{definition}</span>
                </span>
              ))}
            </span>
          )}
        </span>
      )}
    </span>
  );
}

