/**
 * The hub's How it works (#85): what The Long Table is, not any one game.
 *
 * Four steps of an evening, then the games (each opens its own How to
 * play), then what a room needs.
 */

import { Shell } from '../../ui/primitives/index.js';
import { useT } from '../../i18n/index.jsx';
import { BookIcon, GamesIcon, PhoneIcon, ServerIcon, UserPlusIcon } from '../../ui/icons/index.jsx';
import { GameMark } from '../../games/marks.jsx';
import { GAMES } from '../../games/index.js';
import { RuleSteps } from './RuleSteps.jsx';

const STEPS = [UserPlusIcon, PhoneIcon, GamesIcon, BookIcon];

export function HowItWorks({ onExit, onGame }) {
  const { t } = useT();
  return (
    <Shell onBack={onExit} frame>
      <div className="stack tight">
        <h1 className="title">{t('howto.title')}</h1>
        <p className="subtitle">{t('howto.sub')}</p>
      </div>

      <RuleSteps
        steps={STEPS.map((icon, i) => ({ icon, title: t(`howto.${i + 1}.title`), body: t(`howto.${i + 1}.body`) }))}
      />

      <section className="settings-group stack tight">
        <h2 className="settings-group-title">{t('howto.games')}</h2>
        {GAMES.map((game) => (
          <button type="button" className="hub-mode" key={game.id} onClick={() => onGame(game.id)}>
            <GameMark id={game.id} />
            <span className="hub-mode-title">{t(game.name)}</span>
            <span className="hub-supporting">{t('games.rules')}</span>
          </button>
        ))}
      </section>

      <section className="settings-group stack tight">
        <h2 className="settings-group-title">{t('howto.room.title')}</h2>
        <div className="step-card">
          <ServerIcon size={22} />
          <span className="step-body">{t('howto.room.body', { command: 'npm run party' })}</span>
        </div>
      </section>

      <button className="btn primary block lg" onClick={onExit}>
        {t('common.gotIt')}
      </button>
    </Shell>
  );
}
