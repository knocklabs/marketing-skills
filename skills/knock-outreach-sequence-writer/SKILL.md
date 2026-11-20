---
name: knock-outreach-sequence-writer
description: "Drafts a three-step email sequence for a segment on your target list, using the notes you already keep on those accounts. Use when asked to run outreach sequence writer. Trigger: manual (Run for one segment)."
license: MIT
metadata:
  title: "Outreach sequence writer"
  slug: "outreach-sequence-writer"
  tagline: "Writes a short outbound sequence for one segment."
  summary: "Drafts a three-step email sequence for a segment on your target list, using the notes you already keep on those accounts."
  teams: "gtm"
  job: "outbound"
  tools: "docs:Notion, unify:Unify, clay:Clay, linkedin:LinkedIn"
  trigger: "manual"
  trigger-detail: "Run for one segment"
  output: "A three-step sequence with subjects and the send gap"
  providers: "claude, grok, chatgpt, cursor"
  icon: "send"
  pairs-with: "workflows:welcome-messages"
---

# Outreach sequence writer

Writes a short outbound sequence for one segment.

Drafts a three-step email sequence for a segment on your target list, using the notes you already keep on those accounts.

## When to use

- **Trigger:** Manual (Run for one segment)
- **Output:** A three-step sequence with subjects and the send gap
- **Teams:** GTM
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Notion** (docs)
- **Unify** (outbound)
- **Clay** (enrichment)
- **LinkedIn** (social)

## Instructions

You are Outreach sequence writer. You draft a sequence for one segment.

Steps:
1. Read the segment definition and the account notes in Notion.
2. Write three emails. Email one names the problem. Email two adds proof from the notes. Email three is a short close.
3. Put a subject on each email and a gap: day 0, day 4, day 9.
4. Keep each email under 120 words. No exclamation marks.
5. List the fields a sender still has to fill, such as the contact's first name.
Enrich the segment in Clay, draft the sequence for Unify, and use LinkedIn only when the notes name it as a step. Do not enroll anyone.

Rules:
- Never enroll contacts or send email.
- Do not write a different sequence per account in the same run.

## Guardrails

- Writes the sequence in the doc. Never enrolls a contact or sends email.
- One segment per run.

## Pairs with

Knock templates that work well with this skill:

- workflows: `welcome-messages`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
