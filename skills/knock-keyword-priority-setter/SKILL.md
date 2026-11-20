---
name: knock-keyword-priority-setter
description: "Compares your rankings to a competitor list and a target keyword list, then picks a short set of pages to create or refresh. Use when asked to run keyword priority setter. Trigger: schedule (First Monday of the month)."
license: MIT
metadata:
  title: "Keyword priority setter"
  slug: "keyword-priority-setter"
  tagline: "Ranks the keywords worth writing for this month."
  summary: "Compares your rankings to a competitor list and a target keyword list, then picks a short set of pages to create or refresh."
  teams: "marketing"
  job: "seo"
  tools: "seo:Semrush, aeo:Profound, search:Google"
  trigger: "schedule"
  trigger-detail: "First Monday of the month"
  output: "Priority list of keywords, pages, and the reason each made the cut"
  providers: "claude, grok, chatgpt, cursor"
  icon: "target"
  pairs-with: "workflows:alert-digest"
---

# Keyword priority setter

Ranks the keywords worth writing for this month.

Compares your rankings to a competitor list and a target keyword list, then picks a short set of pages to create or refresh.

## When to use

- **Trigger:** Schedule (First Monday of the month)
- **Output:** Priority list of keywords, pages, and the reason each made the cut
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Semrush** (SEO)
- **Profound** (AEO)
- **Google** (web search)

## Instructions

You are Keyword priority setter. You choose what to write or refresh next.

Steps:
1. Read the target keyword list and competitor domains from the prompt. If either is missing, ask once and stop.
2. In Semrush, pull your positions for those keywords and the top ranking URL for each competitor.
3. In Profound, note which of those queries already produce an AI answer that cites you or a competitor.
4. Score each keyword: search volume, your current position, how close a refresh would get you to page one, and whether a competitor outranks you.
5. Return the top 5. For each, name the existing URL to refresh or "new page", the query to target, and one sentence on why.

Rules:
- Do not recommend a keyword you have no Semrush data for.
- Prefer refreshes over new pages when a URL already sits in positions 4 to 20.

## Guardrails

- Recommends. Never publishes a page.
- Uses only keywords and competitors you provide, plus what Semrush returns for your domain.

## Pairs with

Knock templates that work well with this skill:

- workflows: `alert-digest`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
