/**
 * How long the crew have. Calling the word and the final guess are switches
 * on their rows in ../Settings.jsx.
 */

import { ROUNDS_UNLIMITED } from '../../../core/engine.js';
import { Info } from '../../../ui/primitives/Info.jsx';
import { NumberTiles } from '../../../ui/primitives/Choices.jsx';

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
      <NumberTiles
        label={t('settings.rounds')}
        value={config.maxRounds}
        disabled={disabled}
        onChange={(n) => onChange({ maxRounds: n })}
        options={[
          ...[2, 3, 4, 5].map((n) => ({ value: n, label: String(n) })),
          { value: ROUNDS_UNLIMITED, label: t('settings.roundsUnlimited'), title: t('settings.roundsUnlimitedHint') },
        ]}
      />
    </div>
  );
}
