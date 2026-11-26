# Graph Report - Imposter-Game  (2026-11-26)

## Corpus Check
- 216 files · ~206,957 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: .css 14, (none) 3, .bat 1)

## Summary
- 1410 nodes · 3767 edges · 73 communities (59 shown, 14 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 94 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5e007506`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Settings.jsx
- Room Server and Tests
- useT
- ref_node_fs
- App.jsx
- errors/index.js
- Talking.jsx
- local/screens/Lobby.jsx
- Build Dependencies
- Continuous Integration
- Icon
- LICENSE-CONTENT.md
- every-screen.mjs
- pages.yml
- PartyHub.jsx
- attributes
- PWA Icons
- PartyProvider.jsx
- Coverage Reporting
- fuzz.test.js
- engine.js
- react
- rules.js
- words/index.js
- deal.js
- Hosting Configuration
- bug-report.yml
- primitives/index.js
- word-pack.yml
- Style Checks
- Project Guide
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
- scoring.test.js
- reduce
- feature-request.yml
- names.js
- room.test.js
- dead.test.js
- LocalGame.jsx
- every-room.mjs
- strings.js
- contact_links
- IconBoard.jsx
- SECURITY.md
- Contributing
- pull_request_template.md
- Imposter-Game work note
- LocalGame.jsx
- i18n/index.jsx
- RoleCard.jsx
- ref_node_assert

## God Nodes (most connected - your core abstractions)
1. `useT()` - 109 edges
2. `react` - 50 edges
3. `Icon()` - 44 edges
4. `reduce()` - 35 edges
5. `step()` - 33 edges
6. `LocalGame()` - 28 edges
7. `Avatar()` - 24 edges
8. `createGame()` - 23 edges
9. `PackEditor()` - 22 edges
10. `ImposterGame README` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Icons` --references--> `BrandMark()`  [INFERRED]
  DESIGN.md → src/ui/icons/brand.jsx

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (73 total, 14 thin omitted)

### Community 0 - "Settings.jsx"
Cohesion: 0.08
Nodes (45): cache, files, clean(), CREDIT_MAX, readCommunityPack(), slugFor(), SHARE_URL, shareLink() (+37 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.06
Nodes (63): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+55 more)

### Community 2 - "useT"
Cohesion: 0.21
Nodes (20): CallButton(), CallPanel(), NotTheImposter(), ClueGrid(), ClueInput(), ClueList(), roundLabel(), Timer() (+12 more)

### Community 3 - "ref_node_fs"
Cohesion: 0.10
Nodes (15): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, ICONS (+7 more)

### Community 4 - "App.jsx"
Cohesion: 0.17
Nodes (20): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), Crash() (+12 more)

### Community 5 - "errors/index.js"
Cohesion: 0.13
Nodes (27): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), described(), facts, failures (+19 more)

### Community 6 - "Talking.jsx"
Cohesion: 0.08
Nodes (19): CallOnOnePhone(), Talking(), SecretVote(), Voting(), CLUE_TIMER_CHOICES, loadClueTimer(), saveClueTimer(), usePrivacyGate() (+11 more)

### Community 7 - "local/screens/Lobby.jsx"
Cohesion: 0.14
Nodes (28): loadWords(), EndGameButton(), PlayerList(), Scoreboard(), WinValues(), Settings(), useWords(), Lobby() (+20 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "Icon"
Cohesion: 0.16
Nodes (22): ArmchairIcon(), BookIcon(), BrainIcon(), ContrastIcon(), DiceIcon(), GamesIcon(), HourglassIcon(), InfoIcon() (+14 more)

### Community 11 - "LICENSE-CONTENT.md"
Cohesion: 0.25
Nodes (5): Content licence, What this licence does not cover, Icons, Third-party notices, Community packs

### Community 12 - "every-screen.mjs"
Cohesion: 0.15
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 13 - "pages.yml"
Cohesion: 0.06
Nodes (31): runs-on, steps, concurrency, cancel-in-progress, group, environment, needs, runs-on (+23 more)

### Community 14 - "PartyHub.jsx"
Cohesion: 0.18
Nodes (7): GameLibrary(), gameById(), GAMES, gamesFor(), MODES, wordGames(), GameMark()

### Community 15 - "attributes"
Cohesion: 0.11
Nodes (17): description, label, options, render, value, body, attributes, id (+9 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "PartyProvider.jsx"
Cohesion: 0.45
Nodes (8): MAX_PLAYERS, nameProblem(), PartyContext, PartyProvider(), loadEmblems(), loadRoster(), saveEmblems(), saveRoster()

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.13
Nodes (16): clueRound(), fail(), GameError, chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS (+8 more)

### Community 20 - "engine.js"
Cohesion: 0.16
Nodes (28): decoyFor(), hintFor(), makePlayerId(), advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), sameClue() (+20 more)

### Community 21 - "react"
Cohesion: 0.05
Nodes (53): Icons, #17 shared game frame (in progress), react, loadCommunity(), WORD_LANGUAGES, FILTERS, StringBoard(), StringRow() (+45 more)

### Community 22 - "rules.js"
Cohesion: 0.17
Nodes (22): FIVE, one(), OURS, roleIds(), SEVEN, autoImposterCount(), DECOY, DEFAULT_CONFIG (+14 more)

### Community 23 - "words/index.js"
Cohesion: 0.11
Nodes (25): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+17 more)

### Community 24 - "deal.js"
Cohesion: 0.27
Nodes (9): dealRoles(), EMPTY_HISTORY, nextHistory(), pickImposters(), pickWord(), recentWordWindow(), normalise(), sameWord() (+1 more)

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "bug-report.yml"
Cohesion: 0.13
Nodes (14): description, label, options, render, body, attributes, id, type (+6 more)

### Community 27 - "primitives/index.js"
Cohesion: 0.19
Nodes (12): Roles(), CrewIcon(), DetectiveIcon(), HintIcon(), JesterIcon(), ScoreIcon(), SidekickIcon(), UnknownIcon() (+4 more)

### Community 28 - "word-pack.yml"
Cohesion: 0.13
Nodes (14): description, label, options, placeholder, body, attributes, id, type (+6 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.18
Nodes (9): HTML application shell, Playtest guide, Central scoring table, Custom word packs, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates (+1 more)

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
Nodes (33): Banners and Dialogs, Buttons, Choices, Colors, Components, Design System: The Long Table, Do's and Don'ts, Elevation & Depth (+25 more)

### Community 56 - "scoring.test.js"
Cohesion: 0.43
Nodes (6): MAX_WIN_POINTS, paysTheEliminated(), pointsFor(), WIN_POINTS, WIN_REASONS, here

### Community 58 - "reduce"
Cohesion: 0.11
Nodes (24): createGame(), applyAll(), reduce(), deals(), revealAll(), started(), voteOut(), withPacks() (+16 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "names.js"
Cohesion: 0.29
Nodes (10): AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode(), unresolvedNames(), classesRendered(), classesStyled() (+2 more)

### Community 61 - "room.test.js"
Cohesion: 0.13
Nodes (21): JoinScreen(), api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom() (+13 more)

### Community 62 - "dead.test.js"
Cohesion: 0.11
Nodes (22): builtAtRuntime(), errorCodesInSource(), root, read(), systemMode(), ThemeContext, ThemeProvider(), ALL (+14 more)

### Community 63 - "LocalGame.jsx"
Cohesion: 0.14
Nodes (25): loadPacks(), savePacks(), unwrap(), LocalGame(), clearGame(), CLUE_TIMER_KEY, CONFIG_KEY, GAME_KEY (+17 more)

### Community 64 - "every-room.mjs"
Cohesion: 0.07
Nodes (31): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+23 more)

### Community 65 - "strings.js"
Cohesion: 0.20
Nodes (14): compareAll(), compareKey(), placeholdersIn(), placeholderTrouble(), readsAsUntranslated(), answers(), askedKeys(), BUILT_AT_RUNTIME (+6 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "IconBoard.jsx"
Cohesion: 0.05
Nodes (6): ICONS, ICONS, STEPS, IMPOSTER_STEPS, MARKS, CardBackIcon()

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 72 - "Imposter-Game work note"
Cohesion: 0.15
Nodes (12): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21) (+4 more)

### Community 74 - "LocalGame.jsx"
Cohesion: 0.13
Nodes (4): OnlineGame(), renderPhase(), screenFor(), EmblemContext

### Community 75 - "i18n/index.jsx"
Cohesion: 0.07
Nodes (35): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord() (+27 more)

### Community 80 - "RoleCard.jsx"
Cohesion: 0.17
Nodes (17): packById(), PackChip(), RoleCard(), GameOverCard(), VerdictCard(), Tally(), OnlineReveal(), EyeIcon() (+9 more)

### Community 81 - "ref_node_assert"
Cohesion: 0.12
Nodes (9): SCREEN_FOR_PHASE, SCREEN_NAMES, here, MODES, here, args, file, here (+1 more)

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 515 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Room Server and Tests` to `Project Guide`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Settings.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07562136435748282 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `Settings.jsx`, `useT`, `App.jsx`, `errors/index.js`, `Talking.jsx`, `local/screens/Lobby.jsx`, `Build Dependencies`, `LocalGame.jsx`, `i18n/index.jsx`, `Icon`, `PartyHub.jsx`, `RoleCard.jsx`, `PartyProvider.jsx`, `primitives/index.js`, `room.test.js`, `dead.test.js`, `LocalGame.jsx`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.05759493670886076 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `Room Server and Tests` to `Settings.jsx`, `reduce`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.10144927536231885 - nodes in this community are weakly interconnected._