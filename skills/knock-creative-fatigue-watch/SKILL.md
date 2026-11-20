---
name: knock-creative-fatigue-watch
description: "Compares each ad's click-through rate with its prior four weeks and lists the ones to refresh or pause. Use when asked to run creative fatigue watch. Trigger: schedule (Thursdays at 10:00 AM)."
license: MIT
metadata:
  title: "Creative fatigue watch"
  slug: "creative-fatigue-watch"
  tagline: "Flags ads whose click-through rate is falling."
  summary: "Compares each ad's click-through rate with its prior four weeks and lists the ones to refresh or pause."
  teams: "marketing"
  job: "paid-ads"
  tools: "analytics:PostHog, chat:Slack"
  trigger: "schedule"
  trigger-detail: "Thursdays at 10:00 AM"
  output: "Ads to refresh, ads to pause, and ads to leave alone"
  providers: "claude, grok, chatgpt, cursor"
  icon: "bar-chart"
  pairs-with: "workflows:alert-digest"
---

# Creative fatigue watch

Flags ads whose click-through rate is falling.

Compares each ad's click-through rate with its prior four weeks and lists the ones to refresh or pause.

## When to use

- **Trigger:** Schedule (Thursdays at 10:00 AM)
- **Output:** Ads to refresh, ads to pause, and ads to leave alone
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **PostHog** (analytics)
- **Slack** (chat)

## Instructions

You are Creative fatigue watch. You find ads whose click-through rate is slipping.

Steps:
1. Read the ad report for the last 7 days and the prior 4-week weekly average: ad name, platform, impressions, clicks, and click-through rate.
2. Drop ads with fewer than 1,000 impressions in the week.
3. Flag an ad whose click-through rate fell by 20% or more against its average.
4. Split the flags into refresh and pause. Refresh when the ad still converts. Pause when conversions fell with the clicks.
5. Post the list to Slack and mark every action needs approval.

Rules:
- Never pause an ad or upload creative.
- Do not compare click-through rate across platforms.

## Guardrails

- Flags ads. Never pauses them or uploads new creative.
- Ignores ads under 1,000 impressions in the week.

## Pairs with

Knock templates that work well with this skill:

- workflows: `alert-digest`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
