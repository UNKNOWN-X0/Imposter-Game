# Graph Report - Imposter-Game  (2026-11-27)

## Corpus Check
- 224 files · ~212,150 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 22 file(s) not represented in the graph (top: .css 15, (none) 3, .bat 1)

## Summary
- 1459 nodes · 3874 edges · 77 communities (62 shown, 15 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 99 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9d0ce3df`
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
- checks.test.js
- attributes
- dead.test.js
- strings.js
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
- ref_node_fs
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
- index.test.js
- server/store.js
- sound/index.js
- feature-request.yml
- roleOf
- room.test.js
- dead.test.js
- LocalGame.jsx
- layout.mjs
- select.js
- contact_links
- Icon
- SECURITY.md
- Contributing
- pull_request_template.md
- Imposter-Game work note
- i18n/index.jsx
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
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
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
Cohesion: 0.07
Nodes (56): cache, files, loadCommunity(), clean(), CREDIT_MAX, readCommunityPack(), slugFor(), SHARE_URL (+48 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (53): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+45 more)

### Community 2 - "rules.js"
Cohesion: 0.26
Nodes (7): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters()

### Community 3 - "ref_node_assert"
Cohesion: 0.11
Nodes (12): isPlaying(), renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor(), here, MODES, here (+4 more)

### Community 4 - "App.jsx"
Cohesion: 0.05
Nodes (51): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), hasNews() (+43 more)

### Community 5 - "react"
Cohesion: 0.17
Nodes (13): useWords(), Lobby(), CLUE_TIMER_CHOICES, saveClueTimer(), OnlineLobby(), Candle(), chairsFor(), Crown() (+5 more)

### Community 6 - "Talking.jsx"
Cohesion: 0.10
Nodes (8): CallOnOnePhone(), Talking(), SecretVote(), Voting(), loadClueTimer(), usePrivacyGate(), OnlineClues(), ActionBar()

### Community 7 - "useT"
Cohesion: 0.14
Nodes (30): EndGameButton(), PlayerList(), Scoreboard(), WinValues(), CallButton(), CallPanel(), NotTheImposter(), ClueGrid() (+22 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "IconBoard.jsx"
Cohesion: 0.08
Nodes (3): ICONS, ICONS, ZapIcon()

### Community 11 - "LICENSE-CONTENT.md"
Cohesion: 0.25
Nodes (5): Content licence, What this licence does not cover, Icons, Third-party notices, Community packs

### Community 12 - "every-screen.mjs"
Cohesion: 0.16
Nodes (12): dealAndReveal(), dist, fail(), here, moved, newest(), openPage(), root (+4 more)

### Community 13 - "pages.yml"
Cohesion: 0.06
Nodes (31): runs-on, steps, concurrency, cancel-in-progress, group, environment, needs, runs-on (+23 more)

### Community 14 - "checks.test.js"
Cohesion: 0.13
Nodes (18): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), answers(), isBuiltAtRuntime() (+10 more)

### Community 15 - "attributes"
Cohesion: 0.11
Nodes (17): description, label, options, render, value, body, attributes, id (+9 more)

### Community 16 - "dead.test.js"
Cohesion: 0.18
Nodes (13): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+5 more)

### Community 17 - "strings.js"
Cohesion: 0.18
Nodes (17): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+9 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.23
Nodes (12): chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction(), someAction() (+4 more)

### Community 20 - "engine.js"
Cohesion: 0.13
Nodes (27): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord() (+19 more)

### Community 21 - "react"
Cohesion: 0.06
Nodes (43): #17 shared game frame (in progress), closestPreset(), PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith(), TABLE (+35 more)

### Community 22 - "ref_node_assert"
Cohesion: 0.27
Nodes (13): autoImposterCount(), DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MAX_NAME, maxImpostersFor(), MIN_PLAYERS, resolveImposterCount() (+5 more)

### Community 23 - "words/index.js"
Cohesion: 0.08
Nodes (33): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+25 more)

### Community 24 - "engine.test.js"
Cohesion: 0.12
Nodes (27): createGame(), applyAll(), reduce(), clueRound(), deals(), FIVE, one(), OURS (+19 more)

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

### Community 31 - "ref_node_fs"
Cohesion: 0.13
Nodes (9): here, ICONS, PUBLIC, canBuild, failed, mark, results, root (+1 more)

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
Nodes (38): Banners and Dialogs, Buttons, Choices, Colors, Components, Design System: The Long Table, Do's and Don'ts, Elevation & Depth (+30 more)

### Community 55 - "primitives/index.js"
Cohesion: 0.17
Nodes (13): packById(), PackChip(), RoleCard(), OnlineReveal(), EyeIcon(), Backdrop(), HoldRing(), HintIcon() (+5 more)

### Community 56 - "index.test.js"
Cohesion: 0.24
Nodes (5): events, FakeAudio, made, node(), param()

### Community 57 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 58 - "sound/index.js"
Cohesion: 0.24
Nodes (6): OPENS_WITH, usePhaseStart(), audio(), enabled, play(), SOUNDS

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "roleOf"
Cohesion: 0.47
Nodes (9): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), isImposter(), isImposterSide(), onWinningSide(), roleOf() (+1 more)

### Community 61 - "room.test.js"
Cohesion: 0.07
Nodes (45): MAX_PLAYERS, nameProblem(), JoinScreen(), api(), ApiError, clearSession(), connect(), createRoom() (+37 more)

### Community 62 - "dead.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 63 - "LocalGame.jsx"
Cohesion: 0.10
Nodes (23): LocalGame(), Resume(), clearGame(), CLUE_TIMER_KEY, CONFIG_KEY, GAME_KEY, isResumable(), loadConfig() (+15 more)

### Community 64 - "layout.mjs"
Cohesion: 0.38
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 65 - "select.js"
Cohesion: 0.22
Nodes (11): tally(), PHASE, publicImposterCount(), buildPublicState(), publicState(), scrubbed, deepFreeze(), guard() (+3 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "Icon"
Cohesion: 0.14
Nodes (28): ArmchairIcon(), BookIcon(), BrainIcon(), CheckIcon(), ChevronLeftIcon(), ContrastIcon(), CopyIcon(), DiceIcon() (+20 more)

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 72 - "Imposter-Game work note"
Cohesion: 0.15
Nodes (12): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21) (+4 more)

### Community 75 - "i18n/index.jsx"
Cohesion: 0.14
Nodes (27): react, ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described() (+19 more)

### Community 77 - "HowItWorks.jsx"
Cohesion: 0.20
Nodes (3): STEPS, MARKS, UserPlusIcon()

### Community 78 - "RoleGlyph.jsx"
Cohesion: 0.30
Nodes (8): base, CrewIcon(), DetectiveIcon(), ImposterIcon(), JesterIcon(), ScoreIcon(), SidekickIcon(), RoleGlyph()

### Community 80 - "Project standards"
Cohesion: 0.29
Nodes (7): normaliseConfig(), Checks, Code, Definition of done, Invariants, Lessons, Project standards

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 520 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `Project Guide`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ref_node_test` be split into smaller, more focused modules?**
  _Cohesion score 0.0727927927927928 - nodes in this community are weakly interconnected._
- **Why does `react` connect `i18n/index.jsx` to `ref_node_test`, `Icon`, `App.jsx`, `react`, `Talking.jsx`, `useT`, `Build Dependencies`, `IconBoard.jsx`, `RoleGlyph.jsx`, `strings.js`, `react`, `primitives/index.js`, `sound/index.js`, `room.test.js`, `dead.test.js`, `LocalGame.jsx`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06862745098039216 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `Project standards` to `ref_node_test`, `select.js`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Should `ref_node_assert` be split into smaller, more focused modules?**
  _Cohesion score 0.11083743842364532 - nodes in this community are weakly interconnected._