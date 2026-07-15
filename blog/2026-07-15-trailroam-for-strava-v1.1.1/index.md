---
slug: trailroam-for-strava-v1.1.1
title: Maintenance, Stability & Permissions Fix (v1.1.1 release)
authors: [mkostyrko]
tags: [release, strava]
---

## Fixed

- Chrome Web Store compliance: Removed unused storage and tabs permissions flagged by the store (Purple Potassium violation). All link opening, sync, and storage features continue to work — IndexedDB and chrome.tabs.create don't require these permissions.
- Map Explorer side panel: Fixed blank space appearing to the right of the detail panel when it was maximized before closing and then reopened. The expanded state is now correctly cleared on close.
- Activity import: Fixed an issue closing the activity import modal.
- Activities page: Fixed source filters not behaving correctly.

## Changed

- Side panel layout: In the activity detail panel, the header (title, date, status, source, and actions menu) now sits above the map, the date displays inline next to the title, and the actions menu is grouped with the status row.
- Architecture refactor: Extracted large inline Angular templates/styles into separate ts/html/scss files and split oversized components into presentational child components.
- Sync engine: Rebuilt sync architecture with accurate per-run counters and cleaner orchestration.
- Storage: Normalized the database dependency injection path across all repositories.
- Chrome messaging: Moved extension runtime message parsing and batch persistence out of the App component.
- Logging: Replaced noisy debug logs with a small, environment-gated logger.
- Backup & Restore: Added validation of record shapes before writing.

## Under the Hood

- Added unit, integration, property-based stress, and end-to-end tests.
- Centralized shared distance/duration/speed/elevation/date formatting into tested utilities.
- Improved folder architecture and strengthened backup/restore validation.
- Fixed Angular build and strict template diagnostics.