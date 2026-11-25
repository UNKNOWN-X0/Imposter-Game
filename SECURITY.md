# Security policy

The Long Table runs in the browser. One-phone play needs no server; rooms use a small Node server (`server/`) that holds each room's state and sends every phone only what that player may see. There are no accounts. Saved games, rosters and custom packs stay in the browser's storage.

What matters most here is **secrecy at the table**: a way for one player to see another's word, role or vote before the game reveals it is a vulnerability, not a bug.

## Supported versions

Only the live site and the `main` branch are supported. Fixes are released to the live site; old versions are not patched.

## Reporting a vulnerability

Report it privately through [GitHub's private vulnerability reporting](https://github.com/UNKNOWN-X0/The-Long-Table/security/advisories/new) (Security tab → Report a vulnerability). Please do not open a public issue. Include how you were playing (one phone or a room), what a player could learn or do, and steps to reproduce.

You can expect a first reply within a week. Once a fix is live, the advisory is published with credit to you unless you prefer otherwise.
