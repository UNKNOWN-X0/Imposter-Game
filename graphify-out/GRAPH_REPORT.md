# Graph Report - Imposter-Game  (2026-11-18)

## Corpus Check
- 175 files · ~163,133 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 18 file(s) not represented in the graph (top: .css 12, (none) 2, .bat 1)

## Summary
- 980 nodes · 3011 edges · 55 communities (42 shown, 13 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 51 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0b0b33f0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Lobby and Round UI
- Room Server and Tests
- strings/index.js
- Settings.jsx
- LocalGame.jsx
- room.test.js
- Error Handling
- Browser Layout Screenshot Checks
- Build Dependencies
- Continuous Integration
- Test Helpers
- Round Engine
- App.jsx
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
- lint.test.js
- words/index.js
- Hosting Configuration
- ref_node_fs
- StringBoard.jsx
- Design System: ImposterGame
- Style Checks
- Project Guide
- deal.js
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
- server/store.js
- fingerprint.js
- ref_node_test
- Components
- translate.js
- ImposterGame changelog
- Colors
- Project standards

## God Nodes (most connected - your core abstractions)
1. `useT()` - 95 edges
2. `react` - 41 edges
3. `LocalGame()` - 40 edges
4. `reduce()` - 34 edges
5. `step()` - 32 edges
6. `Icon()` - 31 edges
7. `createGame()` - 26 edges
8. `Shell()` - 25 edges
9. `App()` - 23 edges
10. `Room()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Invariants` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js
- `createRoom()` --calls--> `createGame()`  [EXTRACTED]
  server/rooms.js → src/core/deal.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (55 total, 13 thin omitted)

### Community 0 - "Lobby and Round UI"
Cohesion: 0.07
Nodes (84): react, packById(), MIN_PLAYERS, ICONS, AddPlayerForm(), LobbyHint(), hintLine(), PlayerList() (+76 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (53): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+45 more)

### Community 2 - "strings/index.js"
Cohesion: 0.16
Nodes (7): FALLBACK_LANG, inFlight, LANGUAGES, LOADERS, STRINGS, stringsReady(), LANGS

### Community 3 - "Settings.jsx"
Cohesion: 0.26
Nodes (18): presetFor(), same(), Roles(), Scoring(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Calling() (+10 more)

### Community 4 - "LocalGame.jsx"
Cohesion: 0.07
Nodes (64): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+56 more)

### Community 5 - "room.test.js"
Cohesion: 0.13
Nodes (20): JoinScreen(), OnlineGame(), api(), ApiError, clearSession(), connect(), createRoom(), joinRoom() (+12 more)

### Community 6 - "Error Handling"
Cohesion: 0.11
Nodes (31): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+23 more)

### Community 7 - "Browser Layout Screenshot Checks"
Cohesion: 0.32
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 8 - "Build Dependencies"
Cohesion: 0.07
Nodes (31): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+23 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "Test Helpers"
Cohesion: 0.14
Nodes (22): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+14 more)

### Community 11 - "Round Engine"
Cohesion: 0.15
Nodes (32): pickImposters(), pickWord(), advanceAfterVerdict(), finish(), normalise(), resolveOutcome(), resolveVote(), sameClue() (+24 more)

### Community 12 - "App.jsx"
Cohesion: 0.14
Nodes (23): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), hasNews() (+15 more)

### Community 13 - "Core Rules Engine"
Cohesion: 0.12
Nodes (22): createGame(), applyAll(), reduce(), deals(), revealAll(), started(), withPacks(), withPlayers() (+14 more)

### Community 14 - "Theme Management"
Cohesion: 0.14
Nodes (18): read(), systemMode(), ThemeContext, ThemeProvider(), useTheme(), ALL, contrast(), css (+10 more)

### Community 15 - "Node Platform APIs"
Cohesion: 0.13
Nodes (9): here, ICONS, PUBLIC, canBuild, failed, mark, results, root (+1 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "settings.test.js"
Cohesion: 0.22
Nodes (13): autoImposterCount(), DECOY, DEFAULT_CONFIG, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, normaliseConfig(), ROUNDS_UNLIMITED, PRESET_KEYS (+5 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "Voting and Fuzz Tests"
Cohesion: 0.16
Nodes (17): clueRound(), voteOut(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS (+9 more)

### Community 20 - "Game Ending Checks"
Cohesion: 0.17
Nodes (13): dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS, root (+5 more)

### Community 21 - "Special Roles"
Cohesion: 0.20
Nodes (13): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters(), maxImpostersFor() (+5 more)

### Community 22 - "Screen Flow Checks"
Cohesion: 0.16
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 23 - "lint.test.js"
Cohesion: 0.38
Nodes (6): foldLatinAccents(), INFLECTIONS, lintPack(), lintPacks(), normalise(), sameWordDifferentEnding()

### Community 24 - "words/index.js"
Cohesion: 0.13
Nodes (15): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), _forgetWords() (+7 more)

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "ref_node_fs"
Cohesion: 0.15
Nodes (5): here, args, file, here, { lines, text, hash }

### Community 27 - "StringBoard.jsx"
Cohesion: 0.31
Nodes (10): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+2 more)

### Community 28 - "Design System: ImposterGame"
Cohesion: 0.15
Nodes (13): Design System: ImposterGame, Do:, Do's and Don'ts, Don't:, Elevation & Depth, Hierarchy, Layout, Named Rules (+5 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.13
Nodes (13): Local workflow, Project data, Project instructions, HTML application shell, Playtest guide, Central scoring table, Custom word packs, Data-described optional roles (+5 more)

### Community 31 - "deal.js"
Cohesion: 0.21
Nodes (10): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), recentWordWindow(), PHASE (+2 more)

### Community 32 - "Imposter Icon"
Cohesion: 0.67
Nodes (3): Disguise, Hat, Imposter

### Community 33 - "Product"
Cohesion: 0.18
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 47 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 48 - "fingerprint.js"
Cohesion: 0.36
Nodes (8): wordsReady(), behaviour(), bySeat(), games(), NAMES, scripted(), strings(), words()

### Community 49 - "ref_node_test"
Cohesion: 0.27
Nodes (6): DEFAULT_WORD_LANG, packsFor(), pairCount(), poolFor(), fail(), GameError

### Community 50 - "Components"
Cohesion: 0.25
Nodes (8): Banner, Buttons, Cards, Components, Icons, Motion, Room-code chip, Segmented control

### Community 51 - "translate.js"
Cohesion: 0.39
Nodes (5): translator(), localeNumber(), numbers, resolveKey(), translate()

### Community 52 - "ImposterGame changelog"
Cohesion: 0.29
Nodes (4): Imposter-side parity cap includes sidekick, ImposterGame changelog, Persisted multiplayer rooms, Text-based browser layout baselines

### Community 53 - "Colors"
Cohesion: 0.40
Nodes (5): Colors, Named Rules, Neutral, Primary, Secondary: the sides

### Community 54 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

## Knowledge Gaps
- **22 isolated node(s):** `Imposter-side parity cap includes sidekick`, `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 305 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `settings.test.js`, `Project Guide`?**
  _High betweenness centrality (0.122) - this node is a cross-community bridge._
- **What connects `Imposter-side parity cap includes sidekick`, `Central scoring table`, `Data-described optional roles` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Lobby and Round UI` be split into smaller, more focused modules?**
  _Cohesion score 0.06877249100359856 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `settings.test.js` to `LocalGame.jsx`, `Core Rules Engine`, `Project standards`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06947996589940324 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Lobby and Round UI` to `Settings.jsx`, `LocalGame.jsx`, `room.test.js`, `Error Handling`, `Build Dependencies`, `App.jsx`, `Theme Management`, `StringBoard.jsx`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Should `LocalGame.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07198879551820728 - nodes in this community are weakly interconnected._