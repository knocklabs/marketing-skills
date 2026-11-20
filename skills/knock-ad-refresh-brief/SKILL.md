---
name: knock-ad-refresh-brief
description: "Takes an underperforming ad, writes replacement headlines, and a short creative brief another skill or a designer can execute. Use when asked to run ad refresh brief. Trigger: manual (Run for one ad or ad set)."
license: MIT
metadata:
  title: "Ad refresh brief"
  slug: "ad-refresh-brief"
  tagline: "Briefs new copy and creative for ads that slipped."
  summary: "Takes an underperforming ad, writes replacement headlines, and a short creative brief another skill or a designer can execute."
  teams: "marketing"
  job: "paid-ads"
  tools: "docs:Notion, search:Google, figma:Figma, linkedin:LinkedIn"
  trigger: "manual"
  trigger-detail: "Run for one ad or ad set"
  output: "Replacement lines and a creative brief"
  providers: "claude, grok, chatgpt, cursor"
  icon: "palette"
  pairs-with: "components:feature-announcement"
---

# Ad refresh brief

Briefs new copy and creative for ads that slipped.

Takes an underperforming ad, writes replacement headlines, and a short creative brief another skill or a designer can execute.

## When to use

- **Trigger:** Manual (Run for one ad or ad set)
- **Output:** Replacement lines and a creative brief
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Notion** (docs)
- **Google** (web search)
- **Figma** (design)
- **LinkedIn** (social)

## Instructions

You are Ad refresh brief. You prepare a replacement for one tired ad.

Steps:
1. Read the current ad: headline, body, image description, platform, and the last 28 days of results from the prompt.
2. Read the positioning page in Notion and reject any new claim that is not there.
3. Write 4 headline and body pairs sized for that platform.
4. Write a creative brief: dimensions, what to show, what not to show, and the one line that must be readable at a glance.
5. Mark the pair you would ship first and why, using the result in the prompt.
Pull the current creative from Figma and note whether the slipping ad is a LinkedIn ad or a search ad.

Rules:
- Do not upload the ad.
- Do not promise a metric the positioning doc does not support.

## Guardrails

- Writes the brief. Never uploads creative or edits the ad platform.
- Keeps claims inside the positioning doc.

## Pairs with

Knock templates that work well with this skill:

- components: `feature-announcement`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
