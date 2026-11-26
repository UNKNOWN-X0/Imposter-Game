/**
 * Every pack, and what is in it.
 *
 * Until now a pack was a name on a chip: you turned ✈️ Travel & Transport on
 * without ever seeing that it holds "Aeroplane → Helicopter". That is fine
 * until somebody asks whether a word is in there, or whether two packs say
 * the same thing, or wants to copy ours as a starting point for theirs.
 *
 * So: a shelf of every pack for one word language, laid out like the game
 * settings. Each pack is a row (emoji, name, how many words) and tapping it
 * opens a sheet with every word in it, Copy, and Edit for the table's own.
 * A search across all of them turns each row's second line into what matched.
 * The table's own packs sit on their own shelf above the built-in ones.
 *
 * It does not select packs for a game. Choosing what to deal from belongs
 * with the other settings, next to the count of how many words that leaves.
 */

import { useMemo, useState } from 'react';

import { packsFor, WORD_LANGUAGES } from '../../content/words/index.js';
import { useWords } from './useWords.js';
import { useT } from '../../i18n/index.jsx';
import { CopyIcon, CheckIcon, PencilIcon, PlusIcon } from '../../ui/icons/index.jsx';
import { Segmented } from '../../ui/primitives/index.js';
import { Sheet, SettingRow } from '../../ui/primitives/Sheet.jsx';
import { matchAt, shelfFor } from './search.js';

export default function PackLibrary({
  lang: initialLang,
  customPacks = [],
  onEdit,
  onLang,
  onClose,
}) {
  const { t } = useT();
  const [lang, setLang] = useState(initialLang);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(null);
  const [picking, setPicking] = useState(false);

  const q = query.trim().toLowerCase();
  // Fetched per language, so switching the tab at the top of the shelf may
  // mean waiting a moment the first time. `haveWords` is in the dependencies
  // so the shelf redraws itself once they land.
  const haveWords = useWords(lang);
  const packs = useMemo(() => packsFor(lang, customPacks), [lang, customPacks, haveWords]);

  // A pack the table wrote comes first: it is the one somebody is here for.
  const shelf = useMemo(() => shelfFor(packs, q), [packs, q]);

  const total = packs.reduce((n, pack) => n + pack.pairs.length, 0);
  const found = shelf.reduce((n, { pairs }) => n + pairs.length, 0);
  const openRow = shelf.find(({ pack }) => pack.id === open);

  return (
    <div className="stack">
      <div className="stack tight">
        <h1 className="title">{t('library.title')}</h1>
        <p className="subtitle">
          {q
            ? t('library.found', { count: found })
            : t('library.total', { count: total, packs: packs.length })}
        </p>
      </div>

      {/* The same row the game settings use for the word language. */}
      <div className="setting-list">
        <SettingRow
          title={t('settings.wordLang')}
          value={(() => {
            const l = WORD_LANGUAGES.find((x) => x.id === lang);
            return l ? `${l.flag} ${l.label}` : lang;
          })()}
          onOpen={() => setPicking(true)}
        />
      </div>
      {picking && (
        <Sheet label={t('settings.wordLang')} title={t('settings.wordLang')} doneLabel={t('lobby.done')} onClose={() => setPicking(false)}>
          <Segmented wide>
            {WORD_LANGUAGES.map((l) => (
              <button
                key={l.id}
                aria-pressed={lang === l.id}
                onClick={() => {
                  setLang(l.id);
                  setOpen(null);
                  onLang?.(l.id);
                }}
              >
                <span aria-hidden="true">{l.flag}</span> {l.label}
              </button>
            ))}
          </Segmented>
        </Sheet>
      )}

      <input
        className="input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t('library.search')}
        type="search"
        autoComplete="off"
        autoCapitalize="none"
        spellCheck="false"
      />

      {/* The same card as the hub's ways to play: writing a pack is a thing
          to do, not one more grey button. */}
      {onEdit && (
        <button type="button" className="hub-mode" onClick={() => onEdit(null)}>
          <PlusIcon size={22} />
          <span className="hub-mode-title">{t('packs.add')}</span>
          <span className="hub-supporting">{t('library.addHint')}</span>
        </button>
      )}

      {shelf.length === 0 ? (
        <p className="hint center">{t('library.nothing', { query: query.trim() })}</p>
      ) : (
        // While searching it is one list of matches; otherwise the table's
        // own packs get their own heading above the built-in ones.
        (q ? [[null, shelf]] : [
          [t('library.yourPacks'), shelf.filter(({ pack }) => pack.custom)],
          [t('library.builtIn'), shelf.filter(({ pack }) => !pack.custom)],
        ]).filter(([, rows]) => rows.length > 0).map(([heading, rows]) => (
          <section className="settings-group pack-shelf" key={heading ?? 'found'}>
            {heading && <h2 className="settings-group-title">{heading}</h2>}
            <div className="setting-list">
              {rows.map(({ pack, pairs }) => (
                <SettingRow
                  key={pack.id}
                  icon={<span className="pack-row-emoji" aria-hidden="true">{pack.emoji}</span>}
                  title={pack.name}
                  value={rowLine(t, pack, pairs, q)}
                  onOpen={() => setOpen(pack.id)}
                />
              ))}
            </div>
          </section>
        ))
      )}

      {openRow && (
        <PackSheet
          pack={openRow.pack}
          pairs={openRow.pairs}
          query={q}
          onClose={() => setOpen(null)}
          onEdit={onEdit && openRow.pack.custom ? () => onEdit(openRow.pack.id) : null}
        />
      )}

      <p className="hint center">{t('library.note')}</p>

      <button className="btn-link" onClick={onClose}>
        {t('common.back')}
      </button>
    </div>
  );
}

/** A pack's second line: how many words, or, while searching, what matched. */
function rowLine(t, pack, pairs, query) {
  const yours = pack.custom ? ` · ${t('library.yours')}` : '';
  if (!query) return `${t('packs.count', { count: pack.pairs.length })}${yours}`;
  const first = pairs.slice(0, 3).map((p) => p.word).join(', ');
  const more = pairs.length > 3 ? ', …' : '';
  return `${t('library.matches', { count: pairs.length, total: pack.pairs.length })}${yours} — ${first}${more}`;
}

/** Everything in one pack, with Copy, and Edit for one the table wrote. */
function PackSheet({ pack, pairs, query, onClose, onEdit }) {
  const { t } = useT();
  const [copied, setCopied] = useState(false);
  const [fallback, setFallback] = useState(null);

  const asList = () => pack.pairs.map((p) => (p.decoy ? `${p.word}, ${p.decoy}` : p.word)).join('\n');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(asList());
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // No clipboard on this phone: put the list where it can be selected.
      setFallback(asList());
    }
  };

  return (
    <Sheet label={pack.name} title={`${pack.emoji} ${pack.name}`} doneLabel={t('lobby.done')} onClose={onClose}>
      <p className="hint">
        {query
          ? t('library.matches', { count: pairs.length, total: pack.pairs.length })
          : t('packs.count', { count: pack.pairs.length })}
        {' · '}
        {t('library.hintLine', { hint: pack.hint })}
      </p>
      <ul className="word-list">
        {pairs.map((pair) => (
          <li key={pair.word}>
            <Marked text={pair.word} query={query} />
            {pair.decoy && (
              <>
                <span className="to" aria-hidden="true">
                  →
                </span>
                <span className="decoy">
                  <Marked text={pair.decoy} query={query} />
                </span>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="row wrap">
        <button className="btn sm" onClick={copy}>
          {copied ? <CheckIcon size={15} /> : <CopyIcon size={15} />}{' '}
          {copied ? t('common.copied') : t('library.copy')}
        </button>
        {onEdit && (
          <button className="btn sm" onClick={onEdit}>
            <PencilIcon size={15} /> {t('packs.edit')}
          </button>
        )}
      </div>
      {fallback && <textarea className="input words code-out" value={fallback} rows={5} readOnly />}
    </Sheet>
  );
}

/** The part of a word that matched, marked so the eye lands on it. */
function Marked({ text, query }) {
  const at = matchAt(text, query);
  if (at < 0) return text;
  return (
    <>
      {text.slice(0, at)}
      <mark>{text.slice(at, at + query.length)}</mark>
      {text.slice(at + query.length)}
    </>
  );
}
