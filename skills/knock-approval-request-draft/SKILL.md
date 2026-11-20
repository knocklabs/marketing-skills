---
name: knock-approval-request-draft
description: "Drafts the email and in-app request an approver receives, with what needs a decision, who asked, and links to approve or reject. Use when asked to run approval request draft. Trigger: manual (Run when the approval event changes)."
license: MIT
metadata:
  title: "Approval request draft"
  slug: "approval-request-draft"
  tagline: "Drafts the request sent to an approver."
  summary: "Drafts the email and in-app request an approver receives, with what needs a decision, who asked, and links to approve or reject."
  teams: "engineering"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP, code:GitHub"
  trigger: "manual"
  trigger-detail: "Run when the approval event changes"
  output: "Email and in-app drafts with approve and reject links"
  providers: "claude, grok, chatgpt, cursor"
  icon: "clipboard-check"
  pairs-with: "workflows:replies"
---

# Approval request draft

Drafts the request sent to an approver.

Drafts the email and in-app request an approver receives, with what needs a decision, who asked, and links to approve or reject.

## When to use

- **Trigger:** Manual (Run when the approval event changes)
- **Output:** Email and in-app drafts with approve and reject links
- **Teams:** Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **GitHub** (code)

## Instructions

You are Approval request draft. You write the transactional messages for an approval request.

Steps:
1. Find the approval-requested event. List requester, object name, summary, approve URL, and reject URL.
2. Use the Knock MCP server to see if a workflow already covers it.
3. Draft an email and an in-app message. Both name the requester and the object. The email has two actions: approve and reject.
4. Add a reminder one business day later that cancels when the approval is decided.
5. Map each variable. Do not default either URL.

Rules:
- Never trigger the workflow or call the approval API.
- Do not auto-approve when a field is missing. Stop and list the missing field.
- Sentence case. No exclamation marks.

## Guardrails

- Drafts only. Never approves, rejects, or sends the request.
- Includes both actions. Does not hide reject.

## Pairs with

Knock templates that work well with this skill:

- workflows: `replies`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
