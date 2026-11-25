# Graph Report - Imposter-Game  (2026-11-25)

## Corpus Check
- 191 files · ~182,527 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 20 file(s) not represented in the graph (top: .css 14, (none) 2, .bat 1)

## Summary
- 1119 nodes · 3238 edges · 56 communities (42 shown, 14 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 56 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5cc4655c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useT
- Room Server and Tests
- StringBoard.jsx
- createGame
- emblems.test.js
- Imposter-Game work note
- Error Handling
- ref_node_assert
- Build Dependencies
- Continuous Integration
- custom.js
- Third-party notices
- words/index.js
- names.js
- theme.test.js
- ready.js
- PWA Icons
- engine.test.js
- Coverage Reporting
- fuzz.test.js
- Game Ending Checks
- Special Roles
- Screen Flow Checks
- server/store.js
- Hosting Configuration
- LocalGame.jsx
- Design System: ImposterGame
- Style Checks
- Project Guide
- OnlineGame.jsx
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
- IconBoard.jsx
- engine.js
- createGame

## God Nodes (most connected - your core abstractions)
1. `useT()` - 101 edges
2. `react` - 47 edges
3. `reduce()` - 35 edges
4. `step()` - 33 edges
5. `LocalGame()` - 31 edges
6. `Icon()` - 31 edges
7. `createGame()` - 25 edges
8. `Room()` - 22 edges
9. `Settings()` - 21 edges
10. `Avatar()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `#17 shared game frame (in progress)` --references--> `RoomCode()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx
- `#17 shared game frame (in progress)` --references--> `Shell()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (56 total, 14 thin omitted)

### Community 0 - "useT"
Cohesion: 0.07
Nodes (60): react, speakingOrder(), PartyHub(), EndGameButton(), Scoreboard(), WinValues(), PackChip(), useWords() (+52 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.06
Nodes (62): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+54 more)

### Community 2 - "StringBoard.jsx"
Cohesion: 0.19
Nodes (16): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+8 more)

### Community 3 - "createGame"
Cohesion: 0.29
Nodes (9): createGame(), DEFAULT_CONFIG, normaliseConfig(), PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith() (+1 more)

### Community 4 - "emblems.test.js"
Cohesion: 0.29
Nodes (6): channels(), contrast(), hue(), hueGap(), luminance(), SIDES

### Community 5 - "Imposter-Game work note"
Cohesion: 0.14
Nodes (13): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, #17 shared game frame (in progress), Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note (+5 more)

### Community 6 - "Error Handling"
Cohesion: 0.14
Nodes (25): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+17 more)

### Community 7 - "ref_node_assert"
Cohesion: 0.08
Nodes (14): here, args, file, here, { lines, text, hash }, here, ICONS, PUBLIC (+6 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.07
Nodes (31): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+23 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "custom.js"
Cohesion: 0.12
Nodes (27): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+19 more)

### Community 12 - "words/index.js"
Cohesion: 0.08
Nodes (46): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+38 more)

### Community 13 - "names.js"
Cohesion: 0.16
Nodes (15): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+7 more)

### Community 14 - "theme.test.js"
Cohesion: 0.09
Nodes (24): detectLanguage(), LanguageProvider(), supported(), stringsReady(), startIn, read(), systemMode(), ThemeContext (+16 more)

### Community 15 - "ready.js"
Cohesion: 0.14
Nodes (15): here, hintLine(), translator(), FALLBACK_LANG, inFlight, LANGUAGES, loadAllStrings(), LOADERS (+7 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "engine.test.js"
Cohesion: 0.19
Nodes (17): EMPTY_HISTORY, FIVE, one(), OURS, roleIds(), SEVEN, autoImposterCount(), DECOY (+9 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.19
Nodes (14): voteOut(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction() (+6 more)

### Community 20 - "Game Ending Checks"
Cohesion: 0.17
Nodes (13): dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS, root (+5 more)

### Community 21 - "Special Roles"
Cohesion: 0.19
Nodes (13): tally(), BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters() (+5 more)

### Community 22 - "Screen Flow Checks"
Cohesion: 0.11
Nodes (17): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+9 more)

### Community 24 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 27 - "LocalGame.jsx"
Cohesion: 0.07
Nodes (37): MAX_PLAYERS, nameProblem(), LocalGame(), Resume(), Reveal(), Steal(), clearGame(), CONFIG_KEY (+29 more)

### Community 28 - "Design System: ImposterGame"
Cohesion: 0.13
Nodes (15): Colors, Design System: ImposterGame, Do's and Don'ts, Elevation & Depth, Hierarchy, Layout, Named Rules, Named Rules (+7 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.18
Nodes (9): HTML application shell, Playtest guide, Central scoring table, Custom word packs, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates (+1 more)

### Community 31 - "OnlineGame.jsx"
Cohesion: 0.07
Nodes (48): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), hasNews() (+40 more)

### Community 32 - "Imposter Icon"
Cohesion: 0.67
Nodes (3): Disguise, Hat, Imposter

### Community 33 - "Product"
Cohesion: 0.18
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 47 - "engine.test.js"
Cohesion: 0.12
Nodes (23): applyAll(), reduce(), clueRound(), deals(), revealAll(), started(), withPacks(), withPlayers() (+15 more)

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
Cohesion: 0.20
Nodes (10): Banners and Dialogs, Buttons, Components, Navigation, Pack Library and Editor, Panels, Private Card, Room-code Chip (+2 more)

### Community 55 - "IconBoard.jsx"
Cohesion: 0.08
Nodes (43): IconBoard(), ICONS, PlayerList(), PackRow(), RoleCard(), GameOverCard(), StealCard(), VerdictCard() (+35 more)

### Community 56 - "engine.js"
Cohesion: 0.14
Nodes (31): dealRoles(), decoyFor(), hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord(), recentWordWindow() (+23 more)

### Community 58 - "createGame"
Cohesion: 0.33
Nodes (6): deepFreeze(), guard(), isStrict(), setStrict(), strict, table()

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 376 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Room Server and Tests` to `Project Guide`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useT` be split into smaller, more focused modules?**
  _Cohesion score 0.0681478715459298 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `Room Server and Tests` to `custom.js`, `createGame`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.05809802012333658 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `StringBoard.jsx`, `Error Handling`, `Build Dependencies`, `custom.js`, `words/index.js`, `theme.test.js`, `IconBoard.jsx`, `LocalGame.jsx`, `OnlineGame.jsx`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Should `Imposter-Game work note` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._