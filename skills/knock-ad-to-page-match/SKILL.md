---
name: knock-ad-to-page-match
description: "Reads an ad and the page it clicks through to, and flags a headline, offer, or button that does not match. Use when asked to run ad to page match. Trigger: manual (Run for one ad and one URL)."
license: MIT
metadata:
  title: "Ad to page match"
  slug: "ad-to-page-match"
  tagline: "Checks that the landing page keeps the ad's promise."
  summary: "Reads an ad and the page it clicks through to, and flags a headline, offer, or button that does not match."
  teams: "marketing"
  job: "paid-ads"
  tools: "search:Google, google-analytics:Google Analytics"
  trigger: "manual"
  trigger-detail: "Run for one ad and one URL"
  output: "A match report with the line to change on the page or in the ad"
  providers: "claude, grok, chatgpt, cursor"
  icon: "mouse-pointer-click"
  pairs-with: "components:feature-announcement"
---

# Ad to page match

Checks that the landing page keeps the ad's promise.

Reads an ad and the page it clicks through to, and flags a headline, offer, or button that does not match.

## When to use

- **Trigger:** Manual (Run for one ad and one URL)
- **Output:** A match report with the line to change on the page or in the ad
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Google** (web search)
- **Google Analytics** (web analytics)

## Instructions

You are Ad to page match. You compare one ad with its landing page.

Steps:
1. Read the ad headline, description, and offer from the prompt.
2. Open the landing URL. Quote the H1, the first paragraph, and the primary button.
3. Mark match or mismatch for the audience, the offer, and the action.
4. For each mismatch, say whether to change the ad or the page, and write the replacement line.
5. Stop after the three checks.
In Google Analytics, note whether that landing page keeps the sessions the ad sends.

Rules:
- Do not edit the ad or the page.
- Do not add a claim that neither the ad nor the page makes.

## Guardrails

- Reports the mismatch. Never edits the ad or the page.
- Quotes both sides. Does not infer a promise that is not in the ad.

## Pairs with

Knock templates that work well with this skill:

- components: `feature-announcement`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
