/**
 * Writing a pack, and passing it on.
 *
 * The best words at any table are the ones nobody else could have written —
 * the road they live on, the bar they argue about, the thing their friend
 * says too often. This is where those get in.
 *
 * Paste a list, watch it be understood line by line, save it. A pack is kept
 * on the device that wrote it, and travels to anybody else as one long code
 * they paste into the same box.
 *
 * Laid out like the game settings: the word box is on the page, because that
 * is the work, and everything else (name and icon, the AI prompt, sharing,
 * loading a code, deleting) is a row that opens a sheet.
 */

import { useMemo, useState } from 'react';
import { lintPack } from '../../content/words/lint.js';

import {
  buildPack,
  decodePack,
  encodePack,
  parsePairs,
  toText,
  PACK_LIMITS,
} from '../../content/words/custom.js';
import { WORD_LANGUAGES } from '../../content/words/index.js';
import { useT, useErrorText } from '../../i18n/index.jsx';
import { CheckIcon, CopyIcon, SparklesIcon } from '../../ui/icons/index.jsx';
import { Banner } from '../../ui/primitives/index.js';
import { Sheet, SettingRow } from '../../ui/primitives/Sheet.jsx';
import { AiPrompt } from './AiPrompt.jsx';

const EMOJI = ['✏️', '🏠', '💼', '🎬', '🎵', '🍜', '⚽️', '🐈', '🌏', '🎉', '💀', '🧠'];

/**
 * @param pack     the pack being edited, or null for a new one
 * @param lang     the word language it will belong to
 * @param onSave   called with a finished pack
 * @param onDelete called with the id of a pack being thrown away
 */
export default function PackEditor({ pack, lang, onSave, onDelete, onClose }) {
  const { t } = useT();
  const errorText = useErrorText();
  const [name, setName] = useState(pack?.name ?? '');
  const [emoji, setEmoji] = useState(pack?.emoji ?? EMOJI[0]);
  const [text, setText] = useState(pack ? toText(pack.pairs) : '');
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);
  const [note, setNote] = useState(null);
  const [shareCode, setShareCode] = useState(null);
  const [copied, setCopied] = useState(false);
  // Which sheet is up: 'name', 'ai', 'share', 'load' or 'delete'.
  const [sheet, setSheet] = useState(null);
  // While a sheet is up its error shows inside it, where the eye is; the
  // page's banner is behind the sheet.
  const closeSheet = () => {
    setSheet(null);
    setError(null);
  };

  // Re-read on every keystroke: the whole point is watching the list turn
  // into a pack as it is pasted, rather than finding out on save.
  const { pairs, skipped, notes, lines } = useMemo(() => parsePairs(text), [text]);
  /**
   * Pairs that parse but would not play.
   *
   * A near miss that is the word, or the same word with an ending on it,
   * reads perfectly well in a list and ends a round before the first clue.
   * These are warnings rather than refusals: it is somebody's pack, and they
   * may know something the rules do not.
   */
  const warnings = useMemo(() => {
    // The lint counts pairs; somebody reading the box counts lines. Blank
    // lines, notes and skipped lines make those two numbers drift apart.
    const line = (n) => lines[n - 1] ?? n;
    const linted = lintPack({ lang, hint: name, pairs }).map((w) => ({
      ...w,
      at: line(w.at),
      ...(w.alsoAt !== undefined && { alsoAt: line(w.alsoAt) }),
    }));
    return [...notes, ...linted].sort((a, b) => a.at - b.at);
  }, [lang, name, pairs, notes, lines]);
  const withMiss = pairs.filter((p) => p.decoy).length;
  const langName = WORD_LANGUAGES.find((l) => l.id === lang)?.label ?? lang;

  const save = () => {
    const built = buildPack({ id: pack?.id, name, emoji, lang, text });
    if (built.error) {
      setError({ code: built.error, params: built.params });
      return;
    }
    onSave(built.pack);
  };

  const load = () => {
    const loaded = decodePack(code);
    if (!loaded) {
      setError({ code: 'packBadCode' });
      return;
    }
    // Fill the form rather than saving straight away: somebody pasting a
    // code from a friend should see what they are about to keep.
    setName(loaded.name);
    setEmoji(loaded.emoji);
    setText(toText(loaded.pairs));
    setCode('');
    setError(null);
    closeSheet();
    setNote(t('packs.loaded', { name: loaded.name, count: loaded.pairs.length }));
  };

  const share = async () => {
    const built = buildPack({ id: pack?.id, name, emoji, lang, text });
    if (built.error) {
      setError({ code: built.error, params: built.params });
      return;
    }
    const value = encodePack(built.pack);
    setShareCode(value);
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* no clipboard — the code is on screen to copy by hand */
    }
  };

  return (
    <div className="stack">
      <div className="stack tight">
        <h1 className="title">{pack ? t('packs.edit') : t('packs.new')}</h1>
        <p className="hint">{t('packs.langNote', { lang: langName })}</p>
      </div>

      {error && !sheet && <div className="banner error">{errorText(error)}</div>}
      {note && <div className="banner">{note}</div>}

      <section className="settings-group">
        <h2 className="settings-group-title">{t('packs.name')}</h2>
        <div className="setting-list">
          <SettingRow
            icon={<span className="pack-row-emoji" aria-hidden="true">{emoji}</span>}
            title={name.trim() || <span className="setting-row-empty">{t('packs.namePlaceholder')}</span>}
            value={t('packs.nameRow')}
            onOpen={() => setSheet('name')}
          />
        </div>
      </section>

      <section className="settings-group stack tight">
        <h2 className="settings-group-title">{t('packs.words')}</h2>
        <p className="hint">{t('packs.wordsHelp')}</p>
        <div className="setting-list">
          <SettingRow
            icon={<SparklesIcon size={22} />}
            title={t('packs.ai.title')}
            value={t('packs.ai.summary')}
            onOpen={() => setSheet('ai')}
          />
        </div>
        <textarea
          className="input words"
          value={text}
          rows={10}
          onChange={(e) => setText(e.target.value)}
          placeholder={t('packs.wordsPlaceholder')}
          spellCheck="false"
          autoCapitalize="none"
        />
        <div className="row wrap counts">
          <span className={`tag${pairs.length >= PACK_LIMITS.minPairs ? ' crew' : ''}`}>
            {t('packs.count', { count: pairs.length })}
          </span>
          {withMiss > 0 && <span className="tag">{t('packs.withMiss', { count: withMiss })}</span>}
          {skipped.length > 0 && (
            <span className="tag imposter">{t('packs.skipped', { count: skipped.length })}</span>
          )}
          {warnings.length > 0 && (
            <span className="tag">{t('packs.warned', { count: warnings.length })}</span>
          )}
        </div>
        {/* Every finding, in line order, so a long paste can be fixed from
            top to bottom. Skipped lines quote what was typed, because that
            text is not in the pack any more. */}
        {skipped.length + warnings.length > 0 && (
          <ol className="pack-findings">
            {[
              ...skipped.map((f) => ({ ...f, kind: 'skipped' })),
              ...warnings.map((f) => ({ ...f, kind: 'warn' })),
            ]
              .sort((a, b) => a.at - b.at)
              .map((f) => (
                <li key={`${f.kind}-${f.at}-${f.why}`} className={f.kind}>
                  {t(`packs.${f.kind}.${f.why}`, f)}
                  {f.kind === 'skipped' && <q className="pack-finding-line">{f.line}</q>}
                </li>
              ))}
          </ol>
        )}
      </section>

      <button className="btn primary block lg" onClick={save}>
        {t('packs.save')}
      </button>

      <section className="settings-group">
        <h2 className="settings-group-title">{t('packs.shareSection')}</h2>
        <div className="setting-list">
          <SettingRow
            title={t('packs.shareTitle')}
            value={t('packs.shareBody')}
            onOpen={() => {
              setShareCode(null);
              setSheet('share');
              share();
            }}
          />
          <SettingRow title={t('packs.load')} value={t('packs.loadPlaceholder')} onOpen={() => setSheet('load')} />
        </div>
      </section>

      {pack && onDelete && (
        <div className="setting-list">
          <SettingRow danger title={t('packs.delete')} onOpen={() => setSheet('delete')} />
        </div>
      )}

      {sheet === 'name' && (
        <Sheet label={t('packs.name')} title={t('packs.name')} doneLabel={t('lobby.done')} onClose={closeSheet}>
          <input
            className="input"
            value={name}
            maxLength={PACK_LIMITS.name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('packs.namePlaceholder')}
            aria-label={t('packs.name')}
            autoComplete="off"
          />
          <span className="field-label">{t('packs.emoji')}</span>
          <div className="emoji-grid">
            {EMOJI.map((option) => (
              <button
                key={option}
                className="emoji-pick"
                aria-pressed={emoji === option}
                aria-label={option}
                onClick={() => setEmoji(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </Sheet>
      )}

      {sheet === 'ai' && (
        <Sheet label={t('packs.ai.title')} title={t('packs.ai.title')} doneLabel={t('lobby.done')} onClose={closeSheet}>
          <AiPrompt topic={name} langName={langName} />
        </Sheet>
      )}

      {sheet === 'share' && (
        <Sheet label={t('packs.shareTitle')} title={t('packs.shareTitle')} doneLabel={t('lobby.done')} onClose={closeSheet}>
          <p className="hint">{t('packs.shareBody')}</p>
          {error && <Banner kind="error">{errorText(error)}</Banner>}
          {shareCode && (
            <>
              <textarea className="input words code-out" value={shareCode} rows={3} readOnly />
              <button className="btn block" onClick={share}>
                {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}{' '}
                {copied ? t('common.copied') : t('common.copy')}
              </button>
            </>
          )}
        </Sheet>
      )}

      {sheet === 'load' && (
        <Sheet label={t('packs.load')} title={t('packs.load')} doneLabel={t('common.cancel')} onClose={closeSheet}>
          {error && <Banner kind="error">{errorText(error)}</Banner>}
          <div className="row">
            <input
              className="input grow"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={t('packs.loadPlaceholder')}
              aria-label={t('packs.load')}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck="false"
            />
            <button className="btn" disabled={!code.trim()} onClick={load}>
              {t('packs.loadButton')}
            </button>
          </div>
        </Sheet>
      )}

      {sheet === 'delete' && (
        <Sheet label={t('packs.deleteSure')} title={t('packs.deleteSure')} doneLabel={t('common.cancel')} onClose={closeSheet}>
          <button className="btn danger block" onClick={() => onDelete(pack.id)}>
            {t('packs.delete')}
          </button>
        </Sheet>
      )}

      <button className="btn-link" onClick={onClose}>
        {t('common.back')}
      </button>
    </div>
  );
}
