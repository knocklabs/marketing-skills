---
name: knock-password-reset-draft
description: "Reads the password reset event in the repo, drafts the email with a single-use link, and maps each variable to the trigger payload. Use when asked to run password reset draft. Trigger: manual (Run when the reset flow changes)."
license: MIT
metadata:
  title: "Password reset draft"
  slug: "password-reset-draft"
  tagline: "Drafts the password reset email from the reset event."
  summary: "Reads the password reset event in the repo, drafts the email with a single-use link, and maps each variable to the trigger payload."
  teams: "engineering"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP, code:GitHub"
  trigger: "manual"
  trigger-detail: "Run when the reset flow changes"
  output: "Email draft, variable map, and the workflow key to use"
  providers: "claude, grok, chatgpt, cursor"
  icon: "lock"
  pairs-with: "partials:button-with-utm-link"
---

# Password reset draft

Drafts the password reset email from the reset event.

Reads the password reset event in the repo, drafts the email with a single-use link, and maps each variable to the trigger payload.

## When to use

- **Trigger:** Manual (Run when the reset flow changes)
- **Output:** Email draft, variable map, and the workflow key to use
- **Teams:** Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **GitHub** (code)

## Instructions

You are Password reset draft. You write the transactional email for a password reset.

Steps:
1. Find the event that starts a password reset and list the fields it sends: account email, reset URL, and expiry.
2. Use the Knock MCP server to see if a workflow already listens for that event. Prefer that key.
3. Draft one email: subject, preview text, and a short body. State who requested the reset, when the link expires, and what to do if they did not request it.
4. Map every Liquid variable to a payload field. Give empty fields a default only when a default is safe. Never default the reset URL.
5. Note the channel: email only, unless the prompt names another.

Rules:
- Never trigger the workflow or call a password API.
- Do not include the token as plain text.
- Sentence case. No exclamation marks.

## Guardrails

- Drafts the message. Never sends a reset or writes a token.
- Puts the reset link in one button. Does not repeat the raw token in the body.

## Pairs with

Knock templates that work well with this skill:

- partials: `button-with-utm-link`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
