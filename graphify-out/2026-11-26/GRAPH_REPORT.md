# Graph Report - Imposter-Game  (2026-11-26)

## Corpus Check
- 212 files · ~203,366 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 21 file(s) not represented in the graph (top: .css 14, (none) 3, .bat 1)

## Summary
- 1330 nodes · 3718 edges · 75 communities (60 shown, 15 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 76 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6a04fa50`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- LocalGame.jsx
- Room Server and Tests
- every-ending.mjs
- ref_node_fs
- i18n/index.jsx
- errors/index.js
- RoleCard.jsx
- useT
- Build Dependencies
- Continuous Integration
- react
- LICENSE-CONTENT.md
- every-screen.mjs
- pages.yml
- theme.test.js
- attributes
- PWA Icons
- step
- Coverage Reporting
- fuzz.test.js
- StringBoard.jsx
- Settings.jsx
- rules.js
- words/index.js
- server/store.js
- Hosting Configuration
- bug-report.yml
- RoleGlyph.jsx
- word-pack.yml
- Style Checks
- Project Guide
- Icon
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
- every-room.mjs
- engine.js
- presets.test.js
- engine.test.js
- feature-request.yml
- dead.test.js
- room.test.js
- Imposter-Game work note
- strict.test.js
- icons/index.jsx
- deal.js
- contact_links
- IconBoard.jsx
- SECURITY.md
- Contributing
- pull_request_template.md
- STRINGS
- changelog.test.js
- dead.test.js
- LocalGame.jsx

## God Nodes (most connected - your core abstractions)
1. `useT()` - 106 edges
2. `react` - 50 edges
3. `LocalGame()` - 39 edges
4. `Icon()` - 38 edges
5. `reduce()` - 35 edges
6. `step()` - 33 edges
7. `Shell()` - 28 edges
8. `createGame()` - 25 edges
9. `PackEditor()` - 24 edges
10. `Room()` - 24 edges

## Surprising Connections (you probably didn't know these)
- `Table and Seats` --references--> `chairsFor()`  [INFERRED]
  DESIGN.md → src/ui/table/TableScene.jsx
- `Invariants` --references--> `validatePack()`  [INFERRED]
  STANDARDS.md → src/content/words/custom.js
- `Lessons` --references--> `publicState()`  [INFERRED]
  STANDARDS.md → src/core/select.js
- `#17 shared game frame (in progress)` --references--> `RoomCode()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx
- `#17 shared game frame (in progress)` --references--> `Shell()`  [INFERRED]
  note.md → src/ui/primitives/Shell.jsx

## Import Cycles
- 2-file cycle: `src/App.jsx -> src/features/packs/Library.jsx -> src/App.jsx`
- 2-file cycle: `src/core/deal.js -> src/core/engine.js -> src/core/deal.js`

## Communities (75 total, 15 thin omitted)

### Community 0 - "LocalGame.jsx"
Cohesion: 0.08
Nodes (37): cache, files, loadCommunity(), clean(), CREDIT_MAX, readCommunityPack(), slugFor(), KEYS (+29 more)

### Community 1 - "Room Server and Tests"
Cohesion: 0.07
Nodes (53): aRoom(), same(), callerOf(), Limit, LIMITS, _resetLimits(), sweepLimits(), withServer() (+45 more)

### Community 2 - "every-ending.mjs"
Cohesion: 0.15
Nodes (15): choose(), dealAndReveal(), declare(), dist, here, newest(), openGame(), PLANS (+7 more)

### Community 3 - "ref_node_fs"
Cohesion: 0.09
Nodes (16): here, LAYOUTS, measure(), SHOTS, slug(), snapshot(), here, here (+8 more)

### Community 4 - "i18n/index.jsx"
Cohesion: 0.23
Nodes (10): detectLanguage(), LanguageContext, LanguageProvider(), supported(), FALLBACK_LANG, inFlight, LOADERS, loadStrings() (+2 more)

### Community 5 - "errors/index.js"
Cohesion: 0.15
Nodes (24): ErrorBoundary, ErrorScreen(), FailureNotice(), breadcrumbs, currentSecrets(), described(), facts, failures (+16 more)

### Community 6 - "RoleCard.jsx"
Cohesion: 0.23
Nodes (11): RoleCard(), OnlineReveal(), EyeIcon(), Backdrop(), Confetti(), HoldRing(), CardBackIcon(), HintIcon() (+3 more)

### Community 7 - "useT"
Cohesion: 0.08
Nodes (73): MAX_PLAYERS, PartyHub(), PlayerList(), Scoreboard(), WinValues(), Settings(), PackChip(), useWords() (+65 more)

### Community 8 - "Build Dependencies"
Cohesion: 0.06
Nodes (34): author, dependencies, react@^19.2.0, react-dom@^19.2.0, description, devDependencies, vite@^6.0.7, @vitejs/plugin-react@^4.3.4 (+26 more)

### Community 9 - "Continuous Integration"
Cohesion: 0.09
Nodes (25): name, runs-on, steps, jobs, browser, tests, node, name (+17 more)

### Community 10 - "react"
Cohesion: 0.19
Nodes (23): react, SHARE_URL, shareLink(), WORD_LANGUAGES, Packs(), AiPrompt, COUNTS, EMOJI (+15 more)

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
Cohesion: 0.15
Nodes (16): inPublic(), linkedFiles(), manifestIcons(), missing(), PNG_MAGIC, pngSize(), cssFilesIn(), parseStrictly() (+8 more)

### Community 17 - "step"
Cohesion: 0.21
Nodes (22): advanceAfterVerdict(), finish(), resolveOutcome(), resolveVote(), step(), tally(), publicImposterCount(), alivePlayers() (+14 more)

### Community 18 - "Coverage Reporting"
Cohesion: 0.12
Nodes (14): all, floorsFile, isHarness(), isTest(), measured, MODULES, order, out (+6 more)

### Community 19 - "fuzz.test.js"
Cohesion: 0.21
Nodes (11): chaosAction(), FIRST, NAMES, PHASES, ROLE_IDS, RUNS, sensibleAction(), someAction() (+3 more)

### Community 20 - "StringBoard.jsx"
Cohesion: 0.31
Nodes (10): FILTERS, StringBoard(), StringRow(), compareAll(), compareKey(), hasTrouble(), placeholdersIn(), placeholderTrouble() (+2 more)

### Community 21 - "Settings.jsx"
Cohesion: 0.26
Nodes (15): autoImposterCount(), DECOY, IMPOSTERS_AUTO, IMPOSTERS_RANDOM, maxImpostersFor(), resolveImposterCount(), ROUNDS_UNLIMITED, imposterHint() (+7 more)

### Community 22 - "rules.js"
Cohesion: 0.23
Nodes (9): BY_ID, endingFor(), ROLE, ROLES, roleSpec(), SPECIAL_ROLES, winsWithImposters(), MAX_NAME (+1 more)

### Community 23 - "words/index.js"
Cohesion: 0.07
Nodes (38): BUILTIN_LANGUAGES, _forgetWords(), inFlight, loadAllWords(), loaded, LOADERS, loadWords(), wordsReady() (+30 more)

### Community 24 - "server/store.js"
Cohesion: 0.25
Nodes (8): flush(), fromRecord(), here, load(), save(), saveNow(), STORE_PATH, toRecord()

### Community 25 - "Hosting Configuration"
Cohesion: 0.17
Nodes (11): key, value, services, buildCommand, envVars, healthCheckPath, name, plan (+3 more)

### Community 26 - "bug-report.yml"
Cohesion: 0.13
Nodes (14): description, label, options, render, body, attributes, id, type (+6 more)

### Community 27 - "RoleGlyph.jsx"
Cohesion: 0.36
Nodes (8): CrewIcon(), DetectiveIcon(), ImposterIcon(), JesterIcon(), ScoreIcon(), SidekickIcon(), ROLE_FACE, RoleGlyph()

### Community 28 - "word-pack.yml"
Cohesion: 0.13
Nodes (14): description, label, options, placeholder, body, attributes, id, type (+6 more)

### Community 29 - "Style Checks"
Cohesion: 0.20
Nodes (10): braces(), code(), gateAt, here, index, motion, parts, projectRoot (+2 more)

### Community 30 - "Project Guide"
Cohesion: 0.18
Nodes (9): HTML application shell, Playtest guide, Central scoring table, Custom word packs, Data-described optional roles, ImposterGame README, Separate interface and word languages, Server-Sent Events for room updates (+1 more)

### Community 31 - "Icon"
Cohesion: 0.22
Nodes (17): VerdictCard(), ArmchairIcon(), BellIcon(), BrainIcon(), ChevronLeftIcon(), DiceIcon(), HourglassIcon(), InfoIcon() (+9 more)

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

### Community 55 - "every-room.mjs"
Cohesion: 0.14
Nodes (16): code, dealAndLook(), dist, errors, fail(), guests, here, newest() (+8 more)

### Community 56 - "engine.js"
Cohesion: 0.20
Nodes (14): pickWord(), normalise(), sameClue(), sameWord(), fail(), mulberry32(), randomSeed(), shuffle() (+6 more)

### Community 57 - "presets.test.js"
Cohesion: 0.18
Nodes (8): closestPreset(), PRESET_KEYS, presetFor(), PRESETS, same(), dealtWith(), TABLE, Presets()

### Community 58 - "engine.test.js"
Cohesion: 0.13
Nodes (23): createGame(), applyAll(), reduce(), clueRound(), deals(), FIVE, one(), OURS (+15 more)

### Community 59 - "feature-request.yml"
Cohesion: 0.15
Nodes (12): description, label, body, attributes, id, type, validations, description (+4 more)

### Community 60 - "dead.test.js"
Cohesion: 0.16
Nodes (19): AMBIENT, bindings(), NOT_SOURCE, sourceFiles(), stripNonCode(), unresolvedNames(), answers(), askedKeys() (+11 more)

### Community 61 - "room.test.js"
Cohesion: 0.14
Nodes (17): api(), ApiError, clearSession(), connect(), createRoom(), joinRoom(), leaveRoom(), saveSession() (+9 more)

### Community 62 - "Imposter-Game work note"
Cohesion: 0.14
Nodes (13): #14 scope correction (2026-11-21), #15 shared design-system work (2026-11-21), #16 tavern table implementation, #17 shared game frame (in progress), Current handoff point, Evidence and actions, Goal and authorization, Imposter-Game work note (+5 more)

### Community 63 - "strict.test.js"
Cohesion: 0.17
Nodes (13): normaliseConfig(), publicState(), deepFreeze(), guard(), isStrict(), setStrict(), strict, Checks (+5 more)

### Community 64 - "icons/index.jsx"
Cohesion: 0.30
Nodes (8): Roles(), Rounds(), WordLanguage(), ContrastIcon(), Info(), Segmented(), useTheme(), ThemePicker()

### Community 65 - "deal.js"
Cohesion: 0.18
Nodes (12): dealRoles(), decoyFor(), EMPTY_HISTORY, hintFor(), makePlayerId(), nextHistory(), pickImposters(), recentWordWindow() (+4 more)

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
Cohesion: 0.22
Nodes (8): hintLine(), translator(), STRINGS, localeNumber(), numbers, resolveKey(), LANGS, translate()

### Community 72 - "changelog.test.js"
Cohesion: 0.38
Nodes (7): hasNews(), noteKey(), RELEASES, since(), pkg, VERSION, Changelog()

### Community 73 - "dead.test.js"
Cohesion: 0.33
Nodes (4): builtAtRuntime(), errorCodesInSource(), root, LANGUAGES

### Community 78 - "LocalGame.jsx"
Cohesion: 0.06
Nodes (72): App(), IconBoard, LIB_LANG_KEY, read(), readHash(), StringBoard, write(), PACK_LIMITS (+64 more)

## Knowledge Gaps
- **22 isolated node(s):** `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages`, `Server-Sent Events for room updates`, `Shared deterministic rules engine` (+17 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 500 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Project standards` connect `strict.test.js` to `Project Guide`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **What connects `Central scoring table`, `Data-described optional roles`, `Separate interface and word languages` to the rest of the system?**
  _22 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `LocalGame.jsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08295625942684766 - nodes in this community are weakly interconnected._
- **Why does `Invariants` connect `strict.test.js` to `LocalGame.jsx`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Should `Room Server and Tests` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Why does `react` connect `react` to `icons/index.jsx`, `i18n/index.jsx`, `errors/index.js`, `RoleCard.jsx`, `useT`, `Build Dependencies`, `changelog.test.js`, `LocalGame.jsx`, `theme.test.js`, `StringBoard.jsx`, `Settings.jsx`, `room.test.js`, `Icon`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Should `ref_node_fs` be split into smaller, more focused modules?**
  _Cohesion score 0.08602150537634409 - nodes in this community are weakly interconnected._