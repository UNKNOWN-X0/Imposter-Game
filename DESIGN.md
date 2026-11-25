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

Friends gather around one rectangular wooden table, whether passing one phone or joining a room. Follow the approved `.impeccable/mocks/tavern-direction/joinery.html` composition: the flush tabletop is built from visible planks with a crafted edge; players sit along its long sides; ordinary controls remain easy to read beside or below it. On a shared phone, keep the private card covered until its deliberate handoff. Preserve the mock’s English, Thai, and German layouts and its light and dark modes.

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

The table is the main spatial anchor. It is rectangular and wider than it is tall, with seats along the two long sides and the covered card or table state centered between them. Keep names and controls outside the plank seams. On a desktop, place the action group beside the table; on a phone, stack it below the table with the intro and primary choice still easy to reach. At narrow widths, reduce side gutters and seat widths before allowing the table or text to overflow. At wider widths, cap the experience near 1200px and keep the table near 480px wide. Use English, Thai, and German copy at phone and desktop widths when checking the layout.

The hub starts with the brand and a short invitation, then the shared table and its actions. Library, help, news, settings, and language remain available as utility navigation without displacing the gathering area. Do not imply that anyone is seated when the party is empty.

## Elevation & Depth

The system is mostly flat. Wood colour, the table’s inlaid edge, and fine borders define surfaces; use soft shadows only to separate a tabletop from its floor or a covered card from the table. Floating menus and dialogs may use the mode’s shared shadow. Avoid card-on-card stacks, oversized glows, and hard offset shadows.

### Shadow Vocabulary
- **Floating surface** (`--shadow`): a menu or dialog lifted above the page.
- **Private card** (`--shadow-card`): separation for the covered or revealed card during handoff.
- **Control thumb** (`--shadow-thumb`): the moving thumb in a segmented control.

## Shapes

Use the mock’s crisp joinery: 2px corners on the tabletop and seats, 8px corners on controls and panels, and pill geometry only for compact room codes or segmented-control tracks. The table edge is a full, inlaid border; seats are distinct blocks along its sides. Borders follow the wood line token. Keep focus rings visible outside every shape and never rely on colour alone for selection.

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
- **Table:** rectangular flush tabletop with visible boards, fine grain, and an inlaid edge. Its board direction and joins follow the approved Joinery mock.
- **Seats:** readable name blocks on the long sides; empty seats are visibly empty. Selected and occupied states include a shape or label cue as well as colour.

### Private Card
- **Style:** covered until an explicit hold-to-reveal action completes.
- **State:** handoff and reveal animation never disclose the word or role before the existing privacy gate permits it; reduced motion preserves the same gate.

### Room-code Chip
- **Style:** tracked, tabular code with an obvious copy action; pill-shaped and large enough to tap.

### Banners and Dialogs
- **Style:** theme-surface background, complete border, concise status or action, and a visible keyboard focus path. Do not use colour as the only success or error signal.

### Segmented Control
- **Style:** one compact, fully rounded track; the active option uses the wood accent. Preserve text labels and visible focus.

### Navigation
- **Style:** utility actions stay secondary to the table and primary party actions. On phones they wrap or stack without clipping; do not reinstate the permanent noticeboard rail.

## Do's and Don'ts

- **Do** reproduce the approved Joinery mock’s rectangular plank table, long-side seats, covered private card, and adjacent actions.
- **Do** keep the table as the one strongly textured surface; use wood tones without page-wide stripes.
- **Do** keep controls, player names, status text, and the wood itself distinct at every mode and language.
- **Do** respect 52px touch targets, visible keyboard focus, and `prefers-reduced-motion`.
- **Don't** use the superseded Neighborhood Noticeboard hierarchy or its separate hub/game styles.
- **Don't** add decoration, texture, or motion that lowers contrast or implies a state that is not true.
