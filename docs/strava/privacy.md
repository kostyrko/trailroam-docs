---
sidebar_position: 5
---

# Privacy & Data

## Where Your Data Lives

TrailRoam stores all imported data **locally in your browser** using IndexedDB (via Dexie.js).

- Activity metadata (name, date, type, distance, etc.)
- GPS route coordinates
- Elevation and distance streams
- Sync history
- App settings

## No Data Upload

- **No route or activity data is ever uploaded to any server**
- No TrailRoam account is needed
- No cloud sync
- No analytics or tracking

## What Leaves Your Browser

The only external requests are:
- **Map tile requests** to OpenFreeMap and OpenTopoMap (for displaying the basemap)
- **Strava API calls** during sync (same-origin from your browser session)

## Strava Session

When you sync, TrailRoam opens Strava in a new tab. Your existing browser session handles authentication. TrailRoam never stores or transmits your Strava credentials.

## Inspecting Stored Data

You can inspect your local data at any time:
1. Open Chrome DevTools (F12)
2. Go to **Application** tab
3. Expand **IndexedDB** → `trailroam_for_strava`

## Backups

Backup files (JSON) contain all your activities and GPS routes. Store them somewhere private — they contain your location history.
