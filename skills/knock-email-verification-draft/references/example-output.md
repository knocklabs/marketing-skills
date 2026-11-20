---
title: "Example output"
description: "A sample of what Email verification draft produces."
category: knock-email-verification-draft
channel: "Knock draft"
heading: "Verify email"
card:
  title: "Verification email drafted"
  label: "Confirm this address"
  detail: "Link expires in 24 hours"
  primary: "Review email"
  secondary: "Edit"
---

# Example output

Delivered to: `Knock draft`

## Verify email

Subject: Confirm {{ data.email }}

Body: Confirm this address to use it on your account. The link expires in 24 hours.

Button: Confirm email → {{ data.confirm_url }}
