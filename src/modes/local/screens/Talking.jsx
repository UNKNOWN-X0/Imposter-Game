/**
 * Clues are spoken out loud rather than typed — the phone keeps track of
 * whose turn it is, and offers an imposter the chance to call the word.
 */

import { useEffect, useState } from 'react';
import { alivePlayers, isImposter, playerById, speakingOrder } from '../../../core/engine.js';
import { useT } from '../../../i18n/index.jsx';
import { TableScene } from '../../../ui/table/TableScene.jsx';
import { CallButton, CallPanel, NotTheImposter, PassGate, Timer, TurnOrder, VoteGrid, roundLabel } from '../../../features/round/index.js';
import { PackChip } from '../../../features/packs/index.js';
import { usePrivacyGate } from '../usePrivacyGate.js';

/* ------------------------------------------------------------------ *
 * Talking — clues are spoken out loud, not typed
 * ------------------------------------------------------------------ */

export function Talking({ state, run }) {
  const { t } = useT();
  const order = speakingOrder(state);
  // null -> playing, 'who' -> picking who is calling, then that player's id
  const [calling, setCalling] = useState(null);
  // Whose turn it is to speak. Only this screen needs to know, so it is not
  // in the game state: the rules do not care who has spoken, the table does.
  const [turn, setTurn] = useState(0);
  useEffect(() => setTurn(0), [state.round]);
  const current = order[Math.min(turn, order.length - 1)];
  const last = turn >= order.length - 1;
  const nextUp = playerById(state, order[turn + 1]);

  if (calling === 'who') {
    return (
      <div className="stack">
        <div className="stack tight">
          <h1 className="title">{t('call.who')}</h1>
          <p className="subtitle">{t('call.sub')}</p>
        </div>
        <VoteGrid players={alivePlayers(state)} onVote={(id) => setCalling(id)} />
        <button className="btn-link" onClick={() => setCalling(null)}>
          {t('call.back')}
        </button>
      </div>
    );
  }

  if (calling) {
    return (
      <CallOnOnePhone
        state={state}
        playerId={calling}
        onCall={(text) => run({ type: 'CALL_WORD', playerId: calling, text })}
        onCancel={() => setCalling(null)}
      />
    );
  }

  return (
    <div className="stack">
      <div className="stack tight">
        <div className="eyebrow row-eyebrow">
          {roundLabel(t, state.round, state.config.maxRounds)}
          <PackChip
            lang={state.config.wordLang}
            packId={state.packId}
            customPacks={state.customPacks}
          />
        </div>
        <h1 className="title">{t('clues.title')}</h1>
        <p className="subtitle">{state.round > 1 ? t('clues.oneMore') : t('clues.sub')}</p>
      </div>

      <TableScene
        seated={state.players.map((p) => ({
          key: p.id,
          name: p.name,
          speaking: p.id === current,
          out: state.eliminated.includes(p.id),
        }))}
        // A round in play: one chair each, and no open seat to invite anyone to.
        chairs={state.players.length}
      />

      <div className="card stack tight">
        <div className="eyebrow">{t('clues.order')}</div>
        <TurnOrder order={order} players={state.players} current={current} done={order.slice(0, turn)} />
      </div>

      <Timer seconds={90} />

      {/* Until the last clue, the big button moves the turn on; the vote is
          still one tap away for a table that is done early. */}
      {!last && nextUp && (
        <button className="btn primary block lg" onClick={() => setTurn((n) => n + 1)}>
          {t('clues.next', { name: nextUp.name })}
        </button>
      )}
      <button
        className={`btn block${last ? ' primary lg' : ''}`}
        onClick={() => run({ type: 'FORCE_VOTE' })}
      >
        {t('clues.everyoneSpoke')}
      </button>

      {state.config.allowCall && <CallButton onClick={() => setCalling('who')} />}
    </div>
  );
}

/**
 * Calling the word on a shared phone.
 *
 * Anyone can tap the button, so the phone has to be handed over behind a gate
 * before it says anything. A crew member who taps it is told nothing useful —
 * otherwise the error itself would reveal that they are crew.
 */
function CallOnOnePhone({ state, playerId, onCall, onCancel }) {
  const [holding, setHolding] = useState(false);
  usePrivacyGate(setHolding);
  const player = playerById(state, playerId);

  if (!holding) {
    return (
      <div className="stack">
        <PassGate name={player.name} onReady={() => setHolding(true)} />
        <button className="btn-link" onClick={onCancel}>
          ‹
        </button>
      </div>
    );
  }

  if (!isImposter(state, playerId)) return <NotTheImposter onBack={onCancel} />;

  return <CallPanel onCall={onCall} onCancel={onCancel} />;
}
