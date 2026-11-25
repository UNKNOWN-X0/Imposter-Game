# Graph Report - Imposter-Game  (2026-11-25)

## Corpus Check
- 191 files · ~184,004 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 20 file(s) not represented in the graph (top: .css 14, (none) 2, .bat 1)

## Summary
- 1146 nodes · 3209 edges · 63 communities (48 shown, 15 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 56 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `81e8b9e0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- i18n/index.jsx
- Room Server and Tests
- names.js
- words/index.js
- local/screens/Lobby.jsx
- IconBoard.jsx
- Error Handling
- strings.js
- Build Dependencies
- Continuous Integration
- custom.js
- Third-party notices
- words/index.js
- ref_node_fs
- theme.test.js
- App.jsx
- PWA Icons
- rules.js
- Coverage Reporting
- fuzz.test.js
- Game Ending Checks
- Special Roles
- Screen Flow Checks
- screens.test.js
- server/store.js
- Hosting Configuration
- useT
- LocalGame.jsx
- Talking.jsx
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
- reduce
- ref_node_test
- Resume.jsx
- Project standards
- Custom word packs

## God Nodes (most connected - your core abstractions)
1. `useT()` - 102 edges
2. `react` - 47 edges
3. `reduce()` - 35 edges
4. `step()` - 33 edges
5. `LocalGame()` - 31 edges
6. `Icon()` - 31 edges
7. `createGame()` - 23 edges
8. `Avatar()` - 20 edges
9. `Settings()` - 19 edges
10. `Segmented()` - 19 edges

## Surprising Connections (you probably didn't know these)
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Invariants` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `#17 shared game frame (in progress)` --references--> `RoomCode()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (63 total, 15 thin omitted)

### Community 0 - "i18n/index.jsx"
Cohesion: 0.13
Nodes (12): react, PhaseStepper(), detectLanguage(), LanguageContext, LanguageProvider(), supported(), LanguagePicker(), loadStrings() (+4 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (52): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+44 more)

### Community 2 - "names.js"
Cohesion: 0.29
Nodes (10): AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode(), unresolvedNames(), classesRendered(), classesStyled() (+2 more)

### Community 3 - "words/index.js"
Cohesion: 0.05
Nodes (46): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+38 more)

### Community 4 - "local/screens/Lobby.jsx"
Cohesion: 0.17
Nodes (12): WinValues(), useWords(), Lobby(), OnlineLobby(), Candle(), chairsFor(), Crown(), Mug() (+4 more)

### Community 5 - "IconBoard.jsx"
Cohesion: 0.08
Nodes (44): ICONS, PlayerList(), Scoreboard(), PackChip(), PackRow(), RoleCard(), GameOverCard(), VerdictCard() (+36 more)

### Community 6 - "Error Handling"
Cohesion: 0.14
Nodes (25): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+17 more)

### Community 7 - "strings.js"
Cohesion: 0.18
Nodes (17): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+9 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.07
Nodes (31): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+23 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "custom.js"
Cohesion: 0.07
Nodes (40): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+32 more)

### Community 12 - "words/index.js"
Cohesion: 0.26
Nodes (17): Roles(), Scoring(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Calling(), Rounds(), Stealing() (+9 more)

### Community 13 - "ref_node_fs"
Cohesion: 0.07
Nodes (20): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, args (+12 more)

### Community 14 - "theme.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 15 - "App.jsx"
Cohesion: 0.14
Nodes (24): #17 shared game frame (in progress), App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write() (+16 more)

### Community 16 - "PWA Icons"
Cohesion: 0.13
Nodes (18): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), answers(), isBuiltAtRuntime() (+10 more)

### Community 17 - "rules.js"
Cohesion: 0.19
Nodes (16): autoImposterCount(), DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, maxImpostersFor(), normaliseConfig(), resolveImposterCount(), ROUNDS_UNLIMITED (+8 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.14
Nodes (19): clueRound(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction() (+11 more)

### Community 20 - "Game Ending Checks"
Cohesion: 0.17
Nodes (13): dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS, root (+5 more)

### Community 21 - "Special Roles"
Cohesion: 0.18
Nodes (14): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters(), MAX_NAME (+6 more)

### Community 22 - "Screen Flow Checks"
Cohesion: 0.16
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 23 - "screens.test.js"
Cohesion: 0.39
Nodes (7): isPlaying(), renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor(), here, MODES

### Community 24 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "useT"
Cohesion: 0.22
Nodes (19): CallButton(), CallPanel(), NotTheImposter(), ClueGrid(), ClueInput(), ClueList(), roundLabel(), Timer() (+11 more)

### Community 27 - "LocalGame.jsx"
Cohesion: 0.18
Nodes (19): EndGameButton(), LocalGame(), Reveal(), clearGame(), CONFIG_KEY, GAME_KEY, isResumable(), loadConfig() (+11 more)

### Community 28 - "Talking.jsx"
Cohesion: 0.11
Nodes (3): CallOnOnePhone(), Talking(), OnlineClues()

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
Cohesion: 0.11
Nodes (24): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+16 more)

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
Cohesion: 0.15
Nodes (12): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21) (+4 more)

### Community 56 - "engine.js"
Cohesion: 0.17
Nodes (24): pickWord(), advanceAfterVerdict(), finish(), normalise(), resolveOutcome(), resolveVote(), sameClue(), sameWord() (+16 more)

### Community 57 - "Avatar"
Cohesion: 0.11
Nodes (29): MAX_PLAYERS, nameProblem(), AddPlayerForm(), EmblemPicker(), LobbyHint(), PartyContext, PartyProvider(), SeatActions() (+21 more)

### Community 58 - "reduce"
Cohesion: 0.15
Nodes (17): createGame(), reduce(), voteOut(), publicState(), deepFreeze(), guard(), isStrict(), setStrict() (+9 more)

### Community 59 - "ref_node_test"
Cohesion: 0.33
Nodes (3): builtAtRuntime(), errorCodesInSource(), root

### Community 60 - "Resume.jsx"
Cohesion: 0.50
Nodes (3): IconBoard(), Resume(), BrandMark()

### Community 62 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 387 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `rules.js`, `Project Guide`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `i18n/index.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1330049261083744 - nodes in this community are weakly interconnected._
- **Why does `useT()` connect `useT` to `i18n/index.jsx`, `local/screens/Lobby.jsx`, `IconBoard.jsx`, `Error Handling`, `custom.js`, `words/index.js`, `Talking.jsx`, `App.jsx`, `Avatar`, `LocalGame.jsx`, `Resume.jsx`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06583850931677018 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `rules.js` to `custom.js`, `reduce`, `Project standards`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Should `words/index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.0539906103286385 - nodes in this community are weakly interconnected._