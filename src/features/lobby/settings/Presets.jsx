/**
 * How the table wants to play tonight: four cards (Standard, Quick, Careful,
 * Chaos), each with an icon, its name and what that evening is like.
 *
 * A card sets several settings at once. Changing any of them afterwards
 * leaves no card chosen and shows a fifth, "Your own rules", naming the
 * preset the table is closest to and how much it changed (#83). Nothing is
 * hidden and nothing is locked: every setting is still in the rows below.
 */

import { ArmchairIcon, BrainIcon, CheckIcon, SlidersIcon, TornadoIcon, ZapIcon } from '../../../ui/icons/index.jsx';
import { PRESETS, closestPreset, presetFor } from '../presets.js';

const ICONS = { standard: ArmchairIcon, quick: ZapIcon, careful: BrainIcon, chaos: TornadoIcon };

export function Presets({ t, config, onChange, disabled }) {
  const current = presetFor(config);
  const near = current ? null : closestPreset(config);

  return (
    <div className="setting presets">
      <h3 className="settings-group-title">{t('settings.preset')}</h3>
      <div className="preset-grid">
        {PRESETS.map((preset) => {
          const Icon = ICONS[preset.id];
          return (
            <button
              key={preset.id}
              type="button"
              className="preset-card"
              aria-pressed={current === preset.id}
              disabled={disabled}
              onClick={() => onChange({ ...preset.config })}
            >
              {Icon && <Icon size={22} />}
              <span className="preset-name">{t(`settings.preset.${preset.id}`)}</span>
              <span className="preset-line">{t(`settings.preset.${preset.id}Short`)}</span>
              <span className="choice-check" aria-hidden="true">
                {current === preset.id && <CheckIcon size={14} />}
              </span>
            </button>
          );
        })}
        {near && (
          <div className="preset-card yours" aria-current="true">
            <SlidersIcon size={22} />
            <span className="preset-name">{t('settings.preset.yours')}</span>
            <span className="preset-line">
              {t('settings.preset.yoursLine', { name: t(`settings.preset.${near.id}`), count: near.changed })}
            </span>
            <span className="choice-check on" aria-hidden="true">
              <CheckIcon size={14} />
            </span>
          </div>
        )}
      </div>
      {/* The whole of what the chosen preset sets, said once under the cards. */}
      <p className="hint" aria-live="polite">
        {current ? t(`settings.preset.${current}Hint`) : ''}
      </p>
    </div>
  );
}
