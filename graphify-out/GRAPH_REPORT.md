# Graph Report - The-Long-Table  (2026-11-27)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1491 nodes · 3980 edges · 64 communities (61 shown, 3 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 135 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b59bc347`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Release History
- Custom and Community Packs
- Room Server
- App Shell and Navigation
- Players and Emblems
- Translations and String Board
- Lobby and Table Scene
- Pass-and-Play Round Screens
- Clue, Call and Vote Panels
- Build Dependencies
- Continuous Integration
- Icon Board
- Contributing and Licences
- Every-Screen Browser Sweep
- Pages Deployment
- Icon and Stylesheet Checks
- Share-a-Pack Issue Form
- Source Name Checks
- Players and Scoreboard
- Coverage Reporting
- Randomised Game Fuzzing
- Word Picking and Scoring
- Lobby Settings, Sheets and Sound
- Imposter Count Rules
- Word Loading
- Game Reducer and Test Harness
- Room Hosting Configuration
- Bug Report Form
- Room and Ending Browser Sweeps
- Word Pack Request Form
- Style Checks
- Project Standards
- Preset Icons
- Design System Overview
- Product Context
- Special Roles
- Tavern Redesign
- App Icons
- README Screenshot
- Product Principles
- Room Recovery File
- Rule Step Icons
- Security Policy
- Game Errors
- Code of Conduct
- Roadmap
- Agent Instructions
- Design Components
- Sound Engine Tests
- Feature Request Form
- Vote and Round Outcomes
- Room Client
- Themes and Contrast
- Local Game Storage and Phase Routing
- Verify, Layout and Icon Tools
- Dealing Roles and Words
- Issue Template Links
- Action Icons
- Pull Request Template
- Error Reporting
- How It Works
- Role Icons
- Brand Marks
- Public State and Strict Mode

## God Nodes (most connected - your core abstractions)
1. `useT()` - 109 edges
2. `react` - 49 edges
3. `Icon()` - 45 edges
4. `reduce()` - 35 edges
5. `step()` - 33 edges
6. `CHANGELOG` - 31 edges
7. `Avatar()` - 28 edges
8. `LocalGame()` - 28 edges
9. `createGame()` - 23 edges
10. `PackEditor()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `The plan (owner, 2026-11-26, issue #103)` --references--> `motionMs()`  [INFERRED]
  DESIGN.md → src/ui/motionMs.js
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `The plan (owner, 2026-11-26, issue #103)` --references--> `onWinningSide()`  [INFERRED]
  DESIGN.md → src/core/select.js
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Hyperedges (group relationships)
- **Three positioning claims** — product_secrets_server, product_three_languages, product_zero_setup [EXTRACTED 1.00]
- **Three screens of The Long Table app flow** — assets_preview_home_screen, assets_preview_clues_screen, assets_preview_word_packs_screen [EXTRACTED 1.00]
- **Community pack pipeline** — readme_community_library, src_content_words_community_readme_pack_format, src_content_words_community_readme_add_command, agents_community_pack_flow [INFERRED 0.85]
- **Change verification ladder** — standards_checks, standards_fingerprint, standards_definition_of_done, _github_pull_request_template_checklist [INFERRED 0.85]

## Communities (64 total, 3 thin omitted)

### Community -1 - "Release History"
Cohesion: 0.13
Nodes (20): CHANGELOG, Keep a Changelog / semver, Legal lobby could deal a lost game, Broadcast seed leak bug, 1.0.0 first working game, 1.13.0 light/dark and themes, 1.15.0 optional roles and scoring, 1.16.0 win payouts and clean sweep (+12 more)

### Community 0 - "Custom and Community Packs"
Cohesion: 0.06
Nodes (50): cache, files, loadCommunity(), clean(), CREDIT_MAX, readCommunityPack(), slugFor(), SHARE_URL (+42 more)

### Community 1 - "Room Server"
Cohesion: 0.07
Nodes (53): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+45 more)

### Community 2 - "App Shell and Navigation"
Cohesion: 0.07
Nodes (45): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), hasNews() (+37 more)

### Community 3 - "Players and Emblems"
Cohesion: 0.22
Nodes (17): DealStrip(), JoinScreen(), AddPlayerForm(), EmblemChoice(), EmblemPicker(), LobbyHint(), useParty(), SeatActions() (+9 more)

### Community 4 - "Translations and String Board"
Cohesion: 0.08
Nodes (34): FILTERS, StringBoard(), StringRow(), translator(), compareAll(), compareKey(), hasTrouble(), placeholdersIn() (+26 more)

### Community 5 - "Lobby and Table Scene"
Cohesion: 0.17
Nodes (11): Table and Seats, CLUE_TIMER_CHOICES, OnlineLobby(), Candle(), chairsFor(), Crown(), Mug(), seatPoints() (+3 more)

### Community 6 - "Pass-and-Play Round Screens"
Cohesion: 0.10
Nodes (10): react, LanguageContext, CallOnOnePhone(), SecretVote(), Voting(), usePrivacyGate(), OnlineClues(), ActionBar() (+2 more)

### Community 7 - "Clue, Call and Vote Panels"
Cohesion: 0.20
Nodes (21): CallButton(), CallPanel(), NotTheImposter(), ClueGrid(), ClueInput(), ClueList(), roundLabel(), Timer() (+13 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 11 - "Contributing and Licences"
Cohesion: 0.16
Nodes (14): Community pack intake, Code of Conduct, Contributor Covenant, Contributing, Report a problem, Send a change, Word packs under CC BY-NC-SA 4.0, Content licence (+6 more)

### Community 12 - "Every-Screen Browser Sweep"
Cohesion: 0.16
Nodes (12): dealAndReveal(), dist, fail(), here, moved, newest(), openPage(), root (+4 more)

### Community 13 - "Pages Deployment"
Cohesion: 0.06
Nodes (31): runs-on, steps, concurrency, cancel-in-progress, group, environment, needs, runs-on (+23 more)

### Community 14 - "Icon and Stylesheet Checks"
Cohesion: 0.10
Nodes (25): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), answers(), askedKeys() (+17 more)

### Community 15 - "Share-a-Pack Issue Form"
Cohesion: 0.11
Nodes (17): description, label, options, render, value, body, attributes, id (+9 more)

### Community 16 - "Source Name Checks"
Cohesion: 0.18
Nodes (13): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+5 more)

### Community 17 - "Players and Scoreboard"
Cohesion: 0.18
Nodes (12): EndGameButton(), hintLine(), PlayerList(), Scoreboard(), WinValues(), PackChip(), RoleCard(), GameOverCard() (+4 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "Randomised Game Fuzzing"
Cohesion: 0.23
Nodes (12): chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction(), someAction() (+4 more)

### Community 20 - "Word Picking and Scoring"
Cohesion: 0.24
Nodes (13): pickWord(), normalise(), sameClue(), sameWord(), mulberry32(), randomSeed(), shuffle(), MAX_WIN_POINTS (+5 more)

### Community 21 - "Lobby Settings, Sheets and Sound"
Cohesion: 0.06
Nodes (45): WORD_LANGUAGES, closestPreset(), PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith(), TABLE (+37 more)

### Community 22 - "Imposter Count Rules"
Cohesion: 0.23
Nodes (15): winsWithImposters(), autoImposterCount(), DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MAX_NAME, MAX_PLAYERS, maxImpostersFor() (+7 more)

### Community 23 - "Word Loading"
Cohesion: 0.12
Nodes (22): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+14 more)

### Community 24 - "Game Reducer and Test Harness"
Cohesion: 0.14
Nodes (21): applyAll(), reduce(), clueRound(), deals(), FIVE, one(), OURS, revealAll() (+13 more)

### Community 25 - "Room Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "Bug Report Form"
Cohesion: 0.13
Nodes (14): description, label, options, render, body, attributes, id, type (+6 more)

### Community 27 - "Room and Ending Browser Sweeps"
Cohesion: 0.07
Nodes (31): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+23 more)

### Community 28 - "Word Pack Request Form"
Cohesion: 0.13
Nodes (14): description, label, options, placeholder, body, attributes, id, type (+6 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Standards"
Cohesion: 0.14
Nodes (16): Pull request template, PR checklist, 1.18.0 custom word packs and share codes, 1.21.x screens and endings sweeps, 1.21.0 error screen and safe reports, Playtest guide, Checks, Code (+8 more)

### Community 31 - "Preset Icons"
Cohesion: 0.18
Nodes (5): ICONS, ArmchairIcon(), BrainIcon(), TornadoIcon(), ZapIcon()

### Community 32 - "Design System Overview"
Cohesion: 0.13
Nodes (15): Colors, Design System: The Long Table, Do's and Don'ts, Elevation & Depth, Hierarchy, Layout, Named Rules, Named Rules (+7 more)

### Community 33 - "Product Context"
Cohesion: 0.20
Nodes (10): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+2 more)

### Community 34 - "Special Roles"
Cohesion: 0.27
Nodes (4): BY_ID, ROLE, ROLES, SPECIAL_ROLES

### Community 35 - "Tavern Redesign"
Cohesion: 0.22
Nodes (9): Redesign issue workflow, 1.30.0 party hub, 1.31.0 tavern-table redesign and wood themes, Joiner's Table direction, Five wood themes (Birch, Oak, Teak, Mahogany, Walnut), index.html app shell, Vite entry src/main.jsx, Home-screen icons and manifest (+1 more)

### Community 36 - "App Icons"
Cohesion: 0.32
Nodes (8): apple-touch-icon.png (180px rounded-square rendering of the mark), favicon-32.png (32px favicon rendering of the mark), icon.svg (standalone SVG source of the mark, rounded square), icon-192.png (192px PWA icon rendering of the mark), icon-512.png (512px PWA icon rendering of the mark), icon-maskable.svg (Android maskable SVG source of the mark), icon-maskable-512.png (512px maskable rendering, full-bleed oak background, mark shrunk to 72%), The Long Table app mark: a long walnut (#422617) table seen from its head on an oak (#e0b580) ground, front edge and two legs showing, three chairs per side shrinking toward the far end; same geometry as BrandMark in src/ui/icons/brand.jsx

### Community 37 - "README Screenshot"
Cohesion: 0.47
Nodes (6): The Long Table README preview screenshot (three phone screens composited), Clues screen (dark theme): Round 1 of 4, Places, 'Give your clues', Cat speaking, Next: Ben button, vote prompt, Home screen: 'Make room for everyone.' with wooden table, 5 seated player avatars (Ben, Ann, Dan, Cat, Eve, Open seat), Add a player input, light theme, Wooden long-table seating motif with player avatar tokens, Warm wood palette with light and dark themes, gold accent buttons, Word packs screen: 1,000 words across 10 packs, word language, search, Add a pack, Built in list (Food & Drink, Animals, Places, Movies & TV, Sports & Hobbies)

### Community 38 - "Product Principles"
Cohesion: 0.12
Nodes (18): 1.24.0 rooms survive restart, rate limits, Free and highly customisable, Imposter game, The Long Table (product), Product Principles, One site, shared table, many games, Three languages with native word packs, Playable anywhere with zero setup (+10 more)

### Community 39 - "Room Recovery File"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 40 - "Rule Step Icons"
Cohesion: 0.22
Nodes (4): IMPOSTER_STEPS, MessageIcon(), TrophyIcon(), VoteIcon()

### Community 41 - "Security Policy"
Cohesion: 0.25
Nodes (7): Secrets never leave the server, Private vulnerability reporting, Reporting a vulnerability, Secrecy at the table is the vulnerability, Security policy, Supported versions, publicState strips secrets

### Community 47 - "Code of Conduct"
Cohesion: 0.17
Nodes (12): 1. Correction, 2. Warning, 3. Temporary Ban, 4. Permanent Ban, Attribution, Contributor Covenant Code of Conduct, Enforcement, Enforcement Guidelines (+4 more)

### Community 49 - "Roadmap"
Cohesion: 0.19
Nodes (15): Pack Library and Editor, Site-wide customization promise, ROADMAP, Candidate games, Decisions to settle before broad extraction, Delivery plan, Direction, Later (+7 more)

### Community 53 - "Agent Instructions"
Cohesion: 0.29
Nodes (7): Fingerprint bless procedure, Local workflow, Project data, Project instructions, Redesign issues, 1.23.0 reload keeps the round, verify and CI, Behaviour fingerprint (400 scripted games)

### Community 54 - "Design Components"
Cohesion: 0.07
Nodes (32): Reduced motion single media block, Unreleased: sound, community packs, settings sheet, Accent follows the wood rule, Banners and Dialogs, Buttons, Choices, Components, Twelve player emblems (+24 more)

### Community 56 - "Sound Engine Tests"
Cohesion: 0.24
Nodes (5): events, FakeAudio, made, node(), param()

### Community 59 - "Feature Request Form"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "Vote and Round Outcomes"
Cohesion: 0.29
Nodes (17): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), step(), tally(), endingFor(), roleSpec() (+9 more)

### Community 61 - "Room Client"
Cohesion: 0.14
Nodes (18): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), loadSession() (+10 more)

### Community 62 - "Themes and Contrast"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 63 - "Local Game Storage and Phase Routing"
Cohesion: 0.07
Nodes (42): nameProblem(), LocalGame(), Lobby(), Resume(), Reveal(), Talking(), clearGame(), CLUE_TIMER_KEY (+34 more)

### Community 64 - "Verify, Layout and Icon Tools"
Cohesion: 0.08
Nodes (20): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, args (+12 more)

### Community 65 - "Dealing Roles and Words"
Cohesion: 0.18
Nodes (12): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+4 more)

### Community 66 - "Issue Template Links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "Action Icons"
Cohesion: 0.15
Nodes (23): BellIcon(), CheckIcon(), ChevronLeftIcon(), ContrastIcon(), CopyIcon(), DiceIcon(), GamesIcon(), GlobeIcon() (+15 more)

### Community 75 - "Error Reporting"
Cohesion: 0.10
Nodes (32): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+24 more)

### Community 77 - "How It Works"
Cohesion: 0.17
Nodes (5): STEPS, MARKS, BookIcon(), PhoneIcon(), UserPlusIcon()

### Community 78 - "Role Icons"
Cohesion: 0.27
Nodes (10): CardBackIcon(), CrewIcon(), DetectiveIcon(), HintIcon(), ImposterIcon(), JesterIcon(), ScoreIcon(), SidekickIcon() (+2 more)

### Community 85 - "Brand Marks"
Cohesion: 0.40
Nodes (5): Icons, BrandMark(), CHAIR_LINES, CHAIR_SOLIDS, ImposterMark()

### Community 88 - "Public State and Strict Mode"
Cohesion: 0.21
Nodes (12): createGame(), normaliseConfig(), buildPublicState(), publicState(), deepFreeze(), guard(), isStrict(), setStrict() (+4 more)

## Knowledge Gaps
- **27 isolated node(s):** `1.0.0 first working game`, `1.13.0 light/dark and themes`, `1.1.0 three languages and hold-to-reveal`, `1.25.0 languages fetched on demand`, `1.5.0 rounds and clue grid` (+22 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 479 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Invariants` connect `Project Standards` to `Custom and Community Packs`, `Security Policy`, `Agent Instructions`, `Public State and Strict Mode`, `Release History`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **What connects `1.0.0 first working game`, `1.13.0 light/dark and themes`, `1.1.0 three languages and hold-to-reveal` to the rest of the system?**
  _27 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Release History` be split into smaller, more focused modules?**
  _Cohesion score 0.12631578947368421 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Pass-and-Play Round Screens` to `Custom and Community Packs`, `App Shell and Navigation`, `Players and Emblems`, `Translations and String Board`, `Lobby and Table Scene`, `Action Icons`, `Clue, Call and Vote Panels`, `Build Dependencies`, `Error Reporting`, `Players and Scoreboard`, `Lobby Settings, Sheets and Sound`, `Word Loading`, `Room Client`, `Themes and Contrast`, `Local Game Storage and Phase Routing`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `Custom and Community Packs` be split into smaller, more focused modules?**
  _Cohesion score 0.06037000973709834 - nodes in this community are weakly interconnected._
- **Why does `validatePack()` connect `Custom and Community Packs` to `App Shell and Navigation`, `Word Picking and Scoring`, `Word Loading`, `Vote and Round Outcomes`, `Project Standards`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Should `Room Server` be split into smaller, more focused modules?**
  _Cohesion score 0.06862745098039216 - nodes in this community are weakly interconnected._