/**
 * What there is to choose from.
 *
 * Plain JavaScript, apart from the React that uses it, so the tests can read
 * it — and because the list of themes is data, not behaviour.
 *
 * The palettes themselves live in styles/tokens.css. What is here is the menu: which themes exist,
 * and the two colours each one shows on its chip in the picker.
 */

/** What the reader can choose. `system` resolves to one of the other two. */
export const MODES = ['system', 'light', 'dark'];

/** `dark` and `light` are [wood surface, the wood's own action accent] — the theme in two colours. */
export const THEMES = [
  { id: 'birch', dark: ['#383429', '#db9e25'], light: ['#e9dfca', '#865a18'] },
  { id: 'oak', dark: ['#373126', '#d9ac27'], light: ['#e7d6b7', '#7d5714'] },
  { id: 'teak', dark: ['#3d2c1c', '#e3801d'], light: ['#e7ca99', '#884711'] },
  { id: 'mahogany', dark: ['#3a2822', '#e0753f'], light: ['#e7c9bb', '#963d1a'] },
  { id: 'walnut', dark: ['#382b24', '#c69c3a'], light: ['#ddcbb4', '#765022'] },
];

export const DEFAULT_THEME = 'oak';
export const DEFAULT_MODE = 'system';

export const resolveTheme = (saved) =>
  THEMES.some((theme) => theme.id === saved) ? saved : DEFAULT_THEME;
