/**
 * The rules, the first time somebody opens the game.
 *
 * Shown once and then never again, because the people who need it are the
 * ones who have just been handed a phone and told "your turn" — and because a
 * party game that has to be explained by whoever brought it is a party game
 * that gets explained badly.
 *
 * Somebody arriving on a join link does not get it: they are being waved into
 * a game that is already happening.
 */

import { useEffect, useRef } from 'react';
import { ImposterMark } from '../../ui/icons/index.jsx';
import { useT } from '../../i18n/index.jsx';
import { RuleSteps, imposterSteps } from './RuleSteps.jsx';

/**
 * The rules, the first time somebody opens the game.
 *
 * Shown once and then never again, because the people who need it are the
 * ones who have just been handed a phone and told "your turn" — and because
 * a party game that has to be explained by whoever brought it is a party
 * game that gets explained badly. It is the same four steps the rules screen
 * has; nobody needs two versions of the rules to drift apart.
 *
 * Dismissing it remembers. The link on the home screen opens the rules again
 * for anyone who wants them.
 */
export function FirstRun({ onClose }) {
  const { t } = useT();
  const card = useRef(null);

  useEffect(() => {
    card.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="scrim" onPointerDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="modal stack"
        role="dialog"
        aria-modal="true"
        aria-labelledby="firstrun-title"
        tabIndex={-1}
        ref={card}
      >
        <div className="center stack tight">
          <ImposterMark size={52} />
          <h2 className="title" id="firstrun-title">
            {t('rules.title')}
          </h2>
          <p className="subtitle">{t('rules.firstSub')}</p>
        </div>

        <RuleSteps steps={imposterSteps(t)} />

        <button className="btn primary block lg" onClick={onClose}>
          {t('rules.start')}
        </button>
      </div>
    </div>
  );
}
