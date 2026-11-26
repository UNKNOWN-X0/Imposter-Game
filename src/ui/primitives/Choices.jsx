/**
 * Choosing one of a few things (#97). These replaced the sliding pill.
 *
 * - `OptionList`: a card of rows for choices that mean something, each with
 *   its name, a line saying what it does, and a tick. The row explains
 *   itself, so these need no ⓘ list of the options.
 * - `NumberTiles`: a row of square tiles for a number (rounds, imposters,
 *   seconds), the chosen one bordered in the accent with a tick.
 * - `OnOff`: the switch, for a setting that is on or off.
 *
 * Each option is `{ value, label, description?, icon?, disabled?, title? }`.
 * A disabled option stays visible, dimmed, with `title` saying why.
 */

import { useT } from '../../i18n/index.jsx';
import { CheckIcon } from '../icons/index.jsx';
import { SettingRow } from './Sheet.jsx';

const Tick = ({ on }) => (
  <span className="choice-check" aria-hidden="true">
    {on && <CheckIcon size={14} />}
  </span>
);

export function OptionList({ options, value, onChange, disabled }) {
  return (
    <div className="setting-list option-list">
      {options.map((o) => (
        <SettingRow
          key={String(o.value)}
          icon={o.icon}
          title={o.label}
          value={o.description}
          pressed={value === o.value}
          disabled={disabled || o.disabled}
          end={<Tick on={value === o.value} />}
          onOpen={() => onChange(o.value)}
        />
      ))}
    </div>
  );
}

export function NumberTiles({ options, value, onChange, disabled, label }) {
  return (
    <div className="number-tiles" role="group" aria-label={label}>
      {options.map((o) => (
        <button
          key={String(o.value)}
          type="button"
          className="number-tile"
          aria-pressed={value === o.value}
          aria-label={o.title}
          title={o.title}
          disabled={disabled || o.disabled}
          onClick={() => onChange(o.value)}
        >
          <span className="number-tile-label">{o.label}</span>
          <Tick on={value === o.value} />
        </button>
      ))}
    </div>
  );
}

export function OnOff({ value, onChange, disabled, label }) {
  const { t } = useT();
  return (
    <button
      type="button"
      role="switch"
      className="switch"
      aria-checked={!!value}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!value)}
    >
      <span className="switch-track" aria-hidden="true"><span className="switch-thumb" /></span>
      <span className="switch-state">{value ? t('settings.on') : t('settings.off')}</span>
    </button>
  );
}
