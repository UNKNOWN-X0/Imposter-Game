# Graph Report - Imposter-Game  (2026-11-20)

## Corpus Check
- 177 files · ~165,614 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 19 file(s) not represented in the graph (top: .css 13, (none) 2, .bat 1)

## Summary
- 998 nodes · 3037 edges · 53 communities (39 shown, 14 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 51 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `079b73bb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useT
- Room Server and Tests
- strings/index.js
- Settings.jsx
- Components
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
- useT
- words/index.js
- Hosting Configuration
- ref_node_assert
- screens.test.js
- Design System: ImposterGame
- Style Checks
- Project Guide
- GameError
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
- deal.js
- engine.test.js
- Next
- Party Hub
- ImposterGame changelog
- Project instructions

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
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `createRoom()` --calls--> `createGame()`  [EXTRACTED]
  server/rooms.js → src/core/deal.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (53 total, 14 thin omitted)

### Community 0 - "useT"
Cohesion: 0.10
Nodes (48): IconBoard(), ICONS, PartyHub(), hintLine(), PackChip(), RoleCard(), GameOverCard(), VerdictCard() (+40 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.06
Nodes (60): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+52 more)

### Community 2 - "strings/index.js"
Cohesion: 0.07
Nodes (35): hasNews(), noteKey(), RELEASES, since(), pkg, VERSION, Changelog(), FILTERS (+27 more)

### Community 3 - "Settings.jsx"
Cohesion: 0.17
Nodes (27): WORD_LANGUAGES, Roles(), Scoring(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Calling(), Rounds() (+19 more)

### Community 4 - "Components"
Cohesion: 0.22
Nodes (9): Banner, Buttons, Cards, Components, Icons, Motion, Party hub, Room-code chip (+1 more)

### Community 5 - "room.test.js"
Cohesion: 0.06
Nodes (60): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), buildPack() (+52 more)

### Community 6 - "Error Handling"
Cohesion: 0.14
Nodes (25): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+17 more)

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
Cohesion: 0.22
Nodes (21): pickWord(), advanceAfterVerdict(), finish(), normalise(), resolveOutcome(), resolveVote(), sameClue(), sameWord() (+13 more)

### Community 12 - "layout.mjs"
Cohesion: 0.38
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 13 - "Core Rules Engine"
Cohesion: 0.15
Nodes (17): createGame(), reduce(), voteOut(), normaliseConfig(), deepFreeze(), guard(), isStrict(), setStrict() (+9 more)

### Community 14 - "Theme Management"
Cohesion: 0.30
Nodes (9): read(), systemMode(), ThemeContext, ThemeProvider(), useTheme(), DEFAULT_MODE, DEFAULT_THEME, MODES (+1 more)

### Community 15 - "Node Platform APIs"
Cohesion: 0.13
Nodes (9): here, ICONS, PUBLIC, canBuild, failed, mark, results, root (+1 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "settings.test.js"
Cohesion: 0.21
Nodes (15): autoImposterCount(), DECOY, DEFAULT_CONFIG, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, maxImpostersFor(), resolveImposterCount(), ROUNDS_UNLIMITED (+7 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "Voting and Fuzz Tests"
Cohesion: 0.14
Nodes (22): tally(), clueRound(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS (+14 more)

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
Cohesion: 0.09
Nodes (60): react, MAX_PLAYERS, MIN_PLAYERS, AddPlayerForm(), LobbyHint(), EndGameButton(), PlayerList(), Scoreboard() (+52 more)

### Community 24 - "words/index.js"
Cohesion: 0.07
Nodes (38): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+30 more)

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "ref_node_assert"
Cohesion: 0.13
Nodes (9): here, ALL, contrast(), css, here, index, luminance(), parts (+1 more)

### Community 27 - "screens.test.js"
Cohesion: 0.39
Nodes (7): isPlaying(), renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor(), here, MODES

### Community 28 - "Design System: ImposterGame"
Cohesion: 0.11
Nodes (18): Colors, Design System: ImposterGame, Do:, Do's and Don'ts, Don't:, Elevation & Depth, Hierarchy, Layout (+10 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.18
Nodes (9): HTML application shell, Playtest guide, Central scoring table, Custom word packs, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates (+1 more)

### Community 32 - "Imposter Icon"
Cohesion: 0.67
Nodes (3): Disguise, Hat, Imposter

### Community 33 - "Product"
Cohesion: 0.18
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 47 - "deal.js"
Cohesion: 0.19
Nodes (11): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+3 more)

### Community 48 - "engine.test.js"
Cohesion: 0.23
Nodes (12): applyAll(), deals(), FIVE, one(), OURS, revealAll(), roleIds(), SEVEN (+4 more)

### Community 49 - "Next"
Cohesion: 0.18
Nodes (11): Candidate games, Decisions to settle before broad extraction, Delivery plan, Direction, Later, Next, Now, Pack system direction (+3 more)

### Community 50 - "Party Hub"
Cohesion: 0.40
Nodes (4): Audience and task, Direction contract, Party Hub, Scope and visitor mode

### Community 52 - "ImposterGame changelog"
Cohesion: 0.29
Nodes (4): Imposter-side parity cap includes sidekick, ImposterGame changelog, Persisted multiplayer rooms, Text-based browser layout baselines

### Community 53 - "Project instructions"
Cohesion: 0.67
Nodes (3): Local workflow, Project data, Project instructions

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 317 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Room Server and Tests` to `Project Guide`?**
  _High betweenness centrality (0.137) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useT` be split into smaller, more focused modules?**
  _Cohesion score 0.09724106739032112 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `Room Server and Tests` to `Core Rules Engine`, `room.test.js`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06070175438596491 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `useT`, `strings/index.js`, `Settings.jsx`, `room.test.js`, `Error Handling`, `Build Dependencies`, `Theme Management`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `strings/index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._