---
title: "Example output"
description: "A sample of what Export ready notice produces."
category: knock-export-ready-notice
channel: "Knock draft"
heading: "Export ready"
card:
  title: "Export is ready"
  label: "Download notice"
  detail: "Link stays live for 7 days"
  primary: "Review notice"
  secondary: "Hold"
---

# Example output

Delivered to: `Knock draft`

## Export ready

Subject: Your export is ready

Body: {{ data.file_name }} is ready. {{ data.row_count }} rows. The link expires on {{ data.expires_at }}.

In-app: Your export is ready to download.
