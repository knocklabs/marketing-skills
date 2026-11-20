---
title: "Example output"
description: "A sample of what New device alert produces."
category: knock-new-device-alert
channel: "Knock draft"
heading: "New device"
card:
  title: "New device sign-in"
  label: "Security alert"
  detail: "Chrome on macOS, today"
  primary: "Review alert"
---

# Example output

Delivered to: `Knock draft`

## New device

Subject: New sign-in on {{ data.device_name }}

Body: A new sign-in happened at {{ data.signed_in_at }} from {{ data.location }} on {{ data.device_name }}.

Button: Review security → {{ data.security_url }}

If this was not you, reset your password from that page.
