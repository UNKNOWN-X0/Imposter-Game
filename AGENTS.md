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
- **Servers and ports:** `npm run dev` is the React app on 5174 with hot reload (the workspace smoke suite and **Browser: preview ImposterGame** start it on 127.0.0.1); `npm run serve` is the party server on 5173, which Vite proxies `/api` to; `npm run party` builds and serves on the wifi.
- **Fingerprint:** when `npm test` reports a moved hash after an intended rules or content change, dump before and after with `tools/fingerprint.mjs --dump`, read the diff, then `npm run fingerprint -- --write`. Never write it blind.
- **Releases:** bump `package.json`, move the CHANGELOG's Unreleased notes under the version, regenerate icons with `npm run icons` if the mark changed, and run `npm run build && npm run screens && npm run endings` first. Netlify serves `dist/` for pass-and-play; rooms need the Node server (`render.yaml`).
- **Secrets at rest:** `.rooms.json` holds the word in play and is ignored; never commit it or a `.env`. Bug reports are redacted by design; keep it that way when adding fields.
- **Graph refresh:** `graphify update .` (or `scripts/refresh-graph.sh` from the Developer workspace); this project has no custom enrichment step.
