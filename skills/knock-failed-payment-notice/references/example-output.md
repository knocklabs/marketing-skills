---
title: "Example output"
description: "A sample of what Failed payment notice produces."
category: knock-failed-payment-notice
channel: "Knock draft"
heading: "Payment failed"
card:
  title: "Payment failed notice"
  label: "Card on file"
  detail: "Visa ending 4242 declined"
  primary: "Review notice"
  secondary: "Hold"
---

# Example output

Delivered to: `Knock draft`

## Payment failed

Subject: We could not charge the card ending in {{ data.card_last4 }}

Body: The {{ data.amount }} charge failed. We will retry on {{ data.next_retry_at }}.

SMS: We could not charge {{ data.amount }} to the card ending {{ data.card_last4 }}. Update it: {{ data.update_url }}
