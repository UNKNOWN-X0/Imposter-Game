/**
 * Whose card is next, at a glance from across the table (#110).
 *
 * Everyone's emblem in the order the phone goes round: the next player's is
 * lifted and ringed, those who have looked are dimmed with a tick. On the
 * first hand-over of a round the emblems are dealt in one after another.
 */

import { Avatar } from '../../ui/primitives/Avatar.jsx';
import { CheckIcon } from '../../ui/icons/index.jsx';
import { useT } from '../../i18n/index.jsx';

export function DealStrip({ players, revealed = [], current }) {
  const { t } = useT();
  return (
    <ol className={`deal-strip${revealed.length === 0 ? ' dealing' : ''}`} aria-label={t('reveal.order')}>
      {players.map((p, i) => {
        const done = revealed.includes(p.id);
        const now = p.id === current;
        return (
          <li
            key={p.id}
            className={`deal-seat${done ? ' done' : ''}${now ? ' now' : ''}`}
            style={{ '--i': i }}
            aria-current={now ? 'step' : undefined}
          >
            <Avatar name={p.name} size={34} dim={done} />
            {done && (
              <span className="deal-tick" aria-hidden="true">
                <CheckIcon size={11} />
              </span>
            )}
            <span className="sr-only">{p.name}</span>
          </li>
        );
      })}
    </ol>
  );
}
