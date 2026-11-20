---
title: "Example output"
description: "A sample of what Signup friction review produces."
category: knock-signup-friction-review
channel: "knock-plan.md"
heading: "Signup friction"
card:
  title: "Signup stalls at step 2"
  label: "Drop-off"
  detail: "Team invite, 41% exit"
  primary: "See steps"
---

# Example output

Delivered to: `knock-plan.md`

## Signup friction

Email verification loses 34% of signups. The screen is components/VerifyEmail.js and the event is user.verified.

Invite teammates is optional but blocks the empty state. 22% abandon there. Move the invite behind a skip link.

No message exists for people who verify and never create a workflow. Pair with onboarding-workflow-audit.
