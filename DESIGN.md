---
name: ImposterGame
description: A phone-first party game where friends gather around a crafted tavern table.
colors:
  birch-dark-wood: "#383429"
  birch-light-wood: "#e9dfca"
  oak-dark-ground: "#191610"
  oak-dark-surface: "#29251e"
  oak-dark-raised: "#373126"
  oak-light-ground: "#eee4d1"
  oak-light-surface: "#fff5df"
  oak-light-raised: "#e7d6b7"
  teak-dark-wood: "#3d2c1c"
  teak-light-wood: "#e7ca99"
  mahogany-dark-wood: "#3a2822"
  mahogany-light-wood: "#e7c9bb"
  walnut-dark-wood: "#382b24"
  walnut-light-wood: "#ddcbb4"
  accent-dark: "#d9ac27"
  accent-light: "#7d5714"
  on-accent-dark: "#1b1309"
  on-accent-light: "#ffffff"
  crew-dark: "#55db8b"
  crew-light: "#126a3b"
  imposter-dark: "#ff8294"
  imposter-light: "#b51e3e"
typography:
  display:
    fontFamily: "Thonburi, Noto Sans Thai, IBM Plex Sans Thai, Sarabun, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "32px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Thonburi, Noto Sans Thai, IBM Plex Sans Thai, Sarabun, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "30px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Thonburi, Noto Sans Thai, IBM Plex Sans Thai, Sarabun, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "23px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Thonburi, Noto Sans Thai, IBM Plex Sans Thai, Sarabun, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Thonburi, Noto Sans Thai, IBM Plex Sans Thai, Sarabun, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.3
rounded:
  control: "8px"
  table: "2px"
  pill: "999px"
spacing:
  tap: "52px"
components:
  button-primary-dark:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.on-accent-dark}"
    rounded: "{rounded.control}"
    height: "{spacing.tap}"
  button-primary-light:
    backgroundColor: "{colors.accent-light}"
    textColor: "{colors.on-accent-light}"
    rounded: "{rounded.control}"
    height: "{spacing.tap}"
  panel:
    backgroundColor: "{colors.oak-dark-surface}"
    rounded: "{rounded.control}"
---

# Design System: ImposterGame

## Overview

**Creative North Star: “The Joiner’s Table”**

Friends gather around one rectangular wooden table, whether passing one phone or joining a room. The table itself is the Feast table chosen on 2026-11-25 (`.impeccable/mocks/table-avatars/index.html?v=a`, built as `src/ui/table/TableScene.jsx`), which replaces the earlier Joinery mock's flat plank panel: a lamplit tabletop with a thick rim; players sit along its long sides as emblem avatars; ordinary controls remain easy to read beside or below it. On a shared phone, keep the private card covered until its deliberate handoff. Preserve the mock’s English, Thai, and German layouts and its light and dark modes.

The tavern comes from the table, the warm wood palettes, and the party gathered around it. Keep the rest of the page and controls calm, legible surfaces. Do not spread plank stripes across the page or ordinary control panels. Use the exact approved table arrangement and interaction states as the source for the hub rebuild and carry its table language into every Imposter screen.

**Key Characteristics:**
- Five wood palettes, each with light and dark mode; Oak is the default.
- Each wood carries its own warm-metal accent for actions; green and red identify the two sides.
- Rectangular plank table, long-side seating, covered private card, readable controls.
- System sans typography with Thai-capable faces; 52px minimum primary tap targets.

## Colors

Each theme changes the warm wood surfaces and brings its own action accent, while green and red retain their game meanings. The complete palettes and contrast checks live in `src/ui/styles/tokens.css` and `src/ui/theme/theme.test.js`.

### Primary
- **Wood Accent** (owner, 2026-11-25: the accent follows the theme; the earlier cool blue is retired): each wood has its own warm-metal action colour that fills primary actions and marks actionable words and icons. Dark mode fills a bright metal with dark text; light mode fills the same hue deepened, with white text.

  | Wood | Dark fill | Light fill | Reads as |
  |---|---|---|---|
  | Birch | `#db9e25` | `#865a18` | honey amber |
  | Oak (default) | `#d9ac27` | `#7d5714` | brass |
  | Teak | `#e3801d` | `#884711` | burnt amber |
  | Mahogany | `#e0753f` | `#963d1a` | copper |
  | Walnut | `#c69c3a` | `#765022` | antique bronze |

  Each accent stays distinct from every wood surface and at least 25° of hue away from crew green and imposter red (the copper on Mahogany is the close call); `src/ui/theme/theme.test.js` enforces both.

### Secondary
- **Crew Green:** marks the crew side and crew outcomes.
- **Imposter Red:** marks the imposter side, danger actions, and imposter outcomes.

### Neutral
- **Wood surfaces:** Birch is pale cream, Oak is honey brown, Teak is golden brown, Mahogany is red brown, and Walnut is dark chocolate. Each uses its own warm ramp in both modes.
- **Text and lines:** warm cream text on dark wood and deep brown text on light wood; dividers and outlines use the theme’s wood line token.
- **Table:** use the selected wood palette for the plank boards, grain, and edge. Keep table text or icons contrast-safe; keep controls on their own solid surfaces.

### Named Rules
**The Accent Follows The Wood Rule.** The wood's accent marks something to tap or a current interactive state; it is never blue and never borrowed from another wood. Green and red communicate sides, never generic emphasis.

**The Table Holds The Texture Rule.** Visible plank construction belongs to the tabletop. Do not texture the page background or ordinary panels.

## Typography

**Display Font:** the platform sans stack, with Thonburi, Noto Sans Thai, IBM Plex Sans Thai, and Sarabun before Latin fallbacks, matching the approved mock.
**Body Font:** the same stack.
**Mono Font:** `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`, only where people paste or read raw text: the pack editor's word list (so word and near miss line up) and the crash report. Never for interface copy.

**Character:** direct, friendly, and readable in a busy room. Use weight and clear size steps for hierarchy; keep names and controls horizontal and untransformed in every language.

### Hierarchy
- **Display** (800, 32px, 1.2): the main title and prominent round outcome.
- **Headline** (800, 30px, 1.15): screen and section headings.
- **Title** (700, 23px, 1.3): the table prompt and important question.
- **Body** (400, 16px, 1.5): instructions, player details, and supporting text; keep paragraphs to about 65ch.
- **Label** (650, 13px, 1.3): compact seat details, status, and utility controls.

### Named Rules
**The Name Stays Readable Rule.** Player names, room codes, and action labels stay horizontal, wrap safely, and never become texture or ornament.

## Layout

The table is the main spatial anchor. It is rectangular and wider than it is tall, with seats along the two long sides and the covered card or table state centered between them. Keep names and controls outside the plank seams. On a desktop, place the action group beside the table; on a phone, stack it below the table with the intro and primary choice still easy to reach. At narrow widths, reduce side gutters and seat widths before allowing the table or text to overflow. At wider widths, cap the experience near 1200px; the table scene grows with its column up to 760px. Below 600px the top-down table turns upright so its long sides run down the phone and twelve seats still fit at 390px without sideways scrolling. Use English, Thai, and German copy at phone and desktop widths when checking the layout.

The hub starts with the brand and a short invitation, then the shared table and its actions. Since 2026-11-25 (issue #37, owner: "why add players in game instead of at lobby") the party gathers at the hub's table: people add themselves there with an emblem before anyone picks a game, and every game starts with that party; a game's own lobby edits the same list. Library, help, news, settings, and language remain available as utility navigation without displacing the gathering area. Do not imply that anyone is seated when the party is empty.

## Elevation & Depth

The system is mostly flat. Wood colour, the table’s inlaid edge, and fine borders define surfaces; use soft shadows only to separate a tabletop from its floor or a covered card from the table. Floating menus and dialogs may use the mode’s shared shadow. Avoid card-on-card stacks, oversized glows, and hard offset shadows.

### Shadow Vocabulary
- **Floating surface** (`--shadow`): a menu or dialog lifted above the page.
- **Private card** (`--shadow-card`): separation for the covered or revealed card during handoff.
- **Control thumb** (`--shadow-thumb`): the moving thumb in a segmented control.

## Shapes

Use crisp joinery: rounded rim corners on the feast table and circular seat tokens, 8px corners on controls and panels, and pill geometry only for compact room codes or segmented-control tracks. The table edge is a full, inlaid border; seats are distinct blocks along its sides. Borders follow the wood line token. Keep focus rings visible outside every shape and never rely on colour alone for selection.

## Components

### Buttons
- **Shape:** 8px corners and at least 52px high for primary actions.
- **Primary:** the wood accent as fill with `--on-accent` text; one clear action per decision.
- **Secondary:** solid wood surface with a full theme-line border.
- **Hover / Focus / Press:** subtle colour change, visible 3px focus outline, and brief press response; state remains clear without motion.

### Panels
- **Style:** solid warm surface, full border, readable padding, and no plank texture.
- **Use:** group related choices and status; do not nest panels as page scaffolding.

### Table and Seats
Owner's choice, 2026-11-25 (issue #28): **A · Feast table** for the look, and **players pick their own emblem** for the avatar. One component draws it, `src/ui/table/TableScene.jsx`, which takes the seated people in order and a chair count and knows nothing about the rules; the hub and the local lobby use it now, and the room screens and the round reuse it.

- **Table:** a top-down tabletop, wider than it is tall, under warm lamplight: five planks with joins and butt ends, a thick rim, an inlaid edge, a soft floor shadow, and a few original props (two mugs, a candle) at the corners where they never cover a seat or text. Every wood colour comes from the theme's `--table-*` tokens.
- **Chairs:** drawn on both long sides, one always free, never fewer than six and never more than twelve, in even numbers (`chairsFor`). Seats fill alternately far side and near side, so people sit across from each other.
- **Seats:** a taken seat shows the player's emblem in a ringed circle with their name on a surface chip below it; the host wears a small crown, with "host" spoken for screen readers; a dropped room player stays seated, dimmed and labelled "away". An open seat is a dashed circle with "+" and "Open". Joining plays a short sit-down; reduced motion removes it.
- **Lobby (issue #7, 2026-11-25):** the table is the roster, so there is no separate player list. Tapping a taken seat selects it (a ring in the accent) and opens a bar under the table with Cancel and "Remove <name>"; in a room only the host can, and never on their own seat. Your own seat says "you" under your name. The order is table, emblem and name, then Deal, so a first game is names and one tap; "Game settings" follows with the quick-start presets first and the rest behind "Customize rules and roles".
- **Plate:** any text on the table sits on a plate (surface colour, fine border) in the middle, never on the grain.
- **Avatars:** twelve emblems (mug, key, flame, dice, feather, moon, anchor, leaf, star, bell, sun, fish), one per seat, drawn from Lucide (ISC, credited in `NOTICE.md`) on the shared 24px icon grid. Each owns a muted ink colour of its own; `#fff7e8` on every one meets 4.5:1, and none comes within 25° of hue of crew green or imposter red (`src/ui/icons/emblems.test.js`). On one phone, the lobby's picker offers the emblems nobody has taken; a name without a choice falls back on a stable default. Nothing about an avatar or seat changes with a role, word or vote.

### Pack Library and Editor
- **Frame:** opened from the hub or from a lobby, the library and editor sit in the game frame (brand beside Back, rule under the top bar, centred column).
- **Findings:** the editor lists every finding about the pasted words in line order, numbered by the line as typed. Skipped lines sit on the imposter-deep tint and quote what was typed; warnings (a dropped or risky near miss) sit on `--surface-2`. Tinted rows, never a coloured side stripe. The list scrolls inside itself so Save stays in reach.

- **Write it with AI:** a fold-out panel above the word box holds a copyable prompt (topic from the pack name, words in the pack's word language, 30/50/100 entries). It is text only: no network call, no key.

### Private Card
- **Style:** a face-down card: a plain back with an inlaid frame inside the edge, no stripes. It opens only when an explicit hold completes.
- **Peek (issue #22, 2026-11-25):** on one phone the card is open only while it is held; lifting the finger, sliding off, a cancelled pointer, or backgrounding the phone covers it at once. A keyboard opens it with Enter or Space and covers it with the same key, Escape, or moving focus. Holding again looks again.
- **Handoff:** the pass screen shows the next player's emblem with the pass mark and their name. Once the card has been seen and is covered again, the button names who gets the phone next ("Covered — pass to Nok"), or starts the round after the last card.
- **State:** handoff and reveal animation never disclose the word or role before the existing privacy gate permits it; reduced motion preserves the same gate. In a room, on a phone of your own, the card stays open after the hold.

### Room-code Chip
- **Style:** tracked, tabular code with an obvious copy action; pill-shaped and large enough to tap.

### Banners and Dialogs
- **Style:** theme-surface background, complete border, concise status or action, and a visible keyboard focus path. Do not use colour as the only success or error signal.

### Segmented Control
- **Style:** one compact, fully rounded track; the active option uses the wood accent. Preserve text labels and visible focus.

### Icons
- **Set (owner, 2026-11-25, issue #39):** interface icons are Lucide drawings (ISC, `NOTICE.md`) on a 24px grid at a 1.8 stroke with round caps, painted in `currentColor`; single-point dots are drawn at 2.4 to 2.6 so they read. Each keeps one motion behind `anim`, and reduced motion stops it. The brand mark, the jester, the blind card and the card back are the project's own; a new icon starts from the nearest Lucide drawing.

### Navigation
- **Style:** utility actions stay secondary to the table and primary party actions. On phones they wrap or stack without clipping; do not reinstate the permanent noticeboard rail.

## Do's and Don'ts

- **Do** use the feast table scene (owner's choice, 2026-11-25) for the table, long-side seats and emblem avatars, with the covered private card and actions beside or below it.
- **Do** keep the table as the one strongly textured surface; use wood tones without page-wide stripes.
- **Do** keep controls, player names, status text, and the wood itself distinct at every mode and language.
- **Do** respect 52px touch targets, visible keyboard focus, and `prefers-reduced-motion`.
- **Don't** use the superseded Neighborhood Noticeboard hierarchy or its separate hub/game styles.
- **Don't** add decoration, texture, or motion that lowers contrast or implies a state that is not true.
