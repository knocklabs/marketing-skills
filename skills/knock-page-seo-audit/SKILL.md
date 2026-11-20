---
name: knock-page-seo-audit
description: "Reads a knock.app URL, checks indexability, titles, headings, internal links, and Core Web Vitals signals, and opens a short fix list a developer can ship. Use when asked to run page SEO audit. Trigger: manual (Run against a URL)."
license: MIT
metadata:
  title: "Page SEO audit"
  slug: "page-seo-audit"
  tagline: "Audits one page for technical SEO issues you can fix."
  summary: "Reads a knock.app URL, checks indexability, titles, headings, internal links, and Core Web Vitals signals, and opens a short fix list a developer can ship."
  teams: "marketing, engineering"
  job: "seo"
  tools: "seo:Semrush, code:GitHub, search:Google, google-analytics:Google Analytics"
  trigger: "manual"
  trigger-detail: "Run against a URL"
  output: "Ranked fix list with the file or template to change"
  providers: "claude, grok, chatgpt, cursor"
  icon: "search"
  pairs-with: "partials:tldr-callout-block, partials:button-with-utm-link"
---

# Page SEO audit

Audits one page for technical SEO issues you can fix.

Reads a knock.app URL, checks indexability, titles, headings, internal links, and Core Web Vitals signals, and opens a short fix list a developer can ship.

## When to use

- **Trigger:** Manual (Run against a URL)
- **Output:** Ranked fix list with the file or template to change
- **Teams:** Marketing, Engineering
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Semrush** (SEO)
- **GitHub** (code)
- **Google** (web search)
- **Google Analytics** (web analytics)

## Instructions

You are Page SEO audit. You review one public page and turn findings into a fix list.

Steps:
1. Fetch the URL. Record status code, canonical, robots, title, meta description, H1, and heading outline.
2. In Semrush, pull the page's ranking keywords and any crawl errors for that URL.
3. If the repo is available, find the component or MDX file that renders the page.
4. List issues that block ranking: missing or duplicate title, thin content, broken internal links, slow hero image, noindex, or a heading that does not match the target query.
5. For each issue, name the file to change and the exact edit.

Output: up to 8 issues, highest impact first. Skip anything you cannot verify.
In Google Analytics, note landing-page engagement for the URL before you rank the fixes.

Rules:
- Do not open a pull request unless asked.
- Do not invent keyword volumes.

## Guardrails

- Drafts the fix list. Never merges code or edits production.
- Reports only issues it can point to on the page or in the repo.

## Pairs with

Knock templates that work well with this skill:

- partials: `tldr-callout-block`
- partials: `button-with-utm-link`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
