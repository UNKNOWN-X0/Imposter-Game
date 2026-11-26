/**
 * Things to do and states to be in.
 */

import { useId } from 'react';

import { Icon } from './Icon.jsx';

/* ------------------------------------------------------------------ *
 * Actions and states
 * ------------------------------------------------------------------ */

/**
 * Pass the phone on: an open hand, held up.
 *
 * Four fingers and a thumb, which is what a hand has — an earlier version
 * showed three and looked wrong for a reason that was hard to place. The
 * long path runs from the little finger, around the palm and the thumb, and
 * back up the index finger, so the fingers sit side by side and no stroke is
 * drawn twice. On `anim` it waves from the wrist rather than sliding
 * sideways: a wave is what a hand does.
 */
export const PassIcon = (p) => (
  <Icon {...p}>
    <g className="hand">
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </g>
  </Icon>
);

/**
 * Watching: an open eye that blinks.
 *
 * The lash line sits closed over the eye and is invisible until the lid comes
 * down, so a blink is a real shut rather than the eye fading out.
 */
export const EyeIcon = (p) => (
  <Icon {...p}>
    <g className="eyes lid">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle className="pupils" cx="12" cy="12" r="3" />
    </g>
    <path className="eye-lash" d="M3 12h18" opacity="0" />
  </Icon>
);

/** Calling the word: a bell. On `anim` it rings. */
export const BellIcon = (p) => (
  <Icon {...p}>
    <g className="bell-body">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    </g>
    <path className="clapper" d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </Icon>
);

/** The last-word gamble: a die. On `anim` it rolls. */
export const DiceIcon = (p) => (
  <Icon {...p}>
    <g className="die">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <g className="pips">
        <path d="M16 8h.01M8 8h.01M8 16h.01M16 16h.01M12 12h.01" strokeWidth="2.6" />
      </g>
    </g>
  </Icon>
);

/** Caught: a target. On `anim` the rings close in. */
export const TargetIcon = (p) => (
  <Icon {...p}>
    <circle className="ring-out" cx="12" cy="12" r="10" />
    <circle className="ring-in" cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </Icon>
);

/**
 * A wrong call: a shield split by a crack.
 *
 * The crack used to stop short at both ends, which made it a lightning bolt
 * on a shield — the sign for power, not for damage. It now runs the full
 * height and breaks the outline at the top, so the shield reads as failed.
 */
export const BrokenIcon = (p) => (
  <Icon {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path className="crack" d="M12 3 10.8 7.6l2.2 2-1.8 3.6 1.6 2.4-1.2 4.2" />
  </Icon>
);

/** A split vote: a balanced scale. On `anim` it rocks and settles level. */
export const TieIcon = (p) => (
  <Icon {...p}>
    <path d="M12 3v18M7 21h10" />
    <g className="beam">
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    </g>
  </Icon>
);

/** Waiting on someone. On `anim` it turns over, the way you would turn one. */
export const HourglassIcon = (p) => (
  <Icon {...p}>
    <g className="glass">
      <path d="M5 22h14M5 2h14" />
      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </g>
  </Icon>
);

/** Nothing to see here. The eyes blink; on `anim` the face tilts. */
export const ShrugIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <g className="face">
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <path className="eyes" d="M9 9h.01M15 9h.01" strokeWidth="2.4" />
    </g>
  </Icon>
);

/**
 * A win. On `anim` a shine crosses the cup.
 *
 * The clip gets an id of its own per instance — two trophies on one page
 * sharing one id is the kind of thing that works until it does not.
 */
export function TrophyIcon(p) {
  const clip = `cup-${useId()}`;
  const cup = 'M18 2H6v7a6 6 0 0 0 12 0V2Z';
  return (
    <Icon {...p}>
      <defs>
        <clipPath id={clip}>
          <path d={cup} />
        </clipPath>
      </defs>
      <path d={cup} />
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <g clipPath={`url(#${clip})`}>
        <path className="shine" d="M2 14 10 2" strokeWidth="2.6" opacity="0" />
      </g>
    </Icon>
  );
}

/** Done. Draws itself on wherever it marks something finished. */
export const CheckIcon = (p) => (
  <Icon {...p}>
    <path className="draw-on" d="M20 6 9 17l-5-5" pathLength="1" />
  </Icon>
);

/**
 * Appearance: a disc half in shadow.
 *
 * The one drawing everybody already reads as light-and-dark. On `anim` the
 * shadow slides across, which is the switch itself.
 */
export const ContrastIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <path className="shade" d="M12 18a6 6 0 0 0 0-12v12z" fill="currentColor" />
  </Icon>
);

/** Adjust: three sliders, for the settings behind "Customize". Still. */
export const SlidersIcon = (p) => (
  <Icon {...p}>
    <path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4" />
  </Icon>
);

/** Made with AI: two sparkles, for the prompt that writes a pack. Still. */
export const SparklesIcon = (p) => (
  <Icon {...p}>
    <path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0l1.58 6.14a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96l-6.14 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z" />
    <path d="M20 3v4M22 5h-4" />
  </Icon>
);

/** What is this? Lucide's info: a ring with an i in it. Still. */
export const InfoIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" strokeWidth="2.6" />
  </Icon>
);

/** Add something. */
export const PlusIcon = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M12 5v14" />
  </Icon>
);

/** Edit what is already there. */
export const PencilIcon = (p) => (
  <Icon {...p}>
    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    <path d="m15 5 4 4" />
  </Icon>
);

export const ChevronLeftIcon = (p) => (
  <Icon {...p}>
    <path d="m15 18-6-6 6-6" />
  </Icon>
);

/** Language. On `anim` the meridian sweeps, so the globe turns. */
export const GlobeIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path className="meridian" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
  </Icon>
);

/** Copy. On `anim` the top sheet lifts, which is the whole gesture. */
export const CopyIcon = (p) => (
  <Icon {...p}>
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    <rect className="sheet" x="8" y="8" width="14" height="14" rx="2" />
  </Icon>
);

/** One phone, passed around. */
export const PhoneIcon = (p) => (
  <Icon {...p}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M12 18h.01" strokeWidth="2.4" />
  </Icon>
);

/** A phone each, over the same wifi. On `anim` the arcs go out in turn. */
export const WifiIcon = (p) => (
  <Icon {...p}>
    <path className="arc-3" d="M2 8.82a15 15 0 0 1 20 0" />
    <path className="arc-2" d="M5 12.859a10 10 0 0 1 14 0" />
    <path className="arc-1" d="M8.5 16.429a5 5 0 0 1 7 0" />
    <path d="M12 20h.01" strokeWidth="2.4" />
  </Icon>
);
