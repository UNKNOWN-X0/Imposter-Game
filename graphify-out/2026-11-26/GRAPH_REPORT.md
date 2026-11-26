# Graph Report - Imposter-Game  (2026-11-26)

## Corpus Check
- 214 files · ~206,032 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: .css 14, (none) 3, .bat 1)

## Summary
- 1382 nodes · 3787 edges · 83 communities (67 shown, 16 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 94 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `40bc75fe`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Settings.jsx
- Room Server and Tests
- every-ending.mjs
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
- Rules.jsx
- Hosting Configuration
- bug-report.yml
- RoleGlyph.jsx
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
- ready.js
- Imposter-Game work note
- select.js
- OnlineGame.jsx
- server/store.js
- changelog.test.js
- PartyProvider.jsx
- verify.mjs
- lint.test.js
- main.jsx
- screens.test.js
- FakeEventSource

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
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `#17 shared game frame (in progress)` --references--> `RoomCode()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx
- `#17 shared game frame (in progress)` --references--> `Shell()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (83 total, 16 thin omitted)

### Community 0 - "Settings.jsx"
Cohesion: 0.07
Nodes (57): LIB_LANG_KEY, read(), write(), cache, files, loadCommunity(), clean(), CREDIT_MAX (+49 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.06
Nodes (53): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+45 more)

### Community 2 - "every-ending.mjs"
Cohesion: 0.16
Nodes (14): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+6 more)

### Community 3 - "ref_node_fs"
Cohesion: 0.13
Nodes (8): here, args, file, here, { lines, text, hash }, here, ICONS, PUBLIC

### Community 4 - "App.jsx"
Cohesion: 0.15
Nodes (15): App(), IconBoard, readHash(), StringBoard, Crash(), GameLibrary(), HowItWorks(), Rules() (+7 more)

### Community 5 - "errors/index.js"
Cohesion: 0.14
Nodes (24): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), described(), facts, failures (+16 more)

### Community 6 - "Talking.jsx"
Cohesion: 0.13
Nodes (5): CallOnOnePhone(), Talking(), CLUE_TIMER_CHOICES, loadClueTimer(), saveClueTimer()

### Community 7 - "useT"
Cohesion: 0.06
Nodes (86): react, PartyHub(), EndGameButton(), hintLine(), PlayerList(), Scoreboard(), WinValues(), PackChip() (+78 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "Icon"
Cohesion: 0.15
Nodes (25): ArmchairIcon(), BookIcon(), BrainIcon(), ChevronLeftIcon(), ContrastIcon(), DiceIcon(), GamesIcon(), HourglassIcon() (+17 more)

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
Cohesion: 0.20
Nodes (10): ALL, contrast(), css, here, hue(), hueGap(), index, luminance() (+2 more)

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
Cohesion: 0.17
Nodes (14): fail(), GameError, chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS (+6 more)

### Community 20 - "roles/index.js"
Cohesion: 0.26
Nodes (7): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters()

### Community 21 - "Settings.jsx"
Cohesion: 0.10
Nodes (27): WORD_LANGUAGES, closestPreset(), PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith(), TABLE (+19 more)

### Community 22 - "rules.js"
Cohesion: 0.18
Nodes (19): autoImposterCount(), DECOY, DEFAULT_CONFIG, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MAX_NAME, MAX_PLAYERS, maxImpostersFor() (+11 more)

### Community 23 - "words/index.js"
Cohesion: 0.10
Nodes (28): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+20 more)

### Community 24 - "Rules.jsx"
Cohesion: 0.21
Nodes (6): FirstRun(), ImposterRules(), RULES, IMPOSTER_STEPS, imposterSteps(), RuleSteps()

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "bug-report.yml"
Cohesion: 0.13
Nodes (14): description, label, options, render, body, attributes, id, type (+6 more)

### Community 27 - "RoleGlyph.jsx"
Cohesion: 0.36
Nodes (7): Roles(), CheckIcon(), CrewIcon(), DetectiveIcon(), SidekickIcon(), ROLE_FACE, RoleGlyph()

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
Cohesion: 0.05
Nodes (37): Banners and Dialogs, Buttons, Choices, Colors, Components, Design System: The Long Table, Do's and Don'ts, Elevation & Depth (+29 more)

### Community 55 - "layout.mjs"
Cohesion: 0.38
Nodes (6): here, LAYOUTS, measure(), SHOTS, slug(), snapshot()

### Community 56 - "engine.js"
Cohesion: 0.14
Nodes (23): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord() (+15 more)

### Community 57 - "step"
Cohesion: 0.29
Nodes (16): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), step(), tally(), canCall(), cluesThisRound() (+8 more)

### Community 58 - "engine.test.js"
Cohesion: 0.14
Nodes (22): createGame(), applyAll(), reduce(), clueRound(), deals(), FIVE, one(), OURS (+14 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "names.js"
Cohesion: 0.29
Nodes (10): AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode(), unresolvedNames(), classesRendered(), classesStyled() (+2 more)

### Community 61 - "room.test.js"
Cohesion: 0.19
Nodes (17): note(), api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom() (+9 more)

### Community 62 - "dead.test.js"
Cohesion: 0.20
Nodes (12): builtAtRuntime(), errorCodesInSource(), root, read(), systemMode(), ThemeContext, ThemeProvider(), DEFAULT_MODE (+4 more)

### Community 63 - "LocalGame.jsx"
Cohesion: 0.21
Nodes (20): LocalGame(), Resume(), clearGame(), CLUE_TIMER_KEY, CONFIG_KEY, GAME_KEY, isResumable(), loadConfig() (+12 more)

### Community 64 - "every-room.mjs"
Cohesion: 0.13
Nodes (17): code, dealAndLook(), dist, errors, fail(), guests, here, newest() (+9 more)

### Community 65 - "strings.js"
Cohesion: 0.23
Nodes (12): compareAll(), compareKey(), placeholdersIn(), placeholderTrouble(), readsAsUntranslated(), askedKeys(), BUILT_AT_RUNTIME, deadKeys() (+4 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "IconBoard.jsx"
Cohesion: 0.06
Nodes (3): ICONS, ICONS, ScoreIcon()

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 71 - "ready.js"
Cohesion: 0.14
Nodes (16): FILTERS, StringBoard(), StringRow(), translator(), hasTrouble(), FALLBACK_LANG, inFlight, LANGUAGES (+8 more)

### Community 72 - "Imposter-Game work note"
Cohesion: 0.14
Nodes (13): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, #17 shared game frame (in progress), Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note (+5 more)

### Community 73 - "select.js"
Cohesion: 0.36
Nodes (6): publicState(), deepFreeze(), guard(), isStrict(), setStrict(), strict

### Community 74 - "OnlineGame.jsx"
Cohesion: 0.34
Nodes (11): describe(), keepQuiet(), useErrorText(), JoinScreen(), OnlineGame(), Room(), loadSession(), useParty() (+3 more)

### Community 75 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 76 - "changelog.test.js"
Cohesion: 0.38
Nodes (7): hasNews(), noteKey(), RELEASES, since(), pkg, VERSION, Changelog()

### Community 77 - "PartyProvider.jsx"
Cohesion: 0.44
Nodes (8): nameProblem(), PartyContext, PartyProvider(), loadEmblems(), loadRoster(), saveEmblems(), saveRoster(), EmblemContext

### Community 78 - "verify.mjs"
Cohesion: 0.20
Nodes (6): canBuild, failed, mark, results, root, skipped

### Community 79 - "lint.test.js"
Cohesion: 0.38
Nodes (6): foldLatinAccents(), INFLECTIONS, lintPack(), lintPacks(), normalise(), sameWordDifferentEnding()

### Community 80 - "main.jsx"
Cohesion: 0.31
Nodes (7): detectLanguage(), LanguageProvider(), supported(), loadStrings(), stringsReady(), startIn, Backdrop()

### Community 81 - "screens.test.js"
Cohesion: 0.39
Nodes (7): isPlaying(), renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor(), here, MODES

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 510 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Project standards` to `Project Guide`, `rules.js`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Settings.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06842105263157895 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `rules.js` to `Settings.jsx`, `select.js`, `Project standards`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.0640503517215846 - nodes in this community are weakly interconnected._
- **Why does `react` connect `useT` to `Settings.jsx`, `App.jsx`, `errors/index.js`, `Talking.jsx`, `ready.js`, `Build Dependencies`, `OnlineGame.jsx`, `Icon`, `changelog.test.js`, `PartyProvider.jsx`, `main.jsx`, `Settings.jsx`, `Rules.jsx`, `room.test.js`, `dead.test.js`, `LocalGame.jsx`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.1323529411764706 - nodes in this community are weakly interconnected._