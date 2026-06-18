---
slug: trailroam-for-strava-v1.0.1
title: Updates to TrailRoam for Strava (v1.0.1 release)
authors: [mkostyrko]
tags: [release, strava]
---


## Activity Panel & Route Emphasis

### New features:

- **Collapsible Activity Panel (Map Explorer)**

  A new left-side panel on the Map Explorer that slides in from the right edge. Includes search, a "Visible on map" toggle that filters to only activities in the current viewport, sort by newest/longest/A-Z, and a scrollable activity list. Hover highlights the route on
 the map; click selects it, zooms to fit, and opens the detail popup in the bottom-right corner. Panel state  stays open/closed during the session. Time based and activities filtering is connected to main map filters.

- **Dynamic Route Emphasis**

  Searching or filtering now changes how routes appear: matching routes stay at full opacity, non-matching routes fade to ~15-20%. Clicking a route makes it thicker (7px) and renders it above all others. The side panel tracks selection — selected rows show a green accent bar, bold title, and auto-scroll into view.

- **GPX Download from Side Panel**

  A persistent green "Download GPX" button at the bottom of the Activity Panel exports all filtered activities as a single zip file. Disabled when no activities are visible.

### Improvements:

- **Automatic Filter Change Banner**

  A green info banner appears the first few times the map auto-selects a filter for you. Dismiss it — it stops showing after the 4th time, permanently.

- **Filter Dropdowns Close on Selection**

  Activity type and date range dropdowns now close immediately when you pick an option — no extra click needed.

### Fixes:

- **Truncated Long Names**

  Activity names that are too long now show an ellipsis in the detail panel. Hover for the full name.

- **Loading State Fix**

  The loading spinner now shows correctly when redirecting from an empty state during the very first sync.

- **OpenFreeMap Fallback**

  If the default map style URL is unavailable, the app falls back gracefully instead of showing a blank map.


