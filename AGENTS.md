# Project instructions

This file follows the [Project AGENTS standard](../../STANDARDS.md#project-agents-standard)
and supplements the shared rules in [workspace AGENTS.md](../../AGENTS.md). It records
verified project-specific facts. See [ADD-ONS.md](../../ADD-ONS.md)
for the complete workspace add-on inventory and upkeep notes; it is a catalog,
not a separate workflow guide.

## Project data

- **Graphify:** This repository has a persistent index at `graphify-out/graph.json`. Follow the workspace [Graphify graph standard](../../STANDARDS.md#graphify-graph-standard).
- **Archify:** Diagrams for this repository belong in its `.archify/` folder. Follow the workspace [Archify diagram standard](../../STANDARDS.md#archify-diagram-standard); HTML diagrams are snapshots.
- **Standards:** [STANDARDS.md](STANDARDS.md) holds this project's rules, lessons, checks, and definition of done; [DESIGN.md](DESIGN.md) is the visual authority and [PRODUCT.md](PRODUCT.md) the product truth; [README.md](README.md) explains the architecture and the recipes for extending it. Read STANDARDS.md before changing the rules, the server, the packs, or the UI.

## Local workflow

- **Tests:** `npm test` (registered in the workspace `scripts/test-all.sh`); `npm run coverage` for the floors; `npm run verify` for everything including the two browser sweeps. The sweeps need Playwright: `ln -s ../../../BrowserTests/node_modules/playwright node_modules/playwright` once, so they run instead of being skipped.
- **Servers and ports:** `npm run dev` is the React app on 5174 with hot reload (the workspace smoke suite and **Browser: preview Imposter-Game** start it on 127.0.0.1); `npm run serve` is the party server on 5173, which Vite proxies `/api` to; `npm run party` builds and serves on the wifi.
- **Fingerprint:** when `npm test` reports a moved hash after an intended rules or content change, dump before and after with `node tools/fingerprint.mjs --dump <file>` (it needs a file path), read the diff, then `npm run fingerprint -- --write`. Never write it blind.
- **Releases:** bump `package.json`, move the CHANGELOG's Unreleased notes under the version, regenerate icons with `npm run icons` if the mark changed, and run `npm run build && npm run screens && npm run endings` first. Netlify serves `dist/` for pass-and-play; rooms need the Node server (`render.yaml`).
- **Secrets at rest:** `.rooms.json` holds the word in play and is ignored; never commit it or a `.env`. Bug reports are redacted by design; keep it that way when adding fields.
- **Graph refresh:** `graphify update .` (or `scripts/refresh-graph.sh` from the Developer workspace); this project has no custom enrichment step.

## Redesign issues

The current work is the redesign tracked in issue #2 (order in [ROADMAP.md](ROADMAP.md#now)). To pick up one of its issues:

1. **Pick the next open issue** whose blocked-by issues are all closed (`gh issue view <n>` lists them). Read its body and every comment; later comments override the body.
2. **Read** `PRODUCT.md`, `DESIGN.md` (and its "being replaced" note until #15 closes), and `STANDARDS.md`. The issue's acceptance list is the definition of done, on top of `STANDARDS.md`.
3. **Stop for the owner** where an issue says the owner picks or confirms: the direction in #13, and the wood names in #14. Do not choose for them.
4. **Branch** from an up-to-date `main` as `redesign/<issue>-<slug>`, one issue per branch.
5. **Verify** with `npm run verify` (nothing skipped) and, for any screen change, `npm run probe -- http://127.0.0.1:5174/` in `../../BrowserTests` with `npm run dev` running; look at the screenshots in light and dark. A screen-only change must not move the fingerprint. Run `scripts/refresh-graph.sh --changed` from the Developer root after code changes.
6. **Hand off** with a dated comment on the issue: what changed, checks and results, what is left. Commit, push, and open a PR (`Closes #<n>`) only when the owner asked for it, per the workspace rules; merging also needs the owner's go.
7. **Add player-visible changes** to the CHANGELOG's Unreleased section; releasing is #21.

