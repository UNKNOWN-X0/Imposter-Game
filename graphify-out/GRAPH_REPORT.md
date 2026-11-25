# Graph Report - Imposter-Game  (2026-11-25)

## Corpus Check
- 204 files · ~190,000 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: .css 14, (none) 3, .bat 1)

## Summary
- 1237 nodes · 3456 edges · 81 communities (65 shown, 16 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 57 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `dcedcdce`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useT
- Room Server and Tests
- StringBoard.jsx
- ref_node_path
- App.jsx
- errors/index.js
- IconBoard.jsx
- strings/index.js
- Build Dependencies
- Continuous Integration
- OnlineGame.jsx
- LICENSE-CONTENT.md
- Settings.jsx
- layout.mjs
- theme.test.js
- icons/index.jsx
- PWA Icons
- rules.js
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
- ref_node_assert
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
- Imposter-Game work note
- engine.js
- engine.test.js
- reduce
- feature-request.yml
- dead.test.js
- room.test.js
- presets.test.js
- Custom word packs
- PackLibrary.jsx
- every-room.mjs
- contact_links
- translate.js
- SECURITY.md
- Contributing
- pull_request_template.md
- local/screens/Lobby.jsx
- i18n/index.jsx
- builtin/index.js
- Project standards
- changelog.test.js
- select.js
- verify.mjs
- lint.test.js
- screens.test.js
- GameError

## God Nodes (most connected - your core abstractions)
1. `useT()` - 106 edges
2. `react` - 48 edges
3. `LocalGame()` - 38 edges
4. `reduce()` - 35 edges
5. `step()` - 33 edges
6. `Icon()` - 31 edges
7. `createGame()` - 25 edges
8. `Room()` - 24 edges
9. `Avatar()` - 22 edges
10. `Shell()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Invariants` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (81 total, 16 thin omitted)

### Community 0 - "useT"
Cohesion: 0.12
Nodes (25): CallButton(), CallPanel(), NotTheImposter(), ClueGrid(), ClueInput(), ClueList(), roundLabel(), Timer() (+17 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (54): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+46 more)

### Community 2 - "StringBoard.jsx"
Cohesion: 0.18
Nodes (17): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+9 more)

### Community 3 - "ref_node_path"
Cohesion: 0.13
Nodes (8): here, args, file, here, { lines, text, hash }, here, ICONS, PUBLIC

### Community 4 - "App.jsx"
Cohesion: 0.12
Nodes (14): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), Crash() (+6 more)

### Community 5 - "errors/index.js"
Cohesion: 0.16
Nodes (21): ErrorBoundary, breadcrumbs, currentSecrets(), described(), facts, failures, failuresSoFar(), forget() (+13 more)

### Community 6 - "IconBoard.jsx"
Cohesion: 0.12
Nodes (38): IconBoard(), ICONS, hintLine(), PackChip(), RoleCard(), GameOverCard(), VerdictCard(), BellIcon() (+30 more)

### Community 7 - "strings/index.js"
Cohesion: 0.14
Nodes (12): gameById(), GAMES, MODES, detectLanguage(), LanguageProvider(), supported(), inFlight, LOADERS (+4 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (33): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+25 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "OnlineGame.jsx"
Cohesion: 0.28
Nodes (14): describe(), EndGameButton(), Library(), PackEditor(), PackLibrary(), loadPacks(), savePacks(), useErrorText() (+6 more)

### Community 11 - "LICENSE-CONTENT.md"
Cohesion: 0.33
Nodes (4): Content licence, What this licence does not cover, Icons, Third-party notices

### Community 12 - "Settings.jsx"
Cohesion: 0.30
Nodes (15): Roles(), Scoring(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Calling(), Rounds(), Stealing() (+7 more)

### Community 13 - "layout.mjs"
Cohesion: 0.38
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 14 - "theme.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 15 - "icons/index.jsx"
Cohesion: 0.21
Nodes (13): PACK_LIMITS, WORD_LANGUAGES, ErrorScreen(), FailureNotice(), ReportCard(), AiPrompt, COUNTS, EMOJI (+5 more)

### Community 16 - "PWA Icons"
Cohesion: 0.13
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "rules.js"
Cohesion: 0.28
Nodes (13): autoImposterCount(), DECOY, DEFAULT_CONFIG, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MAX_NAME, maxImpostersFor(), resolveImposterCount() (+5 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.19
Nodes (14): voteOut(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction() (+6 more)

### Community 20 - "every-ending.mjs"
Cohesion: 0.15
Nodes (15): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+7 more)

### Community 21 - "Special Roles"
Cohesion: 0.26
Nodes (7): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters()

### Community 22 - "Screen Flow Checks"
Cohesion: 0.15
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 23 - "words/index.js"
Cohesion: 0.22
Nodes (16): _forgetWords(), loadAllWords(), loadWords(), wordsReady(), DEFAULT_WORD_LANG, _forgetWords(), loadAllWords(), loadWords() (+8 more)

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
Cohesion: 0.22
Nodes (19): LocalGame(), clearGame(), CONFIG_KEY, GAME_KEY, isResumable(), loadConfig(), loadGame(), loadRecentWords() (+11 more)

### Community 28 - "word-pack.yml"
Cohesion: 0.13
Nodes (14): description, label, options, placeholder, body, attributes, id, type (+6 more)

### Community 29 - "Style Checks"
Cohesion: 0.18
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.21
Nodes (8): HTML application shell, Playtest guide, Central scoring table, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates, Shared deterministic rules engine

### Community 31 - "ref_node_assert"
Cohesion: 0.20
Nodes (17): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+9 more)

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
Nodes (31): Banners and Dialogs, Buttons, Colors, Components, Design System: The Long Table, Do's and Don'ts, Elevation & Depth, Game Library (+23 more)

### Community 55 - "Imposter-Game work note"
Cohesion: 0.15
Nodes (12): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21) (+4 more)

### Community 56 - "engine.js"
Cohesion: 0.14
Nodes (32): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord() (+24 more)

### Community 57 - "engine.test.js"
Cohesion: 0.26
Nodes (11): applyAll(), deals(), FIVE, one(), OURS, revealAll(), roleIds(), SEVEN (+3 more)

### Community 58 - "reduce"
Cohesion: 0.13
Nodes (22): createGame(), reduce(), publicState(), deepFreeze(), guard(), isStrict(), setStrict(), strict (+14 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "dead.test.js"
Cohesion: 0.19
Nodes (15): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+7 more)

### Community 61 - "room.test.js"
Cohesion: 0.13
Nodes (19): OnlineGame(), api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom() (+11 more)

### Community 62 - "presets.test.js"
Cohesion: 0.15
Nodes (8): PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith(), TABLE, Presets(), STRINGS

### Community 64 - "PackLibrary.jsx"
Cohesion: 0.42
Nodes (6): filterPack(), matchAt(), shelfFor(), en, food, th

### Community 65 - "every-room.mjs"
Cohesion: 0.14
Nodes (16): code, dealAndLook(), dist, errors, fail(), guests, here, newest() (+8 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "translate.js"
Cohesion: 0.21
Nodes (8): translator(), FALLBACK_LANG, LANGUAGES, localeNumber(), numbers, resolveKey(), LANGS, translate()

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 71 - "local/screens/Lobby.jsx"
Cohesion: 0.07
Nodes (42): MAX_PLAYERS, nameProblem(), PlayerList(), Scoreboard(), WinValues(), Lobby(), OnlineLobby(), AddPlayerForm() (+34 more)

### Community 72 - "i18n/index.jsx"
Cohesion: 0.15
Nodes (15): #17 shared game frame (in progress), react, PartyHub(), PhaseStepper(), Credit(), Rules(), LanguageContext, LanguagePicker() (+7 more)

### Community 73 - "builtin/index.js"
Cohesion: 0.17
Nodes (6): BUILTIN_LANGUAGES, inFlight, loaded, LOADERS, SOURCES, written

### Community 74 - "Project standards"
Cohesion: 0.29
Nodes (7): normaliseConfig(), Checks, Code, Definition of done, Invariants, Lessons, Project standards

### Community 75 - "changelog.test.js"
Cohesion: 0.38
Nodes (7): hasNews(), noteKey(), RELEASES, since(), pkg, VERSION, Changelog()

### Community 76 - "select.js"
Cohesion: 0.27
Nodes (10): tally(), clueRound(), publicImposterCount(), buildPublicState(), canCall(), cluesThisRound(), currentTurn(), isAlive() (+2 more)

### Community 77 - "verify.mjs"
Cohesion: 0.20
Nodes (6): canBuild, failed, mark, results, root, skipped

### Community 78 - "lint.test.js"
Cohesion: 0.38
Nodes (6): foldLatinAccents(), INFLECTIONS, lintPack(), lintPacks(), normalise(), sameWordDifferentEnding()

### Community 79 - "screens.test.js"
Cohesion: 0.43
Nodes (6): renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor(), here, MODES

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 452 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `Project Guide`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useT` be split into smaller, more focused modules?**
  _Cohesion score 0.11843137254901961 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `Project standards` to `reduce`, `ref_node_assert`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06832298136645963 - nodes in this community are weakly interconnected._
- **Why does `react` connect `i18n/index.jsx` to `useT`, `StringBoard.jsx`, `App.jsx`, `IconBoard.jsx`, `strings/index.js`, `Build Dependencies`, `local/screens/Lobby.jsx`, `OnlineGame.jsx`, `changelog.test.js`, `Settings.jsx`, `theme.test.js`, `icons/index.jsx`, `words/index.js`, `LocalGame.jsx`, `room.test.js`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `ref_node_path` be split into smaller, more focused modules?**
  _Cohesion score 0.1323529411764706 - nodes in this community are weakly interconnected._