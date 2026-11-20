# How to add new skills

This guide explains how skills in this repository are structured and how to add one. Skills follow the [Agent Skills specification](https://agentskills.io/specification). The knock.app skills directory renders its `/skills` pages from these files, so keep the metadata keys below stable.

## Skill structure

```
skills/
└── knock-your-skill-name/
    ├── SKILL.md                  # Frontmatter plus core instructions (required)
    └── references/
        ├── use-cases.md          # How each team uses the skill
        ├── example-output.md     # A sample of what the skill produces
        └── faq.md                # Common questions
```

## Naming conventions

- Prefix every skill folder with `knock-` and use kebab-case after it: `knock-churn-watch`.
- The `name` field in `SKILL.md` must match the folder name.
- `metadata.slug` is the name without the `knock-` prefix. The site uses it for URLs.
- Use sentence case for all titles and headings.

## SKILL.md frontmatter

```yaml
---
name: knock-churn-watch
description: "What it does, then when to use it. 1-1024 characters."
license: MIT
metadata:
  title: "Churn watch"
  slug: "churn-watch"
  tagline: "Flags accounts going quiet and drafts a save play."
  summary: "Every Monday, finds accounts whose product usage dropped..."
  teams: "lifecycle"
  job: "messaging"
  stage: "retention"
  tools: "messaging-mcp:Knock MCP, analytics:PostHog, chat:Slack"
  trigger: "schedule"
  trigger-detail: "Mondays at 9:00 AM"
  output: "Slack post with at-risk accounts and draft outreach"
  providers: "claude, grok, chatgpt, cursor"
  icon: "trending-down"
  pairs-with: "workflows:trial-ending, components:feature-announcement"
---
```

Quote every value. All `metadata` values must be strings, per the spec. Lists are comma-separated; split on `,` and trim whitespace.

### Metadata keys

| Key | Required | Format | Meaning |
| --- | --- | --- | --- |
| `title` | Yes | Text | Display title, in sentence case |
| `slug` | Yes | kebab-case | Site URL slug; `name` without the `knock-` prefix |
| `tagline` | Yes | Text | One-line summary for cards |
| `summary` | Yes | Text | Longer description for the detail page |
| `teams` | Yes | List | Team ids from `teams` in `schema.json` |
| `job` | Yes | Id | Job id from `jobs` in `schema.json` |
| `stage` | No | Id | Lifecycle stage id from `stages` in `schema.json` |
| `tools` | Yes | List of `category:Tool` | Category id from `toolCategories` in `schema.json` and the default tool, Knock tools first, e.g. `seo:Semrush` |
| `trigger` | Yes | Id | Trigger id from `triggers` in `schema.json` |
| `trigger-detail` | Yes | Text | When it runs, e.g. `Mondays at 9:00 AM` |
| `output` | Yes | Text | What the skill produces |
| `providers` | Yes | List | Provider ids from `providers` in `schema.json` |
| `icon` | Yes | Icon name | Avatar icon for the skill card |
| `pairs-with` | Yes | List of `type:slug` | Knock templates, where `type` is `workflows`, `components`, or `partials` |
| `based-on` | No | Skill name | Upstream skill this one follows |
| `based-on-source` | No | `owner/repo` | Repository of the upstream skill |
| `based-on-install` | No | Command | Install command for the upstream skill |

## SKILL.md body

The body must work when pasted as-is into ChatGPT, Codex, or Grok Bot, so it cannot depend on files being present. Use these sections, in order:

1. `# Title`, the tagline, and the summary
2. `## When to use`: trigger, output, teams, and where it runs
3. `## Tools`: each tool and its category
4. `## Built on` (only with `based-on`): the upstream skill and its install command
5. `## Instructions`: the core prompt
6. `## Guardrails`: what the skill never does
7. `## Pairs with`: related Knock templates
8. `## References`: relative links to the files in `references/`, marked optional

## Reference files

Each reference file has frontmatter with `title`, `description`, and `category` (the skill name).

- `use-cases.md`: one `## Team` heading per team in `metadata.teams`, followed by a paragraph.
- `example-output.md`: frontmatter also carries `channel` and `heading`; the body repeats them and lists the example as paragraphs. An optional `card` mapping holds the chat card drawn on the skill's knock.app page: `title`, `label`, `detail`, and `primary` are required, and `secondary` is optional. The card is 252px wide, so the title has to fit on one line at 13px and `label` and `detail` at 12px.
- `faq.md`: one `## Question` heading per question, followed by the answer paragraphs.

## Schema, order, and the site

These files are the single source of truth for the knock.app `/skills` directory. The site reads them through `lib/catalog.mjs` and repeats none of them.

- `schema.json`: every allowed team, job, stage, trigger, provider, tool category, and `pairs-with` type, with its display label, plus the required and optional metadata keys. To add or rename one, edit this file. A new tool category also needs a logo on the site, and the site build names any that are missing.
- `directory.json`: `featured` lists skill slugs in the order the directory shows them. Skills not listed follow, sorted by slug, so a new skill needs no entry here.
- `lib/catalog.mjs`: reads, validates, and normalizes every skill. The validator and the site both use it, so a skill that passes `npm run validate` builds on the site.

## Validate

Run `npm run validate` before opening a pull request. The same check runs in CI.
