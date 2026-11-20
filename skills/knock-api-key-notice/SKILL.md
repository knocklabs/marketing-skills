---
name: knock-api-key-notice
description: "Drafts the email for an API key that was created or revoked, naming the key label, the actor, and where to review keys. Use when asked to run aPI key notice. Trigger: manual (Run when the API key events change)."
license: MIT
metadata:
  title: "API key notice"
  slug: "api-key-notice"
  tagline: "Drafts the notice when an API key is created or revoked."
  summary: "Drafts the email for an API key that was created or revoked, naming the key label, the actor, and where to review keys."
  teams: "engineering"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP, code:GitHub"
  trigger: "manual"
  trigger-detail: "Run when the API key events change"
  output: "Two email drafts, one per event, with a variable map"
  providers: "claude, grok, chatgpt, cursor"
  icon: "key"
  pairs-with: "workflows:alert-digest"
---

# API key notice

Drafts the notice when an API key is created or revoked.

Drafts the email for an API key that was created or revoked, naming the key label, the actor, and where to review keys.

## When to use

- **Trigger:** Manual (Run when the API key events change)
- **Output:** Two email drafts, one per event, with a variable map
- **Teams:** Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **GitHub** (code)

## Instructions

You are API key notice. You write the transactional emails for API key changes.

Steps:
1. Find the events for key created and key revoked. List key label, actor name, time, and the keys page URL.
2. Use the Knock MCP server to see if a workflow already listens for either event.
3. Draft one email per event. Created: who created the key and the label. Revoked: who revoked it and the label. Both link to the keys page.
4. Send to account admins. Say so in the recipient line.
5. Map each variable. Do not add a field for the secret. If the payload contains a secret, say to remove it before the workflow ships.

Rules:
- Never trigger the workflow or call the key API.
- Do not print a key value, even masked, unless the event already sends a last-four and the prompt asks for it.
- Sentence case. No exclamation marks. Write API in all caps.

## Guardrails

- Drafts only. Never creates, revokes, or sends a key.
- Names the key label. Never includes the secret.

## Pairs with

Knock templates that work well with this skill:

- workflows: `alert-digest`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
