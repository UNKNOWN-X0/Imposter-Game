/**
 * Settings for this phone (#129): one button in the top bar and one sheet,
 * with three sections: Display (appearance and wood), Sound, and Language.
 *
 * They used to be two buttons and two sheets, with sound tucked into the
 * display one because a third button did not fit the bar. All of it lives on
 * this device: the host never decides how anyone else's phone looks or
 * sounds, or what language it speaks.
 *
 * The display previews carry their own data-theme and data-mode, so
 * tokens.css paints each in the real palette it names (#84).
 */

import { useState } from 'react';
import { CheckIcon, SettingsIcon } from '../icons/index.jsx';
import { MODES, THEMES, useTheme } from '../theme/index.jsx';
import { LANGUAGES, useT } from '../../i18n/index.jsx';
import { Sheet, SettingRow } from '../primitives/Sheet.jsx';
import { OnOff } from '../primitives/Choices.jsx';
import { play, setSoundEnabled } from '../sound/index.js';
import { loadSound, saveSound } from '../sound/store.js';

export function AppSettings() {
  const { t, lang, setLang } = useT();
  const { mode, resolved, theme, setMode, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [sound, setSound] = useState(loadSound);
  const current = LANGUAGES.find((l) => l.id === lang) ?? LANGUAGES[0];
  const switchSound = (on) => {
    setSound(on);
    saveSound(on);
    setSoundEnabled(on);
    // Turning it on plays a soft tick: the tap a browser needs before a
    // page may make any sound, and proof that it works (#118).
    if (on) play('turn');
  };

  return (
    <div className="pickerwrap">
      <button
        className="langpicker settings-button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        title={t('app.settings')}
      >
        <SettingsIcon size={17} />
        <span className="sr-only">{t('app.settings')}</span>
        <span aria-hidden="true">{current.short}</span>
      </button>

      {open && (
        <Sheet label={t('app.settings')} title={t('app.settings')} doneLabel={t('lobby.done')} onClose={() => setOpen(false)}>
          <section className="app-settings-section" aria-labelledby="app-display">
            <h3 className="app-settings-title" id="app-display">{t('display.title')}</h3>
            <h4 className="display-heading">{t('display.appearance')}</h4>
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

            <h4 className="display-heading">{t('display.theme')}</h4>
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
          </section>

          <section className="app-settings-section" aria-labelledby="app-sound">
            <h3 className="app-settings-title" id="app-sound">{t('sound.section')}</h3>
            <div className="setting-list">
              <SettingRow
                title={t('sound.title')}
                value={t('sound.hint')}
                control={<OnOff value={sound} label={t('sound.title')} onChange={switchSound} />}
              />
            </div>
          </section>

          <section className="app-settings-section" aria-labelledby="app-language">
            <h3 className="app-settings-title" id="app-language">{t('common.language')}</h3>
            <div className="setting-list">
              {LANGUAGES.map((l) => (
                <SettingRow
                  key={l.id}
                  icon={<span className="lang-flag" aria-hidden="true">{l.flag}</span>}
                  title={<span lang={l.id}>{l.label}</span>}
                  value={t(`language.${l.id}`)}
                  pressed={l.id === lang}
                  end={<span className="choice-check" aria-hidden="true">{l.id === lang && <CheckIcon size={14} />}</span>}
                  onOpen={() => setLang(l.id)}
                />
              ))}
            </div>
          </section>
        </Sheet>
      )}
    </div>
  );
}
