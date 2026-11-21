# Imposter Game

[![Play](https://img.shields.io/badge/Play-on%20Netlify-00C7B7?logo=netlify&logoColor=white)](https://impostergamebyfocus.netlify.app/)
[![Checks](https://github.com/UNKNOWN-X0/Imposter-Game/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/UNKNOWN-X0/Imposter-Game/actions/workflows/ci.yml)
[![Version](https://img.shields.io/github/package-json/v/UNKNOWN-X0/Imposter-Game?label=version)](package.json)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](package.json)
[![Languages](https://img.shields.io/badge/languages-English%20%7C%20Thai%20%7C%20German-6750A4)](src/i18n/strings/)

A social deduction party game built around secret words. Everyone but the imposters is dealt the same word, players give one-word clues, and the table votes before the imposters take over.

**[Play Imposter Game →](https://impostergamebyfocus.netlify.app/)** · [Changelog](CHANGELOG.md) · [Playtest guide](PLAYTEST.md) · [Report a bug](https://github.com/UNKNOWN-X0/Imposter-Game/issues)

![Imposter Game](assets/preview.png)

## Features

- **Three languages:** English, Thai, and German, with separate choices for interface and word language.
- **Word packs:** ten built-in packs per language, plus custom packs you can create, import, and share as codes.
- **Rules you set:** imposter counts, decoy modes, optional roles, and scoring.
- **Picks up where you left off:** saved local rounds, room reconnection, and host transfer.
- **Looks:** light and dark modes, five wood themes, and reduced-motion support.
- **Fair by design:** one rules engine for both play modes, and a server that never sends a phone a secret it should not hold.

## Getting started

### Use it online

**[Play in your browser](https://impostergamebyfocus.netlify.app/)** for pass-and-play on one phone. Multiplayer rooms need the Node server (below, or [Deploying](#deploying)).

### Run it yourself

Install **Node.js 20 or newer**, then:

```sh
git clone https://github.com/UNKNOWN-X0/Imposter-Game.git
cd Imposter-Game
npm install
npm run dev        # http://localhost:5174 — one-phone mode, hot reload
```

For phone-to-phone play, `npm run party` builds the site and serves it on your Wi-Fi, printing the address everyone else types into their phone. When you are working on the UI *and* want rooms, run `npm run serve` (the party server on 5173) in one terminal and `npm run dev` in another; Vite proxies `/api` to the server, so it behaves as in production.

**Without a terminal:** double-click `Play Imposter.command` (Mac; right-click and choose Open the first time) or `Play Imposter.bat` (Windows). It installs what is missing, builds, starts the server, and opens the browser.

## Usage

### Ways to play

| Mode | How it works | What you need |
| --- | --- | --- |
| Pass-and-play | Pass one phone around; each player privately reveals their card. | A browser. Use the Netlify link above. |
| Multiplayer rooms | Each player joins on their own device with a room code. | The Node server, on the same Wi-Fi or publicly hosted ([Deploying](#deploying)). |

## Privacy

Settings, custom packs, scores, and a saved local round stay in the browser's local storage. In multiplayer, the server keeps each room in memory and sends every phone a scrubbed copy plus its own card, so the word never reaches an imposter's device. To survive a restart it writes rooms, including the word in play, to `.rooms.json` (mode `0600`, ignored by Git, `ROOM_STORE=off` to disable). Error reports name the version, mode, phase, player count, and recent actions by name, never the word, the decoy, or who was dealt what.

## Development

### Making it yours

Each recipe ends in the test that catches the step people forget.

- **Add words.** `src/content/words/builtin/{en,th,de}.js` hold ten packs of a hundred `{ word, decoy }` pairs, each pack with a `hint` line. A good decoy sounds reasonable as a clue and is still catchable: `Pizza`/`Lasagna`, not `Pizza`/`Helicopter`. Packs are written for the people who speak that language, never translated. `npm test` rejects duplicates, a word equal to its decoy, and a missing hint.
- **Add a language.** A strings table in `src/i18n/strings/` shaped like `en.js`, a pack file shaped like the others, both registered in the `index.js` beside them. Missing strings fall back to English.
- **Add a role.** One file in `src/core/roles/` (`id`, `side`, `reveals`, optional `deal()`, `endsGameWhenVotedOut`), registered in `roles/index.js`, with a face in `ROLE_FACE` (`src/ui/primitives/RoleGlyph.jsx`) and a name and explanation in each language. The engine reads those fields; a test fails if it ever names a role.
- **Add a way to win.** One row in `src/core/scoring/index.js`: who won, what it pays, whether being voted out costs your share. A test fails if the engine hard-codes an award anywhere else.
- **Change the rules.** Everything is in `reduce()`: `resolveOutcome` decides who won, `advanceAfterVerdict` who is owed a final guess, `normaliseConfig` settles settings that cannot both be true, in the lobby, where the table can see them. Optional rules are flags on the config.
- **Custom packs.** `src/content/words/custom.js` parses a pasted list, validates any pack, and turns one into a share code and back. Everything that enters, from storage, a code, or the network, goes through `validatePack`, and a pack's words never reach the other phones (a test checks the broadcast).
- **Add a source of words.** A file in `src/content/words/sources.js` that answers `packsFor(lang, context)`.
- **Add a theme.** An entry in `THEMES` (`src/ui/theme/themes.js`), `theme.<id>` in the three string tables, and two palette blocks in `src/ui/styles/tokens.css`. `src/ui/theme/theme.test.js` reads the stylesheet and reports a missing token, a contrast failure, or a chip unlike its theme.
- **Change the look.** Two dials on `tokens.css`: `data-mode` and `data-theme`; the themes are Birch, Oak (default), Teak, Mahogany, and Walnut. `--accent` is the action fill with `--on-accent` on it; `--accent-text` is the contrast-checked action colour for words and icons. Icons live in `src/ui/icons/` (24px grid, one 1.8 stroke, one motion each behind `anim`); open `#icons` for the sheet. Non-essential motion follows the shared timing tokens and `prefers-reduced-motion`.
- **The home-screen icon** is `public/icon.svg` plus `icon-maskable.svg`; `npm run icons` renders the PNGs and `npm test` checks their sizes.
- **When something goes wrong.** Rule violations are codes and show as a banner. Anything unplanned gets the error screen or one quiet line, and a report that names the version, mode, phase, player count, error, and the last dozen actions **by name**: never the word, the decoy, or who was dealt what. Open `#crash` to see the error screen without waiting for a bug.

### Deploying

**Pass-and-play anywhere.** `npm run build`, then put `dist/` on Netlify, GitHub Pages, or any static host. Rooms cannot work there, and the join screen says so.

**Rooms need a host that runs Node** (Render, Railway, Fly, or your own machine). `render.yaml` describes the setup for Render; elsewhere: build with `npm install && npm run build`, start with `npm start`, and read the port from `PORT`. Rooms live in memory, are swept after six idle hours, and are recovered after a restart from a retained JSON file:

|  |  |
| --- | --- |
| where | `.rooms.json` beside the code, or wherever `ROOM_STORE` points (a persistent volume on a host that discards its filesystem) |
| turn it off | `ROOM_STORE=off` |
| how long | `ROOM_RESTORE_MS`, default one hour |
| what it holds | the word currently in play: written `0600`, in `.gitignore`, never committed |

A build whose rules changed does not resume rooms dealt by the one before it. `ROOM_CODE_LENGTH` sets the code length (4 to 12); four is right across a table, `render.yaml` asks for six on a public address.

## Tests

```sh
npm test          # the rules and the server, in seconds, with no browser
npm run coverage  # the same tests, per module, against a floor each
npm run verify    # all of it, including the build and both browser sweeps
```

`npm test` covers the rules engine (including a thousand randomised games that must end with a winner), the server end to end (four simulated phones play a game; a player can only act as themselves; the word never reaches an imposter's device), the word packs, every string in every language, the icons, the stylesheet, and a **fingerprint**: 400 scripted games plus every word and string hashed into one line, committed beside the code. A change that moves the hash is a rules or content change; read the difference before blessing it:

```sh
node tools/fingerprint.mjs --dump before.txt   # on the old code
node tools/fingerprint.mjs --dump after.txt    # on the new
diff before.txt after.txt
npm run fingerprint -- --write                 # yes, that is what I meant
```

`npm run verify` adds the coverage floors (`src/testing/coverage.floors.json`, a ratchet: `-- --bless` raises them, nothing lowers them), the build, and the two browser sweeps. **Before releasing, draw every screen:** `npm run screens` plays a whole game in a real browser and visits every other screen in all three languages; `npm run endings` plays a game once per way of winning. They need Playwright, which the game itself does not; `verify` says out loud when it had to skip them. Every push runs all of it in `.github/workflows/ci.yml`.

The rules every change must meet, with the test that guards each one, are in [STANDARDS.md](STANDARDS.md).

## Project structure

```text
src/core/           the rules: a pure reducer. No DOM, no network, no clock, no React.
                    engine.js (the reducer and how a round ends) · rules.js (limits and
                    modes) · select.js (whose turn, who may see what) · deal.js ·
                    roles/ (one file per optional role) · scoring/ (every way to win)
src/content/        the words and the history, as data: words/builtin/ (ten packs of a
                    hundred per language), words/custom.js, words/sources.js, history/
src/i18n/           one file per language, and the reader that picks a string
src/ui/             pieces that know nothing about the game: primitives/, icons/,
                    theme/ (light/dark and the five wood families), styles/
src/features/       pieces that do know: lobby, round, packs, rules, changelog, errors
src/modes/          local (one phone) and online (a room), which wire the rest
src/testing/        the checks that are about the project, not about the game
server/             static files plus the room API, zero dependencies
assets/preview.png  Screenshot for this README
```

Nothing in `core` imports React; nothing in `ui` imports the engine; both modes render the same `features` and differ only in who is holding the phone. The server keeps the authoritative state and sends each phone a scrubbed copy plus its own card; live updates are Server-Sent Events. Interface language is a per-device choice; word language belongs to the table, which is why rule violations travel as codes (`core/errors.js`) and are rendered in each phone's own language.

## Project documents

| File | What it covers |
| --- | --- |
| [PRODUCT.md](PRODUCT.md) | What the game is for |
| [DESIGN.md](DESIGN.md) | The visual system |
| [STANDARDS.md](STANDARDS.md) | The rules every change must meet, the test that guards each, and the lessons behind them |
| [ROADMAP.md](ROADMAP.md) | Where the game is going |
| [CHANGELOG.md](CHANGELOG.md) | Release history |
| [PLAYTEST.md](PLAYTEST.md) | A script for checking that a new host can run a game without coaching |
