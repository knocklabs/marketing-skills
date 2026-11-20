---
title: "Example output"
description: "A sample of what Support reply drafter produces."
category: knock-support-reply-drafter
channel: "Intercom internal note"
heading: "Draft reply (confidence: high)"
card:
  title: "New reply to review"
  label: "Intercom draft"
  detail: "How do I pause a workflow?"
  primary: "Review reply"
  secondary: "Skip"
---

# Example output

Delivered to: `Intercom internal note`

## Draft reply (confidence: high)

Hi Priya, you can stop the duplicate emails by adding a batch step before the email step in your `comments` workflow.

1. Open the workflow and add a batch step with a 5-minute window.

2. Set the batch key to `data.thread_id`.

3. Commit the change to production.

More detail: docs.knock.app/designing-workflows/batch-function

Sources: Batching runbook, Comments workflow FAQ
