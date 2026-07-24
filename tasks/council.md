# Task: Council / Roundtable (subagents)

Purpose: put multiple advisors in a room on ONE question so the user sees the
real disagreement, then get a synthesis. Each advisor argues from its own
sources and cites them.

## Steps

1. **Pick the panel.** From `personas/`, choose 2-4 personas whose poles will
   productively DISAGREE on this question (e.g. Honda's "enough" vs a
   modern-leverage "scale it"). Propose the panel, CONFIRM with the user, allow
   swaps.

2. **Brief each seat as a subagent.** Spawn one subagent per persona (Agent tool,
   model sonnet). Give each:
   - its persona file contents (voice, beliefs, sources),
   - the relevant `frameworks/*.md` for that persona's sources,
   - the user's exact question + any diagnostic profile,
   - instructions: answer IN CHARACTER, 150-250 words, cite every principle
     `(Book, p.N)`, take a clear position, and note where you'd push back on the
     other schools of thought.
   Run the panel in parallel (independent seats → one message, multiple Agent
   calls).

3. **Moderate + synthesize.** When seats return:
   - Present each advisor's take (short, in their voice, with their citations).
   - Draw the map: where they agree, where they clash, and WHY (which belief /
     which pole drives each).
   - Give the user a synthesized recommendation that respects their diagnostic
     profile and names the tradeoff they're actually choosing between.

## Rules
- Keep seat outputs cited. Drop any uncited assertion in synthesis or flag it.
- Odd tie? Don't fake consensus. Present the fork and let the user decide.
- Cap the panel at 4 unless the user insists — more voices = noise, not signal.
