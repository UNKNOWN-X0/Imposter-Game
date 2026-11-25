/**
 * Pick a game.
 *
 * Reached from a mode on the hub (owner, 2026-11-25, issue #51): who is
 * playing, then how, then which game. It lists the games that can be played
 * that way, checks each one's player range against the people seated, and
 * opens the chosen game. In a room, somebody holding a code skips the choice:
 * the host already made it.
 */

import { gamesFor } from '../../games/index.js';
import { useT } from '../../i18n/index.jsx';
import { useParty } from '../../party/index.js';
import { BrandMark } from '../../ui/icons/index.jsx';
import { Shell } from '../../ui/primitives/index.js';

// Each game's mark. A catalog entry is plain data; its picture lives here.
const MARKS = { imposter: () => <BrandMark size={44} animated={false} /> };

export function GameLibrary({ mode, onPick, onJoin, onRules, onBack }) {
  const { t } = useT();
  const party = useParty();
  const seated = party.names.length;
  const games = gamesFor(mode);

  return (
    <Shell onBack={onBack} frame>
      <div className="stack tight">
        <h1 className="title">{t('games.title')}</h1>
        <p className="subtitle">{t(mode === 'local' ? 'games.subLocal' : 'games.subRoom')}</p>
      </div>

      {mode === 'room' && onJoin && (
        <button className="btn block" onClick={onJoin}>
          {t('games.haveCode')}
        </button>
      )}

      <ul className="game-list">
        {games.map((g) => {
          const Mark = MARKS[g.id];
          const short = mode === 'local' && seated < g.minPlayers;
          return (
            <li key={g.id} className="game-card card">
              <div className="game-card-head">
                {Mark && <Mark />}
                <div className="stack tight">
                  <h2>{t(g.name)}</h2>
                  <p className="hint">{t('games.players', { min: g.minPlayers, max: g.maxPlayers })}</p>
                </div>
              </div>
              <p>{t(g.pitch)}</p>
              {short && (
                <p className="hint">{t('games.needs', { min: g.minPlayers, count: seated })}</p>
              )}
              <div className="row">
                <button className="btn" onClick={() => onRules(g.id)}>
                  {t('games.rules')}
                </button>
                <button className="btn primary grow" onClick={() => onPick(g.id)}>
                  {t('games.play', { name: t(g.name) })}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </Shell>
  );
}
