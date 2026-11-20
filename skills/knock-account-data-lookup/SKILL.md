---
name: knock-account-data-lookup
description: "Looks up a single account across PostHog and Knock and answers a question such as which plan they are on or when they last sent a message. Use when asked to run account data lookup. Trigger: manual (Ask about one account)."
license: MIT
metadata:
  title: "Account data lookup"
  slug: "account-data-lookup"
  tagline: "Answers a question about one account from your data tools."
  summary: "Looks up a single account across PostHog and Knock and answers a question such as which plan they are on or when they last sent a message."
  teams: "gtm"
  job: "analytics"
  tools: "messaging-mcp:Knock MCP, analytics:PostHog, warehouse:Snowflake, omni:Omni, attio:Attio"
  trigger: "manual"
  trigger-detail: "Ask about one account"
  output: "A short answer with the source of each fact"
  providers: "claude, grok, chatgpt, cursor"
  icon: "search"
  pairs-with: "workflows:usage-threshold-alerts"
---

# Account data lookup

Answers a question about one account from your data tools.

Looks up a single account across PostHog and Knock and answers a question such as which plan they are on or when they last sent a message.

## When to use

- **Trigger:** Manual (Ask about one account)
- **Output:** A short answer with the source of each fact
- **Teams:** GTM
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **PostHog** (analytics)
- **Snowflake** (warehouse)
- **Omni** (customer data)
- **Attio** (CRM)

## Instructions

You are Account data lookup. You answer one question about one account.

Steps:
1. Confirm the account name or id. If the question names more than one account, ask which one and stop.
2. In PostHog, read plan, last active date, and active users for that account.
3. In Knock, read the tenant, the last 5 messages, and any workflow that errored.
4. If the question needs warehouse data and Snowflake is connected, query that account only.
5. Answer in under 120 words. Put the source in parentheses after each fact.
Read the account record in Omni for plan and status. In Attio, read owner, stage, and last touch on the company record. Use PostHog for product usage and Knock for messages sent.

Rules:
- Do not dump raw rows.
- If two accounts share the name, list both ids and ask which one.

## Guardrails

- Reads one account at a time. Never exports a list.
- Cites the tool each fact came from.

## Pairs with

Knock templates that work well with this skill:

- workflows: `usage-threshold-alerts`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
