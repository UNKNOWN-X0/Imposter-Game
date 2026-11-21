# Graph Report - Imposter-Game  (2026-11-21)

## Corpus Check
- 180 files · ~172,060 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 19 file(s) not represented in the graph (top: .css 13, (none) 2, .bat 1)

## Summary
- 1027 nodes · 3059 edges · 56 communities (43 shown, 13 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 51 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7175c54c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- words/index.js
- Room Server and Tests
- i18n/index.jsx
- Settings.jsx
- IconBoard.jsx
- room.test.js
- Error Handling
- verify.mjs
- Build Dependencies
- Continuous Integration
- dead.test.js
- engine.js
- fingerprint.mjs
- Core Rules Engine
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
- select.js

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

## Communities (56 total, 13 thin omitted)

### Community 0 - "words/index.js"
Cohesion: 0.09
Nodes (51): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), buildPack() (+43 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (58): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+50 more)

### Community 2 - "i18n/index.jsx"
Cohesion: 0.06
Nodes (40): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord() (+32 more)

### Community 3 - "Settings.jsx"
Cohesion: 0.32
Nodes (16): Roles(), Scoring(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Calling(), Rounds(), Stealing() (+8 more)

### Community 4 - "IconBoard.jsx"
Cohesion: 0.12
Nodes (39): ICONS, hintLine(), PackChip(), RoleCard(), GameOverCard(), StealCard(), VerdictCard(), BellIcon() (+31 more)

### Community 5 - "room.test.js"
Cohesion: 0.14
Nodes (17): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), saveSession() (+9 more)

### Community 6 - "Error Handling"
Cohesion: 0.13
Nodes (28): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+20 more)

### Community 7 - "verify.mjs"
Cohesion: 0.12
Nodes (10): here, here, ICONS, PUBLIC, canBuild, failed, mark, results (+2 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.07
Nodes (31): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+23 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "dead.test.js"
Cohesion: 0.13
Nodes (24): placeholdersIn(), placeholderTrouble(), builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE (+16 more)

### Community 11 - "engine.js"
Cohesion: 0.13
Nodes (32): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord() (+24 more)

### Community 12 - "fingerprint.mjs"
Cohesion: 0.29
Nodes (4): args, file, here, { lines, text, hash }

### Community 13 - "Core Rules Engine"
Cohesion: 0.23
Nodes (12): applyAll(), deals(), FIVE, one(), OURS, revealAll(), roleIds(), SEVEN (+4 more)

### Community 14 - "theme.test.js"
Cohesion: 0.16
Nodes (17): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+9 more)

### Community 15 - "ready.js"
Cohesion: 0.12
Nodes (19): act(), here, post(), autoImposterCount(), DECOY, DEFAULT_CONFIG, IMPOSTERS_AUTO, IMPOSTERS_RANDOM (+11 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "words/index.js"
Cohesion: 0.08
Nodes (34): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+26 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.11
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.20
Nodes (12): chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction(), someAction() (+4 more)

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
Nodes (50): react, voteOut(), MIN_PLAYERS, alivePlayers(), IconBoard(), PartyHub(), AddPlayerForm(), LobbyHint() (+42 more)

### Community 24 - "layout.mjs"
Cohesion: 0.32
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "Components"
Cohesion: 0.22
Nodes (9): Banners and Dialogs, Buttons, Components, Navigation, Panels, Private Card, Room-code Chip, Segmented Control (+1 more)

### Community 27 - "LocalGame.jsx"
Cohesion: 0.13
Nodes (30): PHASE, PassGate(), LocalGame(), Reveal(), Steal(), clearGame(), CONFIG_KEY, GAME_KEY (+22 more)

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
Cohesion: 0.15
Nodes (12): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21) (+4 more)

### Community 32 - "Imposter Icon"
Cohesion: 0.67
Nodes (3): Disguise, Hat, Imposter

### Community 33 - "Product"
Cohesion: 0.18
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 47 - "createGame"
Cohesion: 0.15
Nodes (16): createGame(), reduce(), clueRound(), normaliseConfig(), deepFreeze(), guard(), isStrict(), setStrict() (+8 more)

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

### Community 55 - "select.js"
Cohesion: 0.31
Nodes (9): tally(), publicImposterCount(), buildPublicState(), canCall(), cluesThisRound(), currentTurn(), isAlive(), scrubbed (+1 more)

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 343 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Room Server and Tests` to `Project Guide`?**
  _High betweenness centrality (0.138) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `words/index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.0907928388746803 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `Room Server and Tests` to `words/index.js`, `createGame`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06599597585513078 - nodes in this community are weakly interconnected._
- **Why does `validatePack()` connect `words/index.js` to `words/index.js`, `engine.js`, `Room Server and Tests`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **Should `i18n/index.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.05853174603174603 - nodes in this community are weakly interconnected._