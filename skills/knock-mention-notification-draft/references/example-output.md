---
title: "Example output"
description: "A sample of what Mention notification draft produces."
category: knock-mention-notification-draft
channel: "Knock draft"
heading: "Mention"
---

# Example output

Delivered to: `Knock draft`

## Mention

In-app: {{ data.author_name | default: "Someone" }} mentioned you on {{ data.object_name }}.

Email subject: {{ data.author_name }} mentioned you

Batch: 5 minutes, key recipient + object.
