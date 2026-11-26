# Graph Report - Imposter-Game  (2026-11-26)

## Corpus Check
- 218 files · ~208,402 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 22 file(s) not represented in the graph (top: .css 15, (none) 3, .bat 1)

## Summary
- 1421 nodes · 3776 edges · 71 communities (55 shown, 16 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 97 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a315d637`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- PackEditor.jsx
- Room Server and Tests
- roles/index.js
- ref_node_fs
- Rules.jsx
- errors/index.js
- Talking.jsx
- useT
- Build Dependencies
- Continuous Integration
- engine.test.js
- LICENSE-CONTENT.md
- every-screen.mjs
- pages.yml
- IconBoard.jsx
- attributes
- PWA Icons
- Presets.jsx
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
- ref_node_url
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
- feature-request.yml
- dead.test.js
- room.test.js
- dead.test.js
- LocalGame.jsx
- server/store.js
- contact_links
- Icon
- SECURITY.md
- Contributing
- pull_request_template.md
- Imposter-Game work note
- i18n/index.jsx
- HowItWorks.jsx
- RoleGlyph.jsx
- GameError

## God Nodes (most connected - your core abstractions)
1. `useT()` - 109 edges
2. `react` - 50 edges
3. `Icon()` - 44 edges
4. `reduce()` - 35 edges
5. `step()` - 33 edges
6. `LocalGame()` - 28 edges
7. `Avatar()` - 26 edges
8. `createGame()` - 23 edges
9. `PackEditor()` - 22 edges
10. `ImposterGame README` - 21 edges

## Surprising Connections (you probably didn't know these)
- `The plan (owner, 2026-11-26, issue #103)` --references--> `motionMs()`  [INFERRED]
  DESIGN.md → src/ui/motionMs.js
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (71 total, 16 thin omitted)

### Community 0 - "PackEditor.jsx"
Cohesion: 0.08
Nodes (44): cache, files, clean(), CREDIT_MAX, readCommunityPack(), slugFor(), SHARE_URL, shareLink() (+36 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.06
Nodes (63): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+55 more)

### Community 2 - "roles/index.js"
Cohesion: 0.27
Nodes (4): BY_ID, ROLE, ROLES, SPECIAL_ROLES

### Community 3 - "ref_node_fs"
Cohesion: 0.11
Nodes (11): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, args (+3 more)

### Community 4 - "Rules.jsx"
Cohesion: 0.21
Nodes (7): FirstRun(), ImposterRules(), RULES, IMPOSTER_STEPS, imposterSteps(), RuleSteps(), TrophyIcon()

### Community 5 - "errors/index.js"
Cohesion: 0.14
Nodes (26): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), described(), facts, failures (+18 more)

### Community 6 - "Talking.jsx"
Cohesion: 0.08
Nodes (20): loadWords(), useWords(), Lobby(), CallOnOnePhone(), SecretVote(), Voting(), CLUE_TIMER_CHOICES, saveClueTimer() (+12 more)

### Community 7 - "useT"
Cohesion: 0.07
Nodes (61): react, packById(), EndGameButton(), hintLine(), PlayerList(), Scoreboard(), WinValues(), PackChip() (+53 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "engine.test.js"
Cohesion: 0.19
Nodes (19): resolveVote(), tally(), clueRound(), FIVE, one(), OURS, roleIds(), SEVEN (+11 more)

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
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "Presets.jsx"
Cohesion: 0.15
Nodes (10): closestPreset(), PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith(), TABLE, ICONS (+2 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.19
Nodes (14): voteOut(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction() (+6 more)

### Community 20 - "engine.js"
Cohesion: 0.15
Nodes (29): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord() (+21 more)

### Community 21 - "react"
Cohesion: 0.06
Nodes (46): #17 shared game frame (in progress), loadCommunity(), packsFor(), PartyHub(), imposterHint(), HowMany(), WhatTheySee(), WhetherTheyKnow() (+38 more)

### Community 22 - "ref_node_assert"
Cohesion: 0.21
Nodes (16): winsWithImposters(), autoImposterCount(), DECOY, DEFAULT_CONFIG, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MAX_NAME, maxImpostersFor() (+8 more)

### Community 23 - "words/index.js"
Cohesion: 0.10
Nodes (22): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loaded, LOADERS, wordsReady(), DEFAULT_WORD_LANG, _forgetWords() (+14 more)

### Community 24 - "engine.test.js"
Cohesion: 0.13
Nodes (20): createGame(), applyAll(), reduce(), deals(), revealAll(), started(), withPacks(), withPlayers() (+12 more)

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

### Community 31 - "ref_node_url"
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
Nodes (39): Banners and Dialogs, Buttons, Choices, Colors, Components, Design System: The Long Table, Do's and Don'ts, Elevation & Depth (+31 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "dead.test.js"
Cohesion: 0.13
Nodes (22): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+14 more)

### Community 61 - "room.test.js"
Cohesion: 0.13
Nodes (20): JoinScreen(), api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom() (+12 more)

### Community 62 - "dead.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 63 - "LocalGame.jsx"
Cohesion: 0.05
Nodes (63): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), MAX_PLAYERS (+55 more)

### Community 64 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "Icon"
Cohesion: 0.14
Nodes (25): BookIcon(), BrainIcon(), ChevronLeftIcon(), ContrastIcon(), DiceIcon(), GamesIcon(), GlobeIcon(), HourglassIcon() (+17 more)

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
Cohesion: 0.08
Nodes (37): hasNews(), noteKey(), RELEASES, since(), pkg, VERSION, Changelog(), FILTERS (+29 more)

### Community 77 - "HowItWorks.jsx"
Cohesion: 0.20
Nodes (3): STEPS, MARKS, UserPlusIcon()

### Community 78 - "RoleGlyph.jsx"
Cohesion: 0.28
Nodes (10): Roles(), CheckIcon(), CrewIcon(), DetectiveIcon(), ImposterIcon(), JesterIcon(), ScoreIcon(), SidekickIcon() (+2 more)

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 504 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Room Server and Tests` to `Project Guide`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `PackEditor.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.07680491551459294 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `PackEditor.jsx`, `Icon`, `Rules.jsx`, `errors/index.js`, `Talking.jsx`, `Build Dependencies`, `i18n/index.jsx`, `react`, `Components`, `room.test.js`, `dead.test.js`, `LocalGame.jsx`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.05679974034404414 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `Room Server and Tests` to `PackEditor.jsx`, `engine.js`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.11462450592885376 - nodes in this community are weakly interconnected._