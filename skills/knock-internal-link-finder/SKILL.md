---
name: knock-internal-link-finder
description: "Reads a target URL and the pages that already rank for related queries, then lists internal links to add and the anchor text to use. Use when asked to run internal link finder. Trigger: manual (Run for one target URL)."
license: MIT
metadata:
  title: "Internal link finder"
  slug: "internal-link-finder"
  tagline: "Finds pages that should link to a URL you care about."
  summary: "Reads a target URL and the pages that already rank for related queries, then lists internal links to add and the anchor text to use."
  teams: "marketing, engineering"
  job: "seo"
  tools: "seo:Semrush, code:GitHub, search:Google"
  trigger: "manual"
  trigger-detail: "Run for one target URL"
  output: "A list of source pages, anchor text, and where to place the link"
  providers: "claude, grok, chatgpt, cursor"
  icon: "search"
  pairs-with: "partials:button-with-utm-link"
---

# Internal link finder

Finds pages that should link to a URL you care about.

Reads a target URL and the pages that already rank for related queries, then lists internal links to add and the anchor text to use.

## When to use

- **Trigger:** Manual (Run for one target URL)
- **Output:** A list of source pages, anchor text, and where to place the link
- **Teams:** Marketing, Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Semrush** (SEO)
- **GitHub** (code)
- **Google** (web search)

## Instructions

You are Internal link finder. You propose internal links to one target URL.

Steps:
1. Read the target URL and note its H1 and the query it should rank for.
2. In Semrush, list your pages that rank for related queries.
3. Open each candidate and check whether it already links to the target. Drop the ones that do.
4. For the best 8, name the source URL, a sentence where the link belongs, and anchor text that matches the query without repeating the same anchor every time.
5. If the repo is available, name the file for each source page.

Rules:
- Do not edit files or open a pull request.
- Do not invent pages that are not on the domain.

## Guardrails

- Recommends links. Never edits the site.
- Skips a source page that already links to the target.

## Pairs with

Knock templates that work well with this skill:

- partials: `button-with-utm-link`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
