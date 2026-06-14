import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  stravaSidebar: [
    {
      type: 'category',
      label: 'TrailRoam for Strava',
      collapsed: false,
      items: [
        'strava/intro',
        'strava/installation',
        'strava/syncing',
        'strava/features',
        'strava/privacy',
        'strava/faq',
      ],
    },
  ],
};

export default sidebars;
