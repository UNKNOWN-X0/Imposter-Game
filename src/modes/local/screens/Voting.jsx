/**
 * Two ways to vote around one table: a show of hands that somebody taps in,
 * or the phone passed around so nobody sees anybody else's choice.
 */

import { useState } from 'react';
import { alivePlayers } from '../../../core/engine.js';
import { useT } from '../../../i18n/index.jsx';
import { ConfirmBar, PassGate, VoteGrid } from '../../../features/round/index.js';
import { TableScene } from '../../../ui/table/TableScene.jsx';
import { usePrivacyGate } from '../usePrivacyGate.js';

/* ------------------------------------------------------------------ *
 * Voting — by hands, or by passing the phone
 * ------------------------------------------------------------------ */

export function Voting({ state, run }) {
  const { t } = useT();
  const [mode, setMode] = useState('hands');
  const alive = alivePlayers(state);

  if (mode === 'secret')
    return <SecretVote state={state} run={run} onCancel={() => setMode('hands')} />;

  // What the table chose, waiting for the confirm: a player's id, 'nobody',
  // or null. One tap never decides anything here.
  const [picked, setPicked] = useState(null);
  const pickedPlayer = alive.find((p) => p.id === picked);

  return (
    <div className="stack">
      <div className="stack tight">
        <h1 className="title">{t('vote.title')}</h1>
        <p className="subtitle">{t('vote.handsSub')}</p>
      </div>

      <TableScene
        seated={state.players.map((p) => ({
          key: p.id,
          name: p.name,
          out: state.eliminated.includes(p.id),
        }))}
        chairs={state.players.length}
        picked={pickedPlayer ? picked : null}
        onPick={setPicked}
      />

      {pickedPlayer || picked === 'nobody' ? (
        <ConfirmBar
          label={pickedPlayer ? t('vote.confirmOut', { name: pickedPlayer.name }) : t('vote.confirmNobody')}
          onConfirm={() => {
            setPicked(null);
            run({ type: 'DECLARE_ELIMINATION', playerId: pickedPlayer ? pickedPlayer.id : null });
          }}
          onCancel={() => setPicked(null)}
        />
      ) : (
        <>
          <p className="hint center">{t('vote.tapSeat')}</p>
          <button className="btn ghost block" onClick={() => setPicked('nobody')}>
            {t('vote.nobody')}
          </button>
        </>
      )}

      <button className="btn-link" onClick={() => setMode('secret')}>
        {t('vote.secretLink')}
      </button>
    </div>
  );
}

function SecretVote({ state, run, onCancel }) {
  const { t } = useT();
  const [holding, setHolding] = useState(false);
  usePrivacyGate(setHolding);
  const alive = alivePlayers(state);
  const voter = alive.find((p) => !(p.id in state.votes));

  // The last vote resolves the round, so this screen simply disappears.
  if (!voter) return null;

  if (!holding) {
    return (
      <div className="stack">
        <PassGate
          name={voter.name}
          onReady={() => setHolding(true)}
          note={t('vote.yourVote')}
        />
        <p className="hint center">
          {t('vote.votesIn', { done: Object.keys(state.votes).length, total: alive.length })}
        </p>
        <button className="btn-link" onClick={onCancel}>
          {t('vote.backToHands')}
        </button>
      </div>
    );
  }

  return (
    <div className="stack">
      <div className="stack tight">
        <div className="eyebrow">{voter.name}</div>
        <h1 className="title">{t('vote.whoSuspect')}</h1>
      </div>
      <VoteGrid
        players={alive}
        eliminated={state.eliminated}
        youId={voter.id}
        confirmLabel={(name) => t('vote.confirmMine', { name })}
        onVote={(id) => {
          setHolding(false);
          run({ type: 'CAST_VOTE', voterId: voter.id, targetId: id });
        }}
      />
    </div>
  );
}
