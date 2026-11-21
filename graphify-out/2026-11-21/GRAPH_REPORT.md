# Graph Report - Imposter-Game  (2026-11-21)

## Corpus Check
- 180 files · ~171,374 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 19 file(s) not represented in the graph (top: .css 13, (none) 2, .bat 1)

## Summary
- 1022 nodes · 3060 edges · 56 communities (43 shown, 13 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 51 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `54fb6da0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- words/index.js
- Room Server and Tests
- strings/index.js
- Settings.jsx
- StringBoard.jsx
- room.test.js
- Error Handling
- deal.js
- Build Dependencies
- Continuous Integration
- dead.test.js
- engine.js
- ref_node_fs
- Core Rules Engine
- theme.test.js
- lint.test.js
- PWA Icons
- settings.test.js
- Coverage Reporting
- Voting and Fuzz Tests
- Game Ending Checks
- Special Roles
- Screen Flow Checks
- useT
- custom.js
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
- Project standards
- step

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
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
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
Cohesion: 0.08
Nodes (38): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+30 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (52): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+44 more)

### Community 2 - "strings/index.js"
Cohesion: 0.11
Nodes (14): pkg, hintLine(), translator(), FALLBACK_LANG, inFlight, LANGUAGES, LOADERS, STRINGS (+6 more)

### Community 3 - "Settings.jsx"
Cohesion: 0.32
Nodes (16): Roles(), Scoring(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Calling(), Rounds(), Stealing() (+8 more)

### Community 4 - "StringBoard.jsx"
Cohesion: 0.31
Nodes (10): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+2 more)

### Community 5 - "room.test.js"
Cohesion: 0.14
Nodes (18): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), loadSession() (+10 more)

### Community 6 - "Error Handling"
Cohesion: 0.11
Nodes (32): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+24 more)

### Community 7 - "deal.js"
Cohesion: 0.18
Nodes (12): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+4 more)

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
Cohesion: 0.20
Nodes (14): pickWord(), normalise(), sameClue(), sameWord(), fail(), mulberry32(), randomSeed(), shuffle() (+6 more)

### Community 12 - "ref_node_fs"
Cohesion: 0.08
Nodes (20): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, args (+12 more)

### Community 13 - "Core Rules Engine"
Cohesion: 0.19
Nodes (14): applyAll(), clueRound(), deals(), FIVE, one(), OURS, revealAll(), roleIds() (+6 more)

### Community 14 - "theme.test.js"
Cohesion: 0.16
Nodes (17): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+9 more)

### Community 15 - "lint.test.js"
Cohesion: 0.38
Nodes (6): foldLatinAccents(), INFLECTIONS, lintPack(), lintPacks(), normalise(), sameWordDifferentEnding()

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "settings.test.js"
Cohesion: 0.24
Nodes (13): autoImposterCount(), DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, maxImpostersFor(), resolveImposterCount(), ROUNDS_UNLIMITED, PRESET_KEYS (+5 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.08
Nodes (22): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord() (+14 more)

### Community 19 - "Voting and Fuzz Tests"
Cohesion: 0.19
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
Cohesion: 0.05
Nodes (111): react, App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write() (+103 more)

### Community 24 - "custom.js"
Cohesion: 0.19
Nodes (21): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+13 more)

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "Components"
Cohesion: 0.22
Nodes (9): Banners and Dialogs, Buttons, Components, Navigation, Panels, Private Card, Room-code Chip, Segmented Control (+1 more)

### Community 27 - "LocalGame.jsx"
Cohesion: 0.15
Nodes (28): VERSION, LocalGame(), clearGame(), CONFIG_KEY, GAME_KEY, hasSavedGame(), isResumable(), loadConfig() (+20 more)

### Community 28 - "Design System: ImposterGame"
Cohesion: 0.13
Nodes (15): Colors, Design System: ImposterGame, Do's and Don'ts, Elevation & Depth, Hierarchy, Layout, Named Rules, Named Rules (+7 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.18
Nodes (9): HTML application shell, Playtest guide, Central scoring table, Custom word packs, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates (+1 more)

### Community 31 - "Imposter-Game work note"
Cohesion: 0.18
Nodes (10): #14 scope correction (2026-11-21), Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21), Next-issue scope mapped (no implementation started), Owner decisions received (+2 more)

### Community 32 - "Imposter Icon"
Cohesion: 0.67
Nodes (3): Disguise, Hat, Imposter

### Community 33 - "Product"
Cohesion: 0.18
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 47 - "createGame"
Cohesion: 0.14
Nodes (19): createGame(), reduce(), normaliseConfig(), publicState(), deepFreeze(), guard(), isStrict(), setStrict() (+11 more)

### Community 48 - "Current interface audit · issue #13"
Cohesion: 0.29
Nodes (6): Assessment A, Assessment B (initial evidence), Current interface audit · issue #13, Evidence locations, Independent mock verification, Owner decision

### Community 49 - "Next"
Cohesion: 0.18
Nodes (11): Candidate games, Decisions to settle before broad extraction, Delivery plan, Direction, Later, Later, Now, Pack system direction (+3 more)

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

### Community 54 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

### Community 55 - "step"
Cohesion: 0.21
Nodes (22): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), step(), tally(), publicImposterCount(), alivePlayers() (+14 more)

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 338 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `Project Guide`, `createGame`?**
  _High betweenness centrality (0.156) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `words/index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.07619738751814223 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `createGame` to `custom.js`, `Project standards`?**
  _High betweenness centrality (0.133) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06777493606138107 - nodes in this community are weakly interconnected._
- **Why does `validatePack()` connect `custom.js` to `words/index.js`, `engine.js`, `createGame`, `step`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Should `strings/index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.11290322580645161 - nodes in this community are weakly interconnected._