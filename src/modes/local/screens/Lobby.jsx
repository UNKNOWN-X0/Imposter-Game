/**
 * Before the cards go out: who is here, what the night has cost so far, and
 * every setting the table can change.
 */

import { MAX_PLAYERS, MIN_PLAYERS } from '../../../core/engine.js';
import { useT } from '../../../i18n/index.jsx';
import { AddPlayerForm, LobbyHint, PlayerList, Scoreboard, Settings, WinValues } from '../../../features/lobby/index.js';
import { useWords } from '../../../features/packs/useWords.js';
import { TableScene, chairsFor } from '../../../ui/table/TableScene.jsx';
import { defaultEmblem } from '../../../ui/icons/emblems.js';

/* ------------------------------------------------------------------ *
 * Lobby
 * ------------------------------------------------------------------ */

export function Lobby({ state, run, emblems = {}, onSeat, onEditPack, onBrowsePacks }) {
  const { t } = useT();
  // The words for this language are fetched rather than bundled, so a table
  // that has just switched language waits a moment. Almost always already
  // true by the time anybody has finished typing in names.
  const haveWords = useWords(state.config.wordLang);
  const ready = state.players.length >= MIN_PLAYERS && haveWords;
  const taken = state.players.map((p) => emblems[p.name] ?? defaultEmblem(p.name));
  const add = (name, emblem) => {
    // The reducer turns away a name already at the table; the emblem must not
    // quietly move to that person either.
    const known = state.players.some((p) => p.name.toLowerCase() === name.toLowerCase());
    if (!known && state.players.length < MAX_PLAYERS && emblem) onSeat?.(name, emblem);
    run({ type: 'ADD_PLAYER', name });
  };
  return (
    <div className="stack">
      <div className="stack tight">
        <h1 className="title">{t('lobby.title')}</h1>
        <p className="subtitle">{t('lobby.sub')}</p>
      </div>

      <TableScene
        seated={state.players.map((p) => ({ key: p.id, name: p.name }))}
        chairs={chairsFor(state.players.length, MAX_PLAYERS)}
      >
        <LobbyHint count={state.players.length} />
      </TableScene>

      <AddPlayerForm onAdd={add} taken={taken} disabled={state.players.length >= MAX_PLAYERS} />

      <PlayerList
        players={state.players}
        onRemove={(id) => run({ type: 'REMOVE_PLAYER', playerId: id })}
      />

      {state.config.scoring && (
        <Scoreboard
          players={state.players}
          scores={state.scores}
          onClear={() => run({ type: 'CLEAR_SCORES' })}
        />
      )}

      {state.config.scoring && <WinValues />}

      <Settings
        config={state.config}
        playerCount={state.players.length}
        customPacks={state.customPacks}
        onEditPack={onEditPack}
        onBrowsePacks={onBrowsePacks}
        onChange={(config) => run({ type: 'SET_CONFIG', config })}
      />

      <button
        className="btn primary block lg"
        disabled={!ready}
        onClick={() => run({ type: 'START_GAME' })}
      >
        {haveWords ? t('lobby.deal') : t('lobby.fetchingWords')}
      </button>
    </div>
  );
}
