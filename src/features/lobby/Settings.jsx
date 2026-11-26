/**
 * Every choice the table makes before the cards go out.
 *
 * This file works out what the settings need to know — how many seats, what a
 * blind game rules out, which packs exist in the chosen language — and lays
 * the settings out as rows: each one says its name and what it is set to, and
 * tapping it opens a sheet holding that setting's section from ./settings.
 * An on/off setting keeps its switch on the row, so it stays one tap.
 *
 * Adding a setting is a section in ./settings and a row here.
 */

import { useState } from 'react';
import { DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MIN_PLAYERS, ROUNDS_UNLIMITED, SPECIAL_ROLES, maxImpostersFor } from '../../core/engine.js';
import { WORD_LANGUAGES, packsFor, pairCount } from '../../content/words/index.js';
import { useT } from '../../i18n/index.jsx';
import { Info } from '../../ui/primitives/Info.jsx';
import { OnOff } from '../../ui/primitives/Segmented.jsx';
import { Sheet, SettingRow } from '../../ui/primitives/Sheet.jsx';
import { Presets } from './settings/Presets.jsx';
import { Packs, WordLanguage } from './settings/Words.jsx';
import { HowMany, WhatTheySee, WhetherTheyKnow } from './settings/Imposters.jsx';
import { Rounds } from './settings/Play.jsx';
import { Roles } from './settings/Extras.jsx';
import { imposterHint } from './settings/helpers.js';

export { hintLine } from './hintLine.js';

/** Which section each row opens, by the row's key. */
const SECTIONS = {
  wordLang: WordLanguage,
  packs: Packs,
  imposters: HowMany,
  sees: WhatTheySee,
  knows: WhetherTheyKnow,
  rounds: Rounds,
  roles: Roles,
};

const SEES = {
  [DECOY.BLANK]: 'settings.seesBlank',
  [DECOY.UNRELATED]: 'settings.seesUnrelated',
  [DECOY.HINT]: 'settings.seesHint',
};

export function Settings({
  config,
  playerCount,
  onChange,
  disabled,
  customPacks = [],
  onEditPack,
  onBrowsePacks,
}) {
  const { t } = useT();
  const [open, setOpen] = useState(null);
  const seats = Math.max(playerCount, MIN_PLAYERS);
  const blind = config.imposterKnows === false;
  const wordLang = config.wordLang;
  const packs = packsFor(wordLang, customPacks);
  // Only the packs this table wrote can be edited, and only the ones written
  // in the language being played are on screen at all.
  const myPacks = customPacks.filter((pack) => pack.lang === wordLang);
  const packIds = config.packIds ?? [];
  const allPacks = packIds.length === 0;
  const roles = config.roles ?? [];
  // The cap moves with the roles: a sidekick is a seat on the imposters'
  // side, so the panel must stop offering a number that would deal a game
  // the crew has already lost. Blind mode turns the roles off, and the cap
  // goes back up with them.
  const cap = maxImpostersFor(seats, blind ? [] : roles);

  const togglePack = (id) => {
    const next = new Set(allPacks ? packs.map((p) => p.id) : packIds);
    next.has(id) ? next.delete(id) : next.add(id);
    const list = [...next];
    // Selecting everything is the same as selecting nothing — keep it as []
    // so a newly added pack is picked up automatically.
    onChange({ packIds: list.length === packs.length ? [] : list });
  };

  const words = pairCount(wordLang, packIds, customPacks);

  // One bundle, because every section wants some of it and none of them
  // should be reaching back into this file for the rest.
  const ctx = {
    t, config, onChange, disabled, seats, cap, blind, wordLang, packs, myPacks,
    packIds, allPacks, roles, words, togglePack, onEditPack, onBrowsePacks, customPacks,
  };

  // What each row says it is set to: the same lines the sections show, so
  // the row and the sheet never disagree.
  const chosen = typeof config.imposterCount === 'number' ? Math.min(config.imposterCount, cap) : config.imposterCount;
  const lang = WORD_LANGUAGES.find((l) => l.id === wordLang);
  const rows = {
    wordLang: [t('settings.wordLang'), lang ? `${lang.flag} ${lang.label}` : wordLang],
    packs: [t('settings.packs'), allPacks ? t('settings.packsAll', { count: words }) : t('settings.packsSome', { count: words })],
    imposters: [
      t('settings.imposters'),
      chosen === IMPOSTERS_AUTO || chosen === IMPOSTERS_RANDOM
        ? imposterHint(t, chosen, seats, cap)
        : t('settings.impostersFixed', { count: chosen }),
    ],
    sees: [t('settings.sees'), t(SEES[config.decoyMode] || 'settings.seesRelated')],
    knows: [t('settings.knows'), blind ? t('settings.knowsOff') : t('settings.knowsOn')],
    rounds: [
      t('settings.rounds'),
      config.maxRounds === ROUNDS_UNLIMITED
        ? t('settings.roundsUnlimitedHint')
        : t('settings.roundsCount', { count: config.maxRounds }),
    ],
    roles: [
      t('settings.roles'),
      blind
        ? t('settings.lockedByBlind')
        : roles.length === 0
          ? t('settings.rolesNone')
          : SPECIAL_ROLES.filter((r) => roles.includes(r)).map((r) => t(`role.${r}`)).join(', '),
    ],
  };

  const row = (key) => (
    <SettingRow key={key} title={rows[key][0]} value={rows[key][1]} disabled={disabled} onOpen={() => setOpen(key)} />
  );
  const toggle = (title, tip, value, on, flag, lockedHere = false) => (
    <SettingRow
      title={<>{title} <Info text={tip} /></>}
      value={value}
      control={<OnOff value={on} label={title} disabled={disabled || lockedHere} onChange={(v) => onChange({ [flag]: v })} />}
    />
  );
  const Section = open && SECTIONS[open];

  // Open sections with a heading each, the way the hub lays itself out, and
  // under each heading one card of rows: the eye finds "The round" by its
  // heading and reads what is set without opening anything.
  return (
    <div className="settings">
      <section className="settings-group">
        <Presets {...ctx} />
      </section>
      <section className="settings-group">
        <h3 className="settings-group-title">{t('settings.groupWords')}</h3>
        <div className="setting-list">
          {row('wordLang')}
          {row('packs')}
        </div>
      </section>
      <section className="settings-group">
        <h3 className="settings-group-title">{t('settings.groupImposters')}</h3>
        <div className="setting-list">
          {row('imposters')}
          {row('sees')}
          {row('knows')}
        </div>
      </section>
      <section className="settings-group">
        <h3 className="settings-group-title">{t('settings.groupRound')}</h3>
        <div className="setting-list">
          {row('rounds')}
          {toggle(t('settings.call'), t('tip.call'), blind ? t('settings.lockedByBlind') : t('settings.callHint'), config.allowCall, 'allowCall', blind)}
          {toggle(t('settings.steal'), t('tip.steal'), t('settings.stealHint'), config.allowSteal, 'allowSteal')}
        </div>
      </section>
      <section className="settings-group">
        <h3 className="settings-group-title">{t('settings.groupExtras')}</h3>
        <div className="setting-list">
          {row('roles')}
          {toggle(t('settings.scoring'), t('tip.scoringLead'), config.scoring ? t('settings.scoringOn') : t('settings.scoringOff'), config.scoring, 'scoring')}
        </div>
      </section>
      {Section && (
        <Sheet label={rows[open][0]} doneLabel={t('lobby.done')} onClose={() => setOpen(null)}>
          <Section {...ctx} />
        </Sheet>
      )}
    </div>
  );
}
