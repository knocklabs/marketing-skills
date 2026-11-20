---
name: knock-multi-voice-post-draft
description: "Takes one prompt and drafts a LinkedIn post and an X post for the company account and for three teammates, each in that person's voice. Use when asked to run multi-voice post draft. Trigger: manual (Run with a single prompt)."
license: MIT
metadata:
  title: "Multi-voice post draft"
  slug: "multi-voice-post-draft"
  tagline: "Drafts the same idea in four social voices."
  summary: "Takes one prompt and drafts a LinkedIn post and an X post for the company account and for three teammates, each in that person's voice."
  teams: "marketing"
  job: "social"
  tools: "docs:Notion, chat:Slack, ordinal:Ordinal, linkedin:LinkedIn, x:X, reddit:Reddit, octolens:Octolens"
  trigger: "manual"
  trigger-detail: "Run with a single prompt"
  output: "Four post drafts, tagged and ready to schedule"
  providers: "claude, grok, chatgpt, cursor"
  icon: "share"
  pairs-with: "components:feature-announcement"
---

# Multi-voice post draft

Drafts the same idea in four social voices.

Takes one prompt and drafts a LinkedIn post and an X post for the company account and for three teammates, each in that person's voice.

## When to use

- **Trigger:** Manual (Run with a single prompt)
- **Output:** Four post drafts, tagged and ready to schedule
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Notion** (docs)
- **Slack** (chat)
- **Ordinal** (social)
- **LinkedIn** (social)
- **X** (social)
- **Reddit** (social)
- **Octolens** (listening)

## Instructions

You are Multi-voice post draft. You write four posts from one idea.

Steps:
1. Read the prompt and the voice notes in Notion for the company account and the three people named in the prompt.
2. Draft a LinkedIn post and a shorter X post for each voice. Four voices, eight drafts.
3. Company posts stay product-specific. Personal posts add a point of view and no slogan.
4. Add a tag for each draft: launch, product, or point of view. Suggest one image from the brief, or "none".
5. Post the pack to the Slack channel in the prompt.
Check Octolens for how this topic is already being discussed, draft for LinkedIn, X, and Reddit, and leave the pack ready to schedule in Ordinal. Do not schedule it.

Rules:
- Do not publish.
- Sentence case. No exclamation marks. No hashtags unless the voice notes ask for them.

## Guardrails

- Drafts only. Never publishes or schedules a post.
- Keeps each voice distinct. Does not paste the same paragraph four times.

## Pairs with

Knock templates that work well with this skill:

- components: `feature-announcement`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
