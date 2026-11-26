/**
 * A game's How to play (#85). Today that is Imposter's: its four steps as
 * cards, the optional roles, and how to play it well.
 *
 * The screen is keyed by game (`rules:<id>` in App), so a second game adds
 * its own entry to RULES below rather than a branch through this one.
 */

import { Shell } from '../../ui/primitives/index.js';
import { useT } from '../../i18n/index.jsx';
import { SPECIAL_ROLES } from '../../core/engine.js';
import { RoleGlyph } from '../../ui/primitives/RoleGlyph.jsx';
import { Credit } from './Credit.jsx';
import { RuleSteps, imposterSteps } from './RuleSteps.jsx';

export { Credit } from './Credit.jsx';

function ImposterRules({ t }) {
  return (
    <>
      <RuleSteps steps={imposterSteps(t)} />

      <section className="settings-group stack tight">
        <h2 className="settings-group-title">{t('rules.roles.title')}</h2>
        <p className="hint">{t('rules.roles.lead')}</p>
        <div className="setting-list">
          {SPECIAL_ROLES.map((role) => (
            <div className="setting-row has-icon" key={role}>
              <RoleGlyph role={role} size={22} />
              <span className="setting-row-title">{t(`role.${role}`)}</span>
              <span className="setting-row-value">{t(`role.${role}Tip`)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="settings-group stack tight">
        <h2 className="settings-group-title">{t('rules.tips.title')}</h2>
        <p className="subtitle">{t('rules.tips.body')}</p>
      </section>
    </>
  );
}

const RULES = { imposter: { name: 'game.imposter.name', Body: ImposterRules } };

export function Rules({ game = 'imposter', onExit }) {
  const { t } = useT();
  const { name, Body } = RULES[game] ?? RULES.imposter;
  return (
    <Shell onBack={onExit} frame>
      <div className="stack tight">
        <h1 className="title">{t('rules.title')}</h1>
        <p className="subtitle">{t(name)}</p>
      </div>

      <Body t={t} />

      <button className="btn primary block lg" onClick={onExit}>
        {t('common.gotIt')}
      </button>

      <Credit />
    </Shell>
  );
}
