/**
 * The room before the deal. Everybody watches; only the host decides.
 */

import { useState } from 'react';
import { MAX_PLAYERS, MIN_PLAYERS } from '../../../core/engine.js';
import { TableScene, chairsFor } from '../../../ui/table/TableScene.jsx';
import { ActionBar } from '../../../ui/primitives/ActionBar.jsx';
import { useWords } from '../../../features/packs/useWords.js';
import { useT } from '../../../i18n/index.jsx';
import { LobbyHint, Scoreboard, SeatActions, Settings, WinValues } from '../../../features/lobby/index.js';

/* ------------------------------------------------------------------ */

export function OnlineLobby({ payload, act, myPacks = [], onEditPack, onBrowsePacks }) {
  const { t } = useT();
  const { state, isHost, you, code } = payload;
  // The words are fetched per language. The server is the one that deals, so
  // this is not about the deal working — it is about the settings panel
  // showing real pack names and counts rather than an empty shelf.
  const haveWords = useWords(state.config.wordLang);
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const ready = state.players.length >= MIN_PLAYERS;
  // Only the host can ask someone to leave, and never themselves.
  const [picked, setPicked] = useState(null);
  const pickedPlayer = isHost ? state.players.find((p) => p.id === picked && p.id !== payload.hostId) : null;

  return (
    <div className="stack">
      <div className="card center stack tight">
        <div className="eyebrow">{t('room.code')}</div>
        <div className="big-word code-word">{code}</div>
        <p className="hint">
          {t('room.howTo', { host: origin.replace(/^https?:\/\//, '') })}
        </p>
      </div>

      <TableScene
        seated={state.players.map((p) => ({
          key: p.id,
          name: p.name,
          host: p.id === payload.hostId,
          you: p.id === you,
          away: payload.seats?.away?.includes(p.id),
        }))}
        chairs={chairsFor(state.players.length, MAX_PLAYERS)}
        picked={pickedPlayer ? picked : null}
        onPick={isHost ? (id) => setPicked(id === payload.hostId ? null : id) : undefined}
      >
        <LobbyHint count={state.players.length} />
      </TableScene>

      {pickedPlayer && (
        <SeatActions
          player={pickedPlayer}
          onClose={() => setPicked(null)}
          onRemove={(id) => {
            act({ type: 'REMOVE_PLAYER', playerId: id });
            setPicked(null);
          }}
        />
      )}
      {isHost && !pickedPlayer && state.players.length > 1 && (
        <p className="hint center">{t('lobby.pickSeat')}</p>
      )}

      {isHost ? (
        <ActionBar>
          <button
            className="btn primary block lg"
            disabled={!ready || !haveWords}
            onClick={() => act({ type: 'START_GAME' })}
          >
            {haveWords ? t('lobby.deal') : t('lobby.fetchingWords')}
          </button>
        </ActionBar>
      ) : (
        <p className="hint center dots">{t('room.waitingHost')}</p>
      )}

      {/* Everybody watches the scoreboard; only the host can wipe it. */}
      {state.config.scoring && (
        <Scoreboard
          players={state.players}
          scores={state.scores}
          onClear={isHost ? () => act({ type: 'CLEAR_SCORES' }) : undefined}
        />
      )}

      {state.config.scoring && <WinValues />}

      {isHost && (
        <>
          <h2 className="section-title">{t('lobby.settings')}</h2>
          <Settings
            config={state.config}
            playerCount={state.players.length}
            customPacks={myPacks}
            onEditPack={onEditPack}
            onBrowsePacks={onBrowsePacks}
            onChange={(config) => act({ type: 'SET_CONFIG', config })}
          />
        </>
      )}
    </div>
  );
}
