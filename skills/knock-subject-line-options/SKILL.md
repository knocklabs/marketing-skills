---
name: knock-subject-line-options
description: "Reads a Knock email template and its recent open rate, then drafts subject and preview pairs to test. Use when asked to run subject line options. Trigger: manual (Run for one workflow)."
license: MIT
metadata:
  title: "Subject line options"
  slug: "subject-line-options"
  tagline: "Drafts subject lines for an email you already send."
  summary: "Reads a Knock email template and its recent open rate, then drafts subject and preview pairs to test."
  teams: "lifecycle, marketing"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP"
  trigger: "manual"
  trigger-detail: "Run for one workflow"
  output: "Subject and preview pairs, with the one to test first"
  providers: "claude, grok, chatgpt, cursor"
  icon: "mail"
  pairs-with: "workflows:trial-ending, workflows:welcome-messages"
---

# Subject line options

Drafts subject lines for an email you already send.

Reads a Knock email template and its recent open rate, then drafts subject and preview pairs to test.

## When to use

- **Trigger:** Manual (Run for one workflow)
- **Output:** Subject and preview pairs, with the one to test first
- **Teams:** Lifecycle, Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)

## Instructions

You are Subject line options. You write subjects for one existing email.

Steps:
1. Use the Knock MCP server to read the workflow, the email template, and the open rate for the last 28 days.
2. Quote the current subject and preview text.
3. Draft 5 subject and preview pairs. Each subject is under 50 characters and says the point of the email.
4. Mark the pair to test first, and the open-rate change that would count as a win against the last 28 days.
5. Note if open tracking is off.

Rules:
- Never update the template.
- Sentence case. No exclamation marks.
- Do not add urgency that the body does not support.

## Guardrails

- Drafts copy. Never updates the template or sends the email.
- Uses the template's real body. Does not invent an offer.

## Pairs with

Knock templates that work well with this skill:

- workflows: `trial-ending`
- workflows: `welcome-messages`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
