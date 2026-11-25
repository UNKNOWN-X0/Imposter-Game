/**
 * What can be done to the person in the seat that was tapped: today, only
 * asking them to leave. It sits under the table rather than on the seat, so
 * a full table of twelve on a phone still has room for a real button.
 */

import { useT } from '../../i18n/index.jsx';
import { Avatar } from '../../ui/primitives/Avatar.jsx';

export function SeatActions({ player, onRemove, onClose }) {
  const { t } = useT();
  if (!player) return null;
  return (
    <div className="seat-actions" role="group" aria-label={player.name}>
      <Avatar name={player.name} />
      <span className="seat-actions-name">{player.name}</span>
      <button type="button" className="btn" onClick={onClose}>
        {t('common.cancel')}
      </button>
      <button type="button" className="btn danger" onClick={() => onRemove(player.id)}>
        {t('lobby.removeSeat', { name: player.name })}
      </button>
    </div>
  );
}
