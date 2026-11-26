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

import { useEffect, useMemo, useState } from 'react';

import { packsFor, WORD_LANGUAGES } from '../../content/words/index.js';
import { PACK_LIMITS, buildPack } from '../../content/words/custom.js';
import { SHARE_URL, loadCommunity } from '../../content/words/community.js';
import { useWords } from './useWords.js';
import { useT } from '../../i18n/index.jsx';
import { CopyIcon, CheckIcon, GlobeIcon, PencilIcon, PlusIcon } from '../../ui/icons/index.jsx';
import { Segmented } from '../../ui/primitives/index.js';
import { Sheet, SettingRow } from '../../ui/primitives/Sheet.jsx';
import { matchAt, shelfFor } from './search.js';

export default function PackLibrary({
  lang: initialLang,
  customPacks = [],
  onEdit,
  onAdd,
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
  // The packs players shared for everybody, shipped with the site and read
  // the first time this language is opened.
  const [community, setCommunity] = useState([]);
  useEffect(() => {
    let live = true;
    setCommunity([]);
    loadCommunity(lang).then((list) => live && setCommunity(list));
    return () => {
      live = false;
    };
  }, [lang]);

  // A pack the table wrote comes first: it is the one somebody is here for.
  const shelf = useMemo(() => shelfFor([...packs, ...community], q), [packs, community, q]);

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
          [t('library.builtIn'), shelf.filter(({ pack }) => !pack.custom && !pack.community)],
          [t('library.community'), shelf.filter(({ pack }) => pack.community)],
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

      {/* Anybody can put a pack on the community shelf: it goes through a
          GitHub issue, and somebody reads it before it ships. */}
      {!q && (
        <section className="settings-group pack-shelf">
          {community.length === 0 && <h2 className="settings-group-title">{t('library.community')}</h2>}
          {community.length === 0 && <p className="hint">{t('library.communityEmpty')}</p>}
          <a className="hub-mode" href={SHARE_URL} target="_blank" rel="noopener noreferrer">
            <GlobeIcon size={22} />
            <span className="hub-mode-title">{t('library.communityShare')}</span>
            <span className="hub-supporting">{t('library.communityShareHint')}</span>
          </a>
        </section>
      )}

      {openRow && (
        <PackSheet
          pack={openRow.pack}
          pairs={openRow.pairs}
          query={q}
          onClose={() => setOpen(null)}
          onEdit={onEdit && openRow.pack.custom ? () => onEdit(openRow.pack.id) : null}
          customPacks={customPacks}
          onAdd={onAdd && openRow.pack.community ? onAdd : null}
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
  const yours = pack.custom
    ? ` · ${t('library.yours')}`
    : pack.by
      ? ` · ${t('library.by', { name: pack.by })}`
      : '';
  if (!query) return `${t('packs.count', { count: pack.pairs.length })}${yours}`;
  const first = pairs.slice(0, 3).map((p) => p.word).join(', ');
  const more = pairs.length > 3 ? ', …' : '';
  return `${t('library.matches', { count: pairs.length, total: pack.pairs.length })}${yours} — ${first}${more}`;
}

/** Everything in one pack, with Copy, and Edit for one the table wrote. */
function PackSheet({ pack, pairs, query, onClose, onEdit, onAdd, customPacks = [] }) {
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

  // A community pack is added as a copy the table owns and can change. One
  // already on this phone under the same name counts as added.
  const added = customPacks.some((p) => p.lang === pack.lang && p.name.toLowerCase() === pack.name.toLowerCase());
  const full = customPacks.length >= PACK_LIMITS.packs;
  const add = () => {
    const built = buildPack({ name: pack.name, emoji: pack.emoji, lang: pack.lang, pairs: pack.pairs });
    if (built.pack) onAdd(built.pack);
  };

  return (
    <Sheet label={pack.name} title={`${pack.emoji} ${pack.name}`} doneLabel={t('lobby.done')} onClose={onClose} quietDone={Boolean(onAdd)}>
      <p className="hint">
        {query
          ? t('library.matches', { count: pairs.length, total: pack.pairs.length })
          : t('packs.count', { count: pack.pairs.length })}
        {' · '}
        {t('library.hintLine', { hint: pack.hint })}
        {pack.by && ` · ${t('library.by', { name: pack.by })}`}
      </p>
      {onAdd && (
        <>
          <button className="btn primary block" disabled={added || full} onClick={add}>
            {added ? <CheckIcon size={16} /> : <PlusIcon size={16} />}{' '}
            {added ? t('library.added') : t('library.add')}
          </button>
          {full && !added && <p className="hint">{t('errors.packTooMany')}</p>}
        </>
      )}
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
