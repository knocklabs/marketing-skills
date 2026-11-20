---
title: "Example output"
description: "A sample of what Churn watch produces."
category: knock-churn-watch
channel: "#cs-signals"
heading: "Churn watch: 3 accounts need a look"
card:
  title: "3 accounts need a look"
  label: "Suggested save play"
  detail: "Northwind Labs, down 62%"
  primary: "Review drafts"
  secondary: "Skip"
---

# Example output

Delivered to: `#cs-signals`

## Churn watch: 3 accounts need a look

**Northwind Labs**: weekly active users down 62%. Their two admins stopped opening the in-app feed after the March 3 seat change.

Suggested: trigger `seat-change-checkin` to the new admin. Subject: "Your team's notification settings moved to you"

**Pinecrest**: down 48%. Trial ends in 4 days and nobody has set up a second channel.

Suggested: existing workflow `trial-ending`, add an SMS reminder step.

**Halcyon Health**: down 41%. Reason unclear, no failed deliveries or support tickets.

Suggested: CSM email, no automated message.
