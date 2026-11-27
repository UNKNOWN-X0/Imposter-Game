# Graph Report - Imposter-Game  (2026-11-27)

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
- CHANGELOG
- PackEditor.jsx
- Room Server and Tests
- App.jsx
- Avatar
- strings/index.js
- local/screens/Lobby.jsx
- Talking.jsx
- useT
- Build Dependencies
- Continuous Integration
- IconBoard.jsx
- README
- every-screen.mjs
- pages.yml
- checks.test.js
- attributes
- dead.test.js
- Verdict.jsx
- Coverage Reporting
- fuzz.test.js
- engine.js
- react
- rules.js
- words/index.js
- reduce
- Hosting Configuration
- bug-report.yml
- every-room.mjs
- word-pack.yml
- Style Checks
- STANDARDS.md
- Presets.jsx
- Design System: The Long Table
- Product
- roles/index.js
- 1.31.0 tavern-table redesign and wood themes
- The Long Table app mark: a long walnut (#422617) table seen from its head on an oak (#e0b580) ground, front edge and two legs showing, three chairs per side shrinking toward the far end; same geometry as BrandMark in src/ui/icons/brand.jsx
- The Long Table README preview screenshot (three phone screens composited)
- README
- server/store.js
- RuleSteps.jsx
- SECURITY.md
- GameError
- Contributor Covenant Code of Conduct
- ROADMAP
- AGENTS.md
- DESIGN.md
- index.test.js
- feature-request.yml
- engine.test.js
- room.test.js
- theme.test.js
- local/storage.js
- ref_node_fs
- deal.js
- contact_links
- Icon
- pull_request_template.md
- i18n/index.jsx
- HowItWorks.jsx
- RoleGlyph.jsx
- Resume.jsx
- createGame

## God Nodes (most connected - your core abstractions)
1. `useT()` - 109 edges
2. `react` - 49 edges
3. `Icon()` - 45 edges
4. `reduce()` - 35 edges
5. `step()` - 33 edges
6. `CHANGELOG` - 31 edges
7. `LocalGame()` - 28 edges
8. `Avatar()` - 28 edges
9. `createGame()` - 23 edges
10. `PackEditor()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Invariants` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `The plan (owner, 2026-11-26, issue #103)` --references--> `motionMs()`  [INFERRED]
  DESIGN.md → src/ui/motionMs.js
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Hyperedges (group relationships)
- **Three positioning claims** — product_secrets_server, product_three_languages, product_zero_setup [EXTRACTED 1.00]
- **Three screens of The Long Table app flow** — assets_preview_home_screen, assets_preview_clues_screen, assets_preview_word_packs_screen [EXTRACTED 1.00]
- **Community pack pipeline** — readme_community_library, src_content_words_community_readme_pack_format, src_content_words_community_readme_add_command, agents_community_pack_flow [INFERRED 0.85]
- **Change verification ladder** — standards_checks, standards_fingerprint, standards_definition_of_done, _github_pull_request_template_checklist [INFERRED 0.85]

## Communities (64 total, 3 thin omitted)

### Community -1 - "CHANGELOG"
Cohesion: 0.13
Nodes (20): CHANGELOG, Keep a Changelog / semver, Legal lobby could deal a lost game, Broadcast seed leak bug, 1.0.0 first working game, 1.13.0 light/dark and themes, 1.15.0 optional roles and scoring, 1.16.0 win payouts and clean sweep (+12 more)

### Community 0 - "PackEditor.jsx"
Cohesion: 0.06
Nodes (50): cache, files, loadCommunity(), clean(), CREDIT_MAX, readCommunityPack(), slugFor(), SHARE_URL (+42 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (53): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+45 more)

### Community 2 - "App.jsx"
Cohesion: 0.07
Nodes (45): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), hasNews() (+37 more)

### Community 3 - "Avatar"
Cohesion: 0.22
Nodes (17): DealStrip(), JoinScreen(), AddPlayerForm(), EmblemChoice(), EmblemPicker(), LobbyHint(), useParty(), SeatActions() (+9 more)

### Community 4 - "strings/index.js"
Cohesion: 0.08
Nodes (34): FILTERS, StringBoard(), StringRow(), translator(), compareAll(), compareKey(), hasTrouble(), placeholdersIn() (+26 more)

### Community 5 - "local/screens/Lobby.jsx"
Cohesion: 0.17
Nodes (11): Table and Seats, CLUE_TIMER_CHOICES, OnlineLobby(), Candle(), chairsFor(), Crown(), Mug(), seatPoints() (+3 more)

### Community 6 - "Talking.jsx"
Cohesion: 0.10
Nodes (10): react, LanguageContext, CallOnOnePhone(), SecretVote(), Voting(), usePrivacyGate(), OnlineClues(), ActionBar() (+2 more)

### Community 7 - "useT"
Cohesion: 0.20
Nodes (21): CallButton(), CallPanel(), NotTheImposter(), ClueGrid(), ClueInput(), ClueList(), roundLabel(), Timer() (+13 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 11 - "README"
Cohesion: 0.16
Nodes (14): Community pack intake, Code of Conduct, Contributor Covenant, Contributing, Report a problem, Send a change, Word packs under CC BY-NC-SA 4.0, Content licence (+6 more)

### Community 12 - "every-screen.mjs"
Cohesion: 0.16
Nodes (12): dealAndReveal(), dist, fail(), here, moved, newest(), openPage(), root (+4 more)

### Community 13 - "pages.yml"
Cohesion: 0.06
Nodes (31): runs-on, steps, concurrency, cancel-in-progress, group, environment, needs, runs-on (+23 more)

### Community 14 - "checks.test.js"
Cohesion: 0.10
Nodes (25): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), answers(), askedKeys() (+17 more)

### Community 15 - "attributes"
Cohesion: 0.11
Nodes (17): description, label, options, render, value, body, attributes, id (+9 more)

### Community 16 - "dead.test.js"
Cohesion: 0.18
Nodes (13): builtAtRuntime(), errorCodesInSource(), root, AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode() (+5 more)

### Community 17 - "Verdict.jsx"
Cohesion: 0.18
Nodes (12): EndGameButton(), hintLine(), PlayerList(), Scoreboard(), WinValues(), PackChip(), RoleCard(), GameOverCard() (+4 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.23
Nodes (12): chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction(), someAction() (+4 more)

### Community 20 - "engine.js"
Cohesion: 0.24
Nodes (13): pickWord(), normalise(), sameClue(), sameWord(), mulberry32(), randomSeed(), shuffle(), MAX_WIN_POINTS (+5 more)

### Community 21 - "react"
Cohesion: 0.06
Nodes (45): WORD_LANGUAGES, closestPreset(), PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith(), TABLE (+37 more)

### Community 22 - "rules.js"
Cohesion: 0.23
Nodes (15): winsWithImposters(), autoImposterCount(), DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, MAX_NAME, MAX_PLAYERS, maxImpostersFor() (+7 more)

### Community 23 - "words/index.js"
Cohesion: 0.12
Nodes (22): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+14 more)

### Community 24 - "reduce"
Cohesion: 0.14
Nodes (21): applyAll(), reduce(), clueRound(), deals(), FIVE, one(), OURS, revealAll() (+13 more)

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

### Community 30 - "STANDARDS.md"
Cohesion: 0.14
Nodes (16): Pull request template, PR checklist, 1.18.0 custom word packs and share codes, 1.21.x screens and endings sweeps, 1.21.0 error screen and safe reports, Playtest guide, Checks, Code (+8 more)

### Community 31 - "Presets.jsx"
Cohesion: 0.18
Nodes (5): ICONS, ArmchairIcon(), BrainIcon(), TornadoIcon(), ZapIcon()

### Community 32 - "Design System: The Long Table"
Cohesion: 0.13
Nodes (15): Colors, Design System: The Long Table, Do's and Don'ts, Elevation & Depth, Hierarchy, Layout, Named Rules, Named Rules (+7 more)

### Community 33 - "Product"
Cohesion: 0.20
Nodes (10): Accessibility & Inclusion, Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product (+2 more)

### Community 34 - "roles/index.js"
Cohesion: 0.27
Nodes (4): BY_ID, ROLE, ROLES, SPECIAL_ROLES

### Community 35 - "1.31.0 tavern-table redesign and wood themes"
Cohesion: 0.22
Nodes (9): Redesign issue workflow, 1.30.0 party hub, 1.31.0 tavern-table redesign and wood themes, Joiner's Table direction, Five wood themes (Birch, Oak, Teak, Mahogany, Walnut), index.html app shell, Vite entry src/main.jsx, Home-screen icons and manifest (+1 more)

### Community 36 - "The Long Table app mark: a long walnut (#422617) table seen from its head on an oak (#e0b580) ground, front edge and two legs showing, three chairs per side shrinking toward the far end; same geometry as BrandMark in src/ui/icons/brand.jsx"
Cohesion: 0.32
Nodes (8): apple-touch-icon.png (180px rounded-square rendering of the mark), favicon-32.png (32px favicon rendering of the mark), icon.svg (standalone SVG source of the mark, rounded square), icon-192.png (192px PWA icon rendering of the mark), icon-512.png (512px PWA icon rendering of the mark), icon-maskable.svg (Android maskable SVG source of the mark), icon-maskable-512.png (512px maskable rendering, full-bleed oak background, mark shrunk to 72%), The Long Table app mark: a long walnut (#422617) table seen from its head on an oak (#e0b580) ground, front edge and two legs showing, three chairs per side shrinking toward the far end; same geometry as BrandMark in src/ui/icons/brand.jsx

### Community 37 - "The Long Table README preview screenshot (three phone screens composited)"
Cohesion: 0.47
Nodes (6): The Long Table README preview screenshot (three phone screens composited), Clues screen (dark theme): Round 1 of 4, Places, 'Give your clues', Cat speaking, Next: Ben button, vote prompt, Home screen: 'Make room for everyone.' with wooden table, 5 seated player avatars (Ben, Ann, Dan, Cat, Eve, Open seat), Add a player input, light theme, Wooden long-table seating motif with player avatar tokens, Warm wood palette with light and dark themes, gold accent buttons, Word packs screen: 1,000 words across 10 packs, word language, search, Add a pack, Built in list (Food & Drink, Animals, Places, Movies & TV, Sports & Hobbies)

### Community 38 - "README"
Cohesion: 0.12
Nodes (18): 1.24.0 rooms survive restart, rate limits, Free and highly customisable, Imposter game, The Long Table (product), Product Principles, One site, shared table, many games, Three languages with native word packs, Playable anywhere with zero setup (+10 more)

### Community 39 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 40 - "RuleSteps.jsx"
Cohesion: 0.22
Nodes (4): IMPOSTER_STEPS, MessageIcon(), TrophyIcon(), VoteIcon()

### Community 41 - "SECURITY.md"
Cohesion: 0.25
Nodes (7): Secrets never leave the server, Private vulnerability reporting, Reporting a vulnerability, Secrecy at the table is the vulnerability, Security policy, Supported versions, publicState strips secrets

### Community 47 - "Contributor Covenant Code of Conduct"
Cohesion: 0.17
Nodes (12): 1. Correction, 2. Warning, 3. Temporary Ban, 4. Permanent Ban, Attribution, Contributor Covenant Code of Conduct, Enforcement, Enforcement Guidelines (+4 more)

### Community 49 - "ROADMAP"
Cohesion: 0.19
Nodes (15): Pack Library and Editor, Site-wide customization promise, ROADMAP, Candidate games, Decisions to settle before broad extraction, Delivery plan, Direction, Later (+7 more)

### Community 53 - "AGENTS.md"
Cohesion: 0.29
Nodes (7): Fingerprint bless procedure, Local workflow, Project data, Project instructions, Redesign issues, 1.23.0 reload keeps the round, verify and CI, Behaviour fingerprint (400 scripted games)

### Community 54 - "DESIGN.md"
Cohesion: 0.07
Nodes (32): Reduced motion single media block, Unreleased: sound, community packs, settings sheet, Accent follows the wood rule, Banners and Dialogs, Buttons, Choices, Components, Twelve player emblems (+24 more)

### Community 56 - "index.test.js"
Cohesion: 0.24
Nodes (5): events, FakeAudio, made, node(), param()

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "engine.test.js"
Cohesion: 0.29
Nodes (17): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), step(), tally(), endingFor(), roleSpec() (+9 more)

### Community 61 - "room.test.js"
Cohesion: 0.14
Nodes (18): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), loadSession() (+10 more)

### Community 62 - "theme.test.js"
Cohesion: 0.14
Nodes (19): read(), systemMode(), ThemeContext, ThemeProvider(), ALL, contrast(), css, here (+11 more)

### Community 63 - "local/storage.js"
Cohesion: 0.07
Nodes (42): nameProblem(), LocalGame(), Lobby(), Resume(), Reveal(), Talking(), clearGame(), CLUE_TIMER_KEY (+34 more)

### Community 64 - "ref_node_fs"
Cohesion: 0.08
Nodes (20): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, args (+12 more)

### Community 65 - "deal.js"
Cohesion: 0.18
Nodes (12): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+4 more)

### Community 66 - "contact_links"
Cohesion: 0.33
Nodes (5): blank_issues_enabled, contact_links, about, name, url

### Community 67 - "Icon"
Cohesion: 0.15
Nodes (23): BellIcon(), CheckIcon(), ChevronLeftIcon(), ContrastIcon(), CopyIcon(), DiceIcon(), GamesIcon(), GlobeIcon() (+15 more)

### Community 75 - "i18n/index.jsx"
Cohesion: 0.10
Nodes (32): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), describe(), described(), facts (+24 more)

### Community 77 - "HowItWorks.jsx"
Cohesion: 0.17
Nodes (5): STEPS, MARKS, BookIcon(), PhoneIcon(), UserPlusIcon()

### Community 78 - "RoleGlyph.jsx"
Cohesion: 0.27
Nodes (10): CardBackIcon(), CrewIcon(), DetectiveIcon(), HintIcon(), ImposterIcon(), JesterIcon(), ScoreIcon(), SidekickIcon() (+2 more)

### Community 85 - "Resume.jsx"
Cohesion: 0.40
Nodes (5): Icons, BrandMark(), CHAIR_LINES, CHAIR_SOLIDS, ImposterMark()

### Community 88 - "createGame"
Cohesion: 0.21
Nodes (12): createGame(), normaliseConfig(), buildPublicState(), publicState(), deepFreeze(), guard(), isStrict(), setStrict() (+4 more)

## Knowledge Gaps
- **27 isolated node(s):** `1.0.0 first working game`, `1.13.0 light/dark and themes`, `1.1.0 three languages and hold-to-reveal`, `1.25.0 languages fetched on demand`, `1.5.0 rounds and clue grid` (+22 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 479 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Invariants` connect `STANDARDS.md` to `PackEditor.jsx`, `SECURITY.md`, `AGENTS.md`, `createGame`, `CHANGELOG`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **What connects `1.0.0 first working game`, `1.13.0 light/dark and themes`, `1.1.0 three languages and hold-to-reveal` to the rest of the system?**
  _27 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `CHANGELOG` be split into smaller, more focused modules?**
  _Cohesion score 0.12631578947368421 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Talking.jsx` to `PackEditor.jsx`, `App.jsx`, `Avatar`, `strings/index.js`, `local/screens/Lobby.jsx`, `Icon`, `useT`, `Build Dependencies`, `i18n/index.jsx`, `Verdict.jsx`, `react`, `words/index.js`, `room.test.js`, `theme.test.js`, `local/storage.js`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Should `PackEditor.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06037000973709834 - nodes in this community are weakly interconnected._
- **Why does `validatePack()` connect `PackEditor.jsx` to `App.jsx`, `engine.js`, `words/index.js`, `engine.test.js`, `STANDARDS.md`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06862745098039216 - nodes in this community are weakly interconnected._