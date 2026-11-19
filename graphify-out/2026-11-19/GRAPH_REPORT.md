# Graph Report - Imposter-Game  (2026-11-19)

## Corpus Check
- 177 files · ~165,812 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 19 file(s) not represented in the graph (top: .css 13, (none) 2, .bat 1)

## Summary
- 1005 nodes · 3030 edges · 54 communities (40 shown, 14 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 51 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a2d05aeb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useT
- Room Server and Tests
- strings/index.js
- Settings.jsx
- custom.js
- room.test.js
- Error Handling
- server/store.js
- Build Dependencies
- Continuous Integration
- dead.test.js
- engine.js
- layout.mjs
- Core Rules Engine
- Theme Management
- Node Platform APIs
- PWA Icons
- settings.test.js
- Coverage Reporting
- Voting and Fuzz Tests
- Game Ending Checks
- Special Roles
- Screen Flow Checks
- LocalGame.jsx
- words/index.js
- Hosting Configuration
- ready.js
- StringBoard.jsx
- Design System: ImposterGame
- Style Checks
- Project Guide
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
- select.js
- engine.test.js
- Next
- Party Hub
- Now
- ImposterGame changelog
- Project instructions
- Custom word packs

## God Nodes (most connected - your core abstractions)
1. `useT()` - 95 edges
2. `react` - 41 edges
3. `LocalGame()` - 39 edges
4. `reduce()` - 34 edges
5. `step()` - 32 edges
6. `Icon()` - 31 edges
7. `createGame()` - 26 edges
8. `Shell()` - 23 edges
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
- `createRoom()` --calls--> `createGame()`  [EXTRACTED]
  server/rooms.js → src/core/deal.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (54 total, 14 thin omitted)

### Community 0 - "useT"
Cohesion: 0.07
Nodes (86): react, packById(), MAX_PLAYERS, MIN_PLAYERS, IconBoard(), ICONS, AddPlayerForm(), LobbyHint() (+78 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (54): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+46 more)

### Community 2 - "strings/index.js"
Cohesion: 0.09
Nodes (26): hasNews(), noteKey(), RELEASES, since(), pkg, VERSION, Changelog(), describe() (+18 more)

### Community 3 - "Settings.jsx"
Cohesion: 0.34
Nodes (15): Roles(), Scoring(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Calling(), Rounds(), Stealing() (+7 more)

### Community 4 - "custom.js"
Cohesion: 0.12
Nodes (29): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+21 more)

### Community 5 - "room.test.js"
Cohesion: 0.07
Nodes (40): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), Crash() (+32 more)

### Community 6 - "Error Handling"
Cohesion: 0.14
Nodes (24): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), described(), facts, failures (+16 more)

### Community 7 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 8 - "Build Dependencies"
Cohesion: 0.07
Nodes (31): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+23 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "dead.test.js"
Cohesion: 0.14
Nodes (22): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+14 more)

### Community 11 - "engine.js"
Cohesion: 0.15
Nodes (31): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord() (+23 more)

### Community 12 - "layout.mjs"
Cohesion: 0.38
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 13 - "Core Rules Engine"
Cohesion: 0.16
Nodes (17): createGame(), reduce(), clueRound(), currentTurn(), deepFreeze(), guard(), isStrict(), setStrict() (+9 more)

### Community 14 - "Theme Management"
Cohesion: 0.14
Nodes (17): read(), systemMode(), ThemeContext, ThemeProvider(), useTheme(), ALL, contrast(), css (+9 more)

### Community 15 - "Node Platform APIs"
Cohesion: 0.13
Nodes (9): here, ICONS, PUBLIC, canBuild, failed, mark, results, root (+1 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "settings.test.js"
Cohesion: 0.15
Nodes (16): act(), here, post(), autoImposterCount(), DECOY, DEFAULT_CONFIG, IMPOSTERS_AUTO, IMPOSTERS_RANDOM (+8 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "Voting and Fuzz Tests"
Cohesion: 0.21
Nodes (13): voteOut(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction() (+5 more)

### Community 20 - "Game Ending Checks"
Cohesion: 0.17
Nodes (13): dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS, root (+5 more)

### Community 21 - "Special Roles"
Cohesion: 0.18
Nodes (12): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters(), maxImpostersFor() (+4 more)

### Community 22 - "Screen Flow Checks"
Cohesion: 0.16
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 23 - "LocalGame.jsx"
Cohesion: 0.14
Nodes (29): PHASE, LocalGame(), Resume(), clearGame(), CONFIG_KEY, GAME_KEY, isResumable(), loadConfig() (+21 more)

### Community 24 - "words/index.js"
Cohesion: 0.08
Nodes (35): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+27 more)

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "ready.js"
Cohesion: 0.16
Nodes (5): here, args, file, here, { lines, text, hash }

### Community 27 - "StringBoard.jsx"
Cohesion: 0.31
Nodes (10): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+2 more)

### Community 28 - "Design System: ImposterGame"
Cohesion: 0.07
Nodes (27): Banner, Buttons, Cards, Colors, Components, Design System: ImposterGame, Do:, Do's and Don'ts (+19 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.21
Nodes (8): HTML application shell, Playtest guide, Central scoring table, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates, Shared deterministic rules engine

### Community 32 - "Imposter Icon"
Cohesion: 0.67
Nodes (3): Disguise, Hat, Imposter

### Community 33 - "Product"
Cohesion: 0.18
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 47 - "select.js"
Cohesion: 0.15
Nodes (15): tally(), normaliseConfig(), buildPublicState(), canCall(), cluesThisRound(), isAlive(), publicState(), scrubbed (+7 more)

### Community 48 - "engine.test.js"
Cohesion: 0.23
Nodes (12): applyAll(), deals(), FIVE, one(), OURS, revealAll(), roleIds(), SEVEN (+4 more)

### Community 49 - "Next"
Cohesion: 0.22
Nodes (8): Candidate games, Decisions to settle before broad extraction, Direction, Later, Next, Pack system direction, Recommended build order, Roadmap

### Community 50 - "Party Hub"
Cohesion: 0.40
Nodes (4): Audience and task, Direction contract, Party Hub, Scope and visitor mode

### Community 51 - "Now"
Cohesion: 0.40
Nodes (5): Design deliverables, Design directions to explore, Now, Proposed play flow, UX principles

### Community 52 - "ImposterGame changelog"
Cohesion: 0.29
Nodes (4): Imposter-side parity cap includes sidekick, ImposterGame changelog, Persisted multiplayer rooms, Text-based browser layout baselines

### Community 53 - "Project instructions"
Cohesion: 0.67
Nodes (3): Local workflow, Project data, Project instructions

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 324 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `select.js` to `Project Guide`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useT` be split into smaller, more focused modules?**
  _Cohesion score 0.06544049047047848 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `select.js` to `custom.js`?**
  _High betweenness centrality (0.124) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06990622335890878 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `strings/index.js`, `Settings.jsx`, `custom.js`, `room.test.js`, `Error Handling`, `Build Dependencies`, `Theme Management`, `LocalGame.jsx`, `words/index.js`, `StringBoard.jsx`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `strings/index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.0919661733615222 - nodes in this community are weakly interconnected._