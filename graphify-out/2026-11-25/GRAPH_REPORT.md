# Graph Report - Imposter-Game  (2026-11-25)

## Corpus Check
- 204 files · ~190,572 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: .css 14, (none) 3, .bat 1)

## Summary
- 1222 nodes · 3459 edges · 68 communities (52 shown, 16 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 57 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6b396123`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- useT
- Room Server and Tests
- StringBoard.jsx
- ref_node_fs
- select.js
- errors/index.js
- IconBoard.jsx
- emblems.test.js
- Build Dependencies
- Continuous Integration
- lint.test.js
- LICENSE-CONTENT.md
- dead.test.js
- changelog.test.js
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
- OnlineGame.jsx
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
- scoring.test.js
- FakeEventSource
- Custom word packs
- ref_node_assert
- contact_links
- SECURITY.md
- Contributing
- pull_request_template.md

## God Nodes (most connected - your core abstractions)
1. `useT()` - 105 edges
2. `react` - 48 edges
3. `LocalGame()` - 38 edges
4. `reduce()` - 35 edges
5. `step()` - 33 edges
6. `Icon()` - 31 edges
7. `createGame()` - 25 edges
8. `Shell()` - 24 edges
9. `Room()` - 24 edges
10. `Settings()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js
- `Invariants` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (68 total, 16 thin omitted)

### Community 0 - "useT"
Cohesion: 0.07
Nodes (53): EndGameButton(), Scoreboard(), WinValues(), useWords(), CallButton(), CallPanel(), NotTheImposter(), ClueGrid() (+45 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.06
Nodes (64): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+56 more)

### Community 2 - "StringBoard.jsx"
Cohesion: 0.16
Nodes (19): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+11 more)

### Community 3 - "ref_node_fs"
Cohesion: 0.13
Nodes (9): here, ICONS, PUBLIC, canBuild, failed, mark, results, root (+1 more)

### Community 4 - "select.js"
Cohesion: 0.27
Nodes (14): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), tally(), publicImposterCount(), buildPublicState(), canCall() (+6 more)

### Community 5 - "errors/index.js"
Cohesion: 0.14
Nodes (25): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+17 more)

### Community 6 - "IconBoard.jsx"
Cohesion: 0.07
Nodes (59): #17 shared game frame (in progress), react, IconBoard(), ICONS, MARKS, hintLine(), PlayerList(), AiPrompt (+51 more)

### Community 7 - "emblems.test.js"
Cohesion: 0.21
Nodes (10): gameById(), GAMES, gamesFor(), MODES, channels(), contrast(), hue(), hueGap() (+2 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (33): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+25 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "lint.test.js"
Cohesion: 0.38
Nodes (6): foldLatinAccents(), INFLECTIONS, lintPack(), lintPacks(), normalise(), sameWordDifferentEnding()

### Community 11 - "LICENSE-CONTENT.md"
Cohesion: 0.33
Nodes (4): Content licence, What this licence does not cover, Icons, Third-party notices

### Community 12 - "dead.test.js"
Cohesion: 0.15
Nodes (9): PRESET_KEYS, presetFor(), PRESETS, same(), TABLE, builtAtRuntime(), errorCodesInSource(), root (+1 more)

### Community 13 - "changelog.test.js"
Cohesion: 0.42
Nodes (6): noteKey(), RELEASES, since(), pkg, VERSION, Changelog()

### Community 14 - "theme.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 15 - "dead.test.js"
Cohesion: 0.14
Nodes (18): translator(), detectLanguage(), LanguageContext, LanguageProvider(), supported(), FALLBACK_LANG, inFlight, LANGUAGES (+10 more)

### Community 16 - "PWA Icons"
Cohesion: 0.12
Nodes (21): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), AMBIENT, bindings() (+13 more)

### Community 17 - "rules.js"
Cohesion: 0.25
Nodes (14): autoImposterCount(), DECOY, DEFAULT_CONFIG, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MAX_NAME, maxImpostersFor(), PLAIN_CREW_FLOOR (+6 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.21
Nodes (13): chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction(), someAction() (+5 more)

### Community 20 - "every-room.mjs"
Cohesion: 0.07
Nodes (31): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+23 more)

### Community 21 - "Special Roles"
Cohesion: 0.26
Nodes (7): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters()

### Community 22 - "Screen Flow Checks"
Cohesion: 0.11
Nodes (17): dealAndReveal(), dist, here, moved, newest(), openPage(), root, seen (+9 more)

### Community 23 - "words/index.js"
Cohesion: 0.07
Nodes (55): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+47 more)

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
Nodes (38): createGame(), PHASE, MAX_PLAYERS, nameProblem(), LocalGame(), clearGame(), CONFIG_KEY, GAME_KEY (+30 more)

### Community 28 - "word-pack.yml"
Cohesion: 0.13
Nodes (14): description, label, options, placeholder, body, attributes, id, type (+6 more)

### Community 29 - "Style Checks"
Cohesion: 0.17
Nodes (15): sourceFiles(), classesRendered(), classesStyled(), classPrefixes(), unusedClasses(), braces(), code(), gateAt (+7 more)

### Community 30 - "Project Guide"
Cohesion: 0.21
Nodes (8): HTML application shell, Playtest guide, Central scoring table, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates, Shared deterministic rules engine

### Community 31 - "OnlineGame.jsx"
Cohesion: 0.07
Nodes (57): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), hasNews() (+49 more)

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
Cohesion: 0.24
Nodes (17): dealRoles(), decoyFor(), hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord(), recentWordWindow() (+9 more)

### Community 57 - "engine.test.js"
Cohesion: 0.23
Nodes (12): EMPTY_HISTORY, applyAll(), deals(), FIVE, one(), OURS, revealAll(), roleIds() (+4 more)

### Community 58 - "reduce"
Cohesion: 0.13
Nodes (17): reduce(), clueRound(), voteOut(), cluesThisRound(), currentTurn(), deepFreeze(), guard(), isStrict() (+9 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "scoring.test.js"
Cohesion: 0.43
Nodes (6): MAX_WIN_POINTS, paysTheEliminated(), pointsFor(), WIN_POINTS, WIN_REASONS, here

### Community 64 - "ref_node_assert"
Cohesion: 0.14
Nodes (5): here, args, file, here, { lines, text, hash }

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 439 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Room Server and Tests` to `Project Guide`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `useT` be split into smaller, more focused modules?**
  _Cohesion score 0.07238413760152891 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `Room Server and Tests` to `engine.js`, `OnlineGame.jsx`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.05524537173082574 - nodes in this community are weakly interconnected._
- **Why does `react` connect `IconBoard.jsx` to `useT`, `StringBoard.jsx`, `errors/index.js`, `Build Dependencies`, `changelog.test.js`, `theme.test.js`, `dead.test.js`, `words/index.js`, `LocalGame.jsx`, `OnlineGame.jsx`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._