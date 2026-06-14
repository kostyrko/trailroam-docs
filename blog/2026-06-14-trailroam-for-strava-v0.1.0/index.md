---
slug: trailroam-for-strava-v0.1.0
title: Introducing TrailRoam for Strava v0.1.0
authors: [mkostyrko]
tags: [release, strava]
---

Browse all your Strava activities on a single interactive map..

## Features

- **Sync with Strava** — Import activities and GPS routes directly from your logged-in Strava session
- **Map Explorer** — View all your Strava GPS routes on one single map. Switch between OpenFreeMap and OpenTopoMap base layers
- **Heatmap** — Toggle a route-density heatmap to visualize your most frequent roads and trails
- **Map Controls** — Zoom, scale bar, fit-to-screen, and route clustering at low zoom levels
- **Opacity Slider** — Adjust route line opacity on the map
- **Activities List** — Browse imported activities with search, sport type filter, date range filter, and name search. Sort by date, name, type, distance, speed, time, or route status
- **Activity Detail Panel** — Click any activity to open a side panel with an interactive mini-map, speed-colored route, elevation profile, metrics, and GPX download
- **Bulk Actions** — Multi-select activities for bulk GPX export (as zip) or deletion
- **GPX Export** — Export GPX files, export individual or bulk routes
- **Backup & Restore** — Export and import all your local data as JSON
- **Settings Dashboard** — Settings page with grouped action cards, sync history, and privacy information
- **App Menu** — Quick access to release notes, bug reporting, documentation, and the About dialog

## Technical

- Chrome Extension Manifest V3
- Angular standalone components
- MapLibre GL JS with OpenFreeMap (no API key required)
- IndexedDB / Dexie.js for local storage
- All data stored locally — no backend, no cloud sync
