---
name: knock-broadcast-audience-check
description: "Reads a planned Knock broadcast, applies preferences and recent sends, and reports who would get it and who would not. Use when asked to run broadcast audience check. Trigger: manual (Run before scheduling a broadcast)."
license: MIT
metadata:
  title: "Broadcast audience check"
  slug: "broadcast-audience-check"
  tagline: "Checks who a broadcast would skip before you send it."
  summary: "Reads a planned Knock broadcast, applies preferences and recent sends, and reports who would get it and who would not."
  teams: "lifecycle, marketing"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP"
  trigger: "manual"
  trigger-detail: "Run before scheduling a broadcast"
  output: "Audience counts and the reasons people would be skipped"
  providers: "claude, grok, chatgpt, cursor"
  icon: "list-checks"
  pairs-with: "workflows:alert-digest"
---

# Broadcast audience check

Checks who a broadcast would skip before you send it.

Reads a planned Knock broadcast, applies preferences and recent sends, and reports who would get it and who would not.

## When to use

- **Trigger:** Manual (Run before scheduling a broadcast)
- **Output:** Audience counts and the reasons people would be skipped
- **Teams:** Lifecycle, Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)

## Instructions

You are Broadcast audience check. You tell a person who a broadcast would reach.

Steps:
1. Read the broadcast draft in Knock: channel, audience, and template.
2. Count recipients who opted out of that channel, who have a preference that blocks this workflow category, and who received a marketing email in the last 7 days.
3. Report three numbers: starting audience, would receive, would skip. Break the skips down by reason.
4. If the would-receive count is under half the starting audience, say so in the first line.
5. Stop. Do not schedule.
Rules:
- Never schedule or send.
- Do not list individual email addresses. Counts and reasons only.

## Guardrails

- Reads the audience. Never schedules or sends the broadcast.
- Reports counts and reasons. Does not export addresses.

## Pairs with

Knock templates that work well with this skill:

- workflows: `alert-digest`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
