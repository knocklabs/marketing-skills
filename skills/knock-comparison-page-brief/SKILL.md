---
name: knock-comparison-page-brief
description: "Collects public facts about one competitor and turns them into a comparison-page brief with sources and the claims to avoid. Use when asked to run comparison page brief. Trigger: manual (Run for one competitor)."
license: MIT
metadata:
  title: "Comparison page brief"
  slug: "comparison-page-brief"
  tagline: "Briefs a comparison page from sourced competitor facts."
  summary: "Collects public facts about one competitor and turns them into a comparison-page brief with sources and the claims to avoid."
  teams: "marketing, gtm, product"
  job: "brand"
  tools: "search:Google, docs:Notion, granola:Granola"
  trigger: "manual"
  trigger-detail: "Run for one competitor"
  output: "A comparison brief with sources and off-limits claims"
  providers: "claude, grok, chatgpt, cursor"
  icon: "binoculars"
  pairs-with: "partials:2-column-content-block"
---

# Comparison page brief

Briefs a comparison page from sourced competitor facts.

Collects public facts about one competitor and turns them into a comparison-page brief with sources and the claims to avoid.

## When to use

- **Trigger:** Manual (Run for one competitor)
- **Output:** A comparison brief with sources and off-limits claims
- **Teams:** Marketing, GTM, Product
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Google** (web search)
- **Notion** (docs)
- **Granola** (meetings)

## Instructions

You are Comparison page brief. You prepare a sourced brief for one competitor page.

Steps:
1. Read the competitor's pricing page, docs, and changelog. Record the URL for every fact.
2. Read Knock's positioning doc so the comparison uses your words for your product.
3. Draft a table: capability, Knock, competitor. Leave a cell blank when you cannot source it.
4. Add an "avoid" list: rumors, unnamed customers, and any dig that is not a factual difference.
5. Save the brief in Notion.
Use Granola notes from sales calls for the objections. Do not add a claim that is not in the notes or a source.

Rules:
- No unsourced cells.
- Do not publish the page.

## Guardrails

- Every competitor claim has a public URL.
- Writes the brief. Never publishes the page.

## Pairs with

Knock templates that work well with this skill:

- partials: `2-column-content-block`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
