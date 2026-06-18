import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TrailRoam Docs',
  tagline: 'Documentation for TrailRoam browser extensions',
  favicon: 'img/logo.svg',

  future: {
    v4: true,
  },

  url: 'https://kostyrko.github.io',
  baseUrl: '/trailroam-docs/',

  organizationName: 'kostyrko',
  projectName: 'trailroam-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/kostyrko/trailroam-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/kostyrko/trailroam-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'TrailRoam Docs',
      logo: {
        alt: 'TrailRoam Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'stravaSidebar',
          position: 'left',
          label: 'TrailRoam for Strava',
        },
        {to: '/blog', label: 'Release Notes', position: 'left'},
        {
          href: 'https://github.com/kostyrko/trailroam-for-strava',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'TrailRoam for Strava',
              to: '/docs/strava/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/kostyrko/trailroam-for-strava/issues',
            },
            {
              label: 'Ko-fi',
              href: 'https://ko-fi.com/mkostyrko',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Release Notes',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kostyrko/trailroam-for-strava',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TrailRoam. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
