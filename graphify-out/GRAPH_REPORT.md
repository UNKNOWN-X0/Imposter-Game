# Graph Report - Imposter-Game  (2026-11-26)

## Corpus Check
- 220 files · ~210,319 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 22 file(s) not represented in the graph (top: .css 15, (none) 3, .bat 1)

## Summary
- 1429 nodes · 3797 edges · 77 communities (62 shown, 15 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 98 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3101fb64`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ref_node_test
- Room Server and Tests
- rules.js
- ref_node_assert
- App.jsx
- react
- Talking.jsx
- useT
- Build Dependencies
- Continuous Integration
- IconBoard.jsx
- LICENSE-CONTENT.md
- every-screen.mjs
- pages.yml
- PartyProvider.jsx
- attributes
- Verdict.jsx
- checks.test.js
- Coverage Reporting
- fuzz.test.js
- engine.js
- react
- ref_node_assert
- words/index.js
- engine.test.js
- Hosting Configuration
- bug-report.yml
- every-room.mjs
- word-pack.yml
- Style Checks
- Project Guide
- engine.test.js
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
- primitives/index.js
- PackLibrary.jsx
- community.mjs
- Resume.jsx
- feature-request.yml
- room.test.js
- dead.test.js
- LocalGame.jsx
- deal.js
- contact_links
- Icon
- SECURITY.md
- Contributing
- pull_request_template.md
- Imposter-Game work note
- lint.test.js
- i18n/index.jsx
- OnlineGame.jsx
- HowItWorks.jsx
- RoleGlyph.jsx
- RuleSteps.jsx
- Project standards

## God Nodes (most connected - your core abstractions)
1. `useT()` - 111 edges
2. `react` - 50 edges
3. `Icon()` - 44 edges
4. `reduce()` - 35 edges
5. `step()` - 33 edges
6. `LocalGame()` - 28 edges
7. `Avatar()` - 28 edges
8. `createGame()` - 23 edges
9. `PackEditor()` - 22 edges
10. `ImposterGame README` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Icons` --references--> `ImposterMark()`  [INFERRED]
  DESIGN.md → src/ui/icons/brand.jsx
- `The plan (owner, 2026-11-26, issue #103)` --references--> `onWinningSide()`  [INFERRED]
  DESIGN.md → src/core/select.js
- `The plan (owner, 2026-11-26, issue #103)` --references--> `motionMs()`  [INFERRED]
  DESIGN.md → src/ui/motionMs.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (77 total, 15 thin omitted)

### Community 0 - "ref_node_test"
Cohesion: 0.12
Nodes (30): cache, files, loadCommunity(), clean(), CREDIT_MAX, readCommunityPack(), slugFor(), SHARE_URL (+22 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (53): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+45 more)

### Community 2 - "rules.js"
Cohesion: 0.20
Nodes (12): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters(), MAX_NAME (+4 more)

### Community 3 - "ref_node_assert"
Cohesion: 0.07
Nodes (17): builtAtRuntime(), errorCodesInSource(), root, here, args, file, here, { lines, text, hash } (+9 more)

### Community 4 - "App.jsx"
Cohesion: 0.07
Nodes (39): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord() (+31 more)

### Community 5 - "react"
Cohesion: 0.15
Nodes (15): Table and Seats, react, Lobby(), CLUE_TIMER_CHOICES, loadClueTimer(), saveClueTimer(), OnlineLobby(), Candle() (+7 more)

### Community 6 - "Talking.jsx"
Cohesion: 0.12
Nodes (7): CallOnOnePhone(), Talking(), SecretVote(), Voting(), usePrivacyGate(), OnlineClues(), ActionBar()

### Community 7 - "useT"
Cohesion: 0.06
Nodes (60): #17 shared game frame (in progress), PartyHub(), EndGameButton(), PlayerList(), Scoreboard(), WinValues(), CallButton(), CallPanel() (+52 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "IconBoard.jsx"
Cohesion: 0.11
Nodes (3): ICONS, ICONS, TornadoIcon()

### Community 11 - "LICENSE-CONTENT.md"
Cohesion: 0.25
Nodes (5): Content licence, What this licence does not cover, Icons, Third-party notices, Community packs

### Community 12 - "every-screen.mjs"
Cohesion: 0.11
Nodes (18): dealAndReveal(), dist, fail(), here, moved, newest(), openPage(), root (+10 more)

### Community 13 - "pages.yml"
Cohesion: 0.06
Nodes (31): runs-on, steps, concurrency, cancel-in-progress, group, environment, needs, runs-on (+23 more)

### Community 14 - "PartyProvider.jsx"
Cohesion: 0.51
Nodes (7): nameProblem(), PartyContext, PartyProvider(), loadEmblems(), loadRoster(), saveEmblems(), saveRoster()

### Community 15 - "attributes"
Cohesion: 0.11
Nodes (17): description, label, options, render, value, body, attributes, id (+9 more)

### Community 16 - "Verdict.jsx"
Cohesion: 0.14
Nodes (4): VerdictCard(), Tally(), motionMs(), toMs()

### Community 17 - "checks.test.js"
Cohesion: 0.07
Nodes (45): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+37 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.11
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.17
Nodes (14): fail(), GameError, chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS (+6 more)

### Community 20 - "engine.js"
Cohesion: 0.19
Nodes (24): pickWord(), advanceAfterVerdict(), finish(), normalise(), resolveOutcome(), resolveVote(), sameClue(), sameWord() (+16 more)

### Community 21 - "react"
Cohesion: 0.09
Nodes (32): closestPreset(), PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith(), TABLE, Roles() (+24 more)

### Community 22 - "ref_node_assert"
Cohesion: 0.29
Nodes (10): autoImposterCount(), DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MAX_PLAYERS, maxImpostersFor(), MIN_PLAYERS, resolveImposterCount() (+2 more)

### Community 23 - "words/index.js"
Cohesion: 0.12
Nodes (21): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+13 more)

### Community 24 - "engine.test.js"
Cohesion: 0.11
Nodes (28): createGame(), reduce(), clueRound(), voteOut(), normaliseConfig(), cluesThisRound(), currentTurn(), publicState() (+20 more)

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "bug-report.yml"
Cohesion: 0.13
Nodes (14): description, label, options, render, body, attributes, id, type (+6 more)

### Community 27 - "every-room.mjs"
Cohesion: 0.07
Nodes (31): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+23 more)

### Community 28 - "word-pack.yml"
Cohesion: 0.13
Nodes (14): description, label, options, placeholder, body, attributes, id, type (+6 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.18
Nodes (9): HTML application shell, Playtest guide, Central scoring table, Custom word packs, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates (+1 more)

### Community 31 - "engine.test.js"
Cohesion: 0.19
Nodes (15): applyAll(), deals(), FIVE, one(), OURS, revealAll(), roleIds(), SEVEN (+7 more)

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
Cohesion: 0.05
Nodes (36): Banners and Dialogs, Buttons, Choices, Colors, Components, Design System: The Long Table, Do's and Don'ts, Elevation & Depth (+28 more)

### Community 55 - "primitives/index.js"
Cohesion: 0.27
Nodes (10): packById(), PackChip(), RoleCard(), EyeIcon(), HoldRing(), CardBackIcon(), HintIcon(), UnknownIcon() (+2 more)

### Community 56 - "PackLibrary.jsx"
Cohesion: 0.18
Nodes (16): Library(), Marked(), PackLibrary(), PackSheet(), rowLine(), filterPack(), matchAt(), shelfFor() (+8 more)

### Community 57 - "community.mjs"
Cohesion: 0.25
Nodes (7): WORD_LANGUAGES, byAt, [command, code, ...rest], data, file, pack, root

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 61 - "room.test.js"
Cohesion: 0.14
Nodes (18): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), loadSession() (+10 more)

### Community 62 - "dead.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 63 - "LocalGame.jsx"
Cohesion: 0.17
Nodes (20): LocalGame(), clearGame(), CLUE_TIMER_KEY, CONFIG_KEY, GAME_KEY, isResumable(), loadConfig(), loadGame() (+12 more)

### Community 65 - "deal.js"
Cohesion: 0.18
Nodes (12): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+4 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "Icon"
Cohesion: 0.14
Nodes (26): ArmchairIcon(), BookIcon(), BrainIcon(), CheckIcon(), ChevronLeftIcon(), ContrastIcon(), CopyIcon(), DiceIcon() (+18 more)

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 72 - "Imposter-Game work note"
Cohesion: 0.15
Nodes (12): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21) (+4 more)

### Community 73 - "lint.test.js"
Cohesion: 0.38
Nodes (6): foldLatinAccents(), INFLECTIONS, lintPack(), lintPacks(), normalise(), sameWordDifferentEnding()

### Community 75 - "i18n/index.jsx"
Cohesion: 0.07
Nodes (45): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+37 more)

### Community 76 - "OnlineGame.jsx"
Cohesion: 0.12
Nodes (9): OnlineGame(), isPlaying(), renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor(), here, MODES (+1 more)

### Community 77 - "HowItWorks.jsx"
Cohesion: 0.18
Nodes (4): STEPS, MARKS, GamesIcon(), UserPlusIcon()

### Community 78 - "RoleGlyph.jsx"
Cohesion: 0.36
Nodes (8): CrewIcon(), DetectiveIcon(), ImposterIcon(), JesterIcon(), ScoreIcon(), SidekickIcon(), ROLE_FACE, RoleGlyph()

### Community 79 - "RuleSteps.jsx"
Cohesion: 0.25
Nodes (3): IMPOSTER_STEPS, MessageIcon(), TrophyIcon()

### Community 80 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 506 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `engine.test.js`, `Project Guide`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ref_node_test` be split into smaller, more focused modules?**
  _Cohesion score 0.12435897435897436 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `engine.test.js` to `ref_node_test`, `Project standards`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06862745098039216 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `ref_node_test`, `App.jsx`, `Talking.jsx`, `useT`, `Build Dependencies`, `PartyProvider.jsx`, `Verdict.jsx`, `checks.test.js`, `react`, `words/index.js`, `primitives/index.js`, `PackLibrary.jsx`, `Resume.jsx`, `room.test.js`, `dead.test.js`, `LocalGame.jsx`, `Icon`, `i18n/index.jsx`, `OnlineGame.jsx`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Should `ref_node_assert` be split into smaller, more focused modules?**
  _Cohesion score 0.07051282051282051 - nodes in this community are weakly interconnected._