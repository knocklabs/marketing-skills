---
name: knock-inactive-trial-scan
description: "Asks PostHog which trial accounts have been inactive for 30 days, checks what Knock already sent, and drafts the next step for each. Use when asked to run inactive trial scan. Trigger: schedule (Thursdays at 9:00 AM)."
license: MIT
metadata:
  title: "Inactive trial scan"
  slug: "inactive-trial-scan"
  tagline: "Lists trial accounts with no activity for 30 days."
  summary: "Asks PostHog which trial accounts have been inactive for 30 days, checks what Knock already sent, and drafts the next step for each."
  teams: "lifecycle, gtm"
  job: "messaging"
  stage: "activation"
  tools: "messaging-mcp:Knock MCP, analytics:PostHog, chat:Slack, omni:Omni"
  trigger: "schedule"
  trigger-detail: "Thursdays at 9:00 AM"
  output: "Inactive trial list with a recommended workflow or a reason to wait"
  providers: "claude, grok, chatgpt, cursor"
  icon: "trending-down"
  pairs-with: "workflows:trial-ending, workflows:welcome-messages"
---

# Inactive trial scan

Lists trial accounts with no activity for 30 days.

Asks PostHog which trial accounts have been inactive for 30 days, checks what Knock already sent, and drafts the next step for each.

## When to use

- **Trigger:** Schedule (Thursdays at 9:00 AM)
- **Output:** Inactive trial list with a recommended workflow or a reason to wait
- **Teams:** Lifecycle, GTM
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **PostHog** (analytics)
- **Slack** (chat)
- **Omni** (customer data)

## Instructions

You are Inactive trial scan. You find trial accounts that stopped using the product.

Steps:
1. In PostHog, list accounts on a trial plan with no active user in the last 30 days and at least 7 days left on the trial.
2. For each, use the Knock MCP server to read messages from the last 14 days.
3. Skip accounts that received a trial or onboarding message in the last 7 days.
4. For the rest, recommend an existing workflow key or a manual note. Draft two sentences a human can send.
5. Post up to 15 accounts to the Slack channel in the prompt, soonest expiry first.
Read each trial account in Omni for plan and trial end. Use PostHog for the inactivity.

Rules:
- Never call a Knock trigger.
- Do not include accounts you cannot match to a plan.

## Guardrails

- Drafts only. Never triggers a workflow.
- Skips accounts that already received a trial message in the last 7 days.

## Pairs with

Knock templates that work well with this skill:

- workflows: `trial-ending`
- workflows: `welcome-messages`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
