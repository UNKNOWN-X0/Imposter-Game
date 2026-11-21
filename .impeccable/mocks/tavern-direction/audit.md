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

Browser overlay injection succeeded. Observed one-word final line “packs.” and the “Your table” label above “No party underway”. Initial replay saved 60 intermediate phone states across local play/languages, rules/library/news, icons/crash without exceptions; broader width/mode captures are in progress. Room/editor/settings coverage must be checked against the final inventory before claiming every screen.

## Evidence locations
Current captures and detector output: `.impeccable/review/tavern-before/`. Mocks: this folder’s three interactive HTML files. Mock review: `.impeccable/review/tavern-mocks-review/` when available. Raw captures are local working evidence and are not player data or approved design assets.

## Decisions to make
The direction board compares three ways to express the requested rectangular table, each with a populated lobby, covered private card and voting/result. Choose a direction and confirm the five wood names before #14/#15. The audit’s recommendations are incorporated in that comparison; it does not request a separate change queue.

Questions skipped: delegated assessments; owner direction selection is collected by the issue #13 decision board.
