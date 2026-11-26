# Graph Report - Imposter-Game  (2026-11-26)

## Corpus Check
- 215 files · ~206,660 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: .css 14, (none) 3, .bat 1)

## Summary
- 1397 nodes · 3770 edges · 77 communities (60 shown, 17 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 94 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f7a1b3aa`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Settings.jsx
- Room Server and Tests
- Verdict.jsx
- ref_node_fs
- App.jsx
- errors/index.js
- Talking.jsx
- useT
- Build Dependencies
- Continuous Integration
- Icon
- LICENSE-CONTENT.md
- every-screen.mjs
- pages.yml
- attributes
- PWA Icons
- Project standards
- Coverage Reporting
- fuzz.test.js
- roles/index.js
- Settings.jsx
- rules.js
- words/index.js
- RuleSteps.jsx
- Hosting Configuration
- bug-report.yml
- primitives/index.js
- word-pack.yml
- Style Checks
- Project Guide
- HowItWorks.jsx
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
- layout.mjs
- engine.js
- step
- engine.test.js
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
- createGame
- LocalGame.jsx
- server/store.js
- changelog.test.js
- RoleCard.jsx
- screens.test.js

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
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Icons` --references--> `BrandMark()`  [INFERRED]
  DESIGN.md → src/ui/icons/brand.jsx
- `Icons` --references--> `ImposterMark()`  [INFERRED]
  DESIGN.md → src/ui/icons/brand.jsx

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (77 total, 17 thin omitted)

### Community 0 - "Settings.jsx"
Cohesion: 0.06
Nodes (63): cache, files, loadCommunity(), clean(), CREDIT_MAX, readCommunityPack(), slugFor(), SHARE_URL (+55 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (52): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+44 more)

### Community 2 - "Verdict.jsx"
Cohesion: 0.25
Nodes (12): GameOverCard(), StealCard(), VerdictCard(), Tally(), BellIcon(), DiceIcon(), HourglassIcon(), TargetIcon() (+4 more)

### Community 3 - "ref_node_fs"
Cohesion: 0.08
Nodes (14): here, args, file, here, { lines, text, hash }, here, ICONS, PUBLIC (+6 more)

### Community 4 - "App.jsx"
Cohesion: 0.13
Nodes (22): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), Crash() (+14 more)

### Community 5 - "errors/index.js"
Cohesion: 0.13
Nodes (27): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+19 more)

### Community 6 - "Talking.jsx"
Cohesion: 0.13
Nodes (5): CallOnOnePhone(), Talking(), CLUE_TIMER_CHOICES, loadClueTimer(), saveClueTimer()

### Community 7 - "useT"
Cohesion: 0.05
Nodes (86): Icons, #17 shared game frame (in progress), react, PartyHub(), EndGameButton(), Scoreboard(), WinValues(), Settings() (+78 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "Icon"
Cohesion: 0.15
Nodes (23): ArmchairIcon(), BookIcon(), BrainIcon(), ChevronLeftIcon(), ContrastIcon(), GamesIcon(), GlobeIcon(), InfoIcon() (+15 more)

### Community 11 - "LICENSE-CONTENT.md"
Cohesion: 0.25
Nodes (5): Content licence, What this licence does not cover, Icons, Third-party notices, Community packs

### Community 12 - "every-screen.mjs"
Cohesion: 0.15
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 13 - "pages.yml"
Cohesion: 0.06
Nodes (31): runs-on, steps, concurrency, cancel-in-progress, group, environment, needs, runs-on (+23 more)

### Community 15 - "attributes"
Cohesion: 0.11
Nodes (17): description, label, options, render, value, body, attributes, id (+9 more)

### Community 16 - "PWA Icons"
Cohesion: 0.13
Nodes (18): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), answers(), isBuiltAtRuntime() (+10 more)

### Community 17 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.21
Nodes (13): voteOut(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction() (+5 more)

### Community 20 - "roles/index.js"
Cohesion: 0.26
Nodes (7): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters()

### Community 21 - "Settings.jsx"
Cohesion: 0.07
Nodes (33): hintLine(), translator(), closestPreset(), PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith() (+25 more)

### Community 22 - "rules.js"
Cohesion: 0.16
Nodes (23): pickWord(), normalise(), sameWord(), FIVE, one(), OURS, roleIds(), SEVEN (+15 more)

### Community 23 - "words/index.js"
Cohesion: 0.13
Nodes (19): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), DEFAULT_WORD_LANG (+11 more)

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "bug-report.yml"
Cohesion: 0.13
Nodes (14): description, label, options, render, body, attributes, id, type (+6 more)

### Community 27 - "primitives/index.js"
Cohesion: 0.25
Nodes (9): CrewIcon(), DetectiveIcon(), HintIcon(), JesterIcon(), ScoreIcon(), SidekickIcon(), Announce(), ROLE_FACE (+1 more)

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

### Community 55 - "layout.mjs"
Cohesion: 0.38
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 56 - "engine.js"
Cohesion: 0.14
Nodes (26): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+18 more)

### Community 57 - "step"
Cohesion: 0.30
Nodes (12): resolveVote(), tally(), canCall(), isAlive(), isImposter(), isImposterSide(), playerById(), roleOf() (+4 more)

### Community 58 - "engine.test.js"
Cohesion: 0.17
Nodes (15): applyAll(), reduce(), clueRound(), deals(), revealAll(), started(), withPacks(), withPlayers() (+7 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "names.js"
Cohesion: 0.29
Nodes (10): AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode(), unresolvedNames(), classesRendered(), classesStyled() (+2 more)

### Community 61 - "room.test.js"
Cohesion: 0.13
Nodes (20): JoinScreen(), api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom() (+12 more)

### Community 62 - "dead.test.js"
Cohesion: 0.11
Nodes (22): builtAtRuntime(), errorCodesInSource(), root, read(), systemMode(), ThemeContext, ThemeProvider(), ALL (+14 more)

### Community 63 - "LocalGame.jsx"
Cohesion: 0.16
Nodes (25): MAX_PLAYERS, nameProblem(), LocalGame(), clearGame(), CLUE_TIMER_KEY, GAME_KEY, isResumable(), loadConfig() (+17 more)

### Community 64 - "every-room.mjs"
Cohesion: 0.07
Nodes (31): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+23 more)

### Community 65 - "strings.js"
Cohesion: 0.18
Nodes (17): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+9 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 72 - "Imposter-Game work note"
Cohesion: 0.15
Nodes (12): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21) (+4 more)

### Community 73 - "createGame"
Cohesion: 0.15
Nodes (19): wordsReady(), createGame(), normaliseConfig(), buildPublicState(), publicState(), deepFreeze(), guard(), isStrict() (+11 more)

### Community 74 - "LocalGame.jsx"
Cohesion: 0.14
Nodes (5): CONFIG_KEY, RECENT_WORDS_KEY, SCORES_KEY, usePhaseStart(), EmblemContext

### Community 75 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 76 - "changelog.test.js"
Cohesion: 0.38
Nodes (7): hasNews(), noteKey(), RELEASES, since(), pkg, VERSION, Changelog()

### Community 80 - "RoleCard.jsx"
Cohesion: 0.23
Nodes (11): packById(), PlayerList(), PackChip(), RoleCard(), OnlineReveal(), EyeIcon(), Backdrop(), Confetti() (+3 more)

### Community 81 - "screens.test.js"
Cohesion: 0.39
Nodes (7): isPlaying(), renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor(), here, MODES

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 512 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `createGame`, `Project Guide`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Settings.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.061031664964249235 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `Settings.jsx`, `strings.js`, `Verdict.jsx`, `App.jsx`, `errors/index.js`, `Talking.jsx`, `Build Dependencies`, `LocalGame.jsx`, `Icon`, `changelog.test.js`, `RoleCard.jsx`, `Settings.jsx`, `room.test.js`, `dead.test.js`, `LocalGame.jsx`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.0684811237928007 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `createGame` to `Settings.jsx`, `Project standards`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.08172043010752689 - nodes in this community are weakly interconnected._