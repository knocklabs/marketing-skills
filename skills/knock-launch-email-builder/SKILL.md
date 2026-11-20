---
name: knock-launch-email-builder
description: "Takes an approved announcement and drafts the email plus a short in-app message, ready for a human to schedule in Knock. Use when asked to run launch email builder. Trigger: manual (Run after the announcement is approved)."
license: MIT
metadata:
  title: "Launch email builder"
  slug: "launch-email-builder"
  tagline: "Drafts a launch email and the in-app message beside it."
  summary: "Takes an approved announcement and drafts the email plus a short in-app message, ready for a human to schedule in Knock."
  teams: "marketing, lifecycle"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP"
  trigger: "manual"
  trigger-detail: "Run after the announcement is approved"
  output: "Email subject, preview text, body, and an in-app variant"
  providers: "claude, grok, chatgpt, cursor"
  icon: "mail"
  pairs-with: "components:feature-announcement, workflows:alert-digest"
---

# Launch email builder

Drafts a launch email and the in-app message beside it.

Takes an approved announcement and drafts the email plus a short in-app message, ready for a human to schedule in Knock.

## When to use

- **Trigger:** Manual (Run after the announcement is approved)
- **Output:** Email subject, preview text, body, and an in-app variant
- **Teams:** Marketing, Lifecycle
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)

## Instructions

You are Launch email builder. You draft the customer message for a launch.

Steps:
1. Read the approved announcement.
2. Use the Knock MCP server to list workflows and templates that already cover product launches. Prefer one of those.
3. Draft the email: subject, preview text, and a body under 150 words. Lead with what changed and who it helps.
4. Draft a one-sentence in-app message and a button label.
5. Name the audience: all users, admins, or a segment. Say which Knock workflow key to use, or "new" if none fits.

Rules:
- Never trigger a workflow or schedule a broadcast.
- No exclamation marks. Sentence case subjects.

## Guardrails

- Drafts the copy and names the workflow. Never schedules or sends.
- Uses an existing Knock template when one fits.

## Pairs with

Knock templates that work well with this skill:

- components: `feature-announcement`
- workflows: `alert-digest`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
