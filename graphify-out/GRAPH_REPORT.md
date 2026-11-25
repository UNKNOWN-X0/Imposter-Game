# Graph Report - Imposter-Game  (2026-11-25)

## Corpus Check
- 180 files · ~172,998 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 19 file(s) not represented in the graph (top: .css 13, (none) 2, .bat 1)

## Summary
- 1033 nodes · 3061 edges · 62 communities (49 shown, 13 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 53 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9317aa04`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- LocalGame.jsx
- Room Server and Tests
- ref_node_assert
- Settings.jsx
- IconBoard.jsx
- room.test.js
- Error Handling
- verify.mjs
- Build Dependencies
- Continuous Integration
- strings.js
- step
- fingerprint.mjs
- names.js
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
- Components
- screens.test.js
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
- reduce
- Current interface audit · issue #13
- Next
- Party Hub
- Tavern direction study · issue #13
- ImposterGame changelog
- Project instructions
- Colors
- deal.js
- engine.js
- Project standards
- engine.test.js
- verify.mjs
- lint.test.js
- strings.js

## God Nodes (most connected - your core abstractions)
1. `useT()` - 95 edges
2. `react` - 41 edges
3. `LocalGame()` - 40 edges
4. `reduce()` - 34 edges
5. `step()` - 32 edges
6. `Icon()` - 31 edges
7. `createGame()` - 26 edges
8. `Shell()` - 24 edges
9. `Room()` - 22 edges
10. `Settings()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js
- `#17 shared game frame (in progress)` --references--> `RoomCode()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx
- `#17 shared game frame (in progress)` --references--> `Shell()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (62 total, 13 thin omitted)

### Community 0 - "LocalGame.jsx"
Cohesion: 0.07
Nodes (61): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), hasNews() (+53 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (51): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+43 more)

### Community 2 - "ref_node_assert"
Cohesion: 0.12
Nodes (15): translator(), builtAtRuntime(), errorCodesInSource(), root, FALLBACK_LANG, inFlight, LANGUAGES, LOADERS (+7 more)

### Community 3 - "Settings.jsx"
Cohesion: 0.28
Nodes (17): presetFor(), same(), Roles(), Scoring(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Calling() (+9 more)

### Community 4 - "IconBoard.jsx"
Cohesion: 0.11
Nodes (40): WORD_LANGUAGES, ICONS, Marked(), PackLibrary(), PackRow(), filterPack(), matchAt(), shelfFor() (+32 more)

### Community 5 - "room.test.js"
Cohesion: 0.14
Nodes (17): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), saveSession() (+9 more)

### Community 6 - "Error Handling"
Cohesion: 0.11
Nodes (32): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+24 more)

### Community 7 - "verify.mjs"
Cohesion: 0.13
Nodes (10): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, here (+2 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.07
Nodes (31): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+23 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "strings.js"
Cohesion: 0.31
Nodes (10): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+2 more)

### Community 11 - "step"
Cohesion: 0.29
Nodes (16): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), step(), tally(), canCall(), cluesThisRound() (+8 more)

### Community 12 - "fingerprint.mjs"
Cohesion: 0.29
Nodes (4): args, file, here, { lines, text, hash }

### Community 13 - "names.js"
Cohesion: 0.29
Nodes (10): AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode(), unresolvedNames(), classesRendered(), classesStyled() (+2 more)

### Community 14 - "theme.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 15 - "ready.js"
Cohesion: 0.22
Nodes (16): autoImposterCount(), DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MAX_PLAYERS, maxImpostersFor(), MIN_PLAYERS, publicImposterCount() (+8 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "words/index.js"
Cohesion: 0.10
Nodes (28): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+20 more)

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

### Community 23 - "useT"
Cohesion: 0.07
Nodes (69): #17 shared game frame (in progress), react, playerById(), IconBoard(), PartyHub(), AddPlayerForm(), LobbyHint(), EndGameButton() (+61 more)

### Community 24 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "Components"
Cohesion: 0.22
Nodes (9): Banners and Dialogs, Buttons, Components, Navigation, Panels, Private Card, Room-code Chip, Segmented Control (+1 more)

### Community 27 - "screens.test.js"
Cohesion: 0.39
Nodes (7): isPlaying(), renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor(), here, MODES

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

### Community 47 - "reduce"
Cohesion: 0.11
Nodes (22): createGame(), reduce(), clueRound(), voteOut(), normaliseConfig(), buildPublicState(), publicState(), deepFreeze() (+14 more)

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

### Community 55 - "deal.js"
Cohesion: 0.18
Nodes (12): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+4 more)

### Community 56 - "engine.js"
Cohesion: 0.23
Nodes (11): fail(), GameError, mulberry32(), randomSeed(), shuffle(), MAX_WIN_POINTS, paysTheEliminated(), pointsFor() (+3 more)

### Community 57 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

### Community 58 - "engine.test.js"
Cohesion: 0.19
Nodes (15): pickWord(), applyAll(), normalise(), sameClue(), sameWord(), deals(), FIVE, one() (+7 more)

### Community 59 - "verify.mjs"
Cohesion: 0.20
Nodes (6): canBuild, failed, mark, results, root, skipped

### Community 60 - "lint.test.js"
Cohesion: 0.38
Nodes (6): foldLatinAccents(), INFLECTIONS, lintPack(), lintPacks(), normalise(), sameWordDifferentEnding()

### Community 61 - "strings.js"
Cohesion: 0.27
Nodes (9): answers(), askedKeys(), BUILT_AT_RUNTIME, deadKeys(), isBuiltAtRuntime(), keysAskedFor(), keysMentionedIn(), mentionedKeys() (+1 more)

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 345 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `Project Guide`, `reduce`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `LocalGame.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07310126582278481 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `reduce` to `LocalGame.jsx`, `Project standards`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06965174129353234 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `LocalGame.jsx`, `Settings.jsx`, `IconBoard.jsx`, `room.test.js`, `Error Handling`, `Build Dependencies`, `strings.js`, `theme.test.js`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Should `ref_node_assert` be split into smaller, more focused modules?**
  _Cohesion score 0.1164021164021164 - nodes in this community are weakly interconnected._