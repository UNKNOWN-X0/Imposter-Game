# Graph Report - The-Long-Table  (2026-11-27)

## Corpus Check
- 224 files · ~195,434 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 22 file(s) not represented in the graph (top: .css 15, (none) 3, .bat 1)

## Summary
- 1385 nodes · 4051 edges · 58 communities (57 shown, 1 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 135 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `91033a3f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Release History
- Custom Pack Codes
- Room Server
- App Shell and Room Client
- String Board
- Translation and Fingerprint
- Community Pack Files
- Pack Library and Word Languages
- Pack Editor and Sharing
- Build Dependencies
- Continuous Integration
- What's New
- Contributing and Licences
- Every-Screen Browser Sweep
- Pages Deployment
- Icon and Stylesheet Checks
- Share-a-Pack Issue Form
- String Checks
- Pack Search
- Coverage Reporting
- Randomised Game Fuzzing
- Vote and Round Outcomes
- Lobby Settings and Themes
- Imposter Count and Presets
- Word Loading
- Engine Tests
- Room Hosting Configuration
- Bug Report Form
- Room and Ending Browser Sweeps
- Word Pack Request Form
- Style Checks
- Project Standards
- Pack Lint
- Design System Overview
- Product Context
- Special Roles
- Tavern Redesign
- App Icons
- README Screenshot
- Product Principles
- Room Recovery File
- Phase Routing
- Security Policy
- Motion Plan
- Code of Conduct
- Roadmap
- Agent Instructions
- Design Components
- Sound Engine Tests
- Feature Request Form
- Round Screens and Local Storage
- Verify, Layout and Icon Tools
- Dealing Roles and Words
- Issue Template Links
- Icons and Lobby Parts
- Pull Request Template
- Error Reporting
- Game Reducer and Strict Mode

## God Nodes (most connected - your core abstractions)
1. `useT()` - 109 edges
2. `react` - 49 edges
3. `Icon()` - 45 edges
4. `LocalGame()` - 40 edges
5. `reduce()` - 35 edges
6. `step()` - 33 edges
7. `CHANGELOG` - 31 edges
8. `Shell()` - 29 edges
9. `Avatar()` - 28 edges
10. `createGame()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Invariants` --references--> `normaliseConfig()`  [INFERRED]
  STANDARDS.md → src/core/rules.js
- `The plan (owner, 2026-11-26, issue #103)` --references--> `onWinningSide()`  [INFERRED]
  DESIGN.md → src/core/select.js
- `Invariants` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Hyperedges (group relationships)
- **Three positioning claims** — product_secrets_server, product_three_languages, product_zero_setup [EXTRACTED 1.00]
- **Three screens of The Long Table app flow** — assets_preview_home_screen, assets_preview_clues_screen, assets_preview_word_packs_screen [EXTRACTED 1.00]
- **Community pack pipeline** — readme_community_library, src_content_words_community_readme_pack_format, src_content_words_community_readme_add_command, agents_community_pack_flow [INFERRED 0.85]
- **Change verification ladder** — standards_checks, standards_fingerprint, standards_definition_of_done, _github_pull_request_template_checklist [INFERRED 0.85]

## Communities (58 total, 1 thin omitted)

### Community -1 - "Release History"
Cohesion: 0.15
Nodes (17): CHANGELOG, Legal lobby could deal a lost game, Broadcast seed leak bug, 1.0.0 first working game, 1.13.0 light/dark and themes, 1.15.0 optional roles and scoring, 1.16.0 win payouts and clean sweep, 1.1.0 three languages and hold-to-reveal (+9 more)

### Community 0 - "Custom Pack Codes"
Cohesion: 0.22
Nodes (16): buildPack(), clean(), CODE_VERSION, decodePack(), encodePack(), fromBase64(), hasAWord(), isCustomPackId() (+8 more)

### Community 1 - "Room Server"
Cohesion: 0.06
Nodes (57): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+49 more)

### Community 2 - "App Shell and Room Client"
Cohesion: 0.05
Nodes (76): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), MAX_PLAYERS (+68 more)

### Community 3 - "String Board"
Cohesion: 0.18
Nodes (17): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+9 more)

### Community 4 - "Translation and Fingerprint"
Cohesion: 0.13
Nodes (17): hintLine(), translator(), localeNumber(), numbers, resolveKey(), translate(), behaviour(), bySeat() (+9 more)

### Community 5 - "Community Pack Files"
Cohesion: 0.16
Nodes (13): clean(), CREDIT_MAX, readCommunityPack(), slugFor(), KEYS, root, parsePairs(), byAt (+5 more)

### Community 6 - "Pack Library and Word Languages"
Cohesion: 0.35
Nodes (11): loadCommunity(), WORD_LANGUAGES, Packs(), WordLanguage(), WordLanguageList(), Marked(), PackLibrary(), PackSheet() (+3 more)

### Community 7 - "Pack Editor and Sharing"
Cohesion: 0.29
Nodes (9): cache, files, SHARE_URL, shareLink(), AiPrompt, COUNTS, EMOJI, PackEditor() (+1 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "What's New"
Cohesion: 0.38
Nodes (7): hasNews(), noteKey(), RELEASES, since(), pkg, VERSION, Changelog()

### Community 11 - "Contributing and Licences"
Cohesion: 0.25
Nodes (8): Community pack intake, Word packs under CC BY-NC-SA 4.0, Content licence, Code under MIT, What this licence does not cover, npm run community add, Community packs, Community pack JSON format

### Community 12 - "Every-Screen Browser Sweep"
Cohesion: 0.16
Nodes (12): dealAndReveal(), dist, fail(), here, moved, newest(), openPage(), root (+4 more)

### Community 13 - "Pages Deployment"
Cohesion: 0.06
Nodes (31): runs-on, steps, concurrency, cancel-in-progress, group, environment, needs, runs-on (+23 more)

### Community 14 - "Icon and Stylesheet Checks"
Cohesion: 0.11
Nodes (23): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), AMBIENT, bindings() (+15 more)

### Community 15 - "Share-a-Pack Issue Form"
Cohesion: 0.11
Nodes (17): description, label, options, render, value, body, attributes, id (+9 more)

### Community 16 - "String Checks"
Cohesion: 0.15
Nodes (10): builtAtRuntime(), errorCodesInSource(), root, FALLBACK_LANG, inFlight, LANGUAGES, LOADERS, STRINGS (+2 more)

### Community 17 - "Pack Search"
Cohesion: 0.36
Nodes (6): filterPack(), matchAt(), shelfFor(), en, food, th

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "Randomised Game Fuzzing"
Cohesion: 0.14
Nodes (22): clueRound(), chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction() (+14 more)

### Community 20 - "Vote and Round Outcomes"
Cohesion: 0.29
Nodes (15): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), tally(), MAX_WIN_POINTS, paysTheEliminated(), pointsFor() (+7 more)

### Community 21 - "Lobby Settings and Themes"
Cohesion: 0.06
Nodes (46): ROUNDS_UNLIMITED, HowMany(), WhatTheySee(), WhetherTheyKnow(), ClueTimer(), Rounds(), SECTIONS, SEES (+38 more)

### Community 22 - "Imposter Count and Presets"
Cohesion: 0.22
Nodes (15): autoImposterCount(), DECOY, DEFAULT_CONFIG, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, maxImpostersFor(), resolveImposterCount(), closestPreset() (+7 more)

### Community 23 - "Word Loading"
Cohesion: 0.13
Nodes (21): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+13 more)

### Community 24 - "Engine Tests"
Cohesion: 0.23
Nodes (12): applyAll(), deals(), FIVE, one(), OURS, revealAll(), roleIds(), SEVEN (+4 more)

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
Cohesion: 0.17
Nodes (15): sourceFiles(), classesRendered(), classesStyled(), classPrefixes(), unusedClasses(), braces(), code(), gateAt (+7 more)

### Community 30 - "Project Standards"
Cohesion: 0.15
Nodes (16): Pull request template, PR checklist, Keep a Changelog / semver, 1.20.0 six-folder refactor, 1.21.0 error screen and safe reports, Checks, Code, Rules live in src/core, pure (+8 more)

### Community 31 - "Pack Lint"
Cohesion: 0.38
Nodes (6): foldLatinAccents(), INFLECTIONS, lintPack(), lintPacks(), normalise(), sameWordDifferentEnding()

### Community 32 - "Design System Overview"
Cohesion: 0.13
Nodes (15): Colors, Design System: The Long Table, Do's and Don'ts, Elevation & Depth, Hierarchy, Layout, Named Rules, Named Rules (+7 more)

### Community 33 - "Product Context"
Cohesion: 0.10
Nodes (20): 1.18.0 custom word packs and share codes, Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Free and highly customisable, Imposter game, The Long Table (product) (+12 more)

### Community 34 - "Special Roles"
Cohesion: 0.23
Nodes (9): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters(), MAX_NAME (+1 more)

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
Cohesion: 0.13
Nodes (16): 1.24.0 rooms survive restart, rate limits, Code of Conduct, Contributor Covenant, Contributing, Report a problem, Send a change, Playtest guide, One site, shared table, many games (+8 more)

### Community 39 - "Room Recovery File"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 40 - "Phase Routing"
Cohesion: 0.39
Nodes (7): isPlaying(), renderPhase(), SCREEN_FOR_PHASE, SCREEN_NAMES, screenFor(), here, MODES

### Community 41 - "Security Policy"
Cohesion: 0.25
Nodes (7): Secrets never leave the server, Private vulnerability reporting, Reporting a vulnerability, Secrecy at the table is the vulnerability, Security policy, Supported versions, publicState strips secrets

### Community 42 - "Motion Plan"
Cohesion: 0.50
Nodes (4): Motion, The plan (owner, 2026-11-26, issue #103), Vocabulary (tokens in `tokens.css`), Where it is used

### Community 47 - "Code of Conduct"
Cohesion: 0.17
Nodes (12): 1. Correction, 2. Warning, 3. Temporary Ban, 4. Permanent Ban, Attribution, Contributor Covenant Code of Conduct, Enforcement, Enforcement Guidelines (+4 more)

### Community 49 - "Roadmap"
Cohesion: 0.21
Nodes (14): Site-wide customization promise, ROADMAP, Candidate games, Decisions to settle before broad extraction, Delivery plan, Direction, Later, Now (+6 more)

### Community 53 - "Agent Instructions"
Cohesion: 0.29
Nodes (7): Fingerprint bless procedure, Local workflow, Project data, Project instructions, Redesign issues, 1.23.0 reload keeps the round, verify and CI, Behaviour fingerprint (400 scripted games)

### Community 54 - "Design Components"
Cohesion: 0.08
Nodes (31): Reduced motion single media block, Unreleased: sound, community packs, settings sheet, Accent follows the wood rule, Banners and Dialogs, Buttons, Choices, Components, Twelve player emblems (+23 more)

### Community 56 - "Sound Engine Tests"
Cohesion: 0.24
Nodes (5): events, FakeAudio, made, node(), param()

### Community 59 - "Feature Request Form"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 63 - "Round Screens and Local Storage"
Cohesion: 0.07
Nodes (80): react, MIN_PLAYERS, EndGameButton(), PlayerList(), Scoreboard(), WinValues(), Settings(), CallButton() (+72 more)

### Community 64 - "Verify, Layout and Icon Tools"
Cohesion: 0.09
Nodes (16): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, here (+8 more)

### Community 65 - "Dealing Roles and Words"
Cohesion: 0.17
Nodes (18): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), pickWord() (+10 more)

### Community 66 - "Issue Template Links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "Icons and Lobby Parts"
Cohesion: 0.07
Nodes (70): Icons, packById(), IconBoard(), ICONS, Roles(), ICONS, Presets(), PackChip() (+62 more)

### Community 75 - "Error Reporting"
Cohesion: 0.11
Nodes (31): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+23 more)

### Community 88 - "Game Reducer and Strict Mode"
Cohesion: 0.15
Nodes (16): createGame(), reduce(), voteOut(), normaliseConfig(), deepFreeze(), guard(), isStrict(), setStrict() (+8 more)

## Knowledge Gaps
- **27 isolated node(s):** `1.0.0 first working game`, `1.13.0 light/dark and themes`, `1.1.0 three languages and hold-to-reveal`, `1.25.0 languages fetched on demand`, `1.5.0 rounds and clue grid` (+22 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 438 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Invariants` connect `Project Standards` to `Custom Pack Codes`, `Room Server`, `Product Context`, `Security Policy`, `Agent Instructions`, `Game Reducer and Strict Mode`?**
  _High betweenness centrality (0.170) - this node is a cross-community bridge._
- **What connects `1.0.0 first working game`, `1.13.0 light/dark and themes`, `1.1.0 three languages and hold-to-reveal` to the rest of the system?**
  _27 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Room Server` be split into smaller, more focused modules?**
  _Cohesion score 0.06342342342342343 - nodes in this community are weakly interconnected._
- **Why does `validatePack()` connect `Custom Pack Codes` to `Dealing Roles and Words`, `App Shell and Room Client`, `Vote and Round Outcomes`, `Word Loading`, `Project Standards`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Should `App Shell and Room Client` be split into smaller, more focused modules?**
  _Cohesion score 0.051574212893553226 - nodes in this community are weakly interconnected._
- **Why does `normaliseConfig()` connect `Game Reducer and Strict Mode` to `Custom Pack Codes`, `Dealing Roles and Words`, `Special Roles`, `Vote and Round Outcomes`, `Imposter Count and Presets`, `Word Loading`, `Project Standards`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `Translation and Fingerprint` be split into smaller, more focused modules?**
  _Cohesion score 0.12666666666666668 - nodes in this community are weakly interconnected._