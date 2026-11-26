import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import { Crash } from './features/dev/Crash.jsx';
import LocalGame from './modes/local/LocalGame.jsx';
import OnlineGame from './modes/online/OnlineGame.jsx';
import { loadSession } from './modes/online/useRoom.js';
import { hasSavedGame } from './modes/local/storage.js';
import { Shell } from './ui/primitives/index.js';
import { VERSION, hasNews } from './content/history/changelog.js';
import { FirstRun } from './features/rules/FirstRun.jsx';
import { PartyHub } from './features/hub/PartyHub.jsx';
import { GameLibrary } from './features/library/GameLibrary.jsx';
import { gameById } from './games/index.js';

import { Rules } from './features/rules/Rules.jsx';
import { HowItWorks } from './features/rules/HowItWorks.jsx';
import { Library } from './features/packs/Library.jsx';
import Changelog from './features/changelog/Changelog.jsx';

/**
 * The two workbenches, fetched only if somebody asks for them.
 *
 * These are the only screens here that a player never opens: both are
 * reached by typing a hash on the end of the address and nothing links to
 * either. The translator's board also pulls in every language, which would
 * undo the splitting that stops a phone fetching languages nobody reads.
 *
 * The rules, the pack shelf and the list of what changed are NOT lazy, and
 * that is a measurement rather than an oversight. Making all five lazy moved
 * 2.1 kB gzipped off the first load and turned 6 requests into 11 — and five
 * more round-trips on a cold connection cost more than two kilobytes save.
 * They are thin screens over components the lobby already needs, so there
 * was very little of them to move.
 */
const IconBoard = lazy(() => import('./features/dev/IconBoard.jsx'));
const StringBoard = lazy(() => import('./features/dev/StringBoard.jsx'));

// Imposter's own: whether this phone has seen how Imposter is played.
const SEEN_KEY = 'imposter.seenRules';
const VERSION_KEY = 'imposter.seenVersion';
export const LIB_LANG_KEY = 'imposter.libraryLang';

export const read = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null; // private browsing: nothing is remembered, and that is fine
  }
};

export const write = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private browsing */
  }
};

/** Reads `#join=ABCD` so a room can be shared as a link, not just a code. */
function readHash() {
  const match = /(?:^|[#&])join=([A-Za-z0-9]{4,12})/.exec(window.location.hash || '');
  return match ? match[1].toUpperCase() : '';
}

export default function App() {
  const [screen, setScreen] = useState(() => {
    // `#icons` opens the icon sheet. Nothing links to it; it is for whoever
    // is drawing the icons, not for anyone playing.
    if (/(?:^|[#&])icons\b/.test(window.location.hash || '')) return 'icons';
    // `#strings` opens the translator's board, for the same kind of reader.
    if (/(?:^|[#&])strings\b/.test(window.location.hash || '')) return 'strings';
    // `#crash` breaks on purpose, to see the error screen without waiting
    // for a bug. Nothing links to it.
    if (/(?:^|[#&])crash\b/.test(window.location.hash || '')) return 'crash';
    if (readHash()) return 'online';
    if (loadSession()) return 'online';
    // A game this phone was in the middle of. The room comes first — that one
    // is live and other people are in it — but otherwise a reload during a
    // round should land back in the round, where it can be offered back,
    // rather than on a home screen that has forgotten the whole evening.
    if (hasSavedGame()) return 'local';
    return 'home';
  });
  const [joinCode] = useState(readHash);
  // Somebody arriving on a join link is being waved into a game that is
  // already happening; the rules can wait until they are in it.
  const [showRules, setShowRules] = useState(() => !read(SEEN_KEY) && !readHash());
  // What they had last time, kept for the whole visit so the What's new
  // screen can still mark which releases are new to them — and, separately,
  // whether the badge is lit, which opening the screen puts out.
  const [seenVersion, setSeenVersion] = useState(() => read(VERSION_KEY));
  const [news, setNews] = useState(() => hasNews(read(VERSION_KEY)));

  const closeRules = useCallback(() => {
    setShowRules(false);
    write(SEEN_KEY, '1');
  }, []);

  // A first visit has not missed anything, so this version is what they have
  // seen. Without this stamp the badge would never appear for them again.
  useEffect(() => {
    if (!read(VERSION_KEY)) {
      write(VERSION_KEY, VERSION);
      setSeenVersion(VERSION);
    }
  }, []);

  const openNews = () => {
    // Opening it is reading it. The badge has to go out now rather than on
    // the next reload, or it looks like the tap did not land.
    write(VERSION_KEY, VERSION);
    setNews(false);
    open('changelog');
  };

  // Keep the browser's back button meaningful instead of leaving the site:
  // it returns to the screen that opened this one, such as the game library
  // that opened the rules, or the hub when nothing was saved.
  useEffect(() => {
    const onPop = (e) => {
      setScreen(e.state?.screen ?? 'home');
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // A new screen starts at its top. Without this, a link at the foot of the
  // hub opened the rules or the changelog already scrolled halfway down.
  const toTop = () => window.scrollTo(0, 0);

  const open = (next) => {
    window.history.pushState({ screen: next }, '');
    setScreen(next);
    toTop();
  };

  const home = () => {
    setScreen('home');
    toTop();
    // Mark this entry as the hub, so a later screen's back lands here rather
    // than on whatever this entry was before (and drop any join link).
    window.history.replaceState({ screen: 'home' }, '', window.location.pathname);
  };

  // Back to whatever opened this screen. The rules open from the hub and
  // from a game's card in the library; "Got it" must land where they came
  // from, not always on the hub.
  const back = () => {
    if (window.history.state?.screen === screen) window.history.back();
    else home();
  };

  // One shell for every screen that has to be fetched first. The wait is a
  // few milliseconds on a phone that is already here; the fallback exists
  // for the one that is not.
  const fetched = (child) => (
    <Suspense fallback={<Shell onBack={home} />}>{child}</Suspense>
  );

  if (screen === 'crash') return <Crash />;
  // A game's rules show the first time that game is opened, over its own
  // lobby, not over the hub before anyone has chosen a game (#53). The key
  // is the game's own, so the next game has one of its own.
  const firstRules = showRules ? <FirstRun onClose={closeRules} /> : null;
  if (screen === 'local') return <><LocalGame onExit={home} />{firstRules}</>;
  if (screen === 'online') return <><OnlineGame onExit={home} initialCode={joinCode} />{firstRules}</>;
  if (screen === 'icons') return fetched(<IconBoard />);
  if (screen === 'strings') return fetched(<StringBoard />);
  // A game's own How to play is `rules:<game>`; the hub's is `howto` (#85).
  if (screen.startsWith('rules')) return <Rules game={screen.split(':')[1]} onExit={back} />;
  if (screen === 'howto') return <HowItWorks onExit={back} onGame={(id) => open(`rules:${id}`)} />;
  if (screen === 'packs') return <Library onExit={home} />;
  // Who is playing, then how, then which game (#51).
  if (screen === 'library-local' || screen === 'library-room') {
    const mode = screen === 'library-local' ? 'local' : 'room';
    return (
      <GameLibrary
        mode={mode}
        onBack={home}
        onRules={(id) => open(`rules:${id}`)}
        onJoin={() => open('online')}
        onPick={(id) => open(gameById(id).screen[mode])}
      />
    );
  }
  if (screen === 'changelog') return <Changelog onExit={home} seen={seenVersion} />;

  return (
    <PartyHub
      onLocal={() => open('library-local')}
      onOnline={() => open('library-room')}
      onPacks={() => open('packs')}
      onRules={() => open('howto')}
      onNews={openNews}
      news={news}
      version={VERSION}
    />
  );
}
