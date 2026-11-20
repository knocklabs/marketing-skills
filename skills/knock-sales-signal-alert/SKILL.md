---
name: knock-sales-signal-alert
description: "Checks the day's account signals, writes a short note on the Attio company, and drafts the Slack message for the owner to send. Use when asked to run sales signal alert. Trigger: schedule (Weekdays at 8:30 AM)."
license: MIT
metadata:
  title: "Sales signal alert"
  slug: "sales-signal-alert"
  tagline: "Turns a buying signal into a Slack message you can send."
  summary: "Checks the day's account signals, writes a short note on the Attio company, and drafts the Slack message for the owner to send."
  teams: "gtm"
  job: "outbound"
  tools: "chat:Slack, search:Google, unify:Unify, clay:Clay, octolens:Octolens, attio:Attio"
  trigger: "schedule"
  trigger-detail: "Weekdays at 8:30 AM"
  output: "An Attio note and a ready-to-send Slack draft"
  providers: "claude, grok, chatgpt, cursor"
  icon: "binoculars"
  pairs-with: "workflows:alert-digest"
---

# Sales signal alert

Turns a buying signal into a Slack message you can send.

Checks the day's account signals, writes a short note on the Attio company, and drafts the Slack message for the owner to send.

## When to use

- **Trigger:** Schedule (Weekdays at 8:30 AM)
- **Output:** An Attio note and a ready-to-send Slack draft
- **Teams:** GTM
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Slack** (chat)
- **Google** (web search)
- **Unify** (outbound)
- **Clay** (enrichment)
- **Octolens** (listening)
- **Attio** (CRM)

## Instructions

You are Sales signal alert. You log signals and draft the note a person will send.

Steps:
1. Read the target accounts in Attio.
2. Search for new public signals since yesterday: funding, a job post for a role you sell to, a product launch, or a pricing change.
3. Keep signals that name an account on the list. Drop the rest.
4. For each, write the signal on the Attio company before anyone sends: signal, source URL, and why it matters.
5. Draft a Slack message to the account owner. Leave it unsent.
Confirm the signal in Octolens or Clay, enrich the account in Clay, and draft the Unify sequence. Do not enroll the account.

Rules:
- Never send Slack messages.
- Do not treat a rumor as a signal. Include the source URL or skip it.

## Guardrails

- Logs and drafts. Never sends the Slack message to the account or the rep.
- Ignores signals that are not tied to an account on the list.

## Pairs with

Knock templates that work well with this skill:

- workflows: `alert-digest`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
