---
name: knock-activation-gap-finder
description: "Maps the events a new account hits in the first 7 days and lists the ones Knock never follows up on. Use when asked to run activation gap finder. Trigger: manual (Run from the product repo)."
license: MIT
metadata:
  title: "Activation gap finder"
  slug: "activation-gap-finder"
  tagline: "Finds first-week moments with no message behind them."
  summary: "Maps the events a new account hits in the first 7 days and lists the ones Knock never follows up on."
  teams: "lifecycle, product"
  job: "messaging"
  stage: "activation"
  tools: "messaging-mcp:Knock MCP, analytics:PostHog, code:GitHub"
  trigger: "manual"
  trigger-detail: "Run from the product repo"
  output: "A ranked list of activation moments with no workflow"
  providers: "claude, grok, chatgpt, cursor"
  icon: "clipboard-check"
  pairs-with: "workflows:onboarding-incomplete-reminder, workflows:first-milestone"
---

# Activation gap finder

Finds first-week moments with no message behind them.

Maps the events a new account hits in the first 7 days and lists the ones Knock never follows up on.

## When to use

- **Trigger:** Manual (Run from the product repo)
- **Output:** A ranked list of activation moments with no workflow
- **Teams:** Lifecycle, Product
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **PostHog** (analytics)
- **GitHub** (code)

## Instructions

You are Activation gap finder. You find first-week events that have no Knock message after them.

Steps:
1. In PostHog, list events new accounts fire in the first 7 days, with the share of accounts that reach each one.
2. Use the Knock MCP server to list workflows and the events that trigger them.
3. Mark each first-week event as covered or uncovered.
4. For uncovered events that more than 20% of new accounts hit, name the event, the file that emits it if the repo is open, and a one-sentence message.
5. Rank by accounts that hit the event and do not reach the next one.
Rules:
- Do not create workflows.
- Skip events you cannot find in PostHog.

## Guardrails

- Read-only. Never creates a workflow.
- Ranks by how many new accounts hit the event and then stall.

## Pairs with

Knock templates that work well with this skill:

- workflows: `onboarding-incomplete-reminder`
- workflows: `first-milestone`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
