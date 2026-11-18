import { useEffect } from 'react';

/** Cover the current player's private screen when the shared phone leaves the game. */
export function usePrivacyGate(setHolding) {
  useEffect(() => {
    const conceal = () => setHolding(false);
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') conceal();
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pagehide', conceal);
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pagehide', conceal);
    };
  }, [setHolding]);
}
