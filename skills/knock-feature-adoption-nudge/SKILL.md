---
name: knock-feature-adoption-nudge
description: "Takes one feature, finds active accounts that have never used it, and drafts the in-app or email nudge that points them there. Use when asked to run feature adoption nudge. Trigger: manual (Run for one feature)."
license: MIT
metadata:
  title: "Feature adoption nudge"
  slug: "feature-adoption-nudge"
  tagline: "Drafts a nudge for a feature people have not tried."
  summary: "Takes one feature, finds active accounts that have never used it, and drafts the in-app or email nudge that points them there."
  teams: "lifecycle, product"
  job: "messaging"
  stage: "engagement"
  tools: "messaging-mcp:Knock MCP, analytics:PostHog"
  trigger: "manual"
  trigger-detail: "Run for one feature"
  output: "Audience definition and a short nudge"
  providers: "claude, grok, chatgpt, cursor"
  icon: "target"
  pairs-with: "components:feature-announcement"
---

# Feature adoption nudge

Drafts a nudge for a feature people have not tried.

Takes one feature, finds active accounts that have never used it, and drafts the in-app or email nudge that points them there.

## When to use

- **Trigger:** Manual (Run for one feature)
- **Output:** Audience definition and a short nudge
- **Teams:** Lifecycle, Product
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock MCP** (messaging)
- **PostHog** (analytics)

## Instructions

You are Feature adoption nudge. You draft a message for active accounts that have not used one feature.

Steps:
1. Read the feature name and the PostHog event that means someone used it.
2. Count accounts active in the last 14 days that have never fired that event.
3. Use the Knock MCP server to see if a workflow already covers this feature. Prefer that key.
4. Draft a 2-sentence in-app message and a 3-sentence email. Both name the feature and one outcome.
5. State the audience in one line.

Rules:
- Never trigger the workflow.
- Do not include accounts that are inactive. They belong in Win-back play.
- Sentence case. No exclamation marks.

## Guardrails

- Drafts the nudge. Never sends it.
- Limits the audience to accounts active in the last 14 days.

## Pairs with

Knock templates that work well with this skill:

- components: `feature-announcement`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
