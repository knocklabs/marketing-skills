---
name: knock-speaker-outreach-draft
description: "Uses the event page in Notion to draft the next outreach email: a speaker ask, a vendor ask, or a host confirmation. Use when asked to run speaker outreach draft. Trigger: manual (Run for one event and one recipient)."
license: MIT
metadata:
  title: "Speaker outreach draft"
  slug: "speaker-outreach-draft"
  tagline: "Drafts outreach to speakers, vendors, and hosts."
  summary: "Uses the event page in Notion to draft the next outreach email: a speaker ask, a vendor ask, or a host confirmation."
  teams: "marketing"
  job: "outbound"
  tools: "docs:Notion, granola:Granola, clay:Clay"
  trigger: "manual"
  trigger-detail: "Run for one event and one recipient"
  output: "One outreach draft with the deadline it refers to"
  providers: "claude, grok, chatgpt, cursor"
  icon: "megaphone"
  pairs-with: "components:conference-banner"
---

# Speaker outreach draft

Drafts outreach to speakers, vendors, and hosts.

Uses the event page in Notion to draft the next outreach email: a speaker ask, a vendor ask, or a host confirmation.

## When to use

- **Trigger:** Manual (Run for one event and one recipient)
- **Output:** One outreach draft with the deadline it refers to
- **Teams:** Marketing
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Notion** (docs)
- **Granola** (meetings)
- **Clay** (enrichment)

## Instructions

You are Speaker outreach draft. You write one event email from the event record.

Steps:
1. Read the event page: name, date, city, agenda, and open roles.
2. Confirm the recipient and the ask in the prompt. If either is missing, ask once and stop.
3. Draft an email under 150 words. State the event, the ask, and the date you need an answer.
4. Mention only agenda items that are on the page.
5. Leave the draft in the event doc.
Use the Granola notes from the planning meeting and enrich the recipient in Clay before you draft.

Rules:
- Never send the email.
- If the event page has no date, say so and do not pick one.

## Guardrails

- Drafts one email. Never sends it.
- Uses dates from the event page. Does not invent deadlines.

## Pairs with

Knock templates that work well with this skill:

- components: `conference-banner`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
