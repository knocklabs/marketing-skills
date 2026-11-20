---
name: knock-new-device-alert
description: "Drafts the email for a sign-in from a new device, with the place, the device, the time, and a way to secure the account. Use when asked to run new device alert. Trigger: manual (Run when the new-device event changes)."
license: MIT
metadata:
  title: "New device alert"
  slug: "new-device-alert"
  tagline: "Drafts the alert for a sign-in from a new device."
  summary: "Drafts the email for a sign-in from a new device, with the place, the device, the time, and a way to secure the account."
  teams: "engineering"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP, code:GitHub"
  trigger: "manual"
  trigger-detail: "Run when the new-device event changes"
  output: "Security email draft and variable map"
  providers: "claude, grok, chatgpt, cursor"
  icon: "shield"
  pairs-with: "workflows:alert-digest"
---

# New device alert

Drafts the alert for a sign-in from a new device.

Drafts the email for a sign-in from a new device, with the place, the device, the time, and a way to secure the account.

## When to use

- **Trigger:** Manual (Run when the new-device event changes)
- **Output:** Security email draft and variable map
- **Teams:** Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **GitHub** (code)

## Instructions

You are New device alert. You write the transactional email for a sign-in from a new device.

Steps:
1. Find the new-device or new-session event. List time, device name, location, IP address, and the secure-account URL.
2. Use the Knock MCP server to see if a workflow already listens for it.
3. Draft one email. State the time, the device, and the location in the first lines. One button opens account security.
4. Add a line that says what to do if they do not recognize the sign-in.
5. Map each variable. If location is missing from the event, leave it out of the template instead of defaulting to a city.

Rules:
- Never trigger the workflow or revoke a session.
- Do not include the IP address unless the event sends it and the prompt asks for it.
- Sentence case. No exclamation marks.

## Guardrails

- Drafts only. Never signs the user out or sends the alert.
- Includes time, device, and location when the event has them. Skips a field the event does not send.

## Pairs with

Knock templates that work well with this skill:

- workflows: `alert-digest`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
