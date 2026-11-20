---
title: "Example output"
description: "A sample of what Notification QA produces."
category: knock-notification-qa
channel: "PR #812 comment"
heading: "Notification QA: 3 issues in 2 workflows"
card:
  title: "3 issues in 2 workflows"
  label: "Trial ending"
  detail: "Button link has no fallback"
  primary: "See issues"
  secondary: "Ignore"
---

# Example output

Delivered to: `PR #812 comment`

## Notification QA: 3 issues in 2 workflows

**trial-ending / email-1**: `{{ data.acount_name }}` is not in the trigger schema. Did you mean `data.account_name`?

**trial-ending / sms-1**: body is 188 characters. Trim to 160 or split.

**welcome-messages / in-app-1**: `recipient.first_name` has no default. Suggest `{{ recipient.first_name | default: "there" }}`.

`knock workflow validate` passed for both workflows.
