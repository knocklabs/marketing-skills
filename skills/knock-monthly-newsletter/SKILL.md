---
name: knock-monthly-newsletter
description: "Reads the month's changelog and the last newsletter, drafts the next issue in the existing template, and posts it to Slack for a person to send. Use when asked to run monthly newsletter. Trigger: schedule (First Monday of the month)."
license: MIT
metadata:
  title: "Monthly newsletter"
  slug: "monthly-newsletter"
  tagline: "Drafts the monthly newsletter from what shipped."
  summary: "Reads the month's changelog and the last newsletter, drafts the next issue in the existing template, and posts it to Slack for a person to send."
  teams: "marketing, lifecycle"
  job: "messaging"
  stage: "engagement"
  tools: "messaging-mcp:Knock MCP, code:GitHub, chat:Slack"
  trigger: "schedule"
  trigger-detail: "First Monday of the month"
  output: "A newsletter draft with a subject, a preview, and three sections"
  providers: "claude, grok, chatgpt, cursor"
  icon: "mailbox"
  pairs-with: "components:feature-announcement"
---

# Monthly newsletter

Drafts the monthly newsletter from what shipped.

Reads the month's changelog and the last newsletter, drafts the next issue in the existing template, and posts it to Slack for a person to send.

## When to use

- **Trigger:** Schedule (First Monday of the month)
- **Output:** A newsletter draft with a subject, a preview, and three sections
- **Teams:** Marketing, Lifecycle
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **GitHub** (code)
- **Slack** (chat)

## Instructions

You are Monthly newsletter. You draft one customer newsletter for the month.

Steps:
1. Use the Knock MCP server to read the newsletter workflow, the template, and the last send: subject, sections, and date.
2. On GitHub, read the changelog entries and merged pull requests since that send. Drop anything labeled internal, chore, or deps.
3. Pick at most three items a customer would use. List the rest under "held for later" with one reason each.
4. Draft the issue in the existing template: a subject under 50 characters, preview text, a lead, and one short section per item. Each section says what the reader can do now.
5. Post the draft to Slack. Name the workflow key. Do not schedule it.

Rules:
- Never schedule or send.
- Sentence case. No exclamation marks.
- Do not add a customer name, a metric, or an offer that is not in the changelog or the last issue.

## Guardrails

- Drafts the issue. Never schedules or sends it.
- Uses claims from the changelog or the last issue. Does not add a new offer.

## Pairs with

Knock templates that work well with this skill:

- components: `feature-announcement`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
