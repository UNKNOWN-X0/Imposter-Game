/**
 * How many imposters, what they are holding, and whether they know.
 *
 * Blind mode reaches across to the card: a blank card or a hint would tell an
 * imposter exactly what they are the moment they looked, so those two are
 * locked while nobody is being told anything.
 */

import { DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM } from '../../../core/engine.js';
import { Info } from '../../../ui/primitives/Info.jsx';
import { NumberTiles, OptionList } from '../../../ui/primitives/Choices.jsx';
import { imposterHint, TELLTALE } from './helpers.js';

export function HowMany({ t, config, onChange, disabled, seats, cap, blind, wordLang, packs, myPacks, packIds, allPacks, roles, words, togglePack, onEditPack, onBrowsePacks, customPacks }) {
  // What the deal will actually use. The cap moves — turning the sidekick on
  // takes a seat off the imposters' allowance — and a stored number above it
  // is clamped by `resolveImposterCount` on the way into the game. Showing
  // the raw setting instead left a row of buttons with none of them pressed,
  // so the panel said nothing about a choice the game had already made.
  const chosen =
    typeof config.imposterCount === 'number'
      ? Math.min(config.imposterCount, cap)
      : config.imposterCount;
  return (
    <div className="setting block">
      <div className="label">
        <b>
          {t('settings.imposters')} <Info text={t('tip.imposters')} />
        </b>
        <span>{imposterHint(t, chosen, seats, cap)}</span>
      </div>
      <NumberTiles
        label={t('settings.imposters')}
        value={config.imposterCount === IMPOSTERS_AUTO || config.imposterCount === IMPOSTERS_RANDOM ? config.imposterCount : chosen}
        disabled={disabled}
        onChange={(v) => onChange({ imposterCount: v })}
        options={[
          { value: IMPOSTERS_AUTO, label: t('settings.imposterAuto') },
          ...Array.from({ length: cap }, (_, i) => ({ value: i + 1, label: String(i + 1) })),
          { value: IMPOSTERS_RANDOM, label: t('settings.imposterRandom'), title: t('settings.impostersRandomHint') },
        ]}
      />
    </div>
  );
}

export function WhatTheySee({ t, config, onChange, disabled, seats, cap, blind, wordLang, packs, myPacks, packIds, allPacks, roles, words, togglePack, onEditPack, onBrowsePacks, customPacks }) {
  // Each row says what that card is like, so the ⓘ keeps only its lead.
  return (
    <div className="setting block">
      <div className="label">
        <b>
          {t('settings.sees')} <Info text={t('tip.seesLead')} />
        </b>
      </div>
      <OptionList
        value={config.decoyMode}
        disabled={disabled}
        onChange={(mode) => onChange({ decoyMode: mode })}
        options={[
          [DECOY.BLANK, 'settings.blank', 'settings.seesBlank'],
          [DECOY.RELATED, 'settings.related', 'settings.seesRelated'],
          [DECOY.UNRELATED, 'settings.unrelated', 'settings.seesUnrelated'],
          [DECOY.HINT, 'settings.hint', 'settings.seesHint'],
        ].map(([mode, name, line]) => ({
          value: mode,
          label: t(name),
          // A blank card, or one holding a hint instead of a word, would tell
          // the imposter who they are at a glance: the one thing blind mode
          // cannot allow.
          description: blind && TELLTALE.includes(mode) ? t('settings.lockedByBlind') : t(line),
          disabled: blind && TELLTALE.includes(mode),
        }))}
      />
    </div>
  );
}

export function WhetherTheyKnow({ t, config, onChange, disabled, seats, cap, blind, wordLang, packs, myPacks, packIds, allPacks, roles, words, togglePack, onEditPack, onBrowsePacks, customPacks }) {
  return (
    <div className="setting">
      <div className="label">
        <b>
          {t('settings.knows')} <Info text={t('tip.knowsLead')} />
        </b>
      </div>
      <OptionList
        value={!blind}
        disabled={disabled}
        onChange={(told) => onChange({ imposterKnows: told })}
        options={[
          { value: true, label: t('settings.knowsShow'), description: t('settings.knowsOn') },
          { value: false, label: t('settings.knowsHide'), description: t('settings.knowsOff') },
        ]}
      />
    </div>
  );
}
