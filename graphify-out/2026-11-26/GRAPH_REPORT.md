# Graph Report - Imposter-Game  (2026-11-26)

## Corpus Check
- 214 files · ~205,896 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: .css 14, (none) 3, .bat 1)

## Summary
- 1381 nodes · 3786 edges · 71 communities (55 shown, 16 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 94 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `66bd2cb9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Settings.jsx
- Room Server and Tests
- every-ending.mjs
- ref_node_fs
- App.jsx
- errors/index.js
- Verdict.jsx
- useT
- Build Dependencies
- Continuous Integration
- Icon
- LICENSE-CONTENT.md
- every-screen.mjs
- pages.yml
- theme.test.js
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
- engine.test.js
- feature-request.yml
- dead.test.js
- room.test.js
- LocalGame.jsx
- every-room.mjs
- deal.js
- contact_links
- IconBoard.jsx
- SECURITY.md
- Contributing
- pull_request_template.md
- i18n/index.jsx
- select.js

## God Nodes (most connected - your core abstractions)
1. `useT()` - 109 edges
2. `react` - 49 edges
3. `Icon()` - 44 edges
4. `LocalGame()` - 38 edges
5. `reduce()` - 35 edges
6. `step()` - 33 edges
7. `createGame()` - 25 edges
8. `PackEditor()` - 24 edges
9. `Room()` - 24 edges
10. `Avatar()` - 24 edges

## Surprising Connections (you probably didn't know these)
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Icons` --references--> `BrandMark()`  [INFERRED]
  DESIGN.md → src/ui/icons/brand.jsx
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Invariants` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (71 total, 16 thin omitted)

### Community 0 - "Settings.jsx"
Cohesion: 0.07
Nodes (59): cache, files, loadCommunity(), clean(), CREDIT_MAX, readCommunityPack(), slugFor(), SHARE_URL (+51 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (53): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+45 more)

### Community 2 - "every-ending.mjs"
Cohesion: 0.15
Nodes (15): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+7 more)

### Community 3 - "ref_node_fs"
Cohesion: 0.09
Nodes (14): here, args, file, here, { lines, text, hash }, here, ICONS, PUBLIC (+6 more)

### Community 4 - "App.jsx"
Cohesion: 0.09
Nodes (26): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), hasNews() (+18 more)

### Community 5 - "errors/index.js"
Cohesion: 0.14
Nodes (25): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+17 more)

### Community 6 - "Verdict.jsx"
Cohesion: 0.28
Nodes (11): hintLine(), PackChip(), GameOverCard(), VerdictCard(), BellIcon(), BrokenIcon(), TargetIcon(), TieIcon() (+3 more)

### Community 7 - "useT"
Cohesion: 0.09
Nodes (59): react, Scoreboard(), WinValues(), Settings(), useWords(), CallButton(), CallPanel(), NotTheImposter() (+51 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "Icon"
Cohesion: 0.15
Nodes (26): ArmchairIcon(), BookIcon(), BrainIcon(), ChevronLeftIcon(), ContrastIcon(), CopyIcon(), DiceIcon(), GamesIcon() (+18 more)

### Community 11 - "LICENSE-CONTENT.md"
Cohesion: 0.25
Nodes (5): Content licence, What this licence does not cover, Icons, Third-party notices, Community packs

### Community 12 - "every-screen.mjs"
Cohesion: 0.15
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 13 - "pages.yml"
Cohesion: 0.06
Nodes (31): runs-on, steps, concurrency, cancel-in-progress, group, environment, needs, runs-on (+23 more)

### Community 14 - "theme.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 15 - "attributes"
Cohesion: 0.11
Nodes (17): description, label, options, render, value, body, attributes, id (+9 more)

### Community 16 - "PWA Icons"
Cohesion: 0.14
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.17
Nodes (14): fail(), GameError, chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS (+6 more)

### Community 20 - "roles/index.js"
Cohesion: 0.27
Nodes (4): BY_ID, ROLE, ROLES, SPECIAL_ROLES

### Community 21 - "Settings.jsx"
Cohesion: 0.05
Nodes (43): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, #17 shared game frame (in progress), Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note (+35 more)

### Community 22 - "rules.js"
Cohesion: 0.21
Nodes (16): winsWithImposters(), autoImposterCount(), DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MAX_NAME, maxImpostersFor(), MIN_PLAYERS (+8 more)

### Community 23 - "words/index.js"
Cohesion: 0.10
Nodes (28): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+20 more)

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "bug-report.yml"
Cohesion: 0.13
Nodes (14): description, label, options, render, body, attributes, id, type (+6 more)

### Community 27 - "primitives/index.js"
Cohesion: 0.16
Nodes (17): PlayerList(), RoleCard(), OnlineReveal(), EyeIcon(), base, HoldRing(), CrewIcon(), DetectiveIcon() (+9 more)

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
Nodes (31): Banners and Dialogs, Buttons, Choices, Colors, Components, Design System: The Long Table, Do's and Don'ts, Elevation & Depth (+23 more)

### Community 55 - "layout.mjs"
Cohesion: 0.38
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 56 - "engine.js"
Cohesion: 0.20
Nodes (24): pickWord(), advanceAfterVerdict(), finish(), normalise(), resolveOutcome(), resolveVote(), sameClue(), sameWord() (+16 more)

### Community 58 - "engine.test.js"
Cohesion: 0.12
Nodes (28): createGame(), applyAll(), reduce(), clueRound(), deals(), FIVE, one(), OURS (+20 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "dead.test.js"
Cohesion: 0.13
Nodes (22): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+14 more)

### Community 61 - "room.test.js"
Cohesion: 0.13
Nodes (20): JoinScreen(), OnlineGame(), api(), ApiError, clearSession(), connect(), createRoom(), joinRoom() (+12 more)

### Community 63 - "LocalGame.jsx"
Cohesion: 0.07
Nodes (45): Icons, MAX_PLAYERS, nameProblem(), EndGameButton(), LocalGame(), Resume(), CallOnOnePhone(), Talking() (+37 more)

### Community 64 - "every-room.mjs"
Cohesion: 0.14
Nodes (16): code, dealAndLook(), dist, errors, fail(), guests, here, newest() (+8 more)

### Community 65 - "deal.js"
Cohesion: 0.22
Nodes (10): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+2 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "IconBoard.jsx"
Cohesion: 0.08
Nodes (3): ICONS, PRESETS, ICONS

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 71 - "i18n/index.jsx"
Cohesion: 0.05
Nodes (50): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord() (+42 more)

### Community 73 - "select.js"
Cohesion: 0.22
Nodes (11): tally(), PHASE, publicImposterCount(), buildPublicState(), publicState(), scrubbed, deepFreeze(), guard() (+3 more)

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 509 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `Project Guide`, `rules.js`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Settings.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06769936890418818 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `rules.js` to `Settings.jsx`, `select.js`, `Project standards`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06862745098039216 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `Settings.jsx`, `App.jsx`, `errors/index.js`, `Verdict.jsx`, `i18n/index.jsx`, `Build Dependencies`, `Icon`, `theme.test.js`, `Settings.jsx`, `primitives/index.js`, `room.test.js`, `LocalGame.jsx`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.08547008547008547 - nodes in this community are weakly interconnected._