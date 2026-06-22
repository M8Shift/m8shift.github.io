import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'M8Shift',
  description: 'Coordinate AI teammates across turns, roles, reviews, and isolated workspaces.',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#16233f' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'M8Shift — AI agents, working in shifts.' }],
    ['meta', { property: 'og:description', content: 'A local coordination layer for AI coding agents.' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  themeConfig: {
    logo: '/logo-placeholder.svg',
    siteTitle: 'M8Shift',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Concepts', link: '/concepts/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Security', link: '/security/' },
      { text: 'Roadmap', link: '/roadmap' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Getting started',
          items: [
            { text: 'Overview', link: '/guide/' },
            { text: 'Why M8Shift', link: '/guide/why' },
            { text: 'Quickstart', link: '/guide/quickstart' },
            { text: 'VS Code', link: '/guide/vscode' },
            { text: 'Cloudflare deployment', link: '/guide/cloudflare' }
          ]
        },
        {
          text: 'Workflows',
          items: [
            { text: 'Two-agent relay', link: '/guide/two-agent-relay' },
            { text: 'Multi-agent workflow', link: '/guide/multi-agent' },
            { text: 'Content + image workflow', link: '/guide/content-image-review' }
          ]
        }
      ],
      '/concepts/': [
        {
          text: 'Core concepts',
          items: [
            { text: 'Overview', link: '/concepts/' },
            { text: 'The pen', link: '/concepts/pen' },
            { text: 'Agents and roles', link: '/concepts/agents-roles' },
            { text: 'Relations', link: '/concepts/relations' },
            { text: 'Handoff contracts', link: '/concepts/handoff-contracts' },
            { text: 'Validation', link: '/concepts/validation' },
            { text: 'Worktrees', link: '/concepts/worktrees' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'Overview', link: '/reference/' },
            { text: 'CLI', link: '/reference/cli' },
            { text: 'State model', link: '/reference/state-model' },
            { text: 'Contract schema', link: '/reference/contract-schema' },
            { text: 'Generated files', link: '/reference/generated-files' },
            { text: 'Exit codes', link: '/reference/exit-codes' },
            { text: 'Limitations', link: '/reference/limitations' }
          ]
        }
      ],
      '/security/': [
        {
          text: 'Security',
          items: [
            { text: 'Security model', link: '/security/' },
            { text: 'Threat model', link: '/security/threat-model' },
            { text: 'Permissions', link: '/security/permissions' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OWNER/m8shift' }
    ],
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/OWNER/m8shift/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright © 2026 M8Shift contributors'
    }
  }
})
