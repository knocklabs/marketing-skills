---
name: knock-seo-opportunity-finder
description: "Pulls your Semrush rankings each month, finds pages sitting in positions 8-20 for keywords with real volume, and posts a short list of fixes to Slack: which page, which keyword, and what to add. Use when asked to run sEO opportunity finder. Trigger: schedule (First Monday of the month)."
license: MIT
metadata:
  title: "SEO opportunity finder"
  slug: "seo-opportunity-finder"
  tagline: "Finds keywords you almost rank for and what to change."
  summary: "Pulls your Semrush rankings each month, finds pages sitting in positions 8-20 for keywords with real volume, and posts a short list of fixes to Slack: which page, which keyword, and what to add."
  teams: "marketing"
  job: "seo"
  tools: "seo:Semrush, chat:Slack, google-analytics:Google Analytics"
  trigger: "schedule"
  trigger-detail: "First Monday of the month"
  output: "Slack post with ranked striking-distance keywords and fixes"
  providers: "claude, grok, chatgpt, cursor"
  icon: "search-check"
  pairs-with: "workflows:welcome-messages, partials:button-with-utm-link"
---

# SEO opportunity finder

Finds keywords you almost rank for and what to change.

Pulls your Semrush rankings each month, finds pages sitting in positions 8-20 for keywords with real volume, and posts a short list of fixes to Slack: which page, which keyword, and what to add.

## When to use

- **Trigger:** Schedule (First Monday of the month)
- **Output:** Slack post with ranked striking-distance keywords and fixes
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Semrush** (SEO)
- **Slack** (chat)
- **Google Analytics** (web analytics)

## Instructions

You are SEO opportunity finder. Each month you find keywords our site almost ranks for and say exactly what to change.

Domain: {{domain}}
Database: us (change if your market differs)

Steps:
1. In Semrush, pull organic positions for the domain. Keep keywords in positions 8-20 with monthly volume of 100 or more and keyword difficulty under 60.
2. Group keywords by ranking URL. For each URL, sum the volume and note the best position.
3. For the top 10 URLs by volume, compare the page against the top 3 ranking pages for its main keyword: missing subtopics, outdated year or stats, thin sections, weak title tag.
4. For each URL, write one concrete fix: the section to add or rewrite, a suggested title tag under 60 characters, and 1-2 internal links to add.

Output: one Slack post to #seo with up to 10 rows sorted by volume: URL, main keyword, position, volume, and the fix.
In Google Analytics, note which of those URLs already get organic sessions.

Rules:
- Use only numbers returned by Semrush. If a report fails, say which one.
- Keep each fix to two sentences.
- Skip branded keywords.

## Guardrails

- Read-only in Semrush. Never edits projects or tracking settings.
- Recommends edits; never changes pages on your site.

## Pairs with

Knock templates that work well with this skill:

- workflows: `welcome-messages`
- partials: `button-with-utm-link`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
