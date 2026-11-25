# Graph Report - Imposter-Game  (2026-11-25)

## Corpus Check
- 201 files · ~189,209 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: .css 14, (none) 3, .bat 1)

## Summary
- 1194 nodes · 3433 edges · 75 communities (60 shown, 15 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 57 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f13414ab`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- round/index.js
- Room Server and Tests
- StringBoard.jsx
- ref_node_fs
- engine.test.js
- errors/index.js
- IconBoard.jsx
- names.js
- Build Dependencies
- Continuous Integration
- custom.js
- LICENSE-CONTENT.md
- words/index.js
- useT
- theme.test.js
- dead.test.js
- PWA Icons
- rules.js
- Coverage Reporting
- fuzz.test.js
- every-room.mjs
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
- local/screens/Lobby.jsx
- reduce
- feature-request.yml
- changelog.test.js
- Avatar
- every-ending.mjs
- Custom word packs
- fingerprint.js
- screens.test.js
- contact_links
- Project standards
- SECURITY.md
- Contributing
- pull_request_template.md
- OnlineGame.jsx
- deal.js
- select.js
- PassGate

## God Nodes (most connected - your core abstractions)
1. `useT()` - 103 edges
2. `react` - 48 edges
3. `LocalGame()` - 39 edges
4. `reduce()` - 35 edges
5. `step()` - 33 edges
6. `Icon()` - 31 edges
7. `createGame()` - 27 edges
8. `Shell()` - 26 edges
9. `Room()` - 24 edges
10. `Settings()` - 21 edges

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

## Communities (75 total, 15 thin omitted)

### Community 0 - "round/index.js"
Cohesion: 0.11
Nodes (20): CallButton(), CallPanel(), NotTheImposter(), ClueGrid(), ClueInput(), ClueList(), roundLabel(), Timer() (+12 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (54): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+46 more)

### Community 2 - "StringBoard.jsx"
Cohesion: 0.31
Nodes (10): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+2 more)

### Community 3 - "ref_node_fs"
Cohesion: 0.09
Nodes (16): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, here (+8 more)

### Community 4 - "engine.test.js"
Cohesion: 0.23
Nodes (12): applyAll(), deals(), FIVE, one(), OURS, revealAll(), roleIds(), SEVEN (+4 more)

### Community 5 - "errors/index.js"
Cohesion: 0.11
Nodes (31): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+23 more)

### Community 6 - "IconBoard.jsx"
Cohesion: 0.11
Nodes (41): IconBoard(), ICONS, hintLine(), PlayerList(), PackChip(), RoleCard(), GameOverCard(), VerdictCard() (+33 more)

### Community 7 - "names.js"
Cohesion: 0.13
Nodes (23): builtAtRuntime(), errorCodesInSource(), root, LANGUAGES, AMBIENT, bindings(), NOT_SOURCE, sourceFiles() (+15 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (33): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+25 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "custom.js"
Cohesion: 0.09
Nodes (44): LIB_LANG_KEY, read(), write(), buildPack(), clean(), CODE_VERSION, decodePack(), encodePack() (+36 more)

### Community 11 - "LICENSE-CONTENT.md"
Cohesion: 0.33
Nodes (4): Content licence, What this licence does not cover, Icons, Third-party notices

### Community 12 - "words/index.js"
Cohesion: 0.30
Nodes (17): Roles(), Scoring(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Calling(), Rounds(), Stealing() (+9 more)

### Community 13 - "useT"
Cohesion: 0.23
Nodes (17): #17 shared game frame (in progress), react, PartyHub(), PhaseStepper(), Credit(), FirstRun(), Rules(), Step() (+9 more)

### Community 14 - "theme.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 15 - "dead.test.js"
Cohesion: 0.14
Nodes (10): translator(), FALLBACK_LANG, inFlight, LOADERS, STRINGS, localeNumber(), numbers, resolveKey() (+2 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "rules.js"
Cohesion: 0.17
Nodes (17): autoImposterCount(), DECOY, DEFAULT_CONFIG, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, maxImpostersFor(), normaliseConfig(), resolveImposterCount() (+9 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.15
Nodes (16): voteOut(), fail(), GameError, chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS (+8 more)

### Community 20 - "every-room.mjs"
Cohesion: 0.14
Nodes (16): code, dealAndLook(), dist, errors, fail(), guests, here, newest() (+8 more)

### Community 21 - "Special Roles"
Cohesion: 0.18
Nodes (11): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters(), MAX_NAME (+3 more)

### Community 22 - "Screen Flow Checks"
Cohesion: 0.15
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 23 - "words/index.js"
Cohesion: 0.13
Nodes (20): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), DEFAULT_WORD_LANG (+12 more)

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
Cohesion: 0.17
Nodes (25): LocalGame(), clearGame(), CONFIG_KEY, GAME_KEY, isResumable(), loadConfig(), loadGame(), loadRecentWords() (+17 more)

### Community 28 - "word-pack.yml"
Cohesion: 0.13
Nodes (14): description, label, options, placeholder, body, attributes, id, type (+6 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.21
Nodes (8): HTML application shell, Playtest guide, Central scoring table, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates, Shared deterministic rules engine

### Community 31 - "room.test.js"
Cohesion: 0.14
Nodes (17): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), saveSession() (+9 more)

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
Cohesion: 0.07
Nodes (29): Banners and Dialogs, Buttons, Colors, Components, Design System: The Long Table, Do's and Don'ts, Elevation & Depth, Hierarchy (+21 more)

### Community 55 - "Imposter-Game work note"
Cohesion: 0.15
Nodes (12): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21) (+4 more)

### Community 56 - "engine.js"
Cohesion: 0.20
Nodes (23): decoyFor(), pickWord(), advanceAfterVerdict(), finish(), normalise(), resolveOutcome(), resolveVote(), sameClue() (+15 more)

### Community 57 - "local/screens/Lobby.jsx"
Cohesion: 0.24
Nodes (17): Scoreboard(), WinValues(), useWords(), Lobby(), OnlineLobby(), AddPlayerForm(), EmblemPicker(), LobbyHint() (+9 more)

### Community 58 - "reduce"
Cohesion: 0.17
Nodes (15): createGame(), reduce(), deepFreeze(), guard(), isStrict(), setStrict(), strict, table() (+7 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "changelog.test.js"
Cohesion: 0.22
Nodes (15): App(), IconBoard, readHash(), StringBoard, hasNews(), noteKey(), RELEASES, since() (+7 more)

### Community 61 - "Avatar"
Cohesion: 0.21
Nodes (15): EmblemIcon(), byId, defaultEmblem(), EMBLEM_IDS, emblemFor(), EMBLEMS, firstFree(), channels() (+7 more)

### Community 62 - "every-ending.mjs"
Cohesion: 0.15
Nodes (15): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+7 more)

### Community 64 - "fingerprint.js"
Cohesion: 0.18
Nodes (12): wordsReady(), behaviour(), bySeat(), games(), NAMES, scripted(), strings(), words() (+4 more)

### Community 65 - "screens.test.js"
Cohesion: 0.43
Nodes (6): renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor(), here, MODES

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 71 - "OnlineGame.jsx"
Cohesion: 0.31
Nodes (11): keepQuiet(), EndGameButton(), PackLibrary(), savePacks(), useErrorText(), JoinScreen(), Room(), isPlaying() (+3 more)

### Community 72 - "deal.js"
Cohesion: 0.21
Nodes (10): dealRoles(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow(), PHASE (+2 more)

### Community 73 - "select.js"
Cohesion: 0.29
Nodes (10): clueRound(), publicImposterCount(), buildPublicState(), canCall(), cluesThisRound(), currentTurn(), isAlive(), publicState() (+2 more)

### Community 74 - "PassGate"
Cohesion: 0.53
Nodes (4): PassGate(), StealCard(), Reveal(), Steal()

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 423 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `rules.js`, `Project Guide`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `round/index.js` be split into smaller, more focused modules?**
  _Cohesion score 0.11205073995771671 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `rules.js` to `select.js`, `custom.js`, `Project standards`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06832298136645963 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `round/index.js`, `StringBoard.jsx`, `errors/index.js`, `IconBoard.jsx`, `OnlineGame.jsx`, `Build Dependencies`, `custom.js`, `words/index.js`, `theme.test.js`, `local/screens/Lobby.jsx`, `LocalGame.jsx`, `changelog.test.js`, `Avatar`, `room.test.js`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.08602150537634409 - nodes in this community are weakly interconnected._