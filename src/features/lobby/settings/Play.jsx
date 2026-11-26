/**
 * How long the crew have. Calling the word and the final guess are switches
 * on their rows in ../Settings.jsx.
 */

import { ROUNDS_UNLIMITED } from '../../../core/engine.js';
import { Info } from '../../../ui/primitives/Info.jsx';
import { Segmented } from '../../../ui/primitives/Segmented.jsx';

export function Rounds({ t, config, onChange, disabled, seats, cap, blind, wordLang, packs, myPacks, packIds, allPacks, roles, words, togglePack, onEditPack, onBrowsePacks, customPacks }) {
  return (
    <div className="setting block">
      <div className="label">
        <b>
          {t('settings.rounds')} <Info text={t('tip.rounds')} />
        </b>
        <span>
          {config.maxRounds === ROUNDS_UNLIMITED
            ? t('settings.roundsUnlimitedHint')
            : t('settings.roundsHint')}
        </span>
      </div>
      <Segmented wide>
        {[2, 3, 4, 5].map((n) => (
          <button
            key={n}
            aria-pressed={config.maxRounds === n}
            disabled={disabled}
            onClick={() => onChange({ maxRounds: n })}
          >
            {n}
          </button>
        ))}
        <button
          aria-pressed={config.maxRounds === ROUNDS_UNLIMITED}
          disabled={disabled}
          onClick={() => onChange({ maxRounds: ROUNDS_UNLIMITED })}
          title={t('settings.roundsUnlimitedHint')}
        >
          {t('settings.roundsUnlimited')}
        </button>
      </Segmented>
    </div>
  );
}
