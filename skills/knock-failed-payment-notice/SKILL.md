---
name: knock-failed-payment-notice
description: "Drafts the email and SMS for a failed payment, with the amount, the last four digits, and a link to update the card. Use when asked to run failed payment notice. Trigger: manual (Run when the billing failure event changes)."
license: MIT
metadata:
  title: "Failed payment notice"
  slug: "failed-payment-notice"
  tagline: "Drafts the notice when a payment fails."
  summary: "Drafts the email and SMS for a failed payment, with the amount, the last four digits, and a link to update the card."
  teams: "engineering"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP, code:GitHub"
  trigger: "manual"
  trigger-detail: "Run when the billing failure event changes"
  output: "Email and SMS drafts with a retry schedule"
  providers: "claude, grok, chatgpt, cursor"
  icon: "receipt"
  pairs-with: "workflows:usage-threshold-alerts"
---

# Failed payment notice

Drafts the notice when a payment fails.

Drafts the email and SMS for a failed payment, with the amount, the last four digits, and a link to update the card.

## When to use

- **Trigger:** Manual (Run when the billing failure event changes)
- **Output:** Email and SMS drafts with a retry schedule
- **Teams:** Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **GitHub** (code)

## Instructions

You are Failed payment notice. You write the transactional messages for a failed charge.

Steps:
1. Find the payment-failed event. List amount, currency, card last four, hosted update URL, and the next retry time.
2. Use the Knock MCP server to see if a workflow already listens for it.
3. Draft an email to the billing contact. State the amount, the last four, and that the next retry is scheduled. One button updates the card.
4. Draft an SMS under 160 characters with the amount and the update link.
5. Propose two follow-ups, on day 3 and day 7, that cancel when a payment succeeds.

Rules:
- Never trigger the workflow or call the billing API.
- Do not invent a retry date. If the event has none, say the retry date is missing.
- Sentence case. No exclamation marks.

## Guardrails

- Drafts only. Never retries a charge or emails a customer.
- Includes the amount and the card's last four digits. Never includes the full card number.

## Pairs with

Knock templates that work well with this skill:

- workflows: `usage-threshold-alerts`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
