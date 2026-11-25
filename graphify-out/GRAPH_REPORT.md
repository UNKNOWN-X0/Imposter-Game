# Graph Report - Imposter-Game  (2026-11-25)

## Corpus Check
- 191 files · ~183,193 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 20 file(s) not represented in the graph (top: .css 14, (none) 2, .bat 1)

## Summary
- 1134 nodes · 3221 edges · 64 communities (48 shown, 16 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 56 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8aa97262`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- i18n/index.jsx
- Room Server and Tests
- dead.test.js
- words/index.js
- local/screens/Lobby.jsx
- IconBoard.jsx
- Error Handling
- verify.mjs
- Build Dependencies
- Continuous Integration
- custom.js
- Third-party notices
- words/index.js
- ref_node_assert
- theme.test.js
- App.jsx
- PWA Icons
- rules.js
- Coverage Reporting
- fuzz.test.js
- Game Ending Checks
- Special Roles
- Screen Flow Checks
- select.js
- server/store.js
- Hosting Configuration
- useT
- LocalGame.jsx
- OnlineGame.jsx
- Style Checks
- Project Guide
- room.test.js
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
- engine.test.js
- Current interface audit · issue #13
- Next
- Party Hub
- Tavern direction study · issue #13
- ImposterGame changelog
- Project instructions
- Components
- Imposter-Game work note
- engine.js
- Avatar
- createGame
- RoleCard.jsx
- Verdict.jsx
- ref_node_url
- Project standards
- Custom word packs

## God Nodes (most connected - your core abstractions)
1. `useT()` - 101 edges
2. `react` - 47 edges
3. `reduce()` - 35 edges
4. `step()` - 33 edges
5. `Icon()` - 31 edges
6. `LocalGame()` - 31 edges
7. `createGame()` - 25 edges
8. `Room()` - 22 edges
9. `Settings()` - 21 edges
10. `Avatar()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `#17 shared game frame (in progress)` --references--> `RoomCode()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx
- `#17 shared game frame (in progress)` --references--> `Shell()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (64 total, 16 thin omitted)

### Community 0 - "i18n/index.jsx"
Cohesion: 0.12
Nodes (17): react, IconBoard(), PartyHub(), EndGameButton(), PhaseStepper(), Credit(), FirstRun(), Rules() (+9 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (54): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+46 more)

### Community 2 - "dead.test.js"
Cohesion: 0.13
Nodes (22): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+14 more)

### Community 3 - "words/index.js"
Cohesion: 0.06
Nodes (40): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+32 more)

### Community 4 - "local/screens/Lobby.jsx"
Cohesion: 0.11
Nodes (26): WinValues(), useWords(), Lobby(), OnlineLobby(), EmblemIcon(), byId, defaultEmblem(), EMBLEM_IDS (+18 more)

### Community 5 - "IconBoard.jsx"
Cohesion: 0.15
Nodes (32): ICONS, Marked(), PackLibrary(), PackRow(), ChevronLeftIcon(), ContrastIcon(), CopyIcon(), DiceIcon() (+24 more)

### Community 6 - "Error Handling"
Cohesion: 0.14
Nodes (26): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+18 more)

### Community 7 - "verify.mjs"
Cohesion: 0.18
Nodes (6): canBuild, failed, mark, results, root, skipped

### Community 8 - "Build Dependencies"
Cohesion: 0.07
Nodes (31): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+23 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "custom.js"
Cohesion: 0.12
Nodes (30): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+22 more)

### Community 12 - "words/index.js"
Cohesion: 0.34
Nodes (15): Roles(), Scoring(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Calling(), Rounds(), Stealing() (+7 more)

### Community 13 - "ref_node_assert"
Cohesion: 0.19
Nodes (4): here, here, ICONS, PUBLIC

### Community 14 - "theme.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 15 - "App.jsx"
Cohesion: 0.06
Nodes (45): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), hasNews() (+37 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "rules.js"
Cohesion: 0.16
Nodes (21): autoImposterCount(), DECOY, DEFAULT_CONFIG, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MAX_NAME, MAX_PLAYERS, maxImpostersFor() (+13 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.23
Nodes (12): chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction(), someAction() (+4 more)

### Community 20 - "Game Ending Checks"
Cohesion: 0.17
Nodes (13): dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS, root (+5 more)

### Community 21 - "Special Roles"
Cohesion: 0.26
Nodes (7): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters()

### Community 22 - "Screen Flow Checks"
Cohesion: 0.16
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 23 - "select.js"
Cohesion: 0.29
Nodes (16): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), step(), tally(), canCall(), cluesThisRound() (+8 more)

### Community 24 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "useT"
Cohesion: 0.24
Nodes (19): CallButton(), CallPanel(), NotTheImposter(), ClueGrid(), ClueInput(), ClueList(), roundLabel(), Timer() (+11 more)

### Community 27 - "LocalGame.jsx"
Cohesion: 0.05
Nodes (38): nameProblem(), LocalGame(), Resume(), Reveal(), CallOnOnePhone(), Talking(), clearGame(), CONFIG_KEY (+30 more)

### Community 28 - "OnlineGame.jsx"
Cohesion: 0.27
Nodes (13): PlayerList(), RoleCard(), GameOverCard(), useErrorText(), JoinScreen(), OnlineGame(), Room(), OnlineClues() (+5 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.21
Nodes (8): HTML application shell, Playtest guide, Central scoring table, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates, Shared deterministic rules engine

### Community 31 - "room.test.js"
Cohesion: 0.14
Nodes (18): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), loadSession() (+10 more)

### Community 32 - "Imposter Icon"
Cohesion: 0.67
Nodes (3): Disguise, Hat, Imposter

### Community 33 - "Product"
Cohesion: 0.18
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 47 - "engine.test.js"
Cohesion: 0.14
Nodes (20): applyAll(), reduce(), clueRound(), deals(), FIVE, one(), OURS, revealAll() (+12 more)

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
Cohesion: 0.08
Nodes (26): Banners and Dialogs, Buttons, Colors, Components, Design System: ImposterGame, Do's and Don'ts, Elevation & Depth, Hierarchy (+18 more)

### Community 55 - "Imposter-Game work note"
Cohesion: 0.14
Nodes (13): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, #17 shared game frame (in progress), Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note (+5 more)

### Community 56 - "engine.js"
Cohesion: 0.13
Nodes (24): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord() (+16 more)

### Community 57 - "Avatar"
Cohesion: 0.31
Nodes (5): Scoreboard(), AddPlayerForm(), LobbyHint(), SeatActions(), Avatar()

### Community 58 - "createGame"
Cohesion: 0.21
Nodes (12): createGame(), normaliseConfig(), buildPublicState(), publicState(), deepFreeze(), guard(), isStrict(), setStrict() (+4 more)

### Community 60 - "Verdict.jsx"
Cohesion: 0.29
Nodes (4): VerdictCard(), Tally(), Confetti(), Rich()

### Community 61 - "ref_node_url"
Cohesion: 0.32
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 62 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 384 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `createGame`, `Project Guide`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `i18n/index.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12222222222222222 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `createGame` to `custom.js`, `Project standards`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06533646322378717 - nodes in this community are weakly interconnected._
- **Why does `useT()` connect `useT` to `i18n/index.jsx`, `local/screens/Lobby.jsx`, `IconBoard.jsx`, `Error Handling`, `LocalGame.jsx`, `custom.js`, `words/index.js`, `Verdict.jsx`, `App.jsx`, `Avatar`, `RoleCard.jsx`, `OnlineGame.jsx`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Should `dead.test.js` be split into smaller, more focused modules?**
  _Cohesion score 0.12698412698412698 - nodes in this community are weakly interconnected._