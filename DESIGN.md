---
name: ImposterGame
description: A phone-first party game in five contrast-checked colour families, each with a light and a dark mode, built from pill buttons, rounded cards, and one 24px icon set. Captured as the incumbent baseline before the planned UX/UI overhaul.
colors:
  midnight-bg: "#120f17"
  midnight-surface: "#201c28"
  midnight-surface-2: "#2a2534"
  midnight-line: "#464054"
  midnight-text: "#f2f1f4"
  midnight-text-dim: "#bab6c3"
  midnight-accent: "#f5bc42"
  midnight-on-accent: "#10121a"
  midnight-crew: "#4bdd80"
  light-bg: "#f8f7fa"
  light-surface: "#ffffff"
  light-surface-2: "#ebe9ef"
  light-line: "#c9c5d3"
  light-text: "#201e25"
  light-text-dim: "#585365"
  light-accent: "#f4a806"
  light-accent-text: "#906404"
  light-crew: "#147b47"
  light-imposter: "#c11f40"
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
rounded:
  sm: "12px"
  md: "18px"
  pill: "999px"
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

<!-- BASELINE: the incumbent look, captured 2026-11-16 from the code without a creative interview, because a UX/UI overhaul is planned (ROADMAP.md). It is the reference and anti-reference for that work, not a commitment. -->

## Overview

**Creative North Star: "The Phone at the Table"** (descriptive, not chosen: the baseline's own character)

ImposterGame is a dark-by-default card table on a phone: soft deep surfaces, one warm accent that only ever means "act now", two team colours that mean crew and imposter and nothing else, and everything a thumb needs at least 52px tall. Density is low and the column is narrow (560px, 680px on wider screens) because the phone is passed around a table and read at arm's length by people who may be reading Thai or German. Five colour families (midnight, ember, forest, ocean, mono) each exist in a light and a dark mode, declared on two dials so nothing below the tokens knows which is on.

The system is friendly rather than editorial: pill buttons, 18px card corners, soft shadows that lift in the dark and settle in the light, and small motions (a word settling in, confetti at the end, an icon doing the one thing that object does) that are decoration on a layout that works without them.

**Key Characteristics:**
- Two dials, `data-mode` and `data-theme`; every theme declares the same tokens in both modes, contrast-checked by a test.
- One accent for actions (`--accent` as fill with `--on-accent` on it; `--accent-text` for words), plus crew green and imposter red reserved for sides.
- Pill buttons at 52px, cards at 18px radius with a hairline border, a 999px room-code chip with tracked tabular numerals.
- A system sans stack with Thai faces listed first; weight does the hierarchy (800 names, 700 acts, 400 reads).
- One 24px icon set, 1.8 stroke, round caps, `currentColor`, each icon with a single motion behind `anim`.

## Colors

One accent does the acting, two side colours do the naming, and the rest is tonal: the palette is generated and contrast-checked per theme and mode, not picked by eye.

### Primary
- **Amber Accent** (midnight-accent `#f5bc42` dark, light-accent `#f4a806` light): the fill of the primary button and the hold ring. On a pale surface the same hue is darkened to **Accent Text** (`#906404`) for words, icons, and hairlines, because the bright fill cannot be read as text on white.

### Secondary: the sides
- **Crew Green** (`#4bdd80` dark, `#147b47` light) and **Imposter Red** (`#c11f40` light, with `--imposter-deep` and `--imposter-line` washes): the crew and imposter colours, used for the side a player is on, the danger button, and the verdict; never for anything else.

### Neutral
- **Night Ground** (midnight-bg `#120f17`), **Surface** (`#201c28`), **Raised Surface** (`#2a2534`), **Line** (`#464054`): the dark stack, lifted with white overlays. In light mode the stack inverts to **Paper** (`#f8f7fa`), **White Surface**, **Cool Surface** (`#ebe9ef`) and **Line** (`#c9c5d3`), settled with black overlays.
- **Text** (`#f2f1f4` / `#201e25`), **Dim** and **Faint** text for secondary lines and labels; every one clears 4.5:1 on every surface it can land on.

### Named Rules
**The Two Dials Rule.** Mode and theme are set once on the root; a rule below the tokens never asks which is on.

**The Accent Is An Action Rule.** `--accent` fills only things you tap; `--accent-text` is its readable twin for words. Crew and imposter colours mean sides, never emphasis.

**The Every Theme Declares Everything Rule.** A new theme declares every token in both modes; `src/ui/theme/theme.test.js` fails on a missing token, a contrast failure, or a chip unlike its theme.

## Typography

**Display Font:** the system sans stack (ui-sans-serif, system-ui, Segoe UI, Roboto), with Noto Sans Thai, IBM Plex Sans Thai, Sarabun, and Thonburi listed before the Latin fallbacks so Thai text gets a Thai face.
**Body Font:** the same stack.

**Character:** a plain system face used at heavy weights for names and light weights for reading; the hierarchy is carried by weight and tracking, not by a second family.

### Hierarchy
- **Display** (800, clamp(30px, 9vw, 46px), line-height 1.1, tracking −0.03em): the hero word on a card and the end-of-game screen.
- **Headline** (800, 30px, 1.15, −0.03em): screen titles.
- **Title** (700, clamp(19px, 5.2vw, 24px), 1.45): the question or prompt a screen asks.
- **Body** (400, 17px, 1.5): reading text, rules, explanations.
- **Label** (700, 12px, tracking 0.16em to 0.22em, uppercase or tabular): the room-code chip, section eyebrows, and the small action chips; the brand mark at 800 / 20px / −0.02em.

### Named Rules
**The Weight Does The Work Rule.** 800 names, 700 acts, 400 reads; size changes little between roles on a phone.

## Layout

A single centred column, 560px wide and 680px from 700px up, with the top bar (brand, spacer, room-code chip) pinned above it. Screens are stacks of cards with 18px internal padding and 8px to 24px gaps; controls fill the column width and stack vertically, because the player holds the phone in one hand. A short landscape phone (height under 520px) gets a tighter layout. Tap targets are 52px tall throughout.

## Elevation & Depth

A hybrid: surfaces step up tonally (bg, bg-soft, surface, surface-2) and carry a 1px hairline, and cards and floating elements get a soft shadow whose strength belongs to the mode, not the theme. Dark mode lifts a surface with white washes (`--overlay`, `--sheen`) and deeper shadows; light mode settles it with black washes and lighter shadows, and halves the glow because a glow on a pale page reads as a smudge.

### Shadow Vocabulary
- **Shadow** (`0 10px 30px rgb(0 0 0 / 0.45)` dark, `/ 0.1` light): floating panels and menus.
- **Card shadow** (`0 18px 45px rgb(0 0 0 / 0.35)` dark, `0 16px 40px rgb(0 0 0 / 0.1)` light): the hold card and the hero card.
- **Thumb shadow** (`0 2px 10px rgb(0 0 0 / 0.25)` dark, `0 2px 8px rgb(0 0 0 / 0.14)` light): segmented-control thumbs.

### Named Rules
**The Mode Owns The Shadow Rule.** Washes, hairlines, shadows, and glow are declared per mode and shared by every theme.

## Shapes

Round and soft: 18px card corners (`--radius`), 12px for small panels (`--radius-sm`), and full pills (999px) for every button, chip, and the room code. Borders are 1px hairlines in `--line`; nothing is square-cornered.

## Components

### Buttons
- **Shape:** pill (999px), 52px tall, 20px side padding, 700 weight, 8px gap to an icon.
- **Primary:** accent fill with on-accent text. **Default:** raised surface (`--surface-2`) with body text. **Ghost:** transparent with a hairline border and dim text. **Danger:** imposter red with on-imposter text.
- **Active:** scales to 0.975 over 80ms; **disabled:** 40% opacity.

### Cards
- **Corner Style:** 18px. **Background:** `--surface` with a 1px `--line` border. **Internal Padding:** 18px (24px for `.pad-lg`, none for `.flush`). The hold card (the private reveal) adds the card shadow and the accent hold ring.

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
- **Do** keep every tap target at 52px and the column at 560px (680px wide).
- **Do** give a new icon one motion that is what that object does, off by default.

### Don't:
- **Don't** use crew green or imposter red for emphasis; they mean sides.
- **Don't** let a rule below `tokens.css` test for the mode or the theme.
- **Don't** add a square corner, a second type family, or motion that carries meaning.
- **Don't** treat this file as the target for the overhaul: it is the baseline the overhaul replaces through Impeccable's new-work flow against PRODUCT.md.
