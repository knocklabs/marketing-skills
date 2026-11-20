---
name: knock-account-signal-check
description: "Checks the target accounts for pricing, product, hiring, and news changes, writes them on the Attio company, and prepares a Slack alert. Use when asked to run account signal check. Trigger: schedule (Weekdays at 8:00 AM)."
license: MIT
metadata:
  title: "Account signal check"
  slug: "account-signal-check"
  tagline: "Logs the day's account signals for the target list."
  summary: "Checks the target accounts for pricing, product, hiring, and news changes, writes them on the Attio company, and prepares a Slack alert."
  teams: "gtm"
  job: "abm"
  tools: "search:Google, chat:Slack, unify:Unify, clay:Clay, attio:Attio"
  trigger: "schedule"
  trigger-detail: "Weekdays at 8:00 AM"
  output: "Attio notes on the accounts and an unsent Slack alert"
  providers: "claude, grok, chatgpt, cursor"
  icon: "binoculars"
  pairs-with: "workflows:alert-digest"
---

# Account signal check

Logs the day's account signals for the target list.

Checks the target accounts for pricing, product, hiring, and news changes, writes them on the Attio company, and prepares a Slack alert.

## When to use

- **Trigger:** Schedule (Weekdays at 8:00 AM)
- **Output:** Attio notes on the accounts and an unsent Slack alert
- **Teams:** GTM
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Google** (web search)
- **Slack** (chat)
- **Unify** (outbound)
- **Clay** (enrichment)
- **Attio** (CRM)

## Instructions

You are Account signal check. You watch the target list and speak up only when something changed.

Steps:
1. Read the target accounts in Attio.
2. For each account, search pricing pages, docs changelogs, job posts, and news since the last run.
3. If nothing material changed, reply with "No signals" and do not post to Slack.
4. If something changed, write it on the Attio company with the change and the URL.
5. Draft one Slack message that covers every change. Leave it unsent.
Log the signal, enrich the account in Clay, and draft the Unify follow-up without enrolling it.

Rules:
- Never send Slack messages.
- A job post counts only when the role matches the buyers named on the account row.

## Guardrails

- Stays quiet when nothing on the list changed.
- Writes the log and the Slack draft. Never sends the alert.

## Pairs with

Knock templates that work well with this skill:

- workflows: `alert-digest`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
