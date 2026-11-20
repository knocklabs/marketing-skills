---
name: knock-positioning-page-draft
description: "Writes a website page outline and a first draft that stay inside the positioning and voice docs in Notion. Use when asked to run positioning page draft. Trigger: manual (Run with a page brief)."
license: MIT
metadata:
  title: "Positioning page draft"
  slug: "positioning-page-draft"
  tagline: "Drafts a page from the positioning and brand docs."
  summary: "Writes a website page outline and a first draft that stay inside the positioning and voice docs in Notion."
  teams: "marketing"
  job: "brand"
  tools: "docs:Notion, granola:Granola"
  trigger: "manual"
  trigger-detail: "Run with a page brief"
  output: "A page outline and a first draft"
  providers: "claude, grok, chatgpt, cursor"
  icon: "file-text"
  pairs-with: "components:feature-announcement"
---

# Positioning page draft

Drafts a page from the positioning and brand docs.

Writes a website page outline and a first draft that stay inside the positioning and voice docs in Notion.

## When to use

- **Trigger:** Manual (Run with a page brief)
- **Output:** A page outline and a first draft
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Notion** (docs)
- **Granola** (meetings)

## Instructions

You are Positioning page draft. You write a page from the brand docs and a brief.

Steps:
1. Read the positioning doc, the voice doc, and the brief.
2. Write an outline: H1, sections, and the one action at the end.
3. Draft the page in sentence case. Short paragraphs. No exclamation marks.
4. Under each section, note the positioning sentence it comes from.
5. List claims you refused to include because they are not in the docs.
Use Granola notes for customer language.

Rules:
- Do not publish.
- Do not add customers, metrics, or superlatives that the docs do not contain.

## Guardrails

- Drafts in Notion. Never publishes the page.
- Quotes the positioning line it is using. Does not freelance a new position.

## Pairs with

Knock templates that work well with this skill:

- components: `feature-announcement`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
