# Graph Report - Imposter-Game  (2026-11-26)

## Corpus Check
- 206 files · ~198,667 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: .css 14, (none) 3, .bat 1)

## Summary
- 1243 nodes · 3552 edges · 68 communities (53 shown, 15 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 67 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `46536f8d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- custom.js
- Room Server and Tests
- every-room.mjs
- ref_node_fs
- ref_node_assert
- errors/index.js
- IconBoard.jsx
- useT
- Build Dependencies
- Continuous Integration
- layout.mjs
- LICENSE-CONTENT.md
- every-screen.mjs
- pages.yml
- theme.test.js
- PackLibrary.jsx
- PWA Icons
- PackEditor.jsx
- Coverage Reporting
- fuzz.test.js
- StringBoard.jsx
- Settings.jsx
- rules.js
- words/index.js
- server/store.js
- Hosting Configuration
- bug-report.yml
- lint.test.js
- word-pack.yml
- Style Checks
- Project Guide
- presets.test.js
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
- engine.js
- engine.test.js
- reduce
- feature-request.yml
- dead.test.js
- room.test.js
- App.jsx
- Custom word packs
- contact_links
- SECURITY.md
- Contributing
- pull_request_template.md
- LocalGame.jsx

## God Nodes (most connected - your core abstractions)
1. `useT()` - 106 edges
2. `react` - 50 edges
3. `LocalGame()` - 39 edges
4. `reduce()` - 35 edges
5. `step()` - 33 edges
6. `Icon()` - 33 edges
7. `Shell()` - 28 edges
8. `createGame()` - 27 edges
9. `Avatar()` - 24 edges
10. `Room()` - 24 edges

## Surprising Connections (you probably didn't know these)
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Invariants` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (68 total, 15 thin omitted)

### Community 0 - "custom.js"
Cohesion: 0.22
Nodes (16): buildPack(), clean(), CODE_VERSION, decodePack(), fromBase64(), hasAWord(), isCustomPackId(), makePackId() (+8 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.06
Nodes (56): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+48 more)

### Community 2 - "every-room.mjs"
Cohesion: 0.07
Nodes (31): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+23 more)

### Community 3 - "ref_node_fs"
Cohesion: 0.08
Nodes (15): here, MODES, args, file, here, { lines, text, hash }, here, ICONS (+7 more)

### Community 4 - "ref_node_assert"
Cohesion: 0.11
Nodes (19): ROLES, WIN_REASONS, here, hintLine(), translator(), builtAtRuntime(), errorCodesInSource(), root (+11 more)

### Community 5 - "errors/index.js"
Cohesion: 0.14
Nodes (24): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), described(), facts, failures (+16 more)

### Community 6 - "IconBoard.jsx"
Cohesion: 0.11
Nodes (42): ICONS, RoleCard(), GameOverCard(), VerdictCard(), OnlineReveal(), BellIcon(), BrokenIcon(), ChevronLeftIcon() (+34 more)

### Community 7 - "useT"
Cohesion: 0.08
Nodes (79): react, alivePlayers(), describe(), PartyHub(), EndGameButton(), PlayerList(), Scoreboard(), WinValues() (+71 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (33): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+25 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "layout.mjs"
Cohesion: 0.38
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 11 - "LICENSE-CONTENT.md"
Cohesion: 0.33
Nodes (4): Content licence, What this licence does not cover, Icons, Third-party notices

### Community 12 - "every-screen.mjs"
Cohesion: 0.15
Nodes (11): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+3 more)

### Community 13 - "pages.yml"
Cohesion: 0.06
Nodes (31): runs-on, steps, concurrency, cancel-in-progress, group, environment, needs, runs-on (+23 more)

### Community 14 - "theme.test.js"
Cohesion: 0.13
Nodes (21): read(), systemMode(), ThemeContext, ThemeProvider(), useTheme(), ALL, contrast(), css (+13 more)

### Community 15 - "PackLibrary.jsx"
Cohesion: 0.21
Nodes (13): WORD_LANGUAGES, Marked(), PackLibrary(), PackSheet(), rowLine(), filterPack(), matchAt(), shelfFor() (+5 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "PackEditor.jsx"
Cohesion: 0.22
Nodes (7): encodePack(), toBase64(), toText(), AiPrompt, COUNTS, EMOJI, PackEditor()

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.20
Nodes (12): chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction(), someAction() (+4 more)

### Community 20 - "StringBoard.jsx"
Cohesion: 0.31
Nodes (10): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+2 more)

### Community 21 - "Settings.jsx"
Cohesion: 0.18
Nodes (25): autoImposterCount(), DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, maxImpostersFor(), resolveImposterCount(), ROUNDS_UNLIMITED, Roles() (+17 more)

### Community 22 - "rules.js"
Cohesion: 0.14
Nodes (17): clueRound(), BY_ID, endingFor(), ROLE, roleSpec(), SPECIAL_ROLES, winsWithImposters(), MAX_NAME (+9 more)

### Community 23 - "words/index.js"
Cohesion: 0.12
Nodes (21): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+13 more)

### Community 24 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "bug-report.yml"
Cohesion: 0.13
Nodes (14): description, label, options, render, body, attributes, id, type (+6 more)

### Community 27 - "lint.test.js"
Cohesion: 0.38
Nodes (6): foldLatinAccents(), INFLECTIONS, lintPack(), lintPacks(), normalise(), sameWordDifferentEnding()

### Community 28 - "word-pack.yml"
Cohesion: 0.13
Nodes (14): description, label, options, placeholder, body, attributes, id, type (+6 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.21
Nodes (8): HTML application shell, Playtest guide, Central scoring table, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates, Shared deterministic rules engine

### Community 31 - "presets.test.js"
Cohesion: 0.36
Nodes (7): DEFAULT_CONFIG, PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith(), TABLE

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

### Community 56 - "engine.js"
Cohesion: 0.15
Nodes (30): dealRoles(), decoyFor(), hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord(), recentWordWindow() (+22 more)

### Community 57 - "engine.test.js"
Cohesion: 0.19
Nodes (14): EMPTY_HISTORY, applyAll(), deals(), FIVE, one(), OURS, revealAll(), roleIds() (+6 more)

### Community 58 - "reduce"
Cohesion: 0.10
Nodes (29): createGame(), reduce(), voteOut(), publicState(), deepFreeze(), guard(), isStrict(), setStrict() (+21 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "dead.test.js"
Cohesion: 0.16
Nodes (19): AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode(), unresolvedNames(), answers(), askedKeys() (+11 more)

### Community 61 - "room.test.js"
Cohesion: 0.14
Nodes (18): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), loadSession() (+10 more)

### Community 62 - "App.jsx"
Cohesion: 0.06
Nodes (50): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, #17 shared game frame (in progress), Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note (+42 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 78 - "LocalGame.jsx"
Cohesion: 0.11
Nodes (37): PHASE, MAX_PLAYERS, nameProblem(), LocalGame(), clearGame(), CLUE_TIMER_CHOICES, CLUE_TIMER_KEY, CONFIG_KEY (+29 more)

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 440 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `reduce` to `Project Guide`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06479081821547575 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `reduce` to `custom.js`, `engine.js`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `every-room.mjs` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `errors/index.js`, `IconBoard.jsx`, `Build Dependencies`, `LocalGame.jsx`, `PackLibrary.jsx`, `theme.test.js`, `PackEditor.jsx`, `StringBoard.jsx`, `Settings.jsx`, `words/index.js`, `room.test.js`, `App.jsx`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.08172043010752689 - nodes in this community are weakly interconnected._