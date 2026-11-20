---
title: "Example output"
description: "A sample of what Sign-in code draft produces."
category: knock-sign-in-code-draft
channel: "Knock draft"
heading: "Sign-in code"
card:
  title: "Sign-in code is drafted"
  label: "One-time code"
  detail: "Expires in 10 minutes"
  primary: "Review draft"
  secondary: "Edit"
---

# Example output

Delivered to: `Knock draft`

## Sign-in code

Email subject: Your sign-in code

Email body: Your code is {{ data.code }}. It expires in 10 minutes. If you did not try to sign in, you can ignore this email.

SMS: {{ data.code }} is your sign-in code. It expires in 10 minutes.
