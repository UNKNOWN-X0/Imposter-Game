/**
 * Choosing the language the buttons are in.
 */

import { useState } from 'react';
import { CheckIcon, GlobeIcon } from '../ui/icons/index.jsx';
import { Sheet, SettingRow } from '../ui/primitives/Sheet.jsx';
import { LANGUAGES, useT } from './index.jsx';

/**
 * Three languages, as a card of rows in the settings' style (#84): the
 * flag, the language's own name, its name in the language on screen now,
 * and a tick. Choosing one switches at once and closes the sheet.
 */
export function LanguagePicker() {
  const { lang, setLang, t } = useT();
  const current = LANGUAGES.find((l) => l.id === lang) ?? LANGUAGES[0];
  const [open, setOpen] = useState(false);

  return (
    <div className="pickerwrap">
      <button
        className="langpicker"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        title={t('common.language')}
      >
        <GlobeIcon size={16} anim={open} />
        <span className="sr-only">{t('common.language')}</span>
        <span aria-hidden="true">{current.short}</span>
      </button>

      {open && (
        <Sheet label={t('common.language')} title={t('common.language')} doneLabel={t('lobby.done')} onClose={() => setOpen(false)}>
          <div className="setting-list">
            {LANGUAGES.map((l) => (
              <SettingRow
                key={l.id}
                icon={<span className="lang-flag" aria-hidden="true">{l.flag}</span>}
                title={<span lang={l.id}>{l.label}</span>}
                value={t(`language.${l.id}`)}
                pressed={l.id === lang}
                end={<span className="choice-check" aria-hidden="true">{l.id === lang && <CheckIcon size={14} />}</span>}
                onOpen={() => {
                  setLang(l.id);
                  setOpen(false);
                }}
              />
            ))}
          </div>
        </Sheet>
      )}
    </div>
  );
}
