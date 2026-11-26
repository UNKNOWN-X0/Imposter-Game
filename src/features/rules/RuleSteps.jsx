/**
 * Numbered steps as a card each: an icon, a title and what happens.
 *
 * Shared by Imposter's rules, its first-run dialog and the hub's How it
 * works, so the steps look the same wherever they are read. Its own small
 * file so the first-run dialog does not pull a whole screen in with it.
 */

import { CardBackIcon, MessageIcon, TrophyIcon, VoteIcon } from '../../ui/icons/index.jsx';

/** Imposter's four steps: [icon, the n in rules.<n>.title / .body]. */
export const IMPOSTER_STEPS = [
  [CardBackIcon, 1],
  [MessageIcon, 2],
  [VoteIcon, 3],
  [TrophyIcon, 4],
];

/** @param steps [{ icon, title, body }] in order */
export function RuleSteps({ steps }) {
  return (
    <ol className="step-list">
      {steps.map(({ icon: Icon, title, body }) => (
        <li className="step-card" key={title}>
          <Icon size={22} />
          <b className="step-title">{title}</b>
          <span className="step-body">{body}</span>
        </li>
      ))}
    </ol>
  );
}

/** Imposter's steps, in the current language. */
export const imposterSteps = (t) =>
  IMPOSTER_STEPS.map(([icon, n]) => ({ icon, title: t(`rules.${n}.title`), body: t(`rules.${n}.body`) }));
