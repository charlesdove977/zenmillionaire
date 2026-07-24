<p align="center">
  <img src="https://raw.githubusercontent.com/charlesdove977/zenmillionaire/main/assets/hero.png" alt="ZenMillionaire — Persona Counciling for Money EQ and Money IQ" width="100%">
</p>

<h1 align="center">ZenMillionaire</h1>

<p align="center">
  <b>A money advisor for Claude that councils you instead of automating you.</b><br>
  Every opinion it gives is traced back to a real book or talk, and it names the source out loud.
</p>

<p align="center">
  <a href="https://www.charlieautomates.com/charlie-os-vs/"><img src="https://img.shields.io/badge/Work_with_Charlie-Charlie_OS-7c3aed?style=for-the-badge&logo=anthropic&logoColor=white" alt="Work with Charlie"></a>
  <a href="https://www.npmjs.com/package/zenmillionaire"><img src="https://img.shields.io/npm/v/zenmillionaire?color=blue&label=npm" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/zenmillionaire"><img src="https://img.shields.io/npm/dt/zenmillionaire?color=blue&label=downloads" alt="npm downloads"></a>
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/zenmillionaire?color=green" alt="MIT license"></a>
  <a href="https://github.com/charlesdove977/zenmillionaire/stargazers"><img src="https://img.shields.io/github/stars/charlesdove977/zenmillionaire?style=flat" alt="stars"></a>
</p>

<p align="center">
  <a href="#install">Install</a> ·
  <a href="#the-idea-ai-augmentation-not-ai-automation">The Idea</a> ·
  <a href="#the-books-it-runs-on">Books</a> ·
  <a href="#how-it-works">How It Works</a> ·
  <a href="#a-real-example-a-call-transcript-becomes-a-money-conversation">Example</a> ·
  <a href="#make-it-yours">Customize</a>
</p>

---

## The idea: AI Augmentation, not AI Automation

Most people think the smartest move with AI is to shove it into their business and automate everything. The problem is that most people have no idea what to even automate, or how. So they automate noise, or they freeze.

The people getting real value from AI do something different first. They use it for **augmentation**, not automation. They point it at their own decisions. They feed it their data, their principles, their frameworks, their morals, and they let it sharpen how they think before they ever try to make it do the work for them.

**ZenMillionaire is that idea aimed at money.**

It does not budget for you. It does not trade for you. It sits across the table from you and helps you rework your understanding of money at every level, using two things most financial tools ignore:

- **Money IQ** — financial intelligence. Assets, offers, leverage, pricing, cash flow, investing.
- **Money EQ** — the emotional relationship with money. The anxiety, the "enough," the guilt, the inherited beliefs that quietly drive every number.

You bring a decision. It brings a room full of advisors who each think differently, and it makes them argue, cite their sources, and hand you a synthesis. That is augmentation. You keep the judgment. You just make it with better counsel.

---

## What "Persona Counciling" means

ZenMillionaire is built around one core move: **a council of money minds, each grounded in a real source, debating your actual question.**

Instead of one flattened "AI voice" that averages everything into mush, you get distinct advisors who genuinely disagree:

- A **zen** voice that asks what your "enough" is and whether the money you are chasing is happy money or unhappy money.
- A **mechanics** voice that talks assets, savings rate, and the boring math that actually builds wealth.
- A **leverage** voice that talks offers, pricing, specific knowledge, and getting paid for judgment instead of hours.

They clash on purpose. The disagreement is the product. When advisors who see the world this differently still agree on something, that is signal. When they fork, you get to see the real tradeoff you are choosing between, out loud, instead of deciding it by default.

---

## The books it runs on

Every claim the skill makes is tagged to one of these. If an idea is not in the library, the skill says so plainly instead of dressing up its own opinion as doctrine.

| Source | Author | Pole |
|--------|--------|------|
| Happy Money (talk) | Ken Honda | mindset / EQ |
| Think and Grow Rich | Napoleon Hill | mindset / EQ |
| The Psychology of Money | Morgan Housel | mindset / EQ |
| Your Money or Your Life | Robin & Dominguez | mindset / EQ |
| The Richest Man in Babylon | George S. Clason | mechanics / IQ |
| Rich Dad Poor Dad | Robert Kiyosaki | mechanics / IQ |
| The Millionaire Next Door | Stanley & Danko | mechanics / IQ |
| $100M Offers | Alex Hormozi | leverage |
| $100M Leads | Alex Hormozi | leverage |
| The Almanack of Naval Ravikant | Eric Jorgenson (Naval) | leverage + mindset |
| Influence | Robert Cialdini | leverage (taught ethically) |
| The Millionaire Fastlane | MJ DeMarco | leverage |

### A note on the sources

This repo ships the **distilled, cited frameworks** for each book, my own summaries with short quotes and page numbers, which is commentary, not the book. **It does not ship the books themselves.** Owning a copy of a book does not give anyone the right to republish it, so the full texts stay out of this repo on purpose.

If you want the deepest version of the skill, **buy the books.** Then use [`tasks/add-source.md`](skill/tasks/add-source.md) to drop your own copy in and let the skill distill it. The repo gives you the engine and the method. You bring your own library. See [`sources/INDEX.md`](skill/sources/INDEX.md) for the full citation registry.

---

## How it works

Run `/zenmillionaire` and it shows a menu, then asks a short survey to route you to the right mode.

| Mode | What it does |
|------|--------------|
| **Talk to one advisor** | Pick a single persona and converse in that voice |
| **Council / roundtable** | Spin up subagents, one persona each. They debate, each cites, you get the synthesis |
| **Blended advisor** | One synthesized voice drawing on all sources at once |
| **Diagnose me** | A money-blueprint and money-personality survey that stores a profile and personalizes future advice |
| **Create a persona** | Build your own advisor voice |
| **Add a source** | Add a book (PDF) or a talk (video). The skill distills and indexes it |

**The one rule the whole thing is built on: cite everything.** Every principle carries its source inline, like `(Rich Dad Poor Dad, p.44)` or `(Ken Honda video)`. If the skill cannot cite a source in the library, it tells you it is giving you its own read instead of pretending it is doctrine. That is the entire point. You can always trace a piece of advice back to where it came from and go check it yourself.

---

## A real example: a call transcript becomes a money conversation

The skill is at its best when you feed it something real. Here is the exact flow.

**1. Record a business call.** A sales call, a coaching session, a partner conversation about money. Use [Read.ai](https://read.ai) or [Fathom](https://fathom.video) to transcribe it (both auto-generate a full transcript and drop a shareable link).

**2. Drop the transcript into your project** and open Claude Code where the skill is installed.

**3. Invoke the skill and hand it the call:**

```
/zenmillionaire

I just got off a coaching call. Transcript is at ./call-transcript.md.
The knot in my stomach is whether to raise my prices. Give me a council.
```

**4. It reads the transcript, seats the room, and argues.** Say you are a founder charging $2k/mo who was just told to go to $5k. A trimmed version of what comes back:

> **The Operator (Hormozi):** The pit is the tax on commitment, not a warning. There is no strategic benefit to being the second cheapest in a market, only to being the most expensive `($100M Offers, p.6)`. Ninety-nine percent of businesses need to raise prices to grow, not lower them `($100M Offers, p.6)`. Raise it. The sting is what makes the client follow through.
>
> **The Zen Master (Ken Honda):** Ask a different question first. Is the money you have now happy money or unhappy money `(Ken Honda video)`? If the higher price comes from resentment at being underpaid, you carry that resentment into delivery. Raise the price from contentment, not from lack `(Ken Honda video)`.
>
> **The Life-Energy Guide (Your Money or Your Life):** Money is life energy `(Your Money or Your Life, p.64)`. Do not ask "can I charge $5k." Ask how many hours of your one finite life each client currently costs you, and whether the current price is a fair trade of that energy `(Your Money or Your Life, p.79)`.
>
> **Synthesis:** Two of three say raise it now. The fork is speed. Test $5k on the next new client, keep current clients grandfathered, and watch whether the pit shrinks once someone says yes at the new number. That tells you if it was fear of the price or fear of the commitment.

You brought the raw call. The skill turned it into a decision you can actually see, with every piece of advice sourced. **That is Money EQ and Money IQ working together on a real number in your real business.**

You can do this with any money-shaped moment. A negotiation, a hiring decision, a "should I buy this" purchase, a pricing change, a partnership split. Feed it the context, pick a mode, and reason it through with counsel instead of alone.

---

## Make it yours

Nothing in this skill is hidden in code. Everything it "knows" is editable markdown under `frameworks/`, `personas/`, and `sources/`. You own the whole system.

- **Add advisors** → [`tasks/create-persona.md`](skill/tasks/create-persona.md). Build a voice around any source in the library, or a blend.
- **Add knowledge** → [`tasks/add-source.md`](skill/tasks/add-source.md). Add a book you own (PDF) or a talk (video). The skill distills it into a cited framework and registers it in the index. Want it sharper on investing, real estate, or tax? Feed it the books you trust on those and it grows in that direction.
- **Tune the existing voices** → edit any file in `personas/`. Change a persona's beliefs, its signature phrases, or which sources it is allowed to draw from.
- **Build your profile** → run the **Diagnose me** mode once. It stores a money-blueprint and personality read that every future council uses to personalize its advice to you.

The library ships with 12 sources and 10 personas. It is meant to grow. The version you are running a year from now should look like your bookshelf, not mine.

---

## Install

Install the skill with one command (no clone needed):

```bash
# Global — installs into ~/.claude/skills/zenmillionaire/
npx zenmillionaire install

# Or scoped to just the current project
npx zenmillionaire install --project

# Add a /zenmillionaire slash command stub too
npx zenmillionaire install --with-commands
```

Update or remove later with `npx zenmillionaire update` / `npx zenmillionaire uninstall`.

Prefer to do it by hand? Clone and copy the `skill/` folder:

```bash
git clone https://github.com/charlesdove977/zenmillionaire.git
cp -r zenmillionaire/skill ~/.claude/skills/zenmillionaire
```

Then, in any Claude Code session:

```
/zenmillionaire
```

To go deeper, buy the books you care about most and add them with `skill/tasks/add-source.md`.

---

## A word on what this is and is not

ZenMillionaire is for education and reflection. It is **not** licensed financial, tax, or investment advice. For any real allocation of real money, confirm with a qualified professional.

The persuasion frameworks in the library (Cialdini) are taught ethically, how to earn honestly and how to defend yourself against manipulation, never how to manipulate anyone.

And the library has a spirit worth keeping: peace of mind and "enough" matter as much as accumulation. This tool is not here to push you toward more for its own sake. It is here to help you decide, on purpose, what you are actually building toward.

---

<p align="center">
  Built by <a href="https://ccstrategic.io">Charles J Dove</a> · C&C Strategic Consulting<br>
  <a href="https://youtube.com/@charlieautomates">YouTube</a> ·
  <a href="https://instagram.com/charlieautomates">Instagram</a> ·
  <a href="https://start.ccstrategic.io/skool">Community</a>
</p>
