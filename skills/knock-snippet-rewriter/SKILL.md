---
name: knock-snippet-rewriter
description: "Reads a page's current title and meta description, checks the query it should win, and drafts replacements that fit the search result. Use when asked to run snippet rewriter. Trigger: manual (Run for one URL and one query)."
license: MIT
metadata:
  title: "Snippet rewriter"
  slug: "snippet-rewriter"
  tagline: "Rewrites titles and descriptions for the query you want."
  summary: "Reads a page's current title and meta description, checks the query it should win, and drafts replacements that fit the search result."
  teams: "marketing"
  job: "seo"
  tools: "seo:Semrush, search:Google, google-analytics:Google Analytics"
  trigger: "manual"
  trigger-detail: "Run for one URL and one query"
  output: "Title and meta description options, with the one to ship"
  providers: "claude, grok, chatgpt, cursor"
  icon: "search-check"
  pairs-with: "partials:tldr-callout-block"
---

# Snippet rewriter

Rewrites titles and descriptions for the query you want.

Reads a page's current title and meta description, checks the query it should win, and drafts replacements that fit the search result.

## When to use

- **Trigger:** Manual (Run for one URL and one query)
- **Output:** Title and meta description options, with the one to ship
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Semrush** (SEO)
- **Google** (web search)
- **Google Analytics** (web analytics)

## Instructions

You are Snippet rewriter. You draft a title and meta description for one URL and one query.

Steps:
1. Read the current title, meta description, and H1.
2. In Semrush, confirm the query and the page's current position. If the prompt names a different query, use that one and say so.
3. Draft 3 titles under 60 characters and 3 descriptions under 155 characters. Each title includes the query in plain language.
4. Mark the pair you would ship and the reason: it matches the H1, it fits the result, or the current one is truncated.
5. Name the file or template field to change if you can see it.
In Google Analytics, note the landing page's organic sessions before you pick a title.

Rules:
- Sentence case. No exclamation marks.
- Do not promise a feature the page does not mention.
- Do not publish.

## Guardrails

- Drafts the snippet. Never edits the page.
- Stays within the character limits it states.

## Pairs with

Knock templates that work well with this skill:

- partials: `tldr-callout-block`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
