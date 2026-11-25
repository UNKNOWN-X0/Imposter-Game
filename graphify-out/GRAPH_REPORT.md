# Graph Report - Imposter-Game  (2026-11-25)

## Corpus Check
- 186 files · ~178,941 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 20 file(s) not represented in the graph (top: .css 14, (none) 2, .bat 1)

## Summary
- 1089 nodes · 3176 edges · 59 communities (45 shown, 14 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 55 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8c1a22b6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- local/screens/Lobby.jsx
- Room Server and Tests
- i18n/index.jsx
- Settings.jsx
- select.js
- room.test.js
- Error Handling
- ref_node_url
- Build Dependencies
- Continuous Integration
- Project standards
- Third-party notices
- ref_node_test
- dead.test.js
- theme.test.js
- ready.js
- PWA Icons
- words/index.js
- Coverage Reporting
- fuzz.test.js
- Game Ending Checks
- Special Roles
- Screen Flow Checks
- useT
- server/store.js
- Hosting Configuration
- ref_node_fs
- LocalGame.jsx
- Design System: ImposterGame
- Style Checks
- Project Guide
- App.jsx
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
- reduce
- Current interface audit · issue #13
- Next
- Party Hub
- Tavern direction study · issue #13
- ImposterGame changelog
- Project instructions
- Components
- ref_node_assert
- engine.js
- Colors
- engine.test.js

## God Nodes (most connected - your core abstractions)
1. `useT()` - 99 edges
2. `react` - 44 edges
3. `reduce()` - 34 edges
4. `LocalGame()` - 32 edges
5. `step()` - 32 edges
6. `Icon()` - 31 edges
7. `Shell()` - 22 edges
8. `createGame()` - 22 edges
9. `Room()` - 22 edges
10. `Settings()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js
- `#17 shared game frame (in progress)` --references--> `RoomCode()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (59 total, 14 thin omitted)

### Community 0 - "local/screens/Lobby.jsx"
Cohesion: 0.11
Nodes (32): AddPlayerForm(), LobbyHint(), Scoreboard(), WinValues(), SeatActions(), useWords(), Lobby(), OnlineLobby() (+24 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (53): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+45 more)

### Community 2 - "i18n/index.jsx"
Cohesion: 0.09
Nodes (27): FILTERS, StringBoard(), StringRow(), translator(), compareAll(), compareKey(), hasTrouble(), placeholdersIn() (+19 more)

### Community 3 - "Settings.jsx"
Cohesion: 0.34
Nodes (15): Roles(), Scoring(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Calling(), Rounds(), Stealing() (+7 more)

### Community 4 - "select.js"
Cohesion: 0.21
Nodes (18): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), tally(), clueRound(), publicImposterCount(), buildPublicState() (+10 more)

### Community 5 - "room.test.js"
Cohesion: 0.14
Nodes (18): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), loadSession() (+10 more)

### Community 6 - "Error Handling"
Cohesion: 0.14
Nodes (24): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), described(), facts, failures (+16 more)

### Community 7 - "ref_node_url"
Cohesion: 0.13
Nodes (9): here, ICONS, PUBLIC, canBuild, failed, mark, results, root (+1 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.07
Nodes (31): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+23 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

### Community 12 - "ref_node_test"
Cohesion: 0.10
Nodes (33): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+25 more)

### Community 13 - "dead.test.js"
Cohesion: 0.13
Nodes (22): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+14 more)

### Community 14 - "theme.test.js"
Cohesion: 0.13
Nodes (21): read(), systemMode(), ThemeContext, ThemeProvider(), useTheme(), ALL, contrast(), css (+13 more)

### Community 15 - "ready.js"
Cohesion: 0.22
Nodes (14): autoImposterCount(), DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, maxImpostersFor(), PLAIN_CREW_FLOOR, resolveImposterCount(), ROUNDS_UNLIMITED (+6 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "words/index.js"
Cohesion: 0.08
Nodes (32): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+24 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.18
Nodes (15): voteOut(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction() (+7 more)

### Community 20 - "Game Ending Checks"
Cohesion: 0.17
Nodes (13): dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS, root (+5 more)

### Community 21 - "Special Roles"
Cohesion: 0.26
Nodes (8): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters(), TELLTALE_DECOYS

### Community 22 - "Screen Flow Checks"
Cohesion: 0.16
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 23 - "useT"
Cohesion: 0.06
Nodes (88): react, WORD_LANGUAGES, playerById(), IconBoard(), ICONS, describe(), EndGameButton(), hintLine() (+80 more)

### Community 24 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "ref_node_fs"
Cohesion: 0.17
Nodes (7): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here

### Community 27 - "LocalGame.jsx"
Cohesion: 0.09
Nodes (31): LocalGame(), Resume(), clearGame(), CONFIG_KEY, EMBLEMS_KEY, GAME_KEY, isResumable(), loadConfig() (+23 more)

### Community 28 - "Design System: ImposterGame"
Cohesion: 0.20
Nodes (10): Design System: ImposterGame, Do's and Don'ts, Elevation & Depth, Hierarchy, Layout, Named Rules, Overview, Shadow Vocabulary (+2 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.18
Nodes (9): HTML application shell, Playtest guide, Central scoring table, Custom word packs, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates (+1 more)

### Community 31 - "App.jsx"
Cohesion: 0.08
Nodes (38): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, #17 shared game frame (in progress), Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note (+30 more)

### Community 32 - "Imposter Icon"
Cohesion: 0.67
Nodes (3): Disguise, Hat, Imposter

### Community 33 - "Product"
Cohesion: 0.18
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 47 - "reduce"
Cohesion: 0.14
Nodes (19): createGame(), reduce(), DEFAULT_CONFIG, normaliseConfig(), publicState(), deepFreeze(), guard(), isStrict() (+11 more)

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

### Community 54 - "Components"
Cohesion: 0.22
Nodes (9): Banners and Dialogs, Buttons, Components, Navigation, Panels, Private Card, Room-code Chip, Segmented Control (+1 more)

### Community 55 - "ref_node_assert"
Cohesion: 0.36
Nodes (6): MAX_WIN_POINTS, paysTheEliminated(), pointsFor(), WIN_POINTS, WIN_REASONS, here

### Community 56 - "engine.js"
Cohesion: 0.24
Nodes (17): dealRoles(), decoyFor(), hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord(), recentWordWindow() (+9 more)

### Community 57 - "Colors"
Cohesion: 0.40
Nodes (5): Colors, Named Rules, Neutral, Primary, Secondary

### Community 58 - "engine.test.js"
Cohesion: 0.21
Nodes (13): EMPTY_HISTORY, applyAll(), deals(), FIVE, one(), OURS, revealAll(), roleIds() (+5 more)

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 359 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `Project Guide`, `reduce`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `local/screens/Lobby.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10558069381598793 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `reduce` to `Project standards`, `ref_node_test`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06519114688128773 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `local/screens/Lobby.jsx`, `i18n/index.jsx`, `Settings.jsx`, `room.test.js`, `Error Handling`, `Build Dependencies`, `ref_node_test`, `theme.test.js`, `LocalGame.jsx`, `App.jsx`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Should `i18n/index.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08562367864693446 - nodes in this community are weakly interconnected._