import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AI Harness 를 이용한 바이브 코딩 가이드',
  tagline: 'superpowers 스킬과 spec kit을 이용한 AI 기반 개발 워크플로우',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://restnfeel.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/vibe_coding_harness/',

  organizationName: 'restnfeel',
  projectName: 'vibe_coding_harness',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DigiLog Labs',
      logo: {
        alt: 'DigiLog Labs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://digiloglabs.com',
          label: 'Homepage',
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
              label: '시작하기',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '서비스',
          items: [
            {
              label: '홈페이지',
              href: 'https://digiloglabs.com',
            },
            {
              label: 'Contact',
              href: 'mailto:contact@digiloglabs.com',
            },
          ],
        },
        {
          title: '더보기',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `
        Copyright © ${new Date().getFullYear()} DigiLog Labs. All rights reserved.<br/>
        대표: 서정환 | 사업자등록번호: 747-88-03609<br/>
        통신판매업: 2025-용인기흥-03087<br/>
        주소: 경기도 용인시 기흥구 용구대로 2469번길 164, 2층 223호<br/>
        TEL: 070-8121-2950 | Email: contact@digiloglabs.com
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
