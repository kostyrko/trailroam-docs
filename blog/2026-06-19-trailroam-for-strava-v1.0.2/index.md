---
slug: trailroam-for-strava-v1.0.2
title: Fix release for TrailRoam for Strava (v1.0.2 release)
authors: [mkostyrko]
tags: [release, strava]
---


## Issue: syncing all activities every time

All activities should be synced only once, and subsequent syncs should only fetch new activities. The app tracks the last synced activity ID and uses it to fetch only new activities from Strava.

technical note: Strava's SPA injects the content script twice due to Webpack module federation, causing a duplicate sync that re-fetches all activities. Added a sessionStorage guard to stop the second injection. Pagination stops early when hitting a known synced activity ID, and only genuinely new activities are sent to the app.