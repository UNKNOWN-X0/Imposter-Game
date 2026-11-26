# Community packs

Packs that players shared for everybody. Each one is a file at
`<lang>/<name>.json`, one of `en`, `th` or `de`:

```json
{
  "name": "Our flat",
  "emoji": "🏠",
  "by": "Sam",
  "words": ["Kettle, Toaster", "Sofa", "Fridge, Freezer", "Plant", "Rug"]
}
```

- `words` is one entry per line, the same as the pack editor: a word, then a
  comma and a near miss if it has one. At least 5, at most 400.
- `by` is the name the sharer asked to be credited with. Leave it out to
  share without a name.
- The words are under CC BY-NC-SA 4.0, credited to `by`
  ([LICENSE-CONTENT.md](../../../../LICENSE-CONTENT.md)).

To add one from a share code (from the "Share a pack" issue form):

```sh
npm run community -- add "<share code>" --by "Name to credit"
```

`npm test` checks every file here. The site picks a pack up on the next deploy,
which is every merge to `main`.
