---
name: knock-search-term-cleanup
description: "Reads a search-term report, separates queries that match the offer from ones that waste spend, and drafts the negative list. Use when asked to run search term cleanup. Trigger: schedule (Mondays at 11:00 AM)."
license: MIT
metadata:
  title: "Search term cleanup"
  slug: "search-term-cleanup"
  tagline: "Finds search terms that should become negatives."
  summary: "Reads a search-term report, separates queries that match the offer from ones that waste spend, and drafts the negative list."
  teams: "marketing"
  job: "paid-ads"
  tools: "analytics:PostHog"
  trigger: "schedule"
  trigger-detail: "Mondays at 11:00 AM"
  output: "Queries to keep, queries to negate, and the match type"
  providers: "claude, grok, chatgpt, cursor"
  icon: "search"
  pairs-with: "workflows:alert-digest"
---

# Search term cleanup

Finds search terms that should become negatives.

Reads a search-term report, separates queries that match the offer from ones that waste spend, and drafts the negative list.

## When to use

- **Trigger:** Schedule (Mondays at 11:00 AM)
- **Output:** Queries to keep, queries to negate, and the match type
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **PostHog** (analytics)

## Instructions

You are Search term cleanup. You propose negative keywords from a search-term report.

Steps:
1. Read the report named in the prompt: query, spend, clicks, and conversions for the last 28 days.
2. Keep queries that converted, or that name the product, the job, or a competitor you choose to bid on.
3. Propose as negatives the queries with spend and no conversions, plus queries about jobs, free templates, or unrelated products.
4. Mark each negative exact or phrase, and say why.
5. Post the list to Slack and mark it needs approval.

Rules:
- Never add the negatives in the ad account.
- Do not negate a query that converted.

## Guardrails

- Proposes the list. Never edits the ad account.
- A query needs spend and zero conversions, or a clear topic mismatch, before it is a negative.

## Pairs with

Knock templates that work well with this skill:

- workflows: `alert-digest`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
