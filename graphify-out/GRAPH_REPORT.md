# Graph Report - Imposter-Game  (2026-11-26)

## Corpus Check
- 219 files · ~208,993 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 22 file(s) not represented in the graph (top: .css 15, (none) 3, .bat 1)

## Summary
- 1425 nodes · 3785 edges · 81 communities (66 shown, 15 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 97 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4ac01882`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ref_node_test
- Room Server and Tests
- roles/index.js
- ref_node_fs
- App.jsx
- react
- Talking.jsx
- useT
- Build Dependencies
- Continuous Integration
- select.js
- LICENSE-CONTENT.md
- every-screen.mjs
- pages.yml
- local/storage.js
- attributes
- PWA Icons
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
- primitives/index.js
- PackLibrary.jsx
- community.test.js
- fingerprint.js
- feature-request.yml
- dead.test.js
- room.test.js
- dead.test.js
- LocalGame.jsx
- server/store.js
- deal.js
- contact_links
- Icon
- SECURITY.md
- Contributing
- pull_request_template.md
- PackEditor.jsx
- Imposter-Game work note
- lint.test.js
- Library.jsx
- i18n/index.jsx
- screens.test.js
- PartyHub.jsx
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
- `The plan (owner, 2026-11-26, issue #103)` --references--> `motionMs()`  [INFERRED]
  DESIGN.md → src/ui/motionMs.js
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Icons` --references--> `ImposterMark()`  [INFERRED]
  DESIGN.md → src/ui/icons/brand.jsx
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (81 total, 15 thin omitted)

### Community 0 - "ref_node_test"
Cohesion: 0.21
Nodes (16): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+8 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.06
Nodes (56): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+48 more)

### Community 2 - "roles/index.js"
Cohesion: 0.24
Nodes (4): BY_ID, ROLE, ROLES, SPECIAL_ROLES

### Community 3 - "ref_node_fs"
Cohesion: 0.10
Nodes (14): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, args (+6 more)

### Community 4 - "App.jsx"
Cohesion: 0.17
Nodes (18): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), Crash() (+10 more)

### Community 5 - "react"
Cohesion: 0.16
Nodes (15): react, loadWords(), useWords(), Lobby(), loadClueTimer(), saveClueTimer(), OnlineLobby(), Candle() (+7 more)

### Community 6 - "Talking.jsx"
Cohesion: 0.12
Nodes (7): CallOnOnePhone(), Talking(), SecretVote(), Voting(), usePrivacyGate(), OnlineClues(), ActionBar()

### Community 7 - "useT"
Cohesion: 0.07
Nodes (48): EndGameButton(), PlayerList(), Scoreboard(), WinValues(), CallButton(), CallPanel(), NotTheImposter(), ClueGrid() (+40 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "select.js"
Cohesion: 0.31
Nodes (7): tally(), PHASE, publicImposterCount(), buildPublicState(), cluesThisRound(), publicState(), scrubbed

### Community 11 - "LICENSE-CONTENT.md"
Cohesion: 0.25
Nodes (5): Content licence, What this licence does not cover, Icons, Third-party notices, Community packs

### Community 12 - "every-screen.mjs"
Cohesion: 0.16
Nodes (12): dealAndReveal(), dist, fail(), here, moved, newest(), openPage(), root (+4 more)

### Community 13 - "pages.yml"
Cohesion: 0.06
Nodes (31): runs-on, steps, concurrency, cancel-in-progress, group, environment, needs, runs-on (+23 more)

### Community 14 - "local/storage.js"
Cohesion: 0.18
Nodes (18): MAX_PLAYERS, nameProblem(), CLUE_TIMER_CHOICES, CLUE_TIMER_KEY, CONFIG_KEY, GAME_KEY, isResumable(), RECENT_WORDS_KEY (+10 more)

### Community 15 - "attributes"
Cohesion: 0.11
Nodes (17): description, label, options, render, value, body, attributes, id (+9 more)

### Community 16 - "PWA Icons"
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "strings.js"
Cohesion: 0.18
Nodes (17): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+9 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.13
Nodes (24): clueRound(), FIVE, one(), OURS, roleIds(), SEVEN, voteOut(), chaosAction() (+16 more)

### Community 20 - "engine.js"
Cohesion: 0.19
Nodes (25): pickWord(), advanceAfterVerdict(), finish(), normalise(), resolveOutcome(), resolveVote(), sameClue(), sameWord() (+17 more)

### Community 21 - "react"
Cohesion: 0.06
Nodes (41): #17 shared game frame (in progress), WORD_LANGUAGES, closestPreset(), PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith() (+33 more)

### Community 22 - "ref_node_assert"
Cohesion: 0.24
Nodes (14): autoImposterCount(), DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MAX_NAME, maxImpostersFor(), normaliseConfig(), PLAIN_CREW_FLOOR (+6 more)

### Community 23 - "words/index.js"
Cohesion: 0.12
Nodes (16): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), DEFAULT_WORD_LANG (+8 more)

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
Cohesion: 0.05
Nodes (37): Banners and Dialogs, Buttons, Choices, Colors, Components, Design System: The Long Table, Do's and Don'ts, Elevation & Depth (+29 more)

### Community 55 - "primitives/index.js"
Cohesion: 0.19
Nodes (12): RoleCard(), OnlineReveal(), EyeIcon(), Backdrop(), HoldRing(), CardBackIcon(), HintIcon(), UnknownIcon() (+4 more)

### Community 56 - "PackLibrary.jsx"
Cohesion: 0.20
Nodes (12): loadCommunity(), Marked(), PackLibrary(), PackSheet(), rowLine(), filterPack(), matchAt(), shelfFor() (+4 more)

### Community 57 - "community.test.js"
Cohesion: 0.18
Nodes (13): clean(), CREDIT_MAX, readCommunityPack(), slugFor(), KEYS, root, PACK_LIMITS, byAt (+5 more)

### Community 58 - "fingerprint.js"
Cohesion: 0.26
Nodes (11): wordsReady(), packsFor(), pairCount(), poolFor(), behaviour(), bySeat(), games(), NAMES (+3 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "dead.test.js"
Cohesion: 0.16
Nodes (15): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+7 more)

### Community 61 - "room.test.js"
Cohesion: 0.14
Nodes (18): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), loadSession() (+10 more)

### Community 62 - "dead.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 63 - "LocalGame.jsx"
Cohesion: 0.11
Nodes (16): LocalGame(), Resume(), Reveal(), clearGame(), loadConfig(), loadGame(), loadRecentWords(), loadScores() (+8 more)

### Community 64 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 65 - "deal.js"
Cohesion: 0.22
Nodes (10): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+2 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "Icon"
Cohesion: 0.10
Nodes (31): ICONS, ArmchairIcon(), BookIcon(), BrainIcon(), ChevronLeftIcon(), ContrastIcon(), CopyIcon(), DiceIcon() (+23 more)

### Community 68 - "SECURITY.md"
Cohesion: 0.50
Nodes (3): Reporting a vulnerability, Security policy, Supported versions

### Community 69 - "Contributing"
Cohesion: 0.67
Nodes (3): Contributing, Report a problem, Send a change

### Community 71 - "PackEditor.jsx"
Cohesion: 0.27
Nodes (7): cache, files, SHARE_URL, shareLink(), AiPrompt, COUNTS, EMOJI

### Community 72 - "Imposter-Game work note"
Cohesion: 0.15
Nodes (12): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note, Issue metadata cleanup (2026-11-21) (+4 more)

### Community 73 - "lint.test.js"
Cohesion: 0.38
Nodes (6): foldLatinAccents(), INFLECTIONS, lintPack(), lintPacks(), normalise(), sameWordDifferentEnding()

### Community 74 - "Library.jsx"
Cohesion: 0.49
Nodes (8): Library(), PackEditor(), loadPacks(), savePacks(), unwrap(), useErrorText(), Room(), Banner()

### Community 75 - "i18n/index.jsx"
Cohesion: 0.06
Nodes (52): hasNews(), noteKey(), RELEASES, since(), pkg, VERSION, Changelog(), ErrorBoundary (+44 more)

### Community 76 - "screens.test.js"
Cohesion: 0.39
Nodes (7): isPlaying(), renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor(), here, MODES

### Community 77 - "PartyHub.jsx"
Cohesion: 0.10
Nodes (8): GameLibrary(), STEPS, gameById(), GAMES, gamesFor(), MODES, wordGames(), MARKS

### Community 78 - "RoleGlyph.jsx"
Cohesion: 0.29
Nodes (9): Roles(), CheckIcon(), base, CrewIcon(), DetectiveIcon(), ImposterIcon(), JesterIcon(), SidekickIcon() (+1 more)

### Community 80 - "Project standards"
Cohesion: 0.40
Nodes (5): Checks, Code, Definition of done, Lessons, Project standards

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 504 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Icon`, `App.jsx`, `Talking.jsx`, `useT`, `Build Dependencies`, `PackEditor.jsx`, `Library.jsx`, `i18n/index.jsx`, `PartyHub.jsx`, `local/storage.js`, `RoleGlyph.jsx`, `strings.js`, `react`, `primitives/index.js`, `PackLibrary.jsx`, `room.test.js`, `dead.test.js`, `LocalGame.jsx`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06330988522769344 - nodes in this community are weakly interconnected._
- **Why does `Project standards` connect `Project standards` to `Project Guide`, `ref_node_assert`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.10052910052910052 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `ref_node_assert` to `ref_node_test`, `select.js`, `Project standards`?**
  _High betweenness centrality (0.053) - this node is a cross-community bridge._
- **Should `Talking.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12433862433862433 - nodes in this community are weakly interconnected._