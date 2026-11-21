# Current interface audit · issue #13

2026-11-21. Two independent assessments: A judged rendered design without detector output; B collected deterministic detector/browser evidence. Scope: current hub, entry to local and room play, and the recorded screen inventory. This is evidence for replacement, not a claim that the new design is implemented.

## Assessment A
26/40 (acceptable; significant improvement needed), based on current hub and immediate entry flows. Scores: system status 2, real-world match 3, control/freedom 3, consistency 2, error prevention 3, recognition 3, efficiency 3, minimalism 2, recovery 2, help 3.

- **P1: Gathering has less visual emphasis than packs.** The library’s large colour field outranks the muted play modes. Make the table and next gathering action dominant; keep packs easy to reach.
- **P1: Entering play changes the visual world.** The hub’s rail and flat panels switch to a centred lobby with pills and softer cards. Carry the same material/type/control vocabulary across all screens.
- **P2: Phone entry is too tall.** On the inspected 390px viewport, brand/navigation take roughly 122px and introduction extends to y=323. Compress these so the table and mode actions lead.
- **P2: Empty state lacks a spatial gathering.** The page repeats “party/table” without showing a roster. Show honestly vacant places, with explicit text states and no invented joined players.
- **P2: Help precedes context.** First visit opens full rules before play-mode choice. Room absence is explained only after entering the room path. Make help contextual and room availability clear while retaining diagnostics.

Strengths to preserve: descriptive mode controls, readable layout in both modes, early language/display access, clear back paths, authored Imposter mark.

The legacy game frame is visible in the lobby, deals/private cards, clue/vote/result states and overlays: narrow centred column, softly rounded cards/pill actions and different elevation from the hub. Private-card handling must stay covered and should never become face-up tabletop decoration.

## Assessment B (initial evidence)
Hub screenshots at 390/1288/1440 in light/dark show no horizontal overflow and visible button/link heights at least 52px. Source detector: 17 findings (3 warnings, 14 advisories): bounce easing 6; radius drift 5; font size drift 2; font drift 2; side tab 1; colour drift 1. Findings are current implementation evidence; none is evidence against unbuilt tavern themes.

Browser overlay injection succeeded. Observed one-word final line “packs.” and the “Your table” label above “No party underway”. The successful local replay captured 63 reached states × six width/mode combinations (378 captures), including local play/languages, rules/library/news and icons/crash. Supplemental evidence covers nine settings/editor/join states × six, and the corrected room replay covers 13 host/guest states × six through the steal prompt. All reached states have the full width/mode matrix. Raw inventory contains 92 complete groups (including earlier fixture captures), plus initial phone and overlay captures: 621 PNGs. Capture-fixture routing/self-vote errors were corrected; neither was a production defect.

Coverage is reached screens, not every possible variant: import/share/delete errors, reconnect/host-transfer and every alternate online outcome were not exhaustively captured. The production verification independently passed both browser sweeps and all eight endings. Detector flags are contextual: report/share-code monospace and documented bounce curves are not automatically bugs. Overlay findings include redundant “Your table” hierarchy, a one-word final line and local-setup glow.

## Evidence locations
Current captures and detector output: `.impeccable/review/tavern-before/`. Mocks: this folder’s three interactive HTML files. Mock review: `.impeccable/review/tavern-mocks-review/` when available. Raw captures are local working evidence and are not player data or approved design assets.

## Decisions to make
The direction board compares three ways to express the requested rectangular table, each with a populated lobby, covered private card and voting/result. Choose a direction and confirm the five wood names before #14/#15. The audit’s recommendations are incorporated in that comparison; it does not request a separate change queue.

Questions skipped: delegated assessments; owner direction selection is collected by the issue #13 decision board.

## Independent mock verification
A separate reviewer from the producer checked the final files in Chromium: 180 combinations (three directions × 390/1440 × light/dark × EN/TH/DE × five screens), with ten seats. No horizontal overflow; all hubs empty; all private cards covered. It caught and rechecked a fixed desktop aspect-ratio error. Final table sizes were 344×392 overhead, 423×465 angled, 428×488 joinery, with seats along their long sides. Keyboard/click host→lobby→covered handoff→vote→result→empty hub passed for all three. Verdict: ready for owner comparison, with no material blocker in the reviewed mocks.

Producer checks additionally covered 180 mobile language/count and wood/mode/screen combinations, and WebKit ten-seat voting for all three. The independent review did not cover WebKit, screen readers, zoom, all wood previews or the static sketch companions. These checks establish illustrative feasibility, not implementation readiness or production privacy.

Baseline `npm run verify`: 446 tests, coverage floors, build, every screen, every ending all passed; nothing skipped. Production sources and fingerprint unchanged. Graph refresh is unnecessary: workspace refresh script excludes `.impeccable` working artifacts from freshness checks.
