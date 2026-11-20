---
title: "Example output"
description: "A sample of what Password reset draft produces."
category: knock-password-reset-draft
channel: "Knock draft"
heading: "Password reset"
card:
  title: "Reset email is drafted"
  label: "Single-use link"
  detail: "Expires in 30 minutes"
  primary: "Review email"
  secondary: "Edit"
---

# Example output

Delivered to: `Knock draft`

## Password reset

Workflow: password-reset. Channel: email.

Subject: Reset your password

Body: We received a request to reset the password for {{ data.email }}. The link expires in {{ data.expires_in_minutes }} minutes.

Button: Reset password → {{ data.reset_url }}

If you did not request this, you can ignore the email.
