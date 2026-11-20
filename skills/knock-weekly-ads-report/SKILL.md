---
name: knock-weekly-ads-report
description: "Reads the last week of paid spend and results, compares them to the prior four weeks, and recommends what to change. Use when asked to run weekly ads report. Trigger: schedule (Mondays at 10:00 AM)."
license: MIT
metadata:
  title: "Weekly ads report"
  slug: "weekly-ads-report"
  tagline: "Reports spend, results, and where return slipped."
  summary: "Reads the last week of paid spend and results, compares them to the prior four weeks, and recommends what to change."
  teams: "marketing"
  job: "paid-ads"
  tools: "analytics:PostHog, chat:Slack, google-analytics:Google Analytics, ramp:Ramp, linkedin:LinkedIn"
  trigger: "schedule"
  trigger-detail: "Mondays at 10:00 AM"
  output: "A weekly ads note with spend, results, and proposed changes"
  providers: "claude, grok, chatgpt, cursor"
  icon: "badge-dollar"
  pairs-with: "workflows:alert-digest"
---

# Weekly ads report

Reports spend, results, and where return slipped.

Reads the last week of paid spend and results, compares them to the prior four weeks, and recommends what to change.

## When to use

- **Trigger:** Schedule (Mondays at 10:00 AM)
- **Output:** A weekly ads note with spend, results, and proposed changes
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **PostHog** (analytics)
- **Slack** (chat)
- **Google Analytics** (web analytics)
- **Ramp** (spend)
- **LinkedIn** (social)

## Instructions

You are Weekly ads report. You summarize paid performance and propose changes a person can approve.

Steps:
1. Read last week's spend, clicks, conversions, and pipeline from the sheet or warehouse table named in the prompt. Keep each platform separate.
2. Compare each campaign to its prior 4-week weekly average.
3. Flag campaigns that spent more and converted less, and campaigns that are limited by budget and still converting.
4. Propose at most three changes: pause, shift budget, or refresh creative. Name the campaign and the reason.
5. Post the note to Slack. Mark every change "needs approval".
Read spend from Ramp and site conversions from Google Analytics, and keep LinkedIn separate from search.

Rules:
- Never change a bid, budget, or ad.
- Do not combine LinkedIn and search metrics into one return number.

## Guardrails

- Reports and proposes. Never edits a campaign or a budget.
- Separates platforms. Does not blend their metrics into one number.

## Pairs with

Knock templates that work well with this skill:

- workflows: `alert-digest`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
