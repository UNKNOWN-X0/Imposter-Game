# Graph Report - Imposter-Game  (2026-11-26)

## Corpus Check
- 205 files · ~192,918 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: .css 14, (none) 3, .bat 1)

## Summary
- 1315 nodes · 3526 edges · 80 communities (65 shown, 15 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 59 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `77205ec7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useT
- Room Server and Tests
- strings/index.js
- ref_node_fs
- strings/index.js
- errors/index.js
- IconBoard.jsx
- JoinScreen.jsx
- Build Dependencies
- Continuous Integration
- i18n/index.jsx
- LICENSE-CONTENT.md
- Settings.jsx
- pages.yml
- theme.test.js
- OnlineGame.jsx
- PWA Icons
- select.js
- Coverage Reporting
- fuzz.test.js
- every-ending.mjs
- Special Roles
- Screen Flow Checks
- words/index.js
- server/store.js
- Hosting Configuration
- bug-report.yml
- LocalGame.jsx
- word-pack.yml
- Style Checks
- Project Guide
- local/screens/Lobby.jsx
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
- Contributor Covenant Code of Conduct
- Current interface audit · issue #13
- Next
- Party Hub
- Tavern direction study · issue #13
- ImposterGame changelog
- Project instructions
- Components
- ref_node_assert
- engine.js
- engine.test.js
- reduce
- feature-request.yml
- dead.test.js
- room.test.js
- Imposter-Game work note
- Custom word packs
- every-room.mjs
- App.jsx
- contact_links
- Shell
- SECURITY.md
- Contributing
- pull_request_template.md
- GameLibrary.jsx
- scoring.test.js
- main.jsx
- layout.mjs
- StringBoard.jsx
- Rules.jsx
- brand.jsx
- ref_node_test
- primitives/index.js

## God Nodes (most connected - your core abstractions)
1. `useT()` - 106 edges
2. `react` - 48 edges
3. `LocalGame()` - 38 edges
4. `reduce()` - 35 edges
5. `step()` - 33 edges
6. `Icon()` - 32 edges
7. `Avatar()` - 24 edges
8. `Room()` - 24 edges
9. `createGame()` - 23 edges
10. `Shell()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `#17 shared game frame (in progress)` --references--> `RoomCode()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx
- `#17 shared game frame (in progress)` --references--> `Shell()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (80 total, 15 thin omitted)

### Community 0 - "useT"
Cohesion: 0.19
Nodes (23): CallButton(), CallPanel(), NotTheImposter(), ClueGrid(), ClueInput(), ClueList(), roundLabel(), Timer() (+15 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (54): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+46 more)

### Community 2 - "strings/index.js"
Cohesion: 0.23
Nodes (12): compareAll(), compareKey(), placeholdersIn(), placeholderTrouble(), readsAsUntranslated(), answers(), askedKeys(), BUILT_AT_RUNTIME (+4 more)

### Community 3 - "ref_node_fs"
Cohesion: 0.09
Nodes (13): args, file, here, { lines, text, hash }, here, ICONS, PUBLIC, canBuild (+5 more)

### Community 4 - "strings/index.js"
Cohesion: 0.14
Nodes (12): translator(), FALLBACK_LANG, inFlight, LANGUAGES, LOADERS, STRINGS, stringsReady(), localeNumber() (+4 more)

### Community 5 - "errors/index.js"
Cohesion: 0.14
Nodes (26): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+18 more)

### Community 6 - "IconBoard.jsx"
Cohesion: 0.07
Nodes (34): ICONS, hintLine(), PlayerList(), PackChip(), RoleCard(), GameOverCard(), StealCard(), VerdictCard() (+26 more)

### Community 7 - "JoinScreen.jsx"
Cohesion: 0.25
Nodes (11): byId, EMBLEM_IDS, emblemFor(), EMBLEMS, firstFree(), channels(), contrast(), hue() (+3 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (33): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+25 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "i18n/index.jsx"
Cohesion: 0.15
Nodes (11): react, PartyHub(), PhaseStepper(), Credit(), LanguageContext, LanguagePicker(), ContrastIcon(), GlobeIcon() (+3 more)

### Community 11 - "LICENSE-CONTENT.md"
Cohesion: 0.33
Nodes (4): Content licence, What this licence does not cover, Icons, Third-party notices

### Community 12 - "Settings.jsx"
Cohesion: 0.12
Nodes (20): PRESET_KEYS, presetFor(), PRESETS, same(), TABLE, Roles(), Scoring(), HowMany() (+12 more)

### Community 13 - "pages.yml"
Cohesion: 0.06
Nodes (31): runs-on, steps, concurrency, cancel-in-progress, group, environment, needs, runs-on (+23 more)

### Community 14 - "theme.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 15 - "OnlineGame.jsx"
Cohesion: 0.27
Nodes (5): EndGameButton(), useErrorText(), JoinScreen(), OnlineGame(), Room()

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "select.js"
Cohesion: 0.23
Nodes (17): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), tally(), publicImposterCount(), buildPublicState(), canCall() (+9 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.23
Nodes (12): chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction(), someAction() (+4 more)

### Community 20 - "every-ending.mjs"
Cohesion: 0.15
Nodes (15): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+7 more)

### Community 21 - "Special Roles"
Cohesion: 0.14
Nodes (21): WORD_LANGUAGES, BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters() (+13 more)

### Community 22 - "Screen Flow Checks"
Cohesion: 0.15
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 23 - "words/index.js"
Cohesion: 0.08
Nodes (34): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+26 more)

### Community 24 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "bug-report.yml"
Cohesion: 0.13
Nodes (14): description, label, options, render, body, attributes, id, type (+6 more)

### Community 27 - "LocalGame.jsx"
Cohesion: 0.06
Nodes (37): EMPTY_HISTORY, MAX_PLAYERS, nameProblem(), LocalGame(), Resume(), CallOnOnePhone(), Talking(), clearGame() (+29 more)

### Community 28 - "word-pack.yml"
Cohesion: 0.13
Nodes (14): description, label, options, placeholder, body, attributes, id, type (+6 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.21
Nodes (8): HTML application shell, Playtest guide, Central scoring table, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates, Shared deterministic rules engine

### Community 31 - "local/screens/Lobby.jsx"
Cohesion: 0.11
Nodes (24): Scoreboard(), WinValues(), useWords(), Lobby(), OnlineLobby(), AddPlayerForm(), EmblemChoice(), EmblemPicker() (+16 more)

### Community 32 - "Imposter Icon"
Cohesion: 0.67
Nodes (3): Disguise, Hat, Imposter

### Community 33 - "Product"
Cohesion: 0.18
Nodes (11): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+3 more)

### Community 47 - "Contributor Covenant Code of Conduct"
Cohesion: 0.15
Nodes (12): 1. Correction, 2. Warning, 3. Temporary Ban, 4. Permanent Ban, Attribution, Contributor Covenant Code of Conduct, Enforcement, Enforcement Guidelines (+4 more)

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
Cohesion: 0.06
Nodes (32): Banners and Dialogs, Buttons, Colors, Components, Design System: The Long Table, Do's and Don'ts, Elevation & Depth, Game Library (+24 more)

### Community 55 - "ref_node_assert"
Cohesion: 0.18
Nodes (8): isPlaying(), renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor(), here, MODES, here

### Community 56 - "engine.js"
Cohesion: 0.20
Nodes (20): dealRoles(), decoyFor(), hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord(), recentWordWindow() (+12 more)

### Community 57 - "engine.test.js"
Cohesion: 0.13
Nodes (21): applyAll(), reduce(), clueRound(), deals(), FIVE, one(), OURS, revealAll() (+13 more)

### Community 58 - "reduce"
Cohesion: 0.18
Nodes (14): createGame(), publicState(), deepFreeze(), guard(), isStrict(), setStrict(), strict, table() (+6 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "dead.test.js"
Cohesion: 0.19
Nodes (15): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+7 more)

### Community 61 - "room.test.js"
Cohesion: 0.14
Nodes (18): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), loadSession() (+10 more)

### Community 62 - "Imposter-Game work note"
Cohesion: 0.14
Nodes (13): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, #17 shared game frame (in progress), Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note (+5 more)

### Community 64 - "every-room.mjs"
Cohesion: 0.14
Nodes (16): code, dealAndLook(), dist, errors, fail(), guests, here, newest() (+8 more)

### Community 65 - "App.jsx"
Cohesion: 0.31
Nodes (10): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), Crash() (+2 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "Shell"
Cohesion: 0.35
Nodes (8): hasNews(), noteKey(), RELEASES, since(), pkg, VERSION, Changelog(), Shell()

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 71 - "GameLibrary.jsx"
Cohesion: 0.24
Nodes (6): MIN_PLAYERS, MARKS, gameById(), GAMES, gamesFor(), MODES

### Community 72 - "scoring.test.js"
Cohesion: 0.43
Nodes (6): MAX_WIN_POINTS, paysTheEliminated(), pointsFor(), WIN_POINTS, WIN_REASONS, here

### Community 73 - "main.jsx"
Cohesion: 0.43
Nodes (5): detectLanguage(), LanguageProvider(), supported(), loadStrings(), startIn

### Community 74 - "layout.mjs"
Cohesion: 0.38
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 75 - "StringBoard.jsx"
Cohesion: 0.60
Nodes (5): FILTERS, StringBoard(), StringRow(), hasTrouble(), loadAllStrings()

### Community 76 - "Rules.jsx"
Cohesion: 0.60
Nodes (3): FirstRun(), Rules(), Step()

### Community 77 - "brand.jsx"
Cohesion: 0.40
Nodes (3): BrandMark(), CHAIR_LINES, CHAIR_SOLIDS

### Community 78 - "ref_node_test"
Cohesion: 0.11
Nodes (39): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+31 more)

### Community 79 - "primitives/index.js"
Cohesion: 0.60
Nodes (3): Announce(), Banner(), ROLE_FACE

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 501 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `reduce` to `Project Guide`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06519114688128773 - nodes in this community are weakly interconnected._
- **Why does `react` connect `i18n/index.jsx` to `useT`, `App.jsx`, `Shell`, `errors/index.js`, `IconBoard.jsx`, `Build Dependencies`, `main.jsx`, `StringBoard.jsx`, `Rules.jsx`, `Settings.jsx`, `ref_node_test`, `OnlineGame.jsx`, `theme.test.js`, `LocalGame.jsx`, `room.test.js`, `local/screens/Lobby.jsx`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `reduce` to `engine.js`, `ref_node_test`?**
  _High betweenness centrality (0.063) - this node is a cross-community bridge._
- **Should `strings/index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.13852813852813853 - nodes in this community are weakly interconnected._