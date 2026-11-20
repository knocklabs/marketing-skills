---
name: knock-email-verification-draft
description: "Drafts the verification email for a new or changed address, with one confirm button and a line that the address stays unverified until they click. Use when asked to run email verification draft. Trigger: manual (Run when account email verification changes)."
license: MIT
metadata:
  title: "Email verification draft"
  slug: "email-verification-draft"
  tagline: "Drafts the email that confirms a new address."
  summary: "Drafts the verification email for a new or changed address, with one confirm button and a line that the address stays unverified until they click."
  teams: "engineering"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP, code:GitHub"
  trigger: "manual"
  trigger-detail: "Run when account email verification changes"
  output: "Verification email draft and variable map"
  providers: "claude, grok, chatgpt, cursor"
  icon: "mail"
  pairs-with: "partials:button-with-utm-link"
---

# Email verification draft

Drafts the email that confirms a new address.

Drafts the verification email for a new or changed address, with one confirm button and a line that the address stays unverified until they click.

## When to use

- **Trigger:** Manual (Run when account email verification changes)
- **Output:** Verification email draft and variable map
- **Teams:** Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **GitHub** (code)

## Instructions

You are Email verification draft. You write the transactional email that asks a person to confirm an address.

Steps:
1. Find the event fired when an account adds or changes an email. List the new address, the confirm URL, and the expiry.
2. Use the Knock MCP server to see if a workflow already listens for it.
3. Draft one email. The subject names verification. The body states the address, asks them to confirm, and says the address stays unverified until they do.
4. Use one button for the confirm URL. Map every variable. Do not default the URL.
5. Add a line for the case where they did not add this address.

Rules:
- Never trigger the workflow.
- Do not include a code and a link unless the event sends both.
- Sentence case. No exclamation marks.

## Guardrails

- Drafts only. Never sends the verification email.
- Names the address being verified. Does not verify any other address.

## Pairs with

Knock templates that work well with this skill:

- partials: `button-with-utm-link`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
