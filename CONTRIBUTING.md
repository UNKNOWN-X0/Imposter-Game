# Contributing

Thanks for helping. The Long Table is a set of party games played on phones around one table, starting with Imposter, and two things about it matter most: it is **free** (no account, no ads, no tracking, nothing to buy) and it is **highly customisable** (your own word packs, rules, roles and looks). Changes should keep both true.

The most useful contributions are a bug from a real game night, a better word pack, a fix, or a way to let a group shape the game more to its taste. A change that would put a price, an account, an ad or a tracker between a group and a game will not be accepted.

## Report a problem

- **Something broken in the game:** open a [bug report](https://github.com/UNKNOWN-X0/The-Long-Table/issues/new?template=bug-report.yml) with how you were playing (one phone or a room), the phone and browser, and what you saw. The error screen's "Copy the report" text helps most; it never contains the word or anyone's role.
- **A word that does not work** (too easy, too hard, a near miss that gives it away, a typo): open a [word pack](https://github.com/UNKNOWN-X0/The-Long-Table/issues/new?template=word-pack.yml) issue.
- **An idea:** open a [feature request](https://github.com/UNKNOWN-X0/The-Long-Table/issues/new?template=feature-request.yml).
- **A security problem** (for example a way to see somebody else's card): see [SECURITY.md](SECURITY.md); do not open a public issue.

## Send a change

1. Read [README.md](README.md) (Development, "Making it yours"), [STANDARDS.md](STANDARDS.md) for what done means, and [DESIGN.md](DESIGN.md) before changing a screen.
2. Make the change on a branch.
3. Run the checks:

   ```sh
   npm test          # rules, server, privacy, strings, themes
   npm run verify    # adds coverage, the build and the three browser sweeps
   ```

   A moved fingerprint after an intended rules or content change: dump it before and after with `node tools/fingerprint.mjs --dump <file>`, read the diff, then `npm run fingerprint -- --write`.
4. Add player-visible changes to the CHANGELOG's Unreleased section.
5. Open a pull request against `main`; the CI checks must pass.

By contributing you agree that code is licensed under the [MIT License](LICENSE) and word packs under [CC BY-NC-SA 4.0](LICENSE-CONTENT.md). Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).
