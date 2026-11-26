/**
 * The packs players shared for everybody, as the site sees them.
 *
 * They live in the repository (./community/<lang>/*.json), go in through a
 * reviewed pull request, and ship with the site, so reading them is a fetch
 * of our own files: nothing is asked of GitHub while anybody plays. Each
 * language is loaded the first time the library opens it.
 */

import { readCommunityPack } from './community-pack.js';

/** Where somebody shares a pack: the issue form, with their code filled in. */
export const SHARE_URL = 'https://github.com/UNKNOWN-X0/The-Long-Table/issues/new?template=share-a-pack.yml';

export const shareLink = (code, name) =>
  SHARE_URL + '&title=' + encodeURIComponent('[Pack] ' + name) + '&code=' + encodeURIComponent(code);

const files = import.meta.glob('./community/*/*.json', { import: 'default' });
const cache = new Map();

/** Every community pack in one word language, sorted by name. */
export function loadCommunity(lang) {
  if (!cache.has(lang)) {
    const prefix = `./community/${lang}/`;
    const mine = Object.entries(files).filter(([path]) => path.startsWith(prefix));
    cache.set(
      lang,
      Promise.all(
        mine.map(async ([path, load]) =>
          readCommunityPack(await load(), lang, path.slice(prefix.length, -'.json'.length)),
        ),
      ).then((packs) => packs.filter(Boolean).sort((a, b) => a.name.localeCompare(b.name))),
    );
  }
  return cache.get(lang);
}
