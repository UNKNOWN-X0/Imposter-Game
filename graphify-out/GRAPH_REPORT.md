# Graph Report - Imposter-Game  (2026-11-26)

## Corpus Check
- 205 files · ~191,567 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: .css 14, (none) 3, .bat 1)

## Summary
- 1308 nodes · 3520 edges · 72 communities (57 shown, 15 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 58 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `258bf5c3`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useT
- Room Server and Tests
- strings/index.js
- ref_node_fs
- i18n/index.jsx
- errors/index.js
- IconBoard.jsx
- JoinScreen.jsx
- Build Dependencies
- Continuous Integration
- PartyHub.jsx
- LICENSE-CONTENT.md
- presets.test.js
- pages.yml
- theme.test.js
- react
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
- useT
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
- deal.js
- engine.js
- engine.test.js
- reduce
- feature-request.yml
- dead.test.js
- room.test.js
- Imposter-Game work note
- Custom word packs
- playerById
- Project standards
- contact_links
- SECURITY.md
- Contributing
- pull_request_template.md
- local/screens/Lobby.jsx
- ref_node_test

## God Nodes (most connected - your core abstractions)
1. `useT()` - 106 edges
2. `react` - 48 edges
3. `LocalGame()` - 38 edges
4. `reduce()` - 35 edges
5. `step()` - 33 edges
6. `Icon()` - 31 edges
7. `Room()` - 24 edges
8. `Avatar()` - 24 edges
9. `createGame()` - 23 edges
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
- `#17 shared game frame (in progress)` --references--> `RoomCode()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (72 total, 15 thin omitted)

### Community 0 - "useT"
Cohesion: 0.25
Nodes (18): CallButton(), CallPanel(), NotTheImposter(), ClueGrid(), ClueInput(), ClueList(), roundLabel(), Timer() (+10 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (53): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+45 more)

### Community 2 - "strings/index.js"
Cohesion: 0.21
Nodes (15): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+7 more)

### Community 3 - "ref_node_fs"
Cohesion: 0.07
Nodes (20): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, args (+12 more)

### Community 4 - "i18n/index.jsx"
Cohesion: 0.07
Nodes (42): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), hasNews() (+34 more)

### Community 5 - "errors/index.js"
Cohesion: 0.15
Nodes (23): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), described(), facts, failures (+15 more)

### Community 6 - "IconBoard.jsx"
Cohesion: 0.05
Nodes (43): packById(), ICONS, hintLine(), translator(), PlayerList(), PackChip(), RoleCard(), GameOverCard() (+35 more)

### Community 7 - "JoinScreen.jsx"
Cohesion: 0.15
Nodes (14): byId, defaultEmblem(), EMBLEM_IDS, emblemFor(), EMBLEMS, firstFree(), channels(), contrast() (+6 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (33): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+25 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "PartyHub.jsx"
Cohesion: 0.14
Nodes (15): #17 shared game frame (in progress), PartyHub(), PhaseStepper(), Credit(), FirstRun(), Rules(), Step(), LanguagePicker() (+7 more)

### Community 11 - "LICENSE-CONTENT.md"
Cohesion: 0.33
Nodes (4): Content licence, What this licence does not cover, Icons, Third-party notices

### Community 12 - "presets.test.js"
Cohesion: 0.17
Nodes (6): PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith(), TABLE

### Community 13 - "pages.yml"
Cohesion: 0.06
Nodes (31): runs-on, steps, concurrency, cancel-in-progress, group, environment, needs, runs-on (+23 more)

### Community 14 - "theme.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 15 - "react"
Cohesion: 0.11
Nodes (5): react, EndGameButton(), CallOnOnePhone(), CLUE_TIMER_CHOICES, usePrivacyGate()

### Community 16 - "PWA Icons"
Cohesion: 0.13
Nodes (18): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), answers(), isBuiltAtRuntime() (+10 more)

### Community 17 - "rules.js"
Cohesion: 0.19
Nodes (18): FIVE, one(), OURS, roleIds(), SEVEN, autoImposterCount(), DECOY, IMPOSTERS_AUTO (+10 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.18
Nodes (15): voteOut(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction() (+7 more)

### Community 20 - "every-room.mjs"
Cohesion: 0.07
Nodes (31): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+23 more)

### Community 21 - "Special Roles"
Cohesion: 0.20
Nodes (12): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters(), MAX_NAME (+4 more)

### Community 22 - "Screen Flow Checks"
Cohesion: 0.15
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 23 - "words/index.js"
Cohesion: 0.08
Nodes (49): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+41 more)

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
Cohesion: 0.11
Nodes (32): nameProblem(), LocalGame(), Resume(), Talking(), clearGame(), CLUE_TIMER_KEY, CONFIG_KEY, GAME_KEY (+24 more)

### Community 28 - "word-pack.yml"
Cohesion: 0.13
Nodes (14): description, label, options, placeholder, body, attributes, id, type (+6 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.21
Nodes (8): HTML application shell, Playtest guide, Central scoring table, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates, Shared deterministic rules engine

### Community 31 - "useT"
Cohesion: 0.23
Nodes (12): Scoreboard(), WinValues(), OnlineLobby(), AddPlayerForm(), EmblemChoice(), EmblemPicker(), LobbyHint(), SeatActions() (+4 more)

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

### Community 55 - "deal.js"
Cohesion: 0.18
Nodes (12): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+4 more)

### Community 56 - "engine.js"
Cohesion: 0.19
Nodes (23): pickWord(), advanceAfterVerdict(), finish(), normalise(), resolveOutcome(), resolveVote(), sameClue(), sameWord() (+15 more)

### Community 57 - "engine.test.js"
Cohesion: 0.16
Nodes (15): applyAll(), reduce(), clueRound(), deals(), revealAll(), started(), withPacks(), withPlayers() (+7 more)

### Community 58 - "reduce"
Cohesion: 0.17
Nodes (17): createGame(), normaliseConfig(), publicState(), deepFreeze(), guard(), isStrict(), setStrict(), strict (+9 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "dead.test.js"
Cohesion: 0.19
Nodes (15): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+7 more)

### Community 61 - "room.test.js"
Cohesion: 0.09
Nodes (31): keepQuiet(), note(), useErrorText(), JoinScreen(), OnlineGame(), Room(), api(), ApiError (+23 more)

### Community 62 - "Imposter-Game work note"
Cohesion: 0.15
Nodes (12): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21) (+4 more)

### Community 64 - "playerById"
Cohesion: 0.62
Nodes (5): playerById(), viewFor(), PassGate(), Reveal(), Steal()

### Community 65 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 71 - "local/screens/Lobby.jsx"
Cohesion: 0.16
Nodes (8): Lobby(), Candle(), Crown(), Mug(), seatPoints(), TABLE, TableScene(), useNarrow()

### Community 78 - "ref_node_test"
Cohesion: 0.12
Nodes (31): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+23 more)

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 496 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `reduce`, `Project Guide`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `reduce` to `Project standards`, `ref_node_test`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.06970128022759602 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `useT`, `strings/index.js`, `i18n/index.jsx`, `errors/index.js`, `IconBoard.jsx`, `local/screens/Lobby.jsx`, `Build Dependencies`, `JoinScreen.jsx`, `PartyHub.jsx`, `ref_node_test`, `theme.test.js`, `words/index.js`, `LocalGame.jsx`, `room.test.js`, `useT`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Should `i18n/index.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06672519754170325 - nodes in this community are weakly interconnected._