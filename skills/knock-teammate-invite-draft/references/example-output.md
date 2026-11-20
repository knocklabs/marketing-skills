---
title: "Example output"
description: "A sample of what Teammate invite draft produces."
category: knock-teammate-invite-draft
channel: "Knock draft"
heading: "Teammate invite"
---

# Example output

Delivered to: `Knock draft`

## Teammate invite

Subject: {{ data.inviter_name | default: "A teammate" }} invited you to {{ data.account_name }}

Body: You will join as {{ data.role | default: "member" }}. The invite expires on {{ data.expires_at }}.

Reminder: 48 hours later, canceled if invite.accepted fires.
