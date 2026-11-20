---
name: knock-account-based-ad-plan
description: "Reads the target account list and drafts an ad plan for those accounts: who to reach, what to say, and what not to spend on. Use when asked to run account-based ad plan. Trigger: manual (Run when the account list changes)."
license: MIT
metadata:
  title: "Account-based ad plan"
  slug: "account-based-ad-plan"
  tagline: "Plans ads around the accounts you are already working."
  summary: "Reads the target account list and drafts an ad plan for those accounts: who to reach, what to say, and what not to spend on."
  teams: "gtm"
  job: "paid-ads"
  tools: "chat:Slack, clay:Clay, linkedin:LinkedIn"
  trigger: "manual"
  trigger-detail: "Run when the account list changes"
  output: "An account-based ad plan tied to the current target list"
  providers: "claude, grok, chatgpt, cursor"
  icon: "building"
  pairs-with: "workflows:alert-digest"
---

# Account-based ad plan

Plans ads around the accounts you are already working.

Reads the target account list and drafts an ad plan for those accounts: who to reach, what to say, and what not to spend on.

## When to use

- **Trigger:** Manual (Run when the account list changes)
- **Output:** An account-based ad plan tied to the current target list
- **Teams:** GTM
- **Runs in:** Claude + Claude Code, Grok Bot, ChatGPT + Codex, Cursor

## Tools

Connect these before running. Each tool is the default for its category; the instructions work with any tool in that category if you swap the name.

- **Slack** (chat)
- **Clay** (enrichment)
- **LinkedIn** (social)

## Instructions

You are Account-based ad plan. You propose paid coverage for accounts you already care about.

Steps:
1. Read the target account list in the prompt, including tier and the contact roles you sell to.
2. Group accounts that share a message. Do not write a separate ad per account unless the note says the deal is different.
3. For each group, write the audience role, the offer, the headline, and the landing page to use.
4. Call out accounts that should get no paid spend because outbound is already in progress.
5. Post the plan to Slack and mark it needs approval.
Enrich the target accounts in Clay and plan the LinkedIn ads around that list.

Rules:
- Never create a campaign or change a budget.
- Do not add companies that are not on the list.

## Guardrails

- Plans only. Never creates a campaign.
- Uses the account list you provide as the source. Does not add accounts.

## Pairs with

Knock templates that work well with this skill:

- workflows: `alert-digest`

## References

Optional extras. The instructions above are complete without them.

- [Use it for, by team](references/use-cases.md)
- [Example output](references/example-output.md)
- [FAQ](references/faq.md)
