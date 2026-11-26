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
import { CheckIcon, CopyIcon } from '../../ui/icons/index.jsx';
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
  const [confirmDelete, setConfirmDelete] = useState(false);

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

      {error && <div className="banner error">{errorText(error)}</div>}
      {note && <div className="banner">{note}</div>}

      <section className="settings-group">
        <label className="stack tight">
          <h2 className="settings-group-title">{t('packs.name')}</h2>
          <input
            className="input"
            value={name}
            maxLength={PACK_LIMITS.name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('packs.namePlaceholder')}
            autoComplete="off"
          />
        </label>

        <div className="stack tight">
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
        </div>
      </section>

      <section className="settings-group stack tight">
        <h2 className="settings-group-title">{t('packs.words')}</h2>
        <p className="hint">{t('packs.wordsHelp')}</p>
        <AiPrompt topic={name} langName={langName} />
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

      <section className="settings-group stack">
        <h2 className="settings-group-title">{t('packs.shareSection')}</h2>
        <div className="stack tight">
          <span className="field-label">{t('packs.shareTitle')}</span>
          <p className="hint">{t('packs.shareBody')}</p>
          {shareCode ? (
            <>
              <textarea className="input words code-out" value={shareCode} rows={3} readOnly />
              <button className="btn block" onClick={share}>
                {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}{' '}
                {copied ? t('common.copied') : t('common.copy')}
              </button>
            </>
          ) : (
            <button className="btn block" onClick={share}>
              {t('packs.share')}
            </button>
          )}
        </div>
        <div className="stack tight">
          <span className="field-label">{t('packs.load')}</span>
          <div className="row">
            <input
              className="input grow"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={t('packs.loadPlaceholder')}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck="false"
            />
            <button className="btn" disabled={!code.trim()} onClick={load}>
              {t('packs.loadButton')}
            </button>
          </div>
        </div>
      </section>

      {pack && onDelete && (
        <div className="center stack tight">
          {confirmDelete ? (
            <>
              <p className="hint">{t('packs.deleteSure')}</p>
              <div className="row" style={{ justifyContent: 'center' }}>
                <button className="btn danger sm" onClick={() => onDelete(pack.id)}>
                  {t('packs.delete')}
                </button>
                <button className="btn sm ghost" onClick={() => setConfirmDelete(false)}>
                  {t('common.cancel')}
                </button>
              </div>
            </>
          ) : (
            <button className="btn-link" onClick={() => setConfirmDelete(true)}>
              {t('packs.delete')}
            </button>
          )}
        </div>
      )}

      <button className="btn-link" onClick={onClose}>
        {t('common.back')}
      </button>
    </div>
  );
}
