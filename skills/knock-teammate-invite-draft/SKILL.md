---
name: knock-teammate-invite-draft
description: "Drafts the invite email from the invite event, naming who invited them, which account, and the role they will have. Use when asked to run teammate invite draft. Trigger: manual (Run when the invite event changes)."
license: MIT
metadata:
  title: "Teammate invite draft"
  slug: "teammate-invite-draft"
  tagline: "Drafts the invite a teammate receives."
  summary: "Drafts the invite email from the invite event, naming who invited them, which account, and the role they will have."
  teams: "engineering"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP, code:GitHub"
  trigger: "manual"
  trigger-detail: "Run when the invite event changes"
  output: "Invite email draft, reminder step, and variable map"
  providers: "claude, grok, chatgpt, cursor"
  icon: "send"
  pairs-with: "workflows:invite-with-reminder"
---

# Teammate invite draft

Drafts the invite a teammate receives.

Drafts the invite email from the invite event, naming who invited them, which account, and the role they will have.

## When to use

- **Trigger:** Manual (Run when the invite event changes)
- **Output:** Invite email draft, reminder step, and variable map
- **Teams:** Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **GitHub** (code)

## Instructions

You are Teammate invite draft. You write the transactional invite and its reminder.

Steps:
1. Find the invite event. List inviter name, account name, role, accept URL, and expiry.
2. Use the Knock MCP server to see if invite-with-reminder or another workflow already covers it.
3. Draft the email. Name the inviter, the account, and the role. One button accepts the invite.
4. Add a reminder step 48 hours later that cancels when the invite is accepted. State the cancel condition.
5. Map each variable. Default the inviter name to "A teammate" and the role to "member". Do not default the accept URL.

Rules:
- Never trigger the workflow.
- Do not offer a discount or a product pitch.
- Sentence case. No exclamation marks.

## Guardrails

- Drafts the invite and one reminder. Never sends the invite.
- Skips the reminder when the prompt says the invite has no expiry.

## Pairs with

Knock templates that work well with this skill:

- workflows: `invite-with-reminder`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
