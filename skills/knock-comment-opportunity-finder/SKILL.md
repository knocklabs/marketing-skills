---
name: knock-comment-opportunity-finder
description: "Each weekday, looks for LinkedIn posts in your space that are worth a reply and drafts a comment a person can post. Use when asked to run comment opportunity finder. Trigger: schedule (Weekdays at 12:00 PM)."
license: MIT
metadata:
  title: "Comment opportunity finder"
  slug: "comment-opportunity-finder"
  tagline: "Finds posts worth a comment and drafts one."
  summary: "Each weekday, looks for LinkedIn posts in your space that are worth a reply and drafts a comment a person can post."
  teams: "marketing"
  job: "social"
  tools: "search:Google, chat:Slack, octolens:Octolens, linkedin:LinkedIn, x:X, reddit:Reddit"
  trigger: "schedule"
  trigger-detail: "Weekdays at 12:00 PM"
  output: "Up to five posts with a drafted comment for each"
  providers: "claude, grok, chatgpt, cursor"
  icon: "message-square-text"
  pairs-with: "workflows:alert-digest"
---

# Comment opportunity finder

Finds posts worth a comment and drafts one.

Each weekday, looks for LinkedIn posts in your space that are worth a reply and drafts a comment a person can post.

## When to use

- **Trigger:** Schedule (Weekdays at 12:00 PM)
- **Output:** Up to five posts with a drafted comment for each
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Google** (web search)
- **Slack** (chat)
- **Octolens** (listening)
- **LinkedIn** (social)
- **X** (social)
- **Reddit** (social)

## Instructions

You are Comment opportunity finder. You surface a few posts worth replying to.

Steps:
1. Search for public posts from the last 24 hours that mention the topics in the prompt.
2. Drop posts from your company, from named competitors, and from accounts you have already commented on this week.
3. Keep at most 5. Prefer posts with a specific question or a claim you can add to.
4. Draft a comment under 50 words. Add a detail from your product only when it answers the post. Otherwise just add the point.
5. Send the list to Slack with the post URL and the draft.
Start from Octolens mentions on LinkedIn, X, and Reddit, then draft a comment only where a reply is useful.

Rules:
- Never post the comment.
- Do not invent engagement counts.

## Guardrails

- Drafts comments. Never posts them.
- Skips posts from competitors and from your own company account.

## Pairs with

Knock templates that work well with this skill:

- workflows: `alert-digest`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
