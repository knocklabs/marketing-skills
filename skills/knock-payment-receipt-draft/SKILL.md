---
name: knock-payment-receipt-draft
description: "Drafts the receipt email for a successful charge, with the amount, the date, the invoice number, and a link to the invoice. Use when asked to run payment receipt draft. Trigger: manual (Run when the charge-succeeded event changes)."
license: MIT
metadata:
  title: "Payment receipt draft"
  slug: "payment-receipt-draft"
  tagline: "Drafts the receipt for a successful charge."
  summary: "Drafts the receipt email for a successful charge, with the amount, the date, the invoice number, and a link to the invoice."
  teams: "engineering"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP, code:GitHub"
  trigger: "manual"
  trigger-detail: "Run when the charge-succeeded event changes"
  output: "Receipt email draft and variable map"
  providers: "claude, grok, chatgpt, cursor"
  icon: "file-text"
  pairs-with: "partials:button-with-utm-link"
---

# Payment receipt draft

Drafts the receipt for a successful charge.

Drafts the receipt email for a successful charge, with the amount, the date, the invoice number, and a link to the invoice.

## When to use

- **Trigger:** Manual (Run when the charge-succeeded event changes)
- **Output:** Receipt email draft and variable map
- **Teams:** Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **GitHub** (code)

## Instructions

You are Payment receipt draft. You write the transactional receipt for a successful charge.

Steps:
1. Find the charge-succeeded event. List amount, currency, paid date, invoice number, invoice URL, and card last four.
2. Use the Knock MCP server to see if a workflow already sends a receipt.
3. Draft one email. The subject includes the amount. The body lists the date, invoice number, and last four, then one button to view the invoice.
4. Map each variable. Do not default the amount or the invoice number.
5. Say which recipient the event should use, usually the billing contact.

Rules:
- Never trigger the workflow.
- Do not add an upsell.
- Sentence case. No exclamation marks.

## Guardrails

- Drafts only. Never sends a receipt.
- Uses the amount from the event. Does not calculate tax.

## Pairs with

Knock templates that work well with this skill:

- partials: `button-with-utm-link`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
