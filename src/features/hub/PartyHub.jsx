import { BrandMark, PhoneIcon, WifiIcon } from '../../ui/icons/index.jsx';
import { ThemePicker } from '../../ui/theme/ThemePicker.jsx';
import { LanguagePicker } from '../../i18n/LanguagePicker.jsx';
import { Credit } from '../rules/Credit.jsx';
import { useT } from '../../i18n/index.jsx';

export function PartyHub({ children, onLocal, onOnline, onPacks, onRules, onNews, news, version }) {
  const { t } = useT();

  return (
    <div className="hub-page" id="hub-top">
      {children}
      <aside className="hub-sidebar">
        <div className="hub-brand">{t('hub.brand')}</div>
        <nav className="hub-nav" aria-label={t('hub.navigation')}>
          <a className="hub-nav-link is-current" href="#hub-top" aria-current="page">
            {t('hub.nav.party')}
          </a>
          <a className="hub-nav-link" href="#hub-games">{t('hub.nav.games')}</a>
          <button className="hub-nav-link" onClick={onPacks}>{t('hub.nav.packs')}</button>
        </nav>
      </aside>

      <main className="hub-main">
        <header className="hub-topbar">
          <span>{t('hub.nav.party')}</span>
          <div className="hub-tools">
            <ThemePicker />
            <LanguagePicker />
          </div>
        </header>

        <div className="hub-content">
          <section className="hub-intro">
            <h1>{t('home.headline')}</h1>
            <p>{t('home.sub')}</p>
          </section>

          <section className="hub-party" aria-labelledby="hub-party-title">
            <span className="hub-party-tab">{t('hub.table')}</span>
            <h2 id="hub-party-title">{t('hub.noParty')}</h2>
            <p className="hub-supporting">{t('hub.noPartyBody')}</p>
            <div className="hub-mode-grid">
              <button className="hub-mode" onClick={onLocal}>
                <PhoneIcon size={24} />
                <span className="hub-mode-title">{t('home.local.title')}</span>
                <span className="hub-supporting">{t('home.local.desc')}</span>
              </button>
              <button className="hub-mode" onClick={onOnline}>
                <WifiIcon size={24} />
                <span className="hub-mode-title">{t('home.online.title')}</span>
                <span className="hub-supporting">{t('home.online.desc')}</span>
              </button>
            </div>
          </section>

          <div className="hub-sections">
            <section className="hub-section" id="hub-games" aria-labelledby="hub-first-game-title">
              <div className="hub-section-heading">
                <h2 id="hub-first-game-title">{t('hub.firstGame')}</h2>
                <button className="hub-text-action" onClick={onRules}>{t('home.rules')}</button>
              </div>
              <div className="hub-game-row">
                <BrandMark size={44} animated={false} />
                <div>
                  <h3>{t('app.name')}</h3>
                  <p className="hub-supporting">{t('hub.gameDescription')}</p>
                </div>
              </div>
            </section>

            <section className="hub-library-panel" aria-labelledby="hub-packs-title">
              <h2 id="hub-packs-title">{t('hub.packsTitle')}</h2>
              <p>{t('hub.packsDescription')}</p>
              <button className="hub-primary-action" onClick={onPacks}>{t('home.packs')}</button>
            </section>
          </div>

          <footer className="hub-footer">
            <button className="hub-footer-link" onClick={onRules}>{t('home.rules')}</button>
            <button className="hub-footer-link" onClick={onNews}>
              {t('home.whatsNew', { version })}
              {news && <span className="hub-news-dot" aria-hidden="true" />}
            </button>
            <Credit />
          </footer>
        </div>
      </main>
    </div>
  );
}
