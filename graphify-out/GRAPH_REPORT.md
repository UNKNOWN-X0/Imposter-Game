# Graph Report - Imposter-Game  (2026-11-27)

## Corpus Check
- 223 files · ~212,315 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 22 file(s) not represented in the graph (top: .css 15, (none) 3, .bat 1)

## Summary
- 1459 nodes · 3859 edges · 90 communities (72 shown, 18 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 100 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0e397aab`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ref_node_test
- Room Server and Tests
- dead.test.js
- OnlineGame.jsx
- ref_node_assert
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
- rules.js
- words/index.js
- engine.test.js
- Hosting Configuration
- bug-report.yml
- every-ending.mjs
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
- every-room.mjs
- feature-request.yml
- step
- room.test.js
- dead.test.js
- LocalGame.jsx
- ref_node_fs
- deal.js
- contact_links
- Icon
- SECURITY.md
- Contributing
- pull_request_template.md
- engine.test.js
- Imposter-Game work note
- Avatar.jsx
- community.test.js
- i18n/index.jsx
- i18n/index.jsx
- HowItWorks.jsx
- RoleGlyph.jsx
- Rules.jsx
- ref_node_test
- strings/index.js
- Shell.jsx
- PartyProvider.jsx
- lint.test.js
- Resume.jsx
- local/screens/Reveal.jsx
- PartyHub.jsx
- fingerprint.mjs
- FakeEventSource

## God Nodes (most connected - your core abstractions)
1. `useT()` - 109 edges
2. `react` - 49 edges
3. `Icon()` - 45 edges
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
- `The plan (owner, 2026-11-26, issue #103)` --references--> `onWinningSide()`  [INFERRED]
  DESIGN.md → src/core/select.js
- `The plan (owner, 2026-11-26, issue #103)` --references--> `motionMs()`  [INFERRED]
  DESIGN.md → src/ui/motionMs.js
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (90 total, 18 thin omitted)

### Community 0 - "ref_node_test"
Cohesion: 0.06
Nodes (63): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), cache (+55 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.06
Nodes (60): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+52 more)

### Community 2 - "dead.test.js"
Cohesion: 0.20
Nodes (11): hasNews(), noteKey(), RELEASES, since(), pkg, VERSION, Changelog(), builtAtRuntime() (+3 more)

### Community 3 - "OnlineGame.jsx"
Cohesion: 0.11
Nodes (12): OnlineGame(), Room(), OnlineReveal(), isPlaying(), renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor() (+4 more)

### Community 4 - "ref_node_assert"
Cohesion: 0.19
Nodes (9): hintLine(), translator(), FALLBACK_LANG, STRINGS, localeNumber(), numbers, resolveKey(), LANGS (+1 more)

### Community 5 - "react"
Cohesion: 0.17
Nodes (13): useWords(), Lobby(), loadClueTimer(), saveClueTimer(), OnlineLobby(), Candle(), chairsFor(), Crown() (+5 more)

### Community 6 - "Talking.jsx"
Cohesion: 0.13
Nodes (7): react, CallOnOnePhone(), Talking(), SecretVote(), usePrivacyGate(), OnlineClues(), ActionBar()

### Community 7 - "useT"
Cohesion: 0.22
Nodes (21): CallButton(), CallPanel(), NotTheImposter(), ClueGrid(), ClueInput(), ClueList(), roundLabel(), Timer() (+13 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

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
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 15 - "attributes"
Cohesion: 0.11
Nodes (17): description, label, options, render, value, body, attributes, id (+9 more)

### Community 16 - "dead.test.js"
Cohesion: 0.29
Nodes (10): AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode(), unresolvedNames(), classesRendered(), classesStyled() (+2 more)

### Community 17 - "strings.js"
Cohesion: 0.16
Nodes (19): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+11 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.23
Nodes (12): chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction(), someAction() (+4 more)

### Community 20 - "engine.js"
Cohesion: 0.23
Nodes (11): fail(), GameError, mulberry32(), randomSeed(), shuffle(), MAX_WIN_POINTS, paysTheEliminated(), pointsFor() (+3 more)

### Community 21 - "react"
Cohesion: 0.06
Nodes (38): closestPreset(), PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith(), TABLE, Roles() (+30 more)

### Community 22 - "rules.js"
Cohesion: 0.15
Nodes (19): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters(), autoImposterCount() (+11 more)

### Community 23 - "words/index.js"
Cohesion: 0.10
Nodes (27): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+19 more)

### Community 24 - "engine.test.js"
Cohesion: 0.14
Nodes (19): createGame(), reduce(), clueRound(), voteOut(), normaliseConfig(), cluesThisRound(), currentTurn(), deepFreeze() (+11 more)

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "bug-report.yml"
Cohesion: 0.13
Nodes (14): description, label, options, render, body, attributes, id, type (+6 more)

### Community 27 - "every-ending.mjs"
Cohesion: 0.15
Nodes (15): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+7 more)

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
Cohesion: 0.18
Nodes (6): canBuild, failed, mark, results, root, skipped

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
Nodes (34): Banners and Dialogs, Buttons, Choices, Colors, Components, Design System: The Long Table, Do's and Don'ts, Elevation & Depth (+26 more)

### Community 55 - "primitives/index.js"
Cohesion: 0.22
Nodes (12): packById(), PackChip(), RoleCard(), EyeIcon(), HoldRing(), CardBackIcon(), HintIcon(), UnknownIcon() (+4 more)

### Community 56 - "index.test.js"
Cohesion: 0.24
Nodes (5): events, FakeAudio, made, node(), param()

### Community 57 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 58 - "every-room.mjs"
Cohesion: 0.14
Nodes (16): code, dealAndLook(), dist, errors, fail(), guests, here, newest() (+8 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "step"
Cohesion: 0.23
Nodes (17): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), step(), tally(), publicImposterCount(), buildPublicState() (+9 more)

### Community 61 - "room.test.js"
Cohesion: 0.17
Nodes (19): JoinScreen(), api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom() (+11 more)

### Community 62 - "dead.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 63 - "LocalGame.jsx"
Cohesion: 0.16
Nodes (23): LocalGame(), Voting(), clearGame(), CLUE_TIMER_CHOICES, CLUE_TIMER_KEY, CONFIG_KEY, GAME_KEY, hasSavedGame() (+15 more)

### Community 64 - "ref_node_fs"
Cohesion: 0.14
Nodes (10): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, here (+2 more)

### Community 65 - "deal.js"
Cohesion: 0.19
Nodes (11): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+3 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "Icon"
Cohesion: 0.12
Nodes (30): ArmchairIcon(), BookIcon(), BrainIcon(), CheckIcon(), ChevronLeftIcon(), ContrastIcon(), CopyIcon(), DiceIcon() (+22 more)

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 71 - "engine.test.js"
Cohesion: 0.18
Nodes (16): pickWord(), applyAll(), normalise(), sameClue(), sameWord(), deals(), FIVE, one() (+8 more)

### Community 72 - "Imposter-Game work note"
Cohesion: 0.15
Nodes (12): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21) (+4 more)

### Community 73 - "Avatar.jsx"
Cohesion: 0.29
Nodes (12): AddPlayerForm(), EmblemChoice(), EmblemPicker(), LobbyHint(), EmblemIcon(), byId, defaultEmblem(), EMBLEM_IDS (+4 more)

### Community 74 - "community.test.js"
Cohesion: 0.18
Nodes (12): clean(), CREDIT_MAX, readCommunityPack(), slugFor(), KEYS, root, byAt, [command, code, ...rest] (+4 more)

### Community 75 - "i18n/index.jsx"
Cohesion: 0.14
Nodes (26): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+18 more)

### Community 76 - "i18n/index.jsx"
Cohesion: 0.29
Nodes (8): EndGameButton(), PlayerList(), Scoreboard(), WinValues(), GameOverCard(), LanguageContext, SeatActions(), Avatar()

### Community 77 - "HowItWorks.jsx"
Cohesion: 0.15
Nodes (4): STEPS, MARKS, GamesIcon(), Backdrop()

### Community 78 - "RoleGlyph.jsx"
Cohesion: 0.42
Nodes (7): CrewIcon(), DetectiveIcon(), ImposterIcon(), JesterIcon(), ScoreIcon(), SidekickIcon(), RoleGlyph()

### Community 79 - "Rules.jsx"
Cohesion: 0.21
Nodes (7): FirstRun(), ImposterRules(), RULES, IMPOSTER_STEPS, imposterSteps(), RuleSteps(), MessageIcon()

### Community 80 - "ref_node_test"
Cohesion: 0.27
Nodes (6): channels(), contrast(), hue(), hueGap(), luminance(), SIDES

### Community 81 - "strings/index.js"
Cohesion: 0.24
Nodes (8): detectLanguage(), LanguageProvider(), supported(), inFlight, LOADERS, loadStrings(), stringsReady(), startIn

### Community 82 - "Shell.jsx"
Cohesion: 0.29
Nodes (6): #17 shared game frame (in progress), inRound(), PhaseStepper(), STEP_PHASES, RoomCode(), Shell()

### Community 83 - "PartyProvider.jsx"
Cohesion: 0.45
Nodes (8): MAX_PLAYERS, nameProblem(), PartyContext, PartyProvider(), loadEmblems(), loadRoster(), saveEmblems(), saveRoster()

### Community 84 - "lint.test.js"
Cohesion: 0.38
Nodes (6): foldLatinAccents(), INFLECTIONS, lintPack(), lintPacks(), normalise(), sameWordDifferentEnding()

### Community 85 - "Resume.jsx"
Cohesion: 0.32
Nodes (6): Icons, Resume(), BrandMark(), CHAIR_LINES, CHAIR_SOLIDS, ImposterMark()

### Community 88 - "fingerprint.mjs"
Cohesion: 0.29
Nodes (4): args, file, here, { lines, text, hash }

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 521 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `Room Server and Tests` to `Project Guide`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ref_node_test` be split into smaller, more focused modules?**
  _Cohesion score 0.060083594566353184 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `Room Server and Tests` to `ref_node_test`, `engine.test.js`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Talking.jsx` to `ref_node_test`, `dead.test.js`, `OnlineGame.jsx`, `react`, `useT`, `Build Dependencies`, `IconBoard.jsx`, `strings.js`, `react`, `primitives/index.js`, `room.test.js`, `dead.test.js`, `LocalGame.jsx`, `Icon`, `Avatar.jsx`, `i18n/index.jsx`, `i18n/index.jsx`, `Rules.jsx`, `strings/index.js`, `Shell.jsx`, `PartyProvider.jsx`, `Resume.jsx`, `PartyHub.jsx`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `OnlineGame.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._