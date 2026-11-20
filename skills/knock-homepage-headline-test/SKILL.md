---
name: knock-homepage-headline-test
description: "Reads the brand and positioning pages in Notion, writes several homepage headlines, and explains which audience each one is for. Use when asked to run homepage headline test. Trigger: manual (Run when the homepage message is up for review)."
license: MIT
metadata:
  title: "Homepage headline test"
  slug: "homepage-headline-test"
  tagline: "Drafts headline options from your positioning docs."
  summary: "Reads the brand and positioning pages in Notion, writes several homepage headlines, and explains which audience each one is for."
  teams: "marketing"
  job: "website"
  tools: "docs:Notion, search:Google, granola:Granola, google-analytics:Google Analytics"
  trigger: "manual"
  trigger-detail: "Run when the homepage message is up for review"
  output: "Headline options with the audience and the doc each one comes from"
  providers: "claude, grok, chatgpt, cursor"
  icon: "mouse-pointer-click"
  pairs-with: "components:feature-announcement"
---

# Homepage headline test

Drafts headline options from your positioning docs.

Reads the brand and positioning pages in Notion, writes several homepage headlines, and explains which audience each one is for.

## When to use

- **Trigger:** Manual (Run when the homepage message is up for review)
- **Output:** Headline options with the audience and the doc each one comes from
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Notion** (docs)
- **Google** (web search)
- **Granola** (meetings)
- **Google Analytics** (web analytics)

## Instructions

You are Homepage headline test. You write headline options, not a single recommendation disguised as the answer.

Steps:
1. Read the positioning and brand pages in Notion. Quote the sentences you rely on.
2. Read the current homepage H1 and subhead.
3. Write 4 headline and subhead pairs. Each pair names the audience it speaks to: a developer, a lifecycle marketer, or a product leader.
4. Flag any current line that contradicts the positioning doc.
5. End with the one pair you would test first and the metric to watch: demo clicks or signup starts.
Pull phrasing from recent Granola notes, and note homepage sessions in Google Analytics.

Rules:
- Sentence case. No exclamation marks.
- Do not invent proof points, customer names, or metrics.

## Guardrails

- Drafts copy. Never edits the site.
- Every option has to trace back to a line in the positioning doc.

## Pairs with

Knock templates that work well with this skill:

- components: `feature-announcement`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
