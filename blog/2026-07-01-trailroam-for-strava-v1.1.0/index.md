---
slug: trailroam-for-strava-v1.1.0
title: Import Local Activity Files in TrailRoam for Strava (v1.1.0 release)
authors: [mkostyrko]
tags: [release, strava]
---

  ## New Features

  ### Import Local Activity Files (GPX, FIT, TCX)
  Import activities directly from GPX, FIT, and TCX files — no need to upload to Strava first. Imported
  activities behave identically to Strava-synced ones: they appear in Activities, Map Explorer, Heatmap,
  filters, search, statistics, and are exportable.

  Drag and drop files onto the Activities page or click the **Import Activity** button. A two-column modal
  shows a live map preview, parsed stats, and automatically suggests name and sport type based on file
  contents. All processing is local in your browser.

  ### Activity Source & Status Visualization
  New **Source** and **Status** columns on the Activities page distinguish Strava-synced activities from
  imported ones, and completed from planned. A dedicated source filter row with live count chips lets you
  instantly filter by All, Strava, Imported (Done), or Imported (Planned).

  ### Source & Status in Map Explorer
  The Map Explorer sidebar now includes source filter chips, compact Completed/Planned badges on activity
  rows, and both status and source labels in the detail panel. Planned activities gracefully show `—` for
  unavailable statistics.

  ### Edit Activity Dialog
  The rename dialog is now an **Edit Activity** dialog — update name, sport type, and completed/planned status
   in one place. Available from the Activities page 3-dot menu, the Map Explorer activity card pencil icon,
  and the detail panel 3-dot menu.

  ## Improvements
  - Redesigned activity card in Map Explorer with clean white layout, elevation profile chart, and action
  buttons
  - Map scale moved to bottom-right; smooth panel transition animations
  - Settings page shows IndexedDB schema version for migration awareness
  - Source filter chips collapsible with smooth expand/collapse animation