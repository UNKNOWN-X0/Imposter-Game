# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** friends at a table or a party, four to ten people, phone-first: one shared phone passed around, or each on their own phone in a room on the same Wi-Fi. Often not native English speakers; the table may read the interface in English, Thai, or German and play with words from any of the three.
- **Secondary:** the same groups playing remotely through a hosted room.
- **Host:** one person sets the table up, chooses the rules and the word language, and reads the room code out. The playtest guide (`PLAYTEST.md`) measures whether a new host can do that without coaching.

## Product Purpose

A social deduction party game around secret words: everyone but the imposters is dealt the same word, players give one-word clues, and the table votes before the imposters take over. Success is a full game that starts without coaching, stays fair (nobody can learn the word or the roles from their phone), and ends with a clear winner, in any of the three languages, on a shared phone or across a room.

## Positioning

Three claims a neighbouring game could not truthfully make together (owner, 2026-11-16):

- **Secrets never leave the server.** The word, the decoy, the roles, the imposter list, and the seed never reach a phone that should not have them, votes are held until the last one is in, and tests prove it end to end. One rules engine serves both play modes, so a rule cannot behave differently on a shared phone and in a room.
- **Three languages with native word packs.** Each language's packs are written for the people who speak it (ส้มตำ and ลอยกระทง, Spätzle and Schützenfest), not translated. Interface language is a per-device choice; word language belongs to the table.
- **Playable anywhere with zero setup.** One phone and a browser link for pass-and-play; a room code for phone-to-phone; no install, and the game itself depends on nothing but React.

## Operating Context

- Played in person, loud rooms, phones held close; a phone may lock mid-round and must come back into the game. Light and dark modes, five wood themes, reduced motion, and `prefers-color-scheme` are followed because the phone's state changes during an evening.
- Pass-and-play is served as static files (Netlify); rooms need the Node server on a host that runs Node (Render, or a machine on the same Wi-Fi via `npm run party` or the desktop launchers).
- A round is remembered on the device and offered back after a reload, never restored silently; rooms are recovered from a retained file for an hour.

## Capabilities and Constraints

- Configurable imposter counts, decoy modes (including blind and hint mode), optional roles, scoring, saved rounds, room reconnection, host transfer, custom word packs that can be created, imported, and shared as codes.
- Static client plus a zero-dependency Node room server using Server-Sent Events; React and Vite are the only packages.
- Rule violations travel as codes and are rendered in each phone's language; missing strings fall back to English.
- Bug reports never contain the word, the decoy, or who was dealt what.
- **Direction (owner, 2026-11-16; current direction confirmed 2026-11-21): build one site where party groups gather around a shared table and choose a game.** Imposter is the first game. Reuse the roster, rooms, language/theme preferences, and server across games; keep each game's rules in its own pure core. The hub and every Imposter screen follow the **Joiner’s Table** direction chosen in #13: a flush, rectangular plank table with players along its long sides, readable controls, and a covered private card. The five wood themes are Birch, Oak (default), Teak, Mahogany, and Walnut, each in light and dark. Complete the redesign before starting another game. See `DESIGN.md` and `ROADMAP.md`.
- **Direction (owner, 2026-11-18): customization is a site-wide promise.** Players should be able to create, edit, import, and share their own word or prompt packs, then use them in compatible games. A shared library should support different game-specific entry shapes instead of forcing every game into Imposter's word/decoy pair. Start local-first with share codes; accounts and a public pack marketplace are not MVP requirements. See `ROADMAP.md`.

## Brand Commitments

- Made by Thanate Amornjiraporn (Focus); the game's own mark (`public/icon.svg`) and a hold ring, confetti, and backdrop drawn in the same icon set.
- Disclaimer-free: it is a finished game, not a demo. No analytics, no player names collected (playtests use anonymous labels).
- **Free and highly customisable** (owner, 2026-11-25: the two qualities to lead with for the community). Free means no account, no ads, no tracking and nothing to buy, and open source (code MIT, built-in packs CC BY-NC-SA 4.0). Customisable means the group's own word packs, rules, roles, scoring, emblems and looks, and code built to be changed. Lead community-facing text (README, CONTRIBUTING, repository description) with these two.

## Evidence on Hand

- Real content: 3,000 word pairs in three languages (`src/content/words/builtin/`), a changelog written for players (`CHANGELOG.md`), a playtest guide. The live site at impostergamebyfocus.netlify.app serves pass-and-play.
- Tests: a fingerprint of 400 scripted games, a thousand randomised games that must terminate, server end-to-end tests with four simulated phones, browser sweeps of every screen and every ending.
- No testimonials, usage statistics, or endorsements exist. Do not invent any.

## Product Principles

1. **Fair by construction.** A phone can never show what its holder must not know; the proof is a test, not a promise.
2. **The table comes first.** Everything a host does happens in the lobby, in front of the group, in their language.
3. **One engine, every mode.** Rules are data and pure functions; modes only decide who is holding the phone.
4. **Honest failure.** A game that quietly stops working is worse than one that says so; errors show, and reports are safe to paste into the group chat.
5. **Free, and the group's to shape.** Nothing stands between a group and a game: no price, account, ad or tracker. Whatever a group might reasonably want to change (words, rules, roles, looks) is a setting or a pack, not a fork.
6. **Built to grow.** Roles, ways to win, languages, themes, word sources, and soon other games are each a file and a line, guarded by a test.

## Accessibility & Inclusion

Every text token clears 4.5:1 on every surface it can land on, in both modes and all five themes (`src/ui/theme/theme.test.js`); motion is decoration that `prefers-reduced-motion` switches off; tap targets are 52px; Thai faces are listed before Latin fallbacks so Thai text gets a Thai font.
