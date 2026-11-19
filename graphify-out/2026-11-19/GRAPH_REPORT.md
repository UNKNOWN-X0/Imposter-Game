# Graph Report - Imposter-Game  (2026-11-19)

## Corpus Check
- 177 files · ~165,533 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 19 file(s) not represented in the graph (top: .css 13, (none) 2, .bat 1)

## Summary
- 1004 nodes · 3032 edges · 56 communities (42 shown, 14 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 51 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4148676b`
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
- IconBoard.jsx
- Build Dependencies
- Continuous Integration
- names.js
- engine.js
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
- LocalGame.jsx
- words/index.js
- Hosting Configuration
- ref_node_assert
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
- step
- engine.test.js
- Next
- Party Hub
- Now
- ImposterGame changelog
- Project instructions
- Project standards
- Custom word packs

## God Nodes (most connected - your core abstractions)
1. `useT()` - 97 edges
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
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js
- `dispatch()` --calls--> `GameError`  [EXTRACTED]
  server/rooms.js → src/core/errors.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (56 total, 14 thin omitted)

### Community 0 - "useT"
Cohesion: 0.13
Nodes (39): react, MIN_PLAYERS, playerById(), AddPlayerForm(), LobbyHint(), PlayerList(), Scoreboard(), WinValues() (+31 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (51): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+43 more)

### Community 2 - "strings/index.js"
Cohesion: 0.07
Nodes (33): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord() (+25 more)

### Community 3 - "Settings.jsx"
Cohesion: 0.23
Nodes (21): WORD_LANGUAGES, Roles(), Scoring(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Calling(), Rounds() (+13 more)

### Community 4 - "custom.js"
Cohesion: 0.14
Nodes (28): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+20 more)

### Community 5 - "room.test.js"
Cohesion: 0.12
Nodes (24): useErrorText(), JoinScreen(), OnlineGame(), Room(), api(), ApiError, clearSession(), connect() (+16 more)

### Community 6 - "Error Handling"
Cohesion: 0.14
Nodes (25): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+17 more)

### Community 7 - "IconBoard.jsx"
Cohesion: 0.12
Nodes (40): ICONS, hintLine(), PackChip(), RoleCard(), GameOverCard(), VerdictCard(), OnlineReveal(), BellIcon() (+32 more)

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
Cohesion: 0.23
Nodes (11): fail(), GameError, mulberry32(), randomSeed(), shuffle(), MAX_WIN_POINTS, paysTheEliminated(), pointsFor() (+3 more)

### Community 12 - "App.jsx"
Cohesion: 0.12
Nodes (22): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), Crash() (+14 more)

### Community 13 - "Core Rules Engine"
Cohesion: 0.17
Nodes (15): createGame(), reduce(), deepFreeze(), guard(), isStrict(), setStrict(), strict, table() (+7 more)

### Community 14 - "Theme Management"
Cohesion: 0.23
Nodes (12): builtAtRuntime(), errorCodesInSource(), root, read(), systemMode(), ThemeContext, ThemeProvider(), useTheme() (+4 more)

### Community 15 - "Node Platform APIs"
Cohesion: 0.13
Nodes (9): here, ICONS, PUBLIC, canBuild, failed, mark, results, root (+1 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "settings.test.js"
Cohesion: 0.19
Nodes (17): autoImposterCount(), DECOY, DEFAULT_CONFIG, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, maxImpostersFor(), normaliseConfig(), resolveImposterCount() (+9 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "Voting and Fuzz Tests"
Cohesion: 0.19
Nodes (14): voteOut(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction() (+6 more)

### Community 20 - "Game Ending Checks"
Cohesion: 0.17
Nodes (13): dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS, root (+5 more)

### Community 21 - "Special Roles"
Cohesion: 0.26
Nodes (8): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters(), TELLTALE_DECOYS

### Community 22 - "Screen Flow Checks"
Cohesion: 0.11
Nodes (17): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+9 more)

### Community 23 - "LocalGame.jsx"
Cohesion: 0.15
Nodes (28): EndGameButton(), LocalGame(), Resume(), clearGame(), CONFIG_KEY, GAME_KEY, isResumable(), loadConfig() (+20 more)

### Community 24 - "words/index.js"
Cohesion: 0.07
Nodes (38): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+30 more)

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "ref_node_assert"
Cohesion: 0.13
Nodes (9): here, ALL, contrast(), css, here, index, luminance(), parts (+1 more)

### Community 27 - "StringBoard.jsx"
Cohesion: 0.16
Nodes (19): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+11 more)

### Community 28 - "Design System: ImposterGame"
Cohesion: 0.08
Nodes (26): Banner, Buttons, Cards, Colors, Components, Design System: ImposterGame, Do:, Do's and Don'ts (+18 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.21
Nodes (8): HTML application shell, Playtest guide, Central scoring table, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates, Shared deterministic rules engine

### Community 31 - "deal.js"
Cohesion: 0.19
Nodes (11): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+3 more)

### Community 32 - "Imposter Icon"
Cohesion: 0.67
Nodes (3): Disguise, Hat, Imposter

### Community 33 - "Product"
Cohesion: 0.18
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 47 - "step"
Cohesion: 0.22
Nodes (20): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), step(), tally(), clueRound(), publicImposterCount() (+12 more)

### Community 48 - "engine.test.js"
Cohesion: 0.18
Nodes (16): pickWord(), applyAll(), normalise(), sameClue(), sameWord(), deals(), FIVE, one() (+8 more)

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

### Community 54 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 323 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `settings.test.js`, `Project Guide`?**
  _High betweenness centrality (0.164) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useT` be split into smaller, more focused modules?**
  _Cohesion score 0.13220518244315177 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `settings.test.js` to `custom.js`, `Project standards`, `step`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06965174129353234 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `strings/index.js`, `Settings.jsx`, `custom.js`, `room.test.js`, `Error Handling`, `IconBoard.jsx`, `Build Dependencies`, `App.jsx`, `Theme Management`, `LocalGame.jsx`, `StringBoard.jsx`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._
- **Should `strings/index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.0660377358490566 - nodes in this community are weakly interconnected._