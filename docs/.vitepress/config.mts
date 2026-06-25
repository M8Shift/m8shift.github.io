import { defineConfig } from 'vitepress'

// Render ```mermaid fences via a client-side <Mermaid> component (no plugin needed).
let mermaidCount = 0

export default defineConfig({
  title: 'M8Shift',
  description: 'Coordinate AI coding agents across turns, roles, and reviews — one writer at a time.',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    config(md) {
      const fence = md.renderer.rules.fence!.bind(md.renderer.rules)
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        if (token.info.trim() === 'mermaid') {
          const code = Buffer.from(token.content, 'utf8').toString('base64')
          return `<ClientOnly><Mermaid id="${mermaidCount++}" code="${code}" /></ClientOnly>`
        }
        return fence(tokens, idx, options, env, self)
      }
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#7c3aed' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'M8Shift — AI agents, working in shifts.' }],
    ['meta', { property: 'og:description', content: 'A local coordination layer for AI coding agents.' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'M8Shift',
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/M8Shift/M8Shift', ariaLabel: 'M8Shift GitHub repository' }
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/' },
          { text: 'Concepts', link: '/concepts/' },
          { text: 'Reference', link: '/reference/' },
          { text: 'Security', link: '/security/' },
          { text: 'Releases / Roadmap', link: '/roadmap' },
          { text: 'More', items: [
            { text: 'Comparison', link: '/comparison' },
            { text: 'FAQ', link: '/faq' },
            { text: 'Contributing', link: '/contributing' },
            { text: 'License', link: '/license' }
          ] }
        ],
        sidebar: {
          '/guide/': [
            { text: 'Getting started', items: [
              { text: 'Overview', link: '/guide/' },
              { text: 'Why M8Shift', link: '/guide/why' },
              { text: 'Quickstart', link: '/guide/quickstart' },
              { text: 'VS Code', link: '/guide/vscode' },
              { text: 'Headless runner', link: '/guide/headless' }
            ] },
            { text: 'Installation', items: [
              { text: 'Windows', link: '/guide/windows' },
              { text: 'Linux', link: '/guide/linux' },
              { text: 'macOS', link: '/guide/macos' }
            ] },
            { text: 'Workflows', items: [
              { text: 'Two-agent relay', link: '/guide/two-agent-relay' },
              { text: 'Multi-agent workflow', link: '/guide/multi-agent' },
              { text: 'Worktree toolbox', link: '/guide/worktree-toolbox' }
            ] }
          ],
          '/concepts/': [
            { text: 'Core concepts', items: [
              { text: 'Overview', link: '/concepts/' },
              { text: 'The pen', link: '/concepts/pen' },
              { text: 'Agents and roles', link: '/concepts/agents-roles' },
              { text: 'Relations', link: '/concepts/relations' },
              { text: 'Handoff contracts', link: '/concepts/handoff-contracts' },
              { text: 'Validation', link: '/concepts/validation' }
            ] }
          ],
          '/reference/': [
            { text: 'Reference', items: [
              { text: 'Overview', link: '/reference/' },
              { text: 'CLI', link: '/reference/cli' },
              { text: 'State model', link: '/reference/state-model' },
              { text: 'Turn schema', link: '/reference/contract-schema' },
              { text: 'Generated files', link: '/reference/generated-files' },
              { text: 'Exit codes', link: '/reference/exit-codes' },
              { text: 'Limitations', link: '/reference/limitations' }
            ] }
          ],
          '/security/': [
            { text: 'Security', items: [
              { text: 'Security model', link: '/security/' },
              { text: 'Threat model', link: '/security/threat-model' },
              { text: 'Permissions', link: '/security/permissions' }
            ] }
          ]
        },
        editLink: {
          pattern: 'https://github.com/M8Shift/M8Shift-site/edit/main/docs/:path',
          text: 'Edit this page'
        },
        footer: {
          message: 'Built by <a href="https://m8shift.ai/" target="_blank" rel="noopener noreferrer">M8Shift contributors</a> · Released under the Apache 2.0 License.',
          copyright: 'Independent project, not affiliated with Anthropic, Google, Mistral, OpenAI · Copyright © 2026 M8Shift contributors'
        }
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/',
      description: 'Coordonnez des agents IA de code à travers les tours, les rôles et les revues — un seul rédacteur à la fois.',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/fr/guide/' },
          { text: 'Concepts', link: '/fr/concepts/' },
          { text: 'Référence', link: '/fr/reference/' },
          { text: 'Sécurité', link: '/fr/security/' },
          { text: 'Releases / Roadmap', link: '/fr/roadmap' },
          { text: 'Plus', items: [
            { text: 'Comparaison', link: '/fr/comparison' },
            { text: 'FAQ', link: '/fr/faq' },
            { text: 'Contribuer', link: '/fr/contributing' },
            { text: 'Licence', link: '/fr/license' }
          ] }
        ],
        sidebar: {
          '/fr/guide/': [
            { text: 'Prise en main', items: [
              { text: 'Aperçu', link: '/fr/guide/' },
              { text: 'Pourquoi M8Shift', link: '/fr/guide/why' },
              { text: 'Démarrage rapide', link: '/fr/guide/quickstart' },
              { text: 'VS Code', link: '/fr/guide/vscode' },
              { text: 'Exécution headless', link: '/fr/guide/headless' }
            ] },
            { text: 'Installation', items: [
              { text: 'Windows', link: '/fr/guide/windows' },
              { text: 'Linux', link: '/fr/guide/linux' },
              { text: 'macOS', link: '/fr/guide/macos' }
            ] },
            { text: 'Flux de travail', items: [
              { text: 'Relais à deux agents', link: '/fr/guide/two-agent-relay' },
              { text: 'Flux multi-agents', link: '/fr/guide/multi-agent' },
              { text: 'Boîte à outils worktree', link: '/fr/guide/worktree-toolbox' }
            ] }
          ],
          '/fr/concepts/': [
            { text: 'Concepts clés', items: [
              { text: 'Aperçu', link: '/fr/concepts/' },
              { text: 'Le stylo', link: '/fr/concepts/pen' },
              { text: 'Agents et rôles', link: '/fr/concepts/agents-roles' },
              { text: 'Relations', link: '/fr/concepts/relations' },
              { text: 'Contrats de passation', link: '/fr/concepts/handoff-contracts' },
              { text: 'Validation', link: '/fr/concepts/validation' }
            ] }
          ],
          '/fr/reference/': [
            { text: 'Référence', items: [
              { text: 'Aperçu', link: '/fr/reference/' },
              { text: 'CLI', link: '/fr/reference/cli' },
              { text: 'Modèle d’états', link: '/fr/reference/state-model' },
              { text: 'Schéma de tour', link: '/fr/reference/contract-schema' },
              { text: 'Fichiers générés', link: '/fr/reference/generated-files' },
              { text: 'Codes de sortie', link: '/fr/reference/exit-codes' },
              { text: 'Limites', link: '/fr/reference/limitations' }
            ] }
          ],
          '/fr/security/': [
            { text: 'Sécurité', items: [
              { text: 'Modèle de sécurité', link: '/fr/security/' },
              { text: 'Modèle de menaces', link: '/fr/security/threat-model' },
              { text: 'Permissions', link: '/fr/security/permissions' }
            ] }
          ]
        },
        editLink: {
          pattern: 'https://github.com/M8Shift/M8Shift-site/edit/main/docs/:path',
          text: 'Modifier cette page'
        },
        footer: {
          message: 'Built by <a href="https://m8shift.ai/" target="_blank" rel="noopener noreferrer">M8Shift contributors</a> · Released under the Apache 2.0 License.',
          copyright: 'Independent project, not affiliated with Anthropic, Google, Mistral, OpenAI · Copyright © 2026 M8Shift contributors'
        }
      }
    }
  }
})
