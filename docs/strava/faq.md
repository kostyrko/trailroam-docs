---
sidebar_position: 6
---

# FAQ

### Do I need a TrailRoam account?
No. There is no account system. Everything runs locally in your browser.

### Does TrailRoam have access to my Strava password?
No. Sync works by opening Strava in a new tab — your browser session handles authentication. TrailRoam never stores or sees your credentials.

### Is my GPS data uploaded anywhere?
No. All activities and routes stay in your browser's local IndexedDB. The only network requests are for map tiles and Strava sync.

### How do I sync activities?
Click **Sync Strava** in the header, then select **Sync activities**. TrailRoam opens Strava and fetches your activities.

### Can I use this without an internet connection?
The app requires internet for the initial sync and for loading map tiles. Once synced, you can browse activities offline (map tiles may not load).

### Why are some activities missing GPS routes?
Activities recorded without GPS (e.g., indoor workouts, treadmill) don't have route data. You can retry syncing these from the ⋮ menu on each activity row.

### How do I export my routes?
Click the **Download GPX** button on any activity detail panel, or bulk-select activities and use the **Download GPX** action in the toolbar.

### Can I import GPX files from other apps?
Yes. Go to Settings and use **Restore local data** or drag GPX files into the import dialog. You can choose the sport type during import.

### How do I back up my data?
Go to **Settings** → **Backup local data**. This downloads a JSON file with all your activities, routes, and settings.

### Is there a limit on how many activities I can sync?
No. You can sync all your Strava activities. Performance warnings are shown when rendering very large datasets on the map.

### How do I clear my data?
Go to **Settings** → **Clear synced local data**. This removes activities and routes from the browser without affecting your Strava account.

### Will you add support for other platforms?
Komoot support is planned. A desktop Electron app is also under consideration.
