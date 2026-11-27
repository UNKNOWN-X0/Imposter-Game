# Project standards

The rules every change to The Long Table (and its first game, Imposter) has to meet, and how to check them. Each fact lives in one file:

| File | Owns |
|---|---|
| [PRODUCT.md](PRODUCT.md) | What the game is, who plays it, what it must never claim |
| [DESIGN.md](DESIGN.md) | The visual system: tokens, type, components, motion, named rules |
| **STANDARDS.md** (this file) | Engineering rules, lessons from past mistakes, checks, definition of done |
| [README.md](README.md) | For players and contributors: how to play, run, test, customise, and deploy, with the reasoning behind the architecture |
| [CHANGELOG.md](CHANGELOG.md) | What changed for players, per version (Keep a Changelog, semantic versions) |
| [PLAYTEST.md](PLAYTEST.md) | The script and record sheet for a playtest session |
| [ROADMAP.md](ROADMAP.md) | Open directions the owner has stated (the UX/UI overhaul, the minigames site); items leave when they ship |
| [AGENTS.md](AGENTS.md) | Agent-only facts: index locations, commands, ports, boundaries |

When two files disagree, the owner above wins and the other is fixed. The README explains the architecture at length; this file states the rules that follow from it and names the test that enforces each one, so a rule here is never the only copy of a fact.

## Invariants

- **The rules live in `src/core/` and name nothing they could look up.** No DOM, network, clock, or React in `core`; the engine asks `core/roles` and `core/scoring` instead of naming a role or an award. `src/core/strict.test.js` fails when a role's name or an award reappears in the engine.
- **The server never sends a player something they should not see.** `publicState` strips the word, decoy, hint, role map, imposter list, custom-pack words, and the seed; votes are held until the last one is in; the server rewrites the actor on every action. `server/broadcast.test.js` and the engine test "the words in a custom pack never reach the other phones" enforce it.
- **A bug report never carries a secret.** Reports list actions by name and are redacted against `keepQuiet([...])`; `src/features/errors/report.test.js` deals a real game and asserts its word cannot be found in a report.
- **Everything that enters is re-validated.** Packs from localStorage, a share code, or the network go through `validatePack`; a saved round from another version is dropped, not resumed; `normaliseConfig` settles contradictory settings in the lobby.
- **No dependencies beyond React and Vite.** Live updates are Server-Sent Events; the server has zero dependencies. A new package needs a reason recorded in the CHANGELOG.
- **Rule violations travel as codes** (`core/errors.js`), never as sentences, so each phone renders the reason in its own language. Interface language is per device; word language belongs to the game.
- **The fingerprint is the rules.** `src/testing/fingerprint.sha256` hashes 400 scripted games across every language, decoy mode, and role set plus every word and string. A change that moves the hash is a rules or content change, blessed only after reading the diff (`tools/fingerprint.mjs --dump`).

## Code

- **Folders by responsibility:** `core` (rules), `content` (words and history as data), `i18n`, `ui` (knows nothing about the game), `features` (knows the game), `modes` (local and online wire the rest), `testing` (checks about the project), `server`. Nothing in `ui` imports the engine. The README's "How it is put together" is the map.
- **Adding a role, a way to win, a language, a theme, a word source, or words** follows the recipe in the README's "Making it yours"; each recipe ends in a test that catches the step people forget (a missing string, a missing token, a duplicate word, a wrong icon size).
- **Storage keys live in `src/modes/local/storage.js`**, not in the screen that uses them, so the layer loads under `node --test`.
- **Colour is two dials** on `src/ui/styles/tokens.css`: `data-mode` and `data-theme`. `--accent` is an action fill with `--on-accent` on it; `--accent-text` is the contrast-checked action colour for words and icons. Every wood declares the same tokens for both modes; `src/ui/theme/theme.test.js` checks completeness, contrast, and the picker chip.
- **Icons** are inline SVG on a 24×24 grid, 20×20 live area, one 1.8 stroke, round caps, `currentColor`, `aria-hidden`, one movement each behind `anim`. `#icons` shows the sheet from the same components.
- **Motion is decoration** on a layout that works without it; the `prefers-reduced-motion` block at the end of the stylesheet switches all of it off.

## Lessons

- **A missing import cannot hide from a screen that is actually drawn.** Two crashes reached phones in one week that every code-reading check let through; the browser sweeps (`screens`, `endings`) exist because of them. Run them before a release, not only CI.
- **The last crash was on a screen only a winner ever sees.** `endings` plays every way of winning for that reason; a new ending gets a case there.
- **A refactor that changes the fingerprint is not a refactor.** Read the dump diff before blessing.
- **The broadcast once carried the seed** (1.28.0): every field in a broadcast is public unless `publicState` strips it, so a new state field defaults to stripped until a test proves it is safe.

## Checks

In this order, for the parts a change touches:

1. **Fast:** `npm test` (rules, server end to end, packs, strings, icons, stylesheet, fingerprint; about ten seconds). Registered in the workspace `scripts/test-all.sh`.
2. **Floors:** `npm run coverage` fails under the per-module floors in `src/testing/coverage.floors.json`; `-- --bless` raises them after new tests, never lowers them.
3. **Everything:** `npm run verify` adds the build and both browser sweeps. The sweeps need Playwright, which the game does not: the workspace already has it, so `ln -s ../../../BrowserTests/node_modules/playwright node_modules/playwright` once (node_modules is ignored) and `verify` runs complete instead of "skipped out loud". CI installs its own.
4. **Workspace:** `scripts/verify.sh Games/The-Long-Table` from the Developer root: the suite, scaffold drift, graph freshness, and the smoke test through the Vite dev server. For an interface change, `npm run probe -- http://127.0.0.1:5174/` in `BrowserTests` with the dev server running (`npm run dev`), and look at the screenshots.
5. **Graph:** `scripts/refresh-graph.sh --changed` after code changes.
6. **Playtest** (`PLAYTEST.md`) before a release that changes the lobby, the round flow, or room play.

## Definition of done

- The invariants hold and the change meets the workspace [Code change standard](../../STANDARDS.md#code-change-standard); an interface change also meets the [Interface change standard](../../STANDARDS.md#interface-change-standard) and `DESIGN.md`.
- `npm run verify` passes with nothing skipped, or the report says which sweep did not run and why.
- The fingerprint either did not move or was blessed after reading the diff, and the CHANGELOG's Unreleased section says what a player will notice. Versions follow semver, judged by what a player notices (owner, 2026-11-26, #88):
  - **MAJOR** when something saved by the last version (a round, packs, settings, a room) stops working, or a feature players use is taken away: somebody has to do something.
  - **MINOR** when players get something new: a feature, a screen, a setting, a language, a pack, a new way to play.
  - **PATCH** when there are only fixes, or changes players do not see (tests, tooling, docs, internal clean-ups).
  - A release takes the largest bump any of its notes needs. Published numbers are never changed, even one that should have been different (1.13.1 is the known case).
- README, PRODUCT, DESIGN, and PLAYTEST still describe the shipped behavior; the README's recipes still end in the test that guards them.
