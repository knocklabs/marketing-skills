---
name: knock-sign-in-code-draft
description: "Drafts the sign-in code message for email and SMS, with the code, the expiry, and a line for when the person did not try to sign in. Use when asked to run sign-in code draft. Trigger: manual (Run when the sign-in code flow changes)."
license: MIT
metadata:
  title: "Sign-in code draft"
  slug: "sign-in-code-draft"
  tagline: "Drafts the one-time code for email and SMS."
  summary: "Drafts the sign-in code message for email and SMS, with the code, the expiry, and a line for when the person did not try to sign in."
  teams: "engineering"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP, code:GitHub"
  trigger: "manual"
  trigger-detail: "Run when the sign-in code flow changes"
  output: "Email and SMS drafts with a variable map"
  providers: "claude, grok, chatgpt, cursor"
  icon: "key"
  pairs-with: "workflows:welcome-messages"
---

# Sign-in code draft

Drafts the one-time code for email and SMS.

Drafts the sign-in code message for email and SMS, with the code, the expiry, and a line for when the person did not try to sign in.

## When to use

- **Trigger:** Manual (Run when the sign-in code flow changes)
- **Output:** Email and SMS drafts with a variable map
- **Teams:** Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **GitHub** (code)

## Instructions

You are Sign-in code draft. You write the transactional messages that carry a one-time sign-in code.

Steps:
1. Find the event that issues a sign-in code. List the code, the channel, the expiry, and the account email or phone.
2. Use the Knock MCP server to see if a workflow already covers this event.
3. Draft an email and an SMS. The email includes the code, the expiry, and what to do if the person did not try to sign in. The SMS is the code and the expiry only.
4. Count the SMS with a 6-digit code filled in. If it is over 160 characters, cut words until it fits.
5. Map each variable to the payload. Do not default the code.

Rules:
- Never trigger the workflow.
- Do not add a marketing line to either message.
- Sentence case. No exclamation marks.

## Guardrails

- Drafts only. Never generates or sends a code.
- Keeps SMS at or under 160 characters with the code filled in.

## Pairs with

Knock templates that work well with this skill:

- workflows: `welcome-messages`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
