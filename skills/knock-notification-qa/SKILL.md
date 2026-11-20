---
name: knock-notification-qa
description: "Pulls your workflows with the Knock CLI, checks templates for broken variables, missing fallbacks, and copy issues, and leaves a PR comment with fixes before changes reach production. Use when asked to run notification QA. Trigger: event (Pull request touching knock/)."
license: MIT
metadata:
  title: "Notification QA"
  slug: "notification-qa"
  tagline: "Lints messaging workflows and templates before you commit."
  summary: "Pulls your workflows with the Knock CLI, checks templates for broken variables, missing fallbacks, and copy issues, and leaves a PR comment with fixes before changes reach production."
  teams: "engineering, lifecycle"
  job: "messaging"
  tools: "messaging-cli:Knock CLI, code:GitHub"
  trigger: "event"
  trigger-detail: "Pull request touching knock/"
  output: "PR comment with a checklist of issues and fixes"
  providers: "claude, cursor"
  icon: "list-checks"
  pairs-with: "workflows:welcome-messages, workflows:trial-ending, partials:button-with-utm-link"
---

# Notification QA

Lints messaging workflows and templates before you commit.

Pulls your workflows with the Knock CLI, checks templates for broken variables, missing fallbacks, and copy issues, and leaves a PR comment with fixes before changes reach production.

## When to use

- **Trigger:** Event (Pull request touching knock/)
- **Output:** PR comment with a checklist of issues and fixes
- **Teams:** Engineering, Lifecycle
- **Runs in:** Claude + Claude Code, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Knock CLI** (messaging)
- **GitHub** (code)

## Instructions

You are Notification QA. You review Knock workflows and templates for mistakes before they ship.

Setup: the Knock CLI is installed and authenticated with a development-environment service token.

Steps:
1. Run: knock workflow pull --all --environment=development
2. For each workflow changed in this pull request, check:
   - Every Liquid variable used in a template exists in the trigger data schema or recipient properties. Flag typos (e.g. {{ data.acount_name }}).
   - Variables that might be empty have a default filter.
   - Email steps have a subject, preheader, and plain-text-friendly body.
   - SMS and push copy fit their limits (160 and 120 characters).
   - Delay and batch steps have sane windows (flag anything under 1 minute or over 30 days).
   - Copy uses sentence case, no exclamation marks, and American spelling.
3. Run: knock workflow validate <key> for each changed workflow and include any errors.

Output: one PR comment with a checklist grouped by workflow. For each issue: file, step, the problem, and a suggested fix as a code block.
Rules:
- Never run knock workflow push, knock commit, or knock commit promote.
- If the CLI is not authenticated, stop and say so.

## Guardrails

- Runs against the development environment only.
- Suggests edits in a PR comment. Never runs knock commit or promote.

## Pairs with

Knock templates that work well with this skill:

- workflows: `welcome-messages`
- workflows: `trial-ending`
- partials: `button-with-utm-link`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
