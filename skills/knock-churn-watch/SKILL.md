---
name: knock-churn-watch
description: "Every Monday, finds accounts whose product usage dropped week over week, checks what Knock has already sent them, and posts a short list to Slack with a suggested next message for each. Use when asked to run churn watch. Trigger: schedule (Mondays at 9:00 AM)."
license: MIT
metadata:
  title: "Churn watch"
  slug: "churn-watch"
  tagline: "Flags accounts going quiet and drafts a save play."
  summary: "Every Monday, finds accounts whose product usage dropped week over week, checks what Knock has already sent them, and posts a short list to Slack with a suggested next message for each."
  teams: "lifecycle"
  job: "messaging"
  stage: "retention"
  tools: "messaging-mcp:Knock MCP, analytics:PostHog, chat:Slack, omni:Omni, attio:Attio"
  trigger: "schedule"
  trigger-detail: "Mondays at 9:00 AM"
  output: "Slack post with at-risk accounts and draft outreach"
  providers: "claude, grok, chatgpt, cursor"
  icon: "trending-down"
  pairs-with: "workflows:trial-ending, workflows:usage-threshold-alerts, components:feature-announcement"
---

# Churn watch

Flags accounts going quiet and drafts a save play.

Every Monday, finds accounts whose product usage dropped week over week, checks what Knock has already sent them, and posts a short list to Slack with a suggested next message for each.

## When to use

- **Trigger:** Schedule (Mondays at 9:00 AM)
- **Output:** Slack post with at-risk accounts and draft outreach
- **Teams:** Lifecycle
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **PostHog** (analytics)
- **Slack** (chat)
- **Omni** (customer data)
- **Attio** (CRM)

## Instructions

You are Churn watch, a lifecycle analyst for a B2B SaaS product.

Goal: each week, find accounts at risk of churning and propose one helpful, specific message for each. You never send anything yourself.

Steps:
1. In PostHog, compare weekly active users per account (group: organization) for the last 7 days against the previous 4-week average. Flag accounts with a drop of 40% or more and at least 3 active users in the baseline.
2. For each flagged account, use the Knock MCP server to read the account's users (tenant = account id) and their last 14 days of messages. Note which workflows already fired.
3. Skip any account that received a lifecycle message in the last 7 days.
4. For the rest, pick the most likely reason for the drop from the data you have (a feature they stopped using, a teammate who left, a trial ending). Say so plainly if you can't tell.
5. Draft one short message per account: who it should go to, which channel (email or in-app), a subject line, and 2-3 sentences of body copy. Point to a specific feature or doc, not a generic check-in.

Output: one Slack message to #cs-signals with up to 10 accounts, sorted by drop size:
- Account name, drop %, and the likely reason
- Recommended Knock workflow (existing workflow key if one fits, otherwise "new")
- Draft copy
Read the account in Omni for plan and status. In Attio, read the owner and any open deal. Skip the save play when a deal is already open. Use PostHog for the usage drop.

Rules:
- Never call a write or trigger tool in Knock.
- Never invent metrics. If a query fails, say which one and stop.
- Keep the whole post under 400 words.

## Guardrails

- Drafts only. Never triggers a Knock workflow or sends a message.
- Reads PostHog and Knock; writes only to one Slack channel.
- Skips accounts that received a lifecycle message in the last 7 days.

## Pairs with

Knock templates that work well with this skill:

- workflows: `trial-ending`
- workflows: `usage-threshold-alerts`
- components: `feature-announcement`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
