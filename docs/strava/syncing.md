---
sidebar_position: 3
---

# Syncing with Strava

TrailRoam imports your Strava activities using your existing browser session — no separate OAuth or API keys needed.

## How It Works

1. The extension opens `strava.com/dashboard` in a new tab
2. If you're logged into Strava, the content script fetches your activity list and GPS routes
3. If you're not logged in, Strava redirects to its login page
4. After syncing, data is stored locally in IndexedDB

## Sync Actions

### Sync New Activities
Opens Strava and fetches new activities incrementally — it detects already-synced activities and stops pagination early.

### Sync Missing Routes
Fetches GPS routes for activities that were imported without route data.

### Clear and Re-sync
Deletes all local data and starts a fresh import from Strava.

## What Gets Synced

- Activity metadata: name, date, sport type, distance, moving time, elevation
- GPS route coordinates (where available)
- Per-point elevation and distance data (where available)

## Rate Limiting

Strava's API has rate limits. The sync script respects these and retries automatically. If you have thousands of activities, the initial sync may take several minutes.
