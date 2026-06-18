---
sidebar_position: 2
---

# Installation

## From Chrome Web Store

1. Open the [Chrome Web Store listing](https://chromewebstore.google.com/detail/gmgjagnoidahjplbkhiibakbpofdoebj?utm_source=item-share-cb)
2. Click **Add to Chrome**
3. Confirm the permissions dialog

## Loading Unpacked (Development)

1. Clone the repository:
   ```bash
   git clone https://github.com/kostyrko/trailroam-for-strava.git
   cd trailroam-for-strava
   ```
2. Install dependencies and build:
   ```bash
   npm install
   npm run build
   ```
3. Open `chrome://extensions` in Chrome
4. Enable **Developer mode** (toggle in top-right)
5. Click **Load unpacked**
6. Select `dist/trailroam-for-strava/browser/`

## Verify Installation

After installing, you should see the TrailRoam icon in your Chrome toolbar. Click it and select **Open TrailRoam** to launch the app.
