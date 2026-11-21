---
name: ImposterGame
description: A customizable party-game hub and phone-first social deduction game in five contrast-checked wood families, each with a light and a dark mode.
colors:
  oak-bg: "#191610"
  oak-surface: "#29251e"
  oak-surface-2: "#373126"
  oak-line: "#62533e"
  oak-text: "#fbefda"
  oak-text-dim: "#cfbfa6"
  oak-accent: "#91c5ff"
  oak-on-accent: "#112b48"
  oak-crew: "#55db8b"
  light-bg: "#eee4d1"
  light-surface: "#fff5df"
  light-surface-2: "#e7d6b7"
  light-line: "#987b53"
  light-text: "#30271d"
  light-text-dim: "#554735"
  light-accent: "#1d568b"
  light-accent-text: "#1d568b"
  light-crew: "#126a3b"
  light-imposter: "#b51e3e"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans Thai, IBM Plex Sans Thai, Sarabun, Thonburi, sans-serif"
    fontSize: "clamp(30px, 9vw, 46px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans Thai, IBM Plex Sans Thai, Sarabun, Thonburi, sans-serif"
    fontSize: "30px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans Thai, IBM Plex Sans Thai, Sarabun, Thonburi, sans-serif"
    fontSize: "clamp(19px, 5.2vw, 24px)"
    fontWeight: 700
    lineHeight: 1.45
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans Thai, IBM Plex Sans Thai, Sarabun, Thonburi, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Noto Sans Thai, IBM Plex Sans Thai, Sarabun, Thonburi, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.16em"
  hub-headline:
    fontSize: "clamp(34px, 4vw, 50px)"
    fontWeight: 850
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  hub-headline-mobile:
    fontSize: "clamp(31px, 8vw, 42px)"
  hub-party-title:
    fontSize: "22px"
  hub-game-title:
    fontSize: "20px"
  hub-section-title:
    fontSize: "18px"
  hub-nav:
    fontSize: "15px"
  hub-nav-mobile:
    fontSize: "14px"
  hub-supporting:
    fontSize: "14px"
  hub-intro-mobile:
    fontSize: "16px"
  hub-footer:
    fontSize: "13px"
  hub-state-tab:
    fontSize: "11px"
rounded:
  sm: "12px"
  md: "18px"
  pill: "999px"
  hub-action: "10px"
  hub-panel: "15px"
  hub-tab: "9px"
spacing:
  xs: "6px"
  sm: "8px"
  md: "18px"
  lg: "24px"
  tap: "52px"
components:
  button-primary:
    backgroundColor: "{colors.midnight-accent}"
    textColor: "{colors.midnight-on-accent}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "{spacing.tap}"
  button-default:
    backgroundColor: "{colors.midnight-surface-2}"
    textColor: "{colors.midnight-text}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "{spacing.tap}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.midnight-text-dim}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "{spacing.tap}"
  card:
    backgroundColor: "{colors.midnight-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
---

# Design System: ImposterGame

## Overview

**Creative North Star: "The Joiner’s Table"** (owner selected, 2026-11-21)

> **Selected direction; implementation underway.** In issue #13 the owner chose the Joinery study: a flush rectangular wooden tabletop with an inlaid edge, players along its long sides, ordinary readable controls, and a covered private card. The approved study is `.impeccable/mocks/tavern-direction/joinery.html`; its phone composition is `joinery-sketch.html` in the same folder. The owner confirmed Birch, Oak (default), Teak, Mahogany, and Walnut, each in light and dark. Issue #14 replaces the colour palettes; #15 replaces the remaining legacy system documented below. Until #15, the layout and component sections still describe 1.30.0; do not extend the Noticeboard look or the split hub/game styles.

ImposterGame brings friends to one table, whether they pass one phone around or join a room. The current home hub borrows the clarity of a neighborhood noticeboard: paper-like surfaces, sign-ink text, and action tabs. The current game remains a phone-first card table. Five wood families (Birch, Oak, Teak, Mahogany, Walnut), each in light and dark modes, now supply the warm surfaces; the cool-blue accent marks actions on both. Both surfaces use semantic theme tokens so user-selected themes continue to work.

The hub is calm and flat: a persistent navigation rail on desktop becomes a horizontal strip on mobile, while bordered panels and one filled pack action make the party paths easy to scan. Game screens retain their existing softer cards, pill controls, and lightweight motion. All surfaces keep touch targets generous and support English, Thai, and German.

**Key Characteristics:**
- Two dials, `data-mode` and `data-theme`; every theme declares the same tokens in both modes, contrast-checked by a test.
- One accent for actions (`--accent` as fill with `--on-accent` on it; `--accent-text` for words), plus crew green and imposter red reserved for sides.
- Pill buttons at 52px, cards at 18px radius with a hairline border, a 999px room-code chip with tracked tabular numerals.
- A system sans stack with Thai faces listed first; weight does the hierarchy (800 names, 700 acts, 400 reads).
- One 24px icon set, 1.8 stroke, round caps, `currentColor`, each icon with a single motion behind `anim`.

## Colors

Warm wood tones shape the surfaces; a cool-blue accent marks actions and remains distinct from every wood. Crew green and imposter red identify the sides. Every text pairing is contrast-checked per wood and mode.

### Primary
- **Cool-blue Action Accent** (`#91c5ff` dark, `#1d568b` light): the fill of the primary button and the hold ring, set apart from the warm wood surfaces. `--accent-text` uses the same blue for words and icons; it clears 4.5:1 on every surface.

### Secondary: the sides
- **Crew Green** (`#55db8b` dark, `#126a3b` light) and **Imposter Red** (`#ff8294` dark, `#b51e3e` light, with `--imposter-deep` and `--imposter-line` washes): the crew and imposter colours, used for the side a player is on, the danger button, and the verdict; never for anything else.

### Woods
- **Birch**: pale cream with soft tan grain; **Oak**: honey brown and the default; **Teak**: golden brown; **Mahogany**: red brown; **Walnut**: dark chocolate. Each has separate light and dark palettes. The picker chips carry a small wood-grain mark; the Joinery table receives its plank construction in the hub rebuild.
- **Oak dark** uses ground `#191610`, surface `#29251e`, raised surface `#373126`, and line `#62533e`. **Oak light** uses ground `#eee4d1`, surface `#fff5df`, raised surface `#e7d6b7`, and line `#987b53`. The other four woods have their own warm surface ramps.
- **Text** (`#fbefda` dark / `#30271d` light), **Dim**, and **Faint** text clear 4.5:1 on every surface in every palette.

### Named Rules
**The Two Dials Rule.** Mode and theme are set once on the root; a rule below the tokens never asks which is on.

**The Accent Is An Action Rule.** `--accent` fills only things you tap; `--accent-text` is its readable twin for words. Crew and imposter colours mean sides, never emphasis.

**The Every Theme Declares Everything Rule.** A new theme declares every token in both modes; `src/ui/theme/theme.test.js` fails on a missing token, a contrast failure, or a chip unlike its theme.

## Typography

**Display Font:** the system sans stack (ui-sans-serif, system-ui, Segoe UI, Roboto), with Noto Sans Thai, IBM Plex Sans Thai, Sarabun, and Thonburi listed before the Latin fallbacks so Thai text gets a Thai face. The hub carries this existing stack into the brand and page headline.
**Body Font:** the same stack.

**Character:** a plain system face used at heavy weights for names and light weights for reading; the hierarchy is carried by weight and tracking, not by a second family.

### Hierarchy
- **Display** (800, clamp(30px, 9vw, 46px), line-height 1.1, tracking −0.03em): the hero word on a card and the end-of-game screen.
- **Headline** (800, 30px, 1.15, −0.03em): screen titles.
- **Title** (700, clamp(19px, 5.2vw, 24px), 1.45): the question or prompt a screen asks.
- **Body** (400, 17px, 1.5): reading text, rules, explanations.
- **Label** (700, 12px, tracking 0.16em to 0.22em, uppercase or tabular): the room-code chip, section eyebrows, and the small action chips; the brand mark at 800 / 20px / −0.02em.
- **Hub headline** (850, clamp(34px, 4vw, 50px) desktop and clamp(31px, 8vw, 42px) mobile, 1.08, −0.03em); hub section headings use 18px, game names 20px, party titles 22px.
- **Hub supporting text** uses 14px; introduction copy uses 17px desktop and 16px mobile. Hub navigation uses 14px mobile and 15px desktop; footer links use 13px and party-state tabs use 11px.

### Named Rules
**The Weight Does The Work Rule.** 800 names, 700 acts, 400 reads; size changes little between roles on a phone.

## Layout

Game screens use a single centred column, 560px wide and 680px from 700px up, with the top bar pinned above it. The hub uses a 232px navigation rail on desktop and horizontal navigation below 760px, with content capped at 1040px. Its two play modes share one panel; the first game and word-pack library sit in adjacent columns on wide screens and stack on narrow screens. A short landscape phone (height under 520px) gets a tighter layout. Tap targets are 52px tall.

## Elevation & Depth

A hybrid: surfaces step up tonally (bg, bg-soft, surface, surface-2) and carry a 1px hairline, and cards and floating elements get a soft shadow whose strength belongs to the mode, not the theme. Dark mode lifts a surface with white washes (`--overlay`, `--sheen`) and deeper shadows; light mode settles it with black washes and lighter shadows, and halves the glow because a glow on a pale page reads as a smudge.

### Shadow Vocabulary
- **Shadow** (`0 10px 30px rgb(0 0 0 / 0.45)` dark, `/ 0.1` light): floating panels and menus.
- **Card shadow** (`0 18px 45px rgb(0 0 0 / 0.35)` dark, `0 16px 40px rgb(0 0 0 / 0.1)` light): the hold card and the hero card.
- **Thumb shadow** (`0 2px 10px rgb(0 0 0 / 0.25)` dark, `0 2px 8px rgb(0 0 0 / 0.14)` light): segmented-control thumbs.

### Named Rules
**The Mode Owns The Shadow Rule.** Washes, hairlines, shadows, and glow are declared per mode and shared by every theme.

## Shapes

Game surfaces use 18px cards (`--radius`), 12px small panels (`--radius-sm`), and full pills for controls and room codes. The hub uses 10px action cards and 15px panels, with 9px party-state tabs and 1px hairlines in `--line`. Keep the distinction by surface: the hub reads like posted information, while the game reads like a card table.

## Components

### Buttons
- **Shape:** pill (999px), 52px tall, 20px side padding, 700 weight, 8px gap to an icon.
- **Primary:** accent fill with on-accent text. **Default:** raised surface (`--surface-2`) with body text. **Ghost:** transparent with a hairline border and dim text. **Danger:** imposter red with on-imposter text.
- **Active:** scales to 0.975 over 80ms; **disabled:** 40% opacity.

### Cards
- **Corner Style:** 18px. **Background:** `--surface` with a 1px `--line` border. **Internal Padding:** 18px (24px for `.pad-lg`, none for `.flush`). The hold card (the private reveal) adds the card shadow and the accent hold ring.

### Party hub
- **Navigation:** stable desktop rail, horizontal mobile tabs; the current section uses `--surface` and a visible border.
- **Party panel:** `--surface` with a mustard state tab; the tab labels the party state and never implies players exist when it is empty.
- **Play modes:** adjacent `--bg-soft` action panels with icons, clear labels, and full descriptions.
- **Pack library:** the hub's single `--accent` panel; use `--on-accent` for its text and a contrasting `--surface` button.

### Room-code chip
- A 999px pill on `--surface` with a hairline border, 800 weight, 0.22em tracking, tabular numerals, 40px tall, with an uppercase 12px action chip inside it. It never shrinks below the code: its job is to answer "what was the room again?" across a table.

### Segmented control
- A pill track on the raised surface with a sliding thumb carrying the thumb shadow; the selected segment reads in body text, the rest in dim text.

### Banner
- A full-width card-radius strip for rule violations and notices, rendered from an error code in the phone's own language.

### Icons
- Inline SVG on a 24×24 grid, 20×20 live area, one 1.8 stroke with round caps and joins, `currentColor`, `aria-hidden`; each icon has one movement (the bell swings, the die rolls) that runs only when `anim` is passed. `#icons` is the sheet.

### Motion
- Spring-like ease-outs (`cubic-bezier(0.2, 1.1, 0.35, 1)` and kin) over 0.25s to 0.7s for a word or hero settling in, 1.5s for confetti; the `prefers-reduced-motion` block at the end of the stylesheet switches all of it off.

## Do's and Don'ts

### Do:
- **Do** declare every token for both modes when adding a theme, and run `src/ui/theme/theme.test.js`.
- **Do** use `--accent-text`, never `--accent`, for words and hairlines on a plain surface.
- **Do** keep touch targets at 52px and the game column at 560px (680px wide).
- **Do** give a new icon one motion that is what that object does, off by default.

### Don't:
- **Don't** use crew green or imposter red for emphasis; they mean sides.
- **Don't** let a rule below `tokens.css` test for the mode or the theme.
- **Don't** add a square corner, a second type family, or motion that carries meaning.
- **Don't** use the mustard hub accent for player teams; crew green and imposter red remain reserved for game roles.
