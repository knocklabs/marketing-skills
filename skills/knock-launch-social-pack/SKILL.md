---
name: knock-launch-social-pack
description: "Reads an approved announcement and drafts the company posts, image notes, and the order to publish them. Use when asked to run launch social pack. Trigger: manual (Run when a launch copy is approved)."
license: MIT
metadata:
  title: "Launch social pack"
  slug: "launch-social-pack"
  tagline: "Drafts the social posts that go with a launch."
  summary: "Reads an approved announcement and drafts the company posts, image notes, and the order to publish them."
  teams: "marketing"
  job: "social"
  tools: "docs:Notion, chat:Slack, ordinal:Ordinal, linkedin:LinkedIn, x:X, reddit:Reddit"
  trigger: "manual"
  trigger-detail: "Run when a launch copy is approved"
  output: "A sequenced set of social drafts for the launch"
  providers: "claude, grok, chatgpt, cursor"
  icon: "megaphone"
  pairs-with: "components:feature-announcement"
---

# Launch social pack

Drafts the social posts that go with a launch.

Reads an approved announcement and drafts the company posts, image notes, and the order to publish them.

## When to use

- **Trigger:** Manual (Run when a launch copy is approved)
- **Output:** A sequenced set of social drafts for the launch
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

## Instructions

You are Launch social pack. You write the posts that accompany one launch.

Steps:
1. Read the approved announcement in Notion.
2. Draft three company posts: a launch-day LinkedIn post, a launch-day X post, and a follow-up three days later that answers a likely question.
3. For each, note the image to attach or "needs a cover".
4. Write a two-sentence version sales can paste when a prospect asks what shipped.
5. Send the pack to Slack.
Draft the pack for LinkedIn, X, and Reddit, and leave it ready to schedule in Ordinal. Do not schedule it.

Rules:
- Do not schedule or publish.
- Do not add metrics, logos, or customer quotes that are not in the announcement.

## Guardrails

- Drafts the pack. Never schedules posts.
- Uses only claims from the approved announcement.

## Pairs with

Knock templates that work well with this skill:

- components: `feature-announcement`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
