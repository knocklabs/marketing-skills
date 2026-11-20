---
title: "Example output"
description: "A sample of what Onboarding workflow audit produces."
category: knock-onboarding-workflow-audit
channel: "knock-plan.md"
heading: "Onboarding opportunities (5 ranked)"
card:
  title: "5 onboarding gaps"
  label: "Missing workflow"
  detail: "Invite accepted, no follow-up"
  primary: "Open plan"
---

# Example output

Delivered to: `knock-plan.md`

## Onboarding opportunities (5 ranked)

**1. First integration never connected**: `app/integrations/connect.ts` emits `integration.connected`, but 58% of new workspaces never reach it. No Knock workflow listens.

Brief: trigger `integration-nudge` 24 hours after signup if no integration. Email, then in-app banner on day 3.

**2. Invite sent, never accepted**: `invite-with-reminder` exists but has no reminder step after 48 hours.

**3. First workflow committed**: good milestone moment for a celebration message. Pair with the `first-milestone` template.
