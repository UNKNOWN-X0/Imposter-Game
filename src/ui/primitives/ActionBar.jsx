/**
 * The screen's main action, kept under the thumb (#105).
 *
 * During a round the table fills a phone, and the button the round needs next
 * used to start below the fold ("Next" at 936px of an 844px screen), so the
 * phone holder scrolled every turn. This bar sticks to the bottom of the
 * viewport while its screen is taller than the phone, and sits in place at
 * the end of a short one. It is in the page's flow, so it never covers the
 * content it follows.
 */

export function ActionBar({ children }) {
  return <div className="action-bar">{children}</div>;
}
