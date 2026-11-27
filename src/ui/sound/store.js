/**
 * Whether this phone plays sounds (#118). Off until somebody turns it on:
 * party games are often played in quiet rooms, and nobody should be startled.
 * Per device, never a game setting, like the display and the language.
 */

export const SOUND_KEY = 'imposter.sound';

export function loadSound(storage = globalThis.localStorage) {
  try {
    return storage?.getItem(SOUND_KEY) === 'on';
  } catch {
    return false;
  }
}

export function saveSound(on, storage = globalThis.localStorage) {
  try {
    storage?.setItem(SOUND_KEY, on ? 'on' : 'off');
  } catch {
    /* private mode: it lasts as long as the page */
  }
}
