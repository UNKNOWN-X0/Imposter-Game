# Roadmap

Open directions the owner has stated, in likely delivery order. Candidate games below are ideas, not release promises. A shipped direction becomes a CHANGELOG entry and leaves this file; Git keeps it.

## Direction

One phone-first website for a group to start a party, choose a game, tune its rules, choose or make a content pack, and play together on one phone or in a room. Imposter is the first game and the reference for fast setup, meaningful rule choices, multilingual play, and custom word packs.

Customization belongs to the platform. Players should be able to create, edit, import, share, and choose their own packs in every compatible game. The pack library should understand each game's content shape rather than making every game pretend its content is an Imposter word/decoy pair. Begin local-first with share codes; accounts and a public pack marketplace are not MVP requirements.

## Now

**Redesign the hub, then bring every Imposter screen into the same design** (owner, 2026-11-20; tracked in [#2](https://github.com/UNKNOWN-X0/Imposter-Game/issues/2)). The current hub shipped as an interim step in 1.30.0. The hub and game screens are now being replaced by the selected tavern-table system. No new game is built until the redesign is done.

**Selected direction (owner, 2026-11-21): The Joiner’s Table.** Follow the approved [Joinery study](.impeccable/mocks/tavern-direction/joinery.html): a flush rectangular plank table, players along its long sides, readable controls, and a covered private card. The five wood themes are Birch, Oak (default), Teak, Mahogany, and Walnut, each in light and dark mode. Reproduce the approved mock’s composition and interaction states; keep the wooden tabletop distinct from the clean controls and page surfaces.

*Done when* the hub and every Imposter screen share one design system in `DESIGN.md`, the wood themes pass the theme test, and the redesign is released ([#21](https://github.com/UNKNOWN-X0/Imposter-Game/issues/21)).

### Delivery plan

Work the issues in this order; each one's blocked-by links on GitHub enforce it. How to pick up an issue is in [AGENTS.md](AGENTS.md#redesign-issues).

1. [#13](https://github.com/UNKNOWN-X0/Imposter-Game/issues/13) Choose the tavern-table direction. **Done: the owner selected Joinery.**
2. [#14](https://github.com/UNKNOWN-X0/Imposter-Game/issues/14) Wood themes · [#15](https://github.com/UNKNOWN-X0/Imposter-Game/issues/15) One design system for the hub and the game
3. [#16](https://github.com/UNKNOWN-X0/Imposter-Game/issues/16) Rebuild the hub
4. [#17](https://github.com/UNKNOWN-X0/Imposter-Game/issues/17) Shared game frame, then the screens: [#7](https://github.com/UNKNOWN-X0/Imposter-Game/issues/7) lobby and settings · [#8](https://github.com/UNKNOWN-X0/Imposter-Game/issues/8) pack library screens · [#22](https://github.com/UNKNOWN-X0/Imposter-Game/issues/22) passing the phone and the private reveal · [#18](https://github.com/UNKNOWN-X0/Imposter-Game/issues/18) clues, voting, result, endings · [#19](https://github.com/UNKNOWN-X0/Imposter-Game/issues/19) room screens · [#20](https://github.com/UNKNOWN-X0/Imposter-Game/issues/20) rules, what's new, errors, crash
5. [#9](https://github.com/UNKNOWN-X0/Imposter-Game/issues/9) Motion and [#10](https://github.com/UNKNOWN-X0/Imposter-Game/issues/10) accessibility, languages, recovery: each screen issue does its own part; [#10](https://github.com/UNKNOWN-X0/Imposter-Game/issues/10) ends with the full review and a playtest
6. [#21](https://github.com/UNKNOWN-X0/Imposter-Game/issues/21) Release as 1.31.0

[#6](https://github.com/UNKNOWN-X0/Imposter-Game/issues/6) keeps the host, join, and return behaviour inside the new design.

### UX principles

- Get a new group to a playable table in a few clear choices; keep advanced rules available without crowding the first screen.
- Keep shared controls consistent while giving each game its own identity and play rhythm.
- Show pack contents, compatible games and languages, and what will be shared with the room before play starts.
- Make setup forgiving with presets, undoable edits, useful empty states, row-level import feedback, and recovery after reload or disconnection.
- Keep private information behind explicit handoff and role-specific views on shared phones and in rooms.
- Preserve keyboard access, visible focus, readable contrast, large touch targets, reduced motion, and English, Thai, and German support.

## Later

**Quick Clue** ([#11](https://github.com/UNKNOWN-X0/Imposter-Game/issues/11)) remains deferred until the Imposter redesign ships.

**Shared minigames site and game roster** (stated 2026-11-16). Build around a party lobby and shared platform services while each game owns its rules, content schema, and play screens. Prove the boundary with the first new game before extracting a generic game-plugin system.

*Done when* Imposter and a second game share the party roster, room, preferences, and pack lifecycle, with separate rules and content validation and passing privacy checks for both play modes.

### Candidate games

Working titles and mechanics for discussion; select and name games deliberately before implementation.

| Working title | What the group does | Players / play mode | Custom pack shape | Fit and priority |
|---|---|---|---|---|
| **Imposter** (existing) | Everyone except the imposters gets the secret word; the group gives clues and votes. | 4–10; shared phone or room | Word + decoy + optional hint | Anchor game and compatibility test for the shared platform. |
| **Quick Clue** | Players give short clues to help one guesser identify a secret word; repeated clues can cancel before the guess. | 3–8; shared phone or room | A list of target words | Recommended second game: a small cooperative rules core and a different pack schema ([issue #11](https://github.com/UNKNOWN-X0/Imposter-Game/issues/11)). |
| **Forbidden Clues** | Teams race to explain a target without saying its restricted clue words. | 4+; shared phone or room | Target word + forbidden words | A richer content-entry shape and team play; proposed third game. |
| **Word Grid** | A clue-giver links visible words with a clue and count; teammates choose while avoiding traps. | 4–10; shared phone or room | Single-word deck; game generates board and hidden key | Tests role secrecy and a larger step in game flow. |
| **Charade Relay** | Players act or draw prompts while a team guesses against a timer. | 3+; best in person, optionally room | Prompts with optional category and difficulty | Adds nonverbal play and content beyond word lists. |
| **Spectrum Guess** | A player clues a hidden point between contrasting endpoints; the group estimates where it falls. | 3+; shared phone or room | Endpoint pair + topic or clue prompt | Conversational play; packs need editorial judgement. |
| **Bluff the Meaning** | Players write plausible definitions for an unfamiliar term and vote for the real one. | 3+; room recommended | Term + correct definition; player-written decoys | Vocabulary angle; content quality and multilingual writing make it a later experiment. |

These are common party-game patterns to explore, not instructions to copy a game's name, branding, text, or complete rules. Reference patterns include unique cooperative clues ([Just One](https://store.asmodee.com/products/just-one-refresh)), forbidden clue words ([Taboo](https://instructions.hasbro.com/en-gb/instruction/taboo-game-instructions-manual)), clue-plus-count word association ([Codenames](https://www.czechgames.com/games/codenames)), and a subjective clue spectrum ([Wavelength](https://www.wavelength.zone/about)).

### Recommended build order

1. Complete and validate the party-table flow and pack-library entry points.
2. Define only the shared boundary needed by two games: roster/room, language and theme preferences, a game catalog entry, and a versioned pack envelope with game-specific entry schemas.
3. Add Quick Clue to prove Imposter pair packs and single-word packs share library, editing, validation, importing, and share-code behavior without forcing one entry format.
4. Add Forbidden Clues to test richer entries and the same pack lifecycle.
5. Use Word Grid or Charade Relay to test a more distinct play mode before expanding shared infrastructure.

### Pack system direction

- A pack has shared metadata (name, language, version, local origin, and compatible game/content type) plus typed entries owned by that content type.
- The library supports built-in, personal, and explicitly imported/shared packs, with search, preview, copy, edit, language filtering, and compatibility visible in one place.
- Import and network boundaries validate version, size, language, compatibility, and every entry. Invalid rows receive useful correction messages.
- Keep personal packs on-device initially and share them as versioned codes. Consider cloud sync or a public catalog only after players ask for it and ownership and moderation are designed.
- Rooms send a selected pack only to the authoritative game server. Each game controls what a player may see; custom content must preserve secret-handling guarantees.

### Decisions to settle before broad extraction

- Whether the party lobby precedes game selection in both shared-phone and room play; the selected hub assumes yes.
- How a pack declares compatibility when games use only some of its entry fields.
- Whether content stays on-device or later syncs across a player's devices; the initial direction is local-first plus explicit share codes.
- Whether game switching keeps only the roster or adds a party score; the initial direction keeps scores game-specific.
- What minimal catalog contract each game exports and how browser sweeps, fingerprints, and room privacy checks extend per game.
- Which future games use original mechanics versus licensed or branded adaptations; no borrowed title, art, wording, or exact presentation is assumed.

### Shared platform implementation

After Imposter and Quick Clue prove the boundary, extract only pieces used by both games. Keep roster, room transport, language/theme preferences, and pack lifecycle reusable; keep game rules, scoring, and content interpretation inside each game. A third game is evidence for the boundary, not a reason to build a configurable rules framework in advance.
