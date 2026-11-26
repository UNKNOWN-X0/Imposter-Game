# Graph Report - Imposter-Game  (2026-11-26)

## Corpus Check
- 214 files · ~205,618 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: .css 14, (none) 3, .bat 1)

## Summary
- 1365 nodes · 3793 edges · 76 communities (61 shown, 15 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 94 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `18e0d280`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Settings.jsx
- Room Server and Tests
- every-ending.mjs
- ref_node_fs
- App.jsx
- errors/index.js
- main.jsx
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
- StringBoard.jsx
- Settings.jsx
- rules.js
- words/index.js
- server/store.js
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
- presets.test.js
- engine.test.js
- feature-request.yml
- dead.test.js
- room.test.js
- Imposter-Game work note
- LocalGame.jsx
- every-room.mjs
- engine.test.js
- contact_links
- IconBoard.jsx
- SECURITY.md
- Contributing
- pull_request_template.md
- STRINGS
- changelog.test.js
- select.js
- scoring.test.js
- emblems.test.js

## God Nodes (most connected - your core abstractions)
1. `useT()` - 109 edges
2. `react` - 50 edges
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
- `Icons` --references--> `ImposterMark()`  [INFERRED]
  DESIGN.md → src/ui/icons/brand.jsx

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (76 total, 15 thin omitted)

### Community 0 - "Settings.jsx"
Cohesion: 0.07
Nodes (52): LIB_LANG_KEY, read(), write(), cache, files, loadCommunity(), clean(), CREDIT_MAX (+44 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.06
Nodes (56): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+48 more)

### Community 2 - "every-ending.mjs"
Cohesion: 0.15
Nodes (15): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+7 more)

### Community 3 - "ref_node_fs"
Cohesion: 0.13
Nodes (9): here, ICONS, PUBLIC, canBuild, failed, mark, results, root (+1 more)

### Community 4 - "App.jsx"
Cohesion: 0.21
Nodes (13): App(), IconBoard, readHash(), StringBoard, Crash(), FirstRun(), HowItWorks(), ImposterRules() (+5 more)

### Community 5 - "errors/index.js"
Cohesion: 0.14
Nodes (26): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+18 more)

### Community 6 - "main.jsx"
Cohesion: 0.36
Nodes (6): detectLanguage(), LanguageProvider(), supported(), loadStrings(), startIn, Backdrop()

### Community 7 - "useT"
Cohesion: 0.06
Nodes (89): #17 shared game frame (in progress), react, packById(), PartyHub(), EndGameButton(), PlayerList(), Scoreboard(), WinValues() (+81 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "Icon"
Cohesion: 0.13
Nodes (27): ArmchairIcon(), BookIcon(), BrainIcon(), ChevronLeftIcon(), ContrastIcon(), DiceIcon(), GamesIcon(), GlobeIcon() (+19 more)

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
Cohesion: 0.12
Nodes (18): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), answers(), isBuiltAtRuntime() (+10 more)

### Community 17 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.23
Nodes (12): chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction(), someAction() (+4 more)

### Community 20 - "StringBoard.jsx"
Cohesion: 0.21
Nodes (15): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+7 more)

### Community 21 - "Settings.jsx"
Cohesion: 0.23
Nodes (18): WORD_LANGUAGES, Roles(), imposterHint(), HowMany(), WhatTheySee(), WhetherTheyKnow(), Rounds(), SECTIONS (+10 more)

### Community 22 - "rules.js"
Cohesion: 0.14
Nodes (21): BY_ID, enabledRoles(), endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters() (+13 more)

### Community 23 - "words/index.js"
Cohesion: 0.06
Nodes (37): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+29 more)

### Community 24 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "bug-report.yml"
Cohesion: 0.13
Nodes (14): description, label, options, render, body, attributes, id, type (+6 more)

### Community 27 - "primitives/index.js"
Cohesion: 0.20
Nodes (15): RoleCard(), EyeIcon(), HoldRing(), CardBackIcon(), CrewIcon(), DetectiveIcon(), HintIcon(), ImposterIcon() (+7 more)

### Community 28 - "word-pack.yml"
Cohesion: 0.13
Nodes (14): description, label, options, placeholder, body, attributes, id, type (+6 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.18
Nodes (9): HTML application shell, Playtest guide, Central scoring table, Custom word packs, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates (+1 more)

### Community 31 - "HowItWorks.jsx"
Cohesion: 0.16
Nodes (8): GameLibrary(), STEPS, gameById(), GAMES, gamesFor(), MODES, GameMark(), MARKS

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
Nodes (35): Banners and Dialogs, Buttons, Colors, Components, Design System: The Long Table, Do's and Don'ts, Elevation & Depth, Game Library (+27 more)

### Community 55 - "layout.mjs"
Cohesion: 0.38
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 56 - "engine.js"
Cohesion: 0.27
Nodes (17): dealRoles(), decoyFor(), hintFor(), makePlayerId(), advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote() (+9 more)

### Community 57 - "presets.test.js"
Cohesion: 0.12
Nodes (10): closestPreset(), PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith(), TABLE, ICONS (+2 more)

### Community 58 - "engine.test.js"
Cohesion: 0.13
Nodes (20): createGame(), reduce(), clueRound(), voteOut(), normaliseConfig(), publicState(), deepFreeze(), guard() (+12 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "dead.test.js"
Cohesion: 0.16
Nodes (15): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+7 more)

### Community 61 - "room.test.js"
Cohesion: 0.14
Nodes (18): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), loadSession() (+10 more)

### Community 62 - "Imposter-Game work note"
Cohesion: 0.15
Nodes (12): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21) (+4 more)

### Community 63 - "LocalGame.jsx"
Cohesion: 0.11
Nodes (36): nameProblem(), LocalGame(), Resume(), clearGame(), CLUE_TIMER_KEY, CONFIG_KEY, GAME_KEY, isResumable() (+28 more)

### Community 64 - "every-room.mjs"
Cohesion: 0.14
Nodes (16): code, dealAndLook(), dist, errors, fail(), guests, here, newest() (+8 more)

### Community 65 - "engine.test.js"
Cohesion: 0.14
Nodes (21): EMPTY_HISTORY, nextHistory(), pickImposters(), pickWord(), recentWordWindow(), applyAll(), normalise(), sameWord() (+13 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 71 - "STRINGS"
Cohesion: 0.13
Nodes (12): hintLine(), translator(), FALLBACK_LANG, inFlight, LANGUAGES, LOADERS, stringsReady(), localeNumber() (+4 more)

### Community 72 - "changelog.test.js"
Cohesion: 0.38
Nodes (7): hasNews(), noteKey(), RELEASES, since(), pkg, VERSION, Changelog()

### Community 73 - "select.js"
Cohesion: 0.31
Nodes (9): tally(), publicImposterCount(), buildPublicState(), canCall(), cluesThisRound(), currentTurn(), isAlive(), scrubbed (+1 more)

### Community 74 - "scoring.test.js"
Cohesion: 0.43
Nodes (6): MAX_WIN_POINTS, paysTheEliminated(), pointsFor(), WIN_POINTS, WIN_REASONS, here

### Community 75 - "emblems.test.js"
Cohesion: 0.39
Nodes (6): channels(), contrast(), hue(), hueGap(), luminance(), SIDES

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 503 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `engine.test.js`, `Project Guide`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Settings.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07163561076604555 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `engine.test.js` to `Settings.jsx`, `Project standards`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06479081821547575 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `Settings.jsx`, `App.jsx`, `errors/index.js`, `main.jsx`, `Build Dependencies`, `changelog.test.js`, `Icon`, `theme.test.js`, `StringBoard.jsx`, `Settings.jsx`, `primitives/index.js`, `room.test.js`, `LocalGame.jsx`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._