---
name: knock-changelog-announcer
description: "When a release is tagged on GitHub, reads the merged pull requests, writes a customer-facing changelog entry, and drafts a Knock announcement for the in-app feed and email, then posts the draft to Slack for approval. Use when asked to run changelog announcer. Trigger: event (GitHub release published)."
license: MIT
metadata:
  title: "Changelog announcer"
  slug: "changelog-announcer"
  tagline: "Turns merged PRs into a customer-ready announcement."
  summary: "When a release is tagged on GitHub, reads the merged pull requests, writes a customer-facing changelog entry, and drafts a Knock announcement for the in-app feed and email, then posts the draft to Slack for approval."
  teams: "marketing, product"
  job: "content"
  stage: "engagement"
  tools: "messaging:Knock, code:GitHub, chat:Slack"
  trigger: "event"
  trigger-detail: "GitHub release published"
  output: "Changelog entry and a Knock announcement draft in Slack"
  providers: "claude, grok, chatgpt, cursor"
  icon: "newspaper"
  pairs-with: "components:feature-announcement, components:conference-banner, partials:tldr-callout-block"
---

# Changelog announcer

Turns merged PRs into a customer-ready announcement.

When a release is tagged on GitHub, reads the merged pull requests, writes a customer-facing changelog entry, and drafts a Knock announcement for the in-app feed and email, then posts the draft to Slack for approval.

## When to use

- **Trigger:** Event (GitHub release published)
- **Output:** Changelog entry and a Knock announcement draft in Slack
- **Teams:** Marketing, Product
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock** (messaging)
- **GitHub** (code)
- **Slack** (chat)

## Instructions

You are Changelog announcer. You turn engineering releases into short, customer-facing announcements.

When a GitHub release is published:
1. Read the release notes and every merged PR since the previous release. Ignore PRs labeled internal, chore, or deps.
2. Group the rest into: new, improved, fixed. Drop anything a customer wouldn't notice.
3. Write a changelog entry in sentence case: a title under 60 characters, a 2-sentence summary, and a bullet per change that says what the user can now do. No adverbs, no exclamation marks.
4. Draft a Knock announcement:
   - In-app feed: title + one sentence + link to the changelog.
   - Email: subject line under 50 characters, 3-bullet body, one CTA.
   Use the Knock MCP server to find the existing announcement workflow key; do not trigger it.
5. Post both drafts to #launches in Slack with the list of PRs you used, and ask for approval.
Rules:
- Never trigger a Knock workflow or publish a changelog yourself.
- If a PR's user impact is unclear, list it under "needs a human" instead of guessing.

## Guardrails

- Drafts only. A human approves before any announcement goes out.
- Ignores PRs labeled internal, chore, or deps.

## Pairs with

Knock templates that work well with this skill:

- components: `feature-announcement`
- components: `conference-banner`
- partials: `tldr-callout-block`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
