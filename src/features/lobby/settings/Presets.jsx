/**
 * The ways a table usually wants to play, as one row of buttons: Standard
 * (the game as it comes), Quick, Careful and Chaos.
 *
 * It sits above the sections rather than replacing them: tapping one sets
 * several of them at once, and changing anything afterwards leaves no chip
 * pressed and the line under the row saying "Yours". Nothing is hidden and
 * nothing is locked; somebody who wants to read every section still can.
 */

import { Segmented } from '../../../ui/primitives/index.js';
import { PRESETS, presetFor } from '../presets.js';

export function Presets({ t, config, onChange, disabled }) {
  const current = presetFor(config);

  return (
    <div className="setting">
      <h3 className="settings-group-title">{t('settings.preset')}</h3>
      <Segmented wide>
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            aria-pressed={current === preset.id}
            disabled={disabled}
            onClick={() => onChange({ ...preset.config })}
          >
            {t(`settings.preset.${preset.id}`)}
          </button>
        ))}
      </Segmented>
      {/* When the settings below match no preset, the line says so. It was a
          disabled fifth chip, which said the same thing but wrapped onto a
          second row in Thai and German once Standard joined the row (#55). */}
      <p className="hint" aria-live="polite">
        {current
          ? t(`settings.preset.${current}Hint`)
          : `${t('settings.preset.custom')}: ${t('settings.preset.customHint')}`}
      </p>
    </div>
  );
}
