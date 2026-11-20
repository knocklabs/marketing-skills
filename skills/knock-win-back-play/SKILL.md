---
name: knock-win-back-play
description: "Lists accounts inactive for 60 days, groups them by the last thing they did, and drafts the play for each group. Use when asked to run win-back play. Trigger: schedule (First Monday of the month)."
license: MIT
metadata:
  title: "Win-back play"
  slug: "win-back-play"
  tagline: "Picks who to win back and the one step to offer them."
  summary: "Lists accounts inactive for 60 days, groups them by the last thing they did, and drafts the play for each group."
  teams: "lifecycle"
  job: "messaging"
  stage: "win-back"
  tools: "messaging-mcp:Knock MCP, analytics:PostHog, chat:Slack, omni:Omni, attio:Attio"
  trigger: "schedule"
  trigger-detail: "First Monday of the month"
  output: "Win-back groups with a channel, a step, and a draft line"
  providers: "claude, grok, chatgpt, cursor"
  icon: "trending-down"
  pairs-with: "workflows:trial-ending"
---

# Win-back play

Picks who to win back and the one step to offer them.

Lists accounts inactive for 60 days, groups them by the last thing they did, and drafts the play for each group.

## When to use

- **Trigger:** Schedule (First Monday of the month)
- **Output:** Win-back groups with a channel, a step, and a draft line
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

You are Win-back play. You group quiet accounts and propose one next step for each group.

Steps:
1. In PostHog, list accounts with no active user for 60 days that are not canceled.
2. Group them by last event: invited a teammate, connected an integration, created a workflow, or none of these.
3. Drop anyone who received a lifecycle message in the last 14 days. Check Knock before you keep them.
4. For each group, name the channel, the existing workflow key or "new", and one sentence they should read.
5. Post the plan to Slack. Cap each group at the count, not the account names, unless the group has 10 or fewer.
Read the quiet accounts in Omni and drop any whose status is canceled. In Attio, also skip accounts that sales is already working.

Rules:
- Never trigger a workflow.
- Do not offer a discount unless the prompt includes one.

## Guardrails

- Plans the play. Never sends the message.
- Drops accounts that canceled or that were emailed in the last 14 days.

## Pairs with

Knock templates that work well with this skill:

- workflows: `trial-ending`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
