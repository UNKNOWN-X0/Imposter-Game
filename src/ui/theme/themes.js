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

/** `dark` and `light` are [wood surface, action accent] — the theme in two colours. */
export const THEMES = [
  { id: 'birch', dark: ['#383429', '#91c5ff'], light: ['#e9dfca', '#1d568b'] },
  { id: 'oak', dark: ['#373126', '#91c5ff'], light: ['#e7d6b7', '#1d568b'] },
  { id: 'teak', dark: ['#3d2c1c', '#91c5ff'], light: ['#e7ca99', '#1d568b'] },
  { id: 'mahogany', dark: ['#3a2822', '#91c5ff'], light: ['#e7c9bb', '#1d568b'] },
  { id: 'walnut', dark: ['#382b24', '#91c5ff'], light: ['#ddcbb4', '#1d568b'] },
];

export const DEFAULT_THEME = 'oak';
export const DEFAULT_MODE = 'system';

export const resolveTheme = (saved) =>
  THEMES.some((theme) => theme.id === saved) ? saved : DEFAULT_THEME;
