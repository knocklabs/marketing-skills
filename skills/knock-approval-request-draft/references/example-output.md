---
title: "Example output"
description: "A sample of what Approval request draft produces."
category: knock-approval-request-draft
channel: "Knock draft"
heading: "Approval request"
---

# Example output

Delivered to: `Knock draft`

## Approval request

Subject: {{ data.requester_name }} needs approval on {{ data.object_name }}

Body: {{ data.summary }}

Actions: Approve → {{ data.approve_url }}. Reject → {{ data.reject_url }}.

Reminder: 1 business day later, canceled when approval.decided fires.
