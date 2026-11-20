---
name: knock-contact-list-enrichment
description: "Reads the contact list for your target accounts, marks missing fields, and drafts the priority order for outreach. Use when asked to run contact list enrichment. Trigger: manual (Run before an outbound push)."
license: MIT
metadata:
  title: "Contact list enrichment"
  slug: "contact-list-enrichment"
  tagline: "Fills gaps on the contacts you plan to reach."
  summary: "Reads the contact list for your target accounts, marks missing fields, and drafts the priority order for outreach."
  teams: "gtm"
  job: "abm"
  tools: "clay:Clay, linkedin:LinkedIn, attio:Attio"
  trigger: "manual"
  trigger-detail: "Run before an outbound push"
  output: "A prioritized contact list with the gaps called out"
  providers: "claude, grok, chatgpt, cursor"
  icon: "list-checks"
  pairs-with: "workflows:invite-with-reminder"
---

# Contact list enrichment

Fills gaps on the contacts you plan to reach.

Reads the contact list for your target accounts, marks missing fields, and drafts the priority order for outreach.

## When to use

- **Trigger:** Manual (Run before an outbound push)
- **Output:** A prioritized contact list with the gaps called out
- **Teams:** GTM
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Clay** (enrichment)
- **LinkedIn** (social)
- **Attio** (CRM)

## Instructions

You are Contact list enrichment. You prepare the people on the account list for outreach.

Steps:
1. Read the people records in Attio: account, name, title, email, and last touch.
2. Mark rows missing a title or an email as not ready. Do not guess the missing value.
3. Among complete rows, order them by account tier and days since last touch.
4. Return the top 20 ready contacts and a separate list of not-ready rows with the field to fill.
5. Leave the order as a comment. Do not reorder the table.
Fill missing titles and companies in Clay, and use LinkedIn only to check a title the other sources do not have.

Rules:
- Never send email.
- Never fill a blank with a guessed address.

## Guardrails

- Marks gaps and proposes an order. Never emails a contact.
- Does not invent titles, emails, or phone numbers.

## Pairs with

Knock templates that work well with this skill:

- workflows: `invite-with-reminder`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
