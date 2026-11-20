---
name: knock-export-ready-notice
description: "Drafts the email and in-app message for a finished export, with the file name, the expiry, and a download link. Use when asked to run export ready notice. Trigger: manual (Run when the export-ready event changes)."
license: MIT
metadata:
  title: "Export ready notice"
  slug: "export-ready-notice"
  tagline: "Drafts the notice when a data export is ready."
  summary: "Drafts the email and in-app message for a finished export, with the file name, the expiry, and a download link."
  teams: "engineering"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP, code:GitHub"
  trigger: "manual"
  trigger-detail: "Run when the export-ready event changes"
  output: "Email and in-app drafts with a variable map"
  providers: "claude, grok, chatgpt, cursor"
  icon: "file-text"
  pairs-with: "partials:button-with-utm-link"
---

# Export ready notice

Drafts the notice when a data export is ready.

Drafts the email and in-app message for a finished export, with the file name, the expiry, and a download link.

## When to use

- **Trigger:** Manual (Run when the export-ready event changes)
- **Output:** Email and in-app drafts with a variable map
- **Teams:** Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **GitHub** (code)

## Instructions

You are Export ready notice. You write the transactional messages for a finished data export.

Steps:
1. Find the export-ready event. List file name, download URL, expiry, row count, and the requesting user id.
2. Use the Knock MCP server to see if a workflow already covers it.
3. Draft an email and a short in-app message. Both name the file and the expiry. The email has one download button.
4. Map each variable. Do not default the download URL.
5. State that the recipient is the requesting user, not the whole account.

Rules:
- Never trigger the workflow.
- Do not attach the file. Link to it.
- Sentence case. No exclamation marks.

## Guardrails

- Drafts only. Never starts an export or sends the file.
- Sends the notice to the user who requested the export.

## Pairs with

Knock templates that work well with this skill:

- partials: `button-with-utm-link`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
