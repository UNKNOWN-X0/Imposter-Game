/**
 * Adding somebody, and saying how many more are needed.
 */

import { useState } from 'react';
import { MAX_PLAYERS, MIN_PLAYERS } from '../core/rules.js';
import { useT } from '../i18n/index.jsx';
import { EMBLEMS, EmblemIcon, firstFree } from '../ui/icons/EmblemIcon.jsx';

/**
 * A name and an emblem. `taken` lists the emblems already at the table; they
 * stay visible but cannot be picked, so no two players share a mark. Without
 * `taken` (a room, until rooms carry emblems) there is no picker.
 */
export function AddPlayerForm({ onAdd, disabled, taken }) {
  const { t } = useT();
  const [name, setName] = useState('');
  const [chosen, setChosen] = useState(null);
  const picking = Array.isArray(taken);
  const emblem = chosen && !taken?.includes(chosen) ? chosen : firstFree(taken);
  return (
    <form
      className="stack tight add-player"
      onSubmit={(e) => {
        e.preventDefault();
        if (!name.trim()) return;
        onAdd(name.trim(), picking ? emblem : undefined);
        setName('');
        setChosen(null);
      }}
    >
      {picking && (
        <EmblemPicker value={emblem} onChange={setChosen} taken={taken} disabled={disabled} />
      )}
      <div className="row">
        <input
          className="input grow"
          value={name}
          maxLength={16}
          onChange={(e) => setName(e.target.value)}
          placeholder={t('lobby.addPlaceholder')}
          disabled={disabled}
          autoComplete="off"
        />
        <button className="btn" disabled={disabled || !name.trim()}>
          {t('lobby.add')}
        </button>
      </div>
    </form>
  );
}

export function LobbyHint({ count }) {
  const { t } = useT();
  if (count < MIN_PLAYERS)
    return <p className="hint center">{t('lobby.needMore', { count: MIN_PLAYERS - count })}</p>;
  if (count >= MAX_PLAYERS) return <p className="hint center">{t('lobby.full')}</p>;
  return <p className="hint center">{t('lobby.count', { count })}</p>;
}

/**
 * The twelve emblems as one radio group. `taken` stay visible but cannot be
 * picked, so no two people at the table share a mark.
 */
export function EmblemPicker({ value, onChange, taken = [], disabled }) {
  const { t } = useT();
  return (
    <fieldset className="emblem-picker" disabled={disabled}>
      <legend className="hint">{t('lobby.emblem')}</legend>
      {EMBLEMS.map((e) => {
        const gone = taken.includes(e.id);
        return (
          <label
            key={e.id}
            className={`emblem-choice${gone ? ' taken' : ''}`}
            style={{ '--emblem': e.colour }}
            title={t(`emblem.${e.id}`)}
          >
            <input
              type="radio"
              name="emblem"
              value={e.id}
              checked={value === e.id}
              disabled={gone}
              onChange={() => onChange(e.id)}
            />
            <EmblemIcon id={e.id} />
            <span className="sr-only">{t(`emblem.${e.id}`)}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
