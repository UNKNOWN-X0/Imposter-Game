/**
 * The frame every screen sits in.
 */

import { useState } from 'react';
import { BrandMark, CheckIcon, ChevronLeftIcon, CopyIcon } from '../icons/index.jsx';
import { useT } from '../../i18n/index.jsx';
import { PhaseStepper, inRound } from '../../features/round/PhaseStepper.jsx';
import { AppSettings } from '../settings/AppSettings.jsx';

/**
 * `frame` asks for the game frame (brand beside Back, a rule under the top
 * bar, a centred column) on a screen with no phase or room code, such as the
 * pack library opened from the hub.
 */
export function Shell({ children, onBack, code, right, phase, frame }) {
  const { t } = useT();
  const gameFrame = Boolean(phase || code || frame);
  // During a round a room's code rides on the progress line, so the top bar
  // keeps to one row on a phone (#106); elsewhere it stays in the bar.
  const codeOnStepper = Boolean(code && phase && inRound(phase));
  return (
    <div className={`shell${gameFrame ? ' game-shell' : ''}`}>
      <div className={`topbar${gameFrame ? ' game-topbar' : ''}`}>
        {(!onBack || gameFrame) && (
          <div className="brand">
            <BrandMark size={30} />
            {/* The name is a span so the narrowest phones can drop it and
                keep the mark, which is what makes room for the controls. */}
            <span className="brand-name">{t('app.name')}</span>
          </div>
        )}
        {onBack && (
          <button className="btn ghost sm" onClick={onBack}>
            <ChevronLeftIcon size={17} /> {t('common.back')}
          </button>
        )}
        <div className="spacer" />
        {code && !codeOnStepper ? <RoomCode code={code} /> : null}
        {right ?? (
          <>
            <AppSettings />
          </>
        )}
      </div>
      {gameFrame ? (
        <main className="game-column">
          {codeOnStepper ? (
            <div className="phase-row">
              <PhaseStepper phase={phase} />
              <RoomCode code={code} />
            </div>
          ) : phase ? (
            <PhaseStepper phase={phase} />
          ) : null}
          {children}
        </main>
      ) : children}
    </div>
  );
}

function RoomCode({ code }) {
  const { t } = useT();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* clipboard blocked — the code is on screen anyway */
    }
  };
  return (
    <button className="roomcode" onClick={copy} title={t('common.copy')}>
      {code}
      <span className="roomcode-action">
        {copied ? <CheckIcon size={13} /> : <CopyIcon size={13} anim />}
        {/* The words are a span of their own so a narrow phone can drop them
            and keep the icon — including the tick, which is the only thing
            that confirms the code was copied. */}
        <span className="roomcode-label">
          {copied ? t('common.copied') : t('common.copy')}
        </span>
      </span>
    </button>
  );
}

/** Interface language. Per device, and never synced to the room. */
