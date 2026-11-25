/**
 * Hold it to open it.
 */

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * A card you have to hold down to open.
 *
 * A single tap is too easy to do by accident when a phone is being passed
 * around a table, and an accidental tap shows someone else's card — the one
 * mistake this game cannot recover from. Holding is deliberate.
 *
 * Keyboard users get it on Enter or Space without the hold, since holding a
 * key is not a gesture assistive tech reliably produces.
 *
 * With `onRelease` it is a peek: the card is open only while it is held, and
 * lifting the finger (or sliding off, or the pointer being cancelled) calls
 * `onRelease` straight away. A keyboard opens it with Enter or Space and
 * covers it again with the same key, Escape, or moving focus away. Without
 * `onRelease` it opens once and stays open, as rooms use it on a phone of
 * your own. `className` replaces the face-down look (`shield`) when given.
 */
export function HoldCard({ onOpen, onRelease, children, duration = 550, className = '' }) {
  const [progress, setProgress] = useState(0);
  const raf = useRef(0);
  const startedAt = useRef(0);
  const opened = useRef(false);

  const cancel = useCallback(() => {
    cancelAnimationFrame(raf.current);
    setProgress(0);
  }, []);

  // Letting go: stop the ring, and in a peek cover the card again at once.
  const release = useCallback(() => {
    cancel();
    if (onRelease && opened.current) {
      opened.current = false;
      onRelease();
    }
  }, [cancel, onRelease]);

  useEffect(() => cancel, [cancel]);

  const open = useCallback(() => {
    if (opened.current) return;
    opened.current = true;
    try {
      navigator.vibrate?.(18);
    } catch {
      /* no haptics here */
    }
    onOpen();
  }, [onOpen]);

  const begin = (e) => {
    if (e.button && e.button !== 0) return;
    startedAt.current = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - startedAt.current) / duration);
      setProgress(p);
      if (p >= 1) {
        cancel();
        open();
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(tick);
  };

  return (
    <button
      className={`reveal ${className || 'shield'}`}
      onPointerDown={begin}
      onPointerUp={release}
      onPointerLeave={release}
      onPointerCancel={release}
      onBlur={release}
      onContextMenu={(e) => e.preventDefault()}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          release();
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (e.repeat) return;
          if (onRelease && opened.current) release();
          else open();
        }
      }}
    >
      {/* The ring inside the card is the only progress indicator — a bar as
          well was two answers to the same question. */}
      {children(progress)}
    </button>
  );
}

