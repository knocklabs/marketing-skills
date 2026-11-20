---
title: "Example output"
description: "A sample of what Payment receipt draft produces."
category: knock-payment-receipt-draft
channel: "Knock draft"
heading: "Payment receipt"
---

# Example output

Delivered to: `Knock draft`

## Payment receipt

Subject: Receipt for {{ data.amount }}

Body: We charged {{ data.amount }} on {{ data.paid_at }}. Invoice {{ data.invoice_number }}. Card ending {{ data.card_last4 }}.

Button: View invoice → {{ data.invoice_url }}
