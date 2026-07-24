# Task: Add a Source (book or video)

Purpose: grow the library. Distill a new book or talk into cited frameworks,
keep the original as backup, and register it so personas can cite it. This is
the extensibility guarantee: the skill is never frozen.

## A) Adding a BOOK (PDF)
1. Get the PDF path + title + author + pole(s) from the user.
2. Copy the PDF into the library:
   `cp "<path>" /Users/user/.claude/skills/zenmillionaire/sources/books/<slug>.pdf`
3. Distill it. For a big book, spawn a sonnet subagent with the SAME contract the
   original build used:
   - Read the PDF efficiently (TOC → key chapters → sample), accurate page nums.
   - Extract 6-10 core frameworks; each = name, 2-4 sentence explanation, 1-2
     short quotes WITH page numbers, one-line apply.
   - WRITE to `frameworks/<slug>.md` with front matter
     (book, author, slug, pole) and one `## Framework` section each, every
     chunk tagged `[Source: <Book>, p.N]`.
   - Return a PERSONA_SEED + INDEX_ROWS.
4. Append the INDEX_ROWS to `sources/INDEX.md`.
5. Offer to create a persona from the PERSONA_SEED (`tasks/create-persona.md`).

## B) Adding a VIDEO (YouTube)
1. Get the URL. Pull the transcript (vidiq `vidiq_video_transcript` with the
   video id, or Apify captions).
2. Save it to `sources/transcripts/<slug>.md` with front matter:
   source_id, type: youtube_transcript, title, speaker, url, video_id, pole,
   pulled date, credibility. Keep the FULL transcript body + the URL so we can
   always back-source. Preserve timestamps if available.
3. Distill the key frameworks into `frameworks/<slug>.md`, each chunk tagged
   `[Source: <Speaker> video]` (add timestamp when known).
4. Append INDEX_ROWS to `sources/INDEX.md`.
5. Offer to create/extend a persona.

## Always
- Keep originals (PDF / full transcript + URL) so every claim can be verified.
- Update `sources/INDEX.md` — it is the single registry of what the skill can
  cite. If it's not in INDEX, personas can't claim it.
