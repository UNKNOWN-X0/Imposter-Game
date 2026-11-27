/**
 * Choosing how the game looks.
 */

import { useState } from 'react';
import { CheckIcon, ContrastIcon } from '../icons/index.jsx';
import { MODES, THEMES, useTheme } from './index.jsx';
import { useT } from '../../i18n/index.jsx';
import { Sheet, SettingRow } from '../primitives/Sheet.jsx';
import { OnOff } from '../primitives/Choices.jsx';
import { play, setSoundEnabled } from '../sound/index.js';
import { loadSound, saveSound } from '../sound/store.js';

/**
 * Light, dark or whatever the phone says, and which wood (#84).
 *
 * Both live on this device and are remembered here. They are deliberately not
 * game settings: the host does not get to decide what everyone else's screen
 * looks like, and a phone that goes dark at sunset should take its owner's
 * game with it without asking anybody.
 *
 * The previews are drawn with the real tokens: a preview box carries its own
 * data-theme and data-mode, and tokens.css scopes the palettes to those
 * attributes, so every swatch is the wood it names, nothing copied by hand.
 */
export function ThemePicker() {
  const { t } = useT();
  const { mode, resolved, theme, setMode, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  // Sound lives here with the other choices for this phone (#118), as a
  // switch: a third button in the top bar pushed it onto two rows.
  const [sound, setSound] = useState(loadSound);
  const switchSound = (on) => {
    setSound(on);
    saveSound(on);
    setSoundEnabled(on);
    // Turning it on plays a soft tick: the tap a browser needs before a
    // page may make any sound, and proof that it works.
    if (on) play('turn');
  };

  return (
    <div className="pickerwrap">
      <button
        className="iconpicker"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        title={t('display.title')}
      >
        <ContrastIcon size={17} anim={open} />
        <span className="sr-only">{t('display.title')}</span>
      </button>

      {open && (
        <Sheet label={t('display.title')} title={t('display.title')} doneLabel={t('lobby.done')} onClose={() => setOpen(false)}>
          <h3 className="display-heading">{t('display.appearance')}</h3>
          <div className="mode-grid">
            {MODES.map((id) => (
              <button key={id} type="button" className="mode-card" aria-pressed={mode === id} onClick={() => setMode(id)}>
                <span className={`mode-preview ${id}`} aria-hidden="true">
                  {(id === 'system' ? ['light', 'dark'] : [id]).map((m) => (
                    <span key={m} className="mode-half" data-theme={theme} data-mode={m}>
                      <span className="mode-line" />
                      <span className="mode-line short" />
                      <span className="mode-dot" />
                    </span>
                  ))}
                </span>
                <span className="mode-name">{t(`display.mode.${id}`)}</span>
                <span className="choice-check" aria-hidden="true">{mode === id && <CheckIcon size={14} />}</span>
              </button>
            ))}
          </div>
          <p className="hint">{mode === 'system' ? t('display.followsPhone') : t('display.fixedHere')}</p>

          <div className="setting-list display-sound">
            <SettingRow
              title={t('sound.title')}
              value={t('sound.hint')}
              control={<OnOff value={sound} label={t('sound.title')} onChange={switchSound} />}
            />
          </div>

          <h3 className="display-heading">{t('display.theme')}</h3>
          <div className="wood-grid">
            {THEMES.map((option) => (
              <button
                key={option.id}
                type="button"
                className="wood-card"
                aria-pressed={theme === option.id}
                onClick={() => setTheme(option.id)}
              >
                <span className="wood-preview" data-theme={option.id} data-mode={resolved} aria-hidden="true">
                  <span className="wood-plank" />
                  <span className="wood-accent" />
                </span>
                <span className="wood-name">{t(`theme.${option.id}`)}</span>
                <span className="choice-check" aria-hidden="true">{theme === option.id && <CheckIcon size={14} />}</span>
              </button>
            ))}
          </div>
        </Sheet>
      )}
    </div>
  );
}
