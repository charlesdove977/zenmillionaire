# Task: Create a Persona

Purpose: let the user build their own advisor voice and add it to the roster.

## Interview (short)
Ask, one group at a time:
1. **Name + essence** — what is this advisor, in one line?
2. **Sources** — which of the library's books/videos does this persona draw on?
   Show the available source slugs from `sources/INDEX.md`. A persona may only
   cite its declared sources. (If they want a source that isn't in the library
   yet, route to `tasks/add-source.md` first.)
3. **Pole** — mindset-zen, mechanics-iq, modern-leverage, or a blend.
4. **Voice / tone** — how do they talk? (blunt, warm, socratic, contrarian...)
5. **Core beliefs** — 3-6 convictions.
6. **Signature moves** — go-to questions or phrases.

## Write the file
Create `personas/<slug>.md` with this schema:

```
---
persona: {Name}
slug: {slug}
sources: [{source-slug}, ...]
pole: {pole(s)}
custom: true
---
## Essence
[one line]
## Voice
[tone / speaking style]
## Core Beliefs
- [belief] (grounded in {source})
## Signature Moves
- [question or phrase]
## Cites From
[which frameworks/*.md this persona pulls]
```

## Confirm
Read the roster back, offer to test-drive the new persona via `tasks/advise.md`.
Editing later = just edit the file. Deleting = remove the file.
