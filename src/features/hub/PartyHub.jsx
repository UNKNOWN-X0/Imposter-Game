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
      <div className="hub-main">
        <header className="hub-topbar">
          <a className="hub-brand" href="#hub-top" aria-label={t('app.name')}>
            <BrandMark size={40} animated={false} />
            <span>{t('app.name')}<small>{t('hub.brand')}</small></span>
          </a>
          <div className="hub-tools">
            <ThemePicker />
            <LanguagePicker />
          </div>
        </header>

        <main className="hub-content" aria-label={t('hub.nav.party')}>
          <section className="hub-intro">
            <h1>{t('home.headline')}</h1>
            <p>{t('hub.intro')}</p>
          </section>

          <div className="hub-layout">
            <section aria-labelledby="hub-party-title">
              <div className="hub-stage">
                <div className="hub-table" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, index) => <span className="hub-plank" key={index} />)}
                </div>
                <div className="hub-seats hub-seats-left" aria-hidden="true">
                  {[0, 1, 2].map((seat) => <span className="hub-seat" key={seat} />)}
                </div>
                <div className="hub-seats hub-seats-right" aria-hidden="true">
                  {[3, 4, 5].map((seat) => <span className="hub-seat" key={seat} />)}
                </div>
                <div className="hub-table-center">
                  <h2 id="hub-party-title">{t('hub.noParty')}</h2>
                  <p>{t('hub.noPartyBody')}</p>
                </div>
              </div>
            </section>

            <section className="hub-actions" aria-label={t('hub.navigation')}>
              <h2>{t('hub.table')}</h2>
              <div className="hub-mode-grid">
                <button className="hub-mode" onClick={onLocal}>
                  <PhoneIcon size={22} />
                  <span className="hub-mode-title">{t('home.local.title')}</span>
                  <span className="hub-supporting">{t('home.local.desc')}</span>
                </button>
                <button className="hub-mode" onClick={onOnline}>
                  <WifiIcon size={22} />
                  <span className="hub-mode-title">{t('home.online.title')}</span>
                  <span className="hub-supporting">{t('home.online.desc')}</span>
                </button>
              </div>
            </section>
          </div>

          <div className="hub-sections">
            <section className="hub-section" id="hub-games" aria-label={t('hub.nav.games')}>
              <div className="hub-section-heading">
                <h2>{t('hub.firstGame')}</h2>
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
              <div>
                <h2 id="hub-packs-title">{t('hub.packsTitle')}</h2>
                <p>{t('hub.packsDescription')}</p>
              </div>
              <button className="hub-primary-action" onClick={onPacks}>{t('home.packs')}</button>
            </section>
          </div>

          <footer className="hub-footer">
            <nav className="hub-footer-nav" aria-label={t('hub.navigation')}>
              <button className="hub-footer-link" onClick={onPacks}>{t('hub.nav.packs')}</button>
              <button className="hub-footer-link" onClick={onRules}>{t('home.rules')}</button>
              <button className="hub-footer-link" onClick={onNews}>
                {t('home.whatsNew', { version })}
                {news && <span className="hub-news-dot" aria-hidden="true" />}
              </button>
            </nav>
            <Credit />
          </footer>
        </main>
      </div>
    </div>
  );
}
