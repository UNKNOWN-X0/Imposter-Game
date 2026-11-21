# Graph Report - Imposter-Game  (2026-11-21)

## Corpus Check
- 180 files · ~171,551 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 19 file(s) not represented in the graph (top: .css 13, (none) 2, .bat 1)

## Summary
- 1023 nodes · 3061 edges · 55 communities (42 shown, 13 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 51 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `61d543d8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- words/index.js
- Room Server and Tests
- i18n/index.jsx
- Settings.jsx
- strings.js
- room.test.js
- Error Handling
- verify.mjs
- Build Dependencies
- Continuous Integration
- names.js
- engine.js
- ready.js
- Core Rules Engine
- theme.test.js
- server/store.js
- PWA Icons
- fingerprint.js
- Coverage Reporting
- fuzz.test.js
- Game Ending Checks
- Special Roles
- Screen Flow Checks
- useT
- layout.mjs
- Hosting Configuration
- Components
- LocalGame.jsx
- Design System: ImposterGame
- Style Checks
- Project Guide
- Imposter-Game work note
- Imposter Icon
- Product
- App Icon
- Favicon
- Large App Icon
- Brand Mark
- Icon Artwork
- Maskable Artwork
- Crash Layout
- German Layout
- English Layout
- Call Game Over Layout
- Home Layout
- Icon Layout
- Thai Layout
- createGame
- Current interface audit · issue #13
- Next
- Party Hub
- Tavern direction study · issue #13
- ImposterGame changelog
- Project instructions
- Colors

## God Nodes (most connected - your core abstractions)
1. `useT()` - 95 edges
2. `react` - 41 edges
3. `LocalGame()` - 40 edges
4. `reduce()` - 34 edges
5. `step()` - 32 edges
6. `Icon()` - 31 edges
7. `createGame()` - 26 edges
8. `Shell()` - 25 edges
9. `Room()` - 22 edges
10. `Settings()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js
- `Invariants` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `wordsLoaded()` --calls--> `loadAllWords()`  [EXTRACTED]
  server/server.js → src/content/words/index.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (55 total, 13 thin omitted)

### Community 0 - "words/index.js"
Cohesion: 0.05
Nodes (67): LIB_LANG_KEY, read(), write(), BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded (+59 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.06
Nodes (63): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+55 more)

### Community 2 - "i18n/index.jsx"
Cohesion: 0.07
Nodes (39): App(), IconBoard, readHash(), StringBoard, hasNews(), noteKey(), RELEASES, since() (+31 more)

### Community 3 - "Settings.jsx"
Cohesion: 0.24
Nodes (19): PRESET_KEYS, presetFor(), PRESETS, same(), Roles(), Scoring(), HowMany(), WhatTheySee() (+11 more)

### Community 4 - "strings.js"
Cohesion: 0.23
Nodes (12): compareAll(), compareKey(), placeholdersIn(), placeholderTrouble(), readsAsUntranslated(), askedKeys(), BUILT_AT_RUNTIME, deadKeys() (+4 more)

### Community 5 - "room.test.js"
Cohesion: 0.14
Nodes (18): JoinScreen(), api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom() (+10 more)

### Community 6 - "Error Handling"
Cohesion: 0.14
Nodes (24): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), described(), facts, failures (+16 more)

### Community 7 - "verify.mjs"
Cohesion: 0.18
Nodes (6): canBuild, failed, mark, results, root, skipped

### Community 8 - "Build Dependencies"
Cohesion: 0.07
Nodes (31): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+23 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "names.js"
Cohesion: 0.29
Nodes (10): AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode(), unresolvedNames(), classesRendered(), classesStyled() (+2 more)

### Community 11 - "engine.js"
Cohesion: 0.14
Nodes (32): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord() (+24 more)

### Community 12 - "ready.js"
Cohesion: 0.11
Nodes (12): ROLES, builtAtRuntime(), errorCodesInSource(), root, here, args, file, here (+4 more)

### Community 13 - "Core Rules Engine"
Cohesion: 0.23
Nodes (12): applyAll(), deals(), FIVE, one(), OURS, revealAll(), roleIds(), SEVEN (+4 more)

### Community 14 - "theme.test.js"
Cohesion: 0.16
Nodes (17): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+9 more)

### Community 15 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 16 - "PWA Icons"
Cohesion: 0.13
Nodes (18): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), answers(), isBuiltAtRuntime() (+10 more)

### Community 17 - "fingerprint.js"
Cohesion: 0.33
Nodes (8): STRINGS, behaviour(), bySeat(), games(), NAMES, scripted(), strings(), words()

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.13
Nodes (22): tally(), clueRound(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS (+14 more)

### Community 20 - "Game Ending Checks"
Cohesion: 0.17
Nodes (13): dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS, root (+5 more)

### Community 21 - "Special Roles"
Cohesion: 0.18
Nodes (15): BY_ID, endingFor(), ROLE, roleSpec(), SPECIAL_ROLES, winsWithImposters(), autoImposterCount(), DECOY (+7 more)

### Community 22 - "Screen Flow Checks"
Cohesion: 0.16
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 23 - "useT"
Cohesion: 0.06
Nodes (92): react, MAX_PLAYERS, MIN_PLAYERS, IconBoard(), ICONS, PartyHub(), AddPlayerForm(), LobbyHint() (+84 more)

### Community 24 - "layout.mjs"
Cohesion: 0.38
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "Components"
Cohesion: 0.22
Nodes (9): Banners and Dialogs, Buttons, Components, Navigation, Panels, Private Card, Room-code Chip, Segmented Control (+1 more)

### Community 27 - "LocalGame.jsx"
Cohesion: 0.14
Nodes (29): PHASE, EndGameButton(), LocalGame(), Steal(), clearGame(), CONFIG_KEY, GAME_KEY, isResumable() (+21 more)

### Community 28 - "Design System: ImposterGame"
Cohesion: 0.20
Nodes (10): Design System: ImposterGame, Do's and Don'ts, Elevation & Depth, Hierarchy, Layout, Named Rules, Overview, Shadow Vocabulary (+2 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.18
Nodes (9): HTML application shell, Playtest guide, Central scoring table, Custom word packs, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates (+1 more)

### Community 31 - "Imposter-Game work note"
Cohesion: 0.17
Nodes (11): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21), Next-issue scope mapped (no implementation started) (+3 more)

### Community 32 - "Imposter Icon"
Cohesion: 0.67
Nodes (3): Disguise, Hat, Imposter

### Community 33 - "Product"
Cohesion: 0.18
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 47 - "createGame"
Cohesion: 0.13
Nodes (19): createGame(), reduce(), voteOut(), DEFAULT_CONFIG, normaliseConfig(), deepFreeze(), guard(), isStrict() (+11 more)

### Community 48 - "Current interface audit · issue #13"
Cohesion: 0.29
Nodes (6): Assessment A, Assessment B (initial evidence), Current interface audit · issue #13, Evidence locations, Independent mock verification, Owner decision

### Community 49 - "Next"
Cohesion: 0.18
Nodes (11): Candidate games, Decisions to settle before broad extraction, Delivery plan, Direction, Later, Now, Pack system direction, Recommended build order (+3 more)

### Community 50 - "Party Hub"
Cohesion: 0.40
Nodes (4): Audience and task, Direction contract, Party Hub, Scope and visitor mode

### Community 51 - "Tavern direction study · issue #13"
Cohesion: 0.33
Nodes (5): Boundaries, Owner decisions, Product and physical scene, Tavern direction study · issue #13, Variations

### Community 52 - "ImposterGame changelog"
Cohesion: 0.29
Nodes (4): Imposter-side parity cap includes sidekick, ImposterGame changelog, Persisted multiplayer rooms, Text-based browser layout baselines

### Community 53 - "Project instructions"
Cohesion: 0.50
Nodes (4): Local workflow, Project data, Project instructions, Redesign issues

### Community 54 - "Colors"
Cohesion: 0.40
Nodes (5): Colors, Named Rules, Neutral, Primary, Secondary

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 339 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Room Server and Tests` to `Project Guide`?**
  _High betweenness centrality (0.123) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `words/index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.054945054945054944 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `Room Server and Tests` to `words/index.js`, `createGame`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.056790123456790124 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `words/index.js`, `i18n/index.jsx`, `Settings.jsx`, `room.test.js`, `Error Handling`, `Build Dependencies`, `theme.test.js`, `LocalGame.jsx`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Should `i18n/index.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07103825136612021 - nodes in this community are weakly interconnected._