import { BrandMark, PhoneIcon, WifiIcon } from '../../ui/icons/index.jsx';
import { ThemePicker } from '../../ui/theme/ThemePicker.jsx';
import { LanguagePicker } from '../../i18n/LanguagePicker.jsx';
import { Credit } from '../rules/Credit.jsx';
import { useState } from 'react';
import { useErrorText, useT } from '../../i18n/index.jsx';
import { AddPlayerForm, SeatActions, useParty } from '../../party/index.js';
import { Banner } from '../../ui/primitives/index.js';
import { TableScene, chairsFor } from '../../ui/table/TableScene.jsx';
import { MAX_PLAYERS } from '../../core/rules.js';
import { defaultEmblem } from '../../ui/icons/emblems.js';

export function PartyHub({ children, onLocal, onOnline, onPacks, onRules, onNews, news, version }) {
  const { t } = useT();
  const errorText = useErrorText();
  // The party gathers here, before anyone picks a game; every game reads it.
  const party = useParty();
  const [picked, setPicked] = useState(null);
  const [problem, setProblem] = useState(null);
  const pickedName = party.names.includes(picked) ? picked : null;
  const taken = party.names.map((n) => party.emblems[n] ?? defaultEmblem(n));

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
              <TableScene
                // An empty table can be smaller on a phone; a seated one needs the room.
                className={party.names.length ? '' : 'hub-table-scene'}
                seated={party.names.map((name) => ({ key: name, name }))}
                chairs={chairsFor(party.names.length)}
                picked={pickedName}
                onPick={setPicked}
              >
                {party.names.length === 0 ? (
                  <>
                    <h2 id="hub-party-title">{t('hub.noParty')}</h2>
                    <p>{t('hub.noPartyBody')}</p>
                  </>
                ) : (
                  <h2 id="hub-party-title">{t('hub.seated', { count: party.names.length })}</h2>
                )}
              </TableScene>
              <div className="stack tight hub-seating">
                {pickedName && (
                  <SeatActions
                    player={{ id: pickedName, name: pickedName }}
                    onClose={() => setPicked(null)}
                    onRemove={(name) => {
                      party.remove(name);
                      setPicked(null);
                    }}
                  />
                )}
                {problem && <Banner kind="error">{errorText(problem)}</Banner>}
                <AddPlayerForm
                  taken={taken}
                  disabled={party.names.length >= MAX_PLAYERS}
                  onAdd={(name, emblem) => setProblem(party.add(name, emblem))}
                />
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
                  <h3>{t('game.imposter.name')}</h3>
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
