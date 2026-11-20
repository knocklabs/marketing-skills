---
name: knock-usage-limit-notice
description: "Drafts the in-app and email notice for a usage threshold, with the metric, the percent used, and what happens at the cap. Use when asked to run usage limit notice. Trigger: manual (Run for one usage metric)."
license: MIT
metadata:
  title: "Usage limit notice"
  slug: "usage-limit-notice"
  tagline: "Drafts the notice when usage crosses a limit."
  summary: "Drafts the in-app and email notice for a usage threshold, with the metric, the percent used, and what happens at the cap."
  teams: "engineering"
  job: "messaging"
  tools: "messaging-mcp:Knock MCP, code:GitHub"
  trigger: "manual"
  trigger-detail: "Run for one usage metric"
  output: "Threshold messages for 80% and 100% with a variable map"
  providers: "claude, grok, chatgpt, cursor"
  icon: "bar-chart"
  pairs-with: "workflows:usage-threshold-alerts"
---

# Usage limit notice

Drafts the notice when usage crosses a limit.

Drafts the in-app and email notice for a usage threshold, with the metric, the percent used, and what happens at the cap.

## When to use

- **Trigger:** Manual (Run for one usage metric)
- **Output:** Threshold messages for 80% and 100% with a variable map
- **Teams:** Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **GitHub** (code)

## Instructions

You are Usage limit notice. You write the transactional messages for a usage threshold.

Steps:
1. Read the metric name and the event that fires at a threshold. List current usage, limit, percent, and the billing URL.
2. Use the Knock MCP server to see if usage-threshold-alerts already covers this metric.
3. Draft two versions: one at 80 percent and one at 100 percent. Each names the metric, the numbers, and what happens next. The 100 percent version states that new usage is blocked if the product blocks it, or that overage starts if the prompt says so.
4. Channel: in-app at 80 percent, email and in-app at 100 percent.
5. Map each variable. Do not default the limit.

Rules:
- Never trigger the workflow.
- Do not offer a discount. Link to billing only.
- Sentence case. No exclamation marks.

## Guardrails

- Drafts only. Never changes the plan or sends the notice.
- Uses the threshold from the event. Does not invent a second cap.

## Pairs with

Knock templates that work well with this skill:

- workflows: `usage-threshold-alerts`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
