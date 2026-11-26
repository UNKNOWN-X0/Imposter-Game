/**
 * Reading one community pack file (src/content/words/community/<lang>/*.json).
 *
 * Kept apart from community.js, which finds the files through Vite, so the
 * tests and the add tool can read a pack in Node. A file is treated like a
 * code from a stranger: anything that is not a pack comes back null.
 */

import { PACK_LIMITS, parsePairs } from './custom.js';

/** The longest credit a pack can carry. */
export const CREDIT_MAX = 40;

const clean = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();

/**
 * @param data  the parsed JSON
 * @param lang  the folder it sits in
 * @param slug  its file name without .json
 */
export function readCommunityPack(data, lang, slug) {
  if (!data || typeof data !== 'object' || !Array.isArray(data.words)) return null;
  const name = clean(data.name).slice(0, PACK_LIMITS.name);
  if (!name) return null;
  const { pairs, skipped } = parsePairs(data.words.map(String).join('\n'));
  if (pairs.length < PACK_LIMITS.minPairs) return null;
  return {
    id: `community:${lang}/${slug}`,
    name,
    emoji: clean(data.emoji).slice(0, 4) || '✏️',
    lang,
    hint: name,
    by: clean(data.by).slice(0, CREDIT_MAX) || null,
    community: true,
    pairs: pairs.slice(0, PACK_LIMITS.pairs),
    skipped,
  };
}

/** A file name for a pack: its name in plain letters, or a short hash. */
export function slugFor(name) {
  const ascii = clean(name)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  if (ascii.length >= 3) return ascii.slice(0, 40);
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.codePointAt(0)) >>> 0;
  return `pack-${h.toString(36)}`;
}
