import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { defineConfig } from 'vitepress'

const repositoryUrl = 'https://github.com/M8Shift/M8Shift'
const siteUrl = (process.env.M8SHIFT_SITE_URL || 'https://m8shift.ai').replace(/\/+$/, '')
const socialImage = `${siteUrl}/logo.png`

const defaultDescription =
  'Free open-source local relay for Claude, Codex, Gemini, Vibe and other coding agents: one writer at a time, structured handoffs, auditable repo state.'

const defaultFrenchDescription =
  'Relais local libre et open source pour Claude, Codex, Gemini, Vibe et autres agents IA de code : un seul rédacteur, passations structurées, état auditable.'

type SeoEntry = {
  title: string
  description: string
  keywords?: string[]
}

const pageSeo: Record<string, SeoEntry> = {
  '/': {
    title: 'M8Shift — coordinate AI coding agents on one repository',
    description: defaultDescription,
    keywords: ['AI coding agents', 'multi-agent coding', 'Claude', 'Codex', 'Gemini', 'Vibe', 'agent coordination']
  },
  '/fr/': {
    title: 'M8Shift — coordonner des agents IA de code sur un dépôt',
    description: defaultFrenchDescription,
    keywords: ['agents IA de code', 'coordination multi-agents', 'Claude', 'Codex', 'Gemini', 'Vibe', 'relais local']
  },
  '/guide/': {
    title: 'M8Shift Guide — install and coordinate AI coding agents',
    description: 'Install M8Shift, understand the relay workflow, and start coordinating multiple CLI-capable AI coding agents in one repository.'
  },
  '/fr/guide/': {
    title: 'Guide M8Shift — installer et coordonner des agents IA de code',
    description: 'Installez M8Shift, comprenez le workflow de relais et commencez à coordonner plusieurs agents IA avec CLI dans un même dépôt.'
  },
  '/guide/quickstart': {
    title: 'M8Shift Quickstart — install the local AI agent relay',
    description: 'Install M8Shift on macOS, Linux, Windows or WSL, initialize your roster, claim the pen, and pass a structured handoff to another AI agent.'
  },
  '/fr/guide/quickstart': {
    title: 'Démarrage rapide M8Shift — installer le relais local pour agents IA',
    description: 'Installez M8Shift sur macOS, Linux, Windows ou WSL, initialisez le roster, réclamez le stylo et transmettez une passation structurée à un autre agent IA.'
  },
  '/guide/why': {
    title: 'Why M8Shift — multi-agent coding without a hosted control plane',
    description: 'Why use M8Shift for multi-agent software work: local state, explicit roles, human arbitration, one writer at a time, and inspectable handoffs.'
  },
  '/fr/guide/why': {
    title: 'Pourquoi M8Shift — du code multi-agents sans plan de contrôle hébergé',
    description: 'Pourquoi utiliser M8Shift pour le travail logiciel multi-agents : état local, rôles explicites, arbitrage humain, un seul rédacteur et passations inspectables.'
  },
  '/use-cases': {
    title: 'M8Shift Use Cases — software, docs, websites and research',
    description: 'Practical M8Shift workflows for building software, reviewing code, writing documentation, producing websites, researching, marketing and long-form writing.'
  },
  '/fr/use-cases': {
    title: 'Cas d’usage M8Shift — logiciel, documentation, sites et recherche',
    description: 'Workflows pratiques avec M8Shift pour construire du logiciel, relire du code, écrire de la documentation, produire des sites, rechercher, marketer et rédiger au long cours.'
  },
  '/comparison': {
    title: 'M8Shift Comparison — OpenClaw, LangGraph, AutoGen, CrewAI and more',
    description: 'Compare M8Shift with OpenClaw, LangGraph, AutoGen, CrewAI and adjacent multi-agent tools, including where they are comparable and where they are not.'
  },
  '/fr/comparison': {
    title: 'Comparaison M8Shift — OpenClaw, LangGraph, AutoGen, CrewAI et autres',
    description: 'Comparez M8Shift avec OpenClaw, LangGraph, AutoGen, CrewAI et les outils multi-agents voisins, y compris ce qui est comparable ou non.'
  },
  '/reference/features': {
    title: 'M8Shift Feature Matrix — complete list of relay capabilities',
    description: 'A complete feature table for M8Shift: pen locking, append-only turns, contracts, memory notes, task files, sessions, validation and local state.'
  },
  '/fr/reference/features': {
    title: 'Matrice fonctionnelle M8Shift — toutes les capacités du relais',
    description: 'Table complète des fonctionnalités M8Shift : verrou du stylo, tours en ajout seul, contrats, mémoire, tâches, sessions, validation et état local.'
  },
  '/reference/cli': {
    title: 'M8Shift CLI Reference — commands for the AI agent relay',
    description: 'Reference for M8Shift commands such as init, status, claim, next, append, done, memory, tasks, sessions, doctor and contract validation.'
  },
  '/fr/reference/cli': {
    title: 'Référence CLI M8Shift — commandes du relais pour agents IA',
    description: 'Référence des commandes M8Shift : init, status, claim, next, append, done, memory, tasks, sessions, doctor et validation de contrats.'
  },
  '/reference/rfc': {
    title: 'M8Shift RFC Reference — statuses, versions and implementation notes',
    description: 'Complete M8Shift RFC reference from 001 to 029, including status, implementation version, implementation date and notes.'
  },
  '/fr/reference/rfc': {
    title: 'Référence RFC M8Shift — statuts, versions et notes d’implémentation',
    description: 'Référence complète des RFC M8Shift de 001 à 029, avec statut, version d’implémentation, date et notes.'
  },
  '/security/': {
    title: 'M8Shift Security Model — local files, locks and permissions',
    description: 'Understand M8Shift security boundaries: local repository state, file locks, generated files, permissions, threat model and operational guardrails.'
  },
  '/fr/security/': {
    title: 'Modèle de sécurité M8Shift — fichiers locaux, verrous et permissions',
    description: 'Comprendre les frontières de sécurité de M8Shift : état local du dépôt, verrous de fichiers, fichiers générés, permissions, modèle de menaces et garde-fous.'
  },
  '/roadmap': {
    title: 'M8Shift Releases and Roadmap — current version and planned work',
    description: 'Follow the current M8Shift version, release rationale and roadmap for the local multi-agent coding relay.'
  },
  '/fr/roadmap': {
    title: 'Releases et roadmap M8Shift — version courante et travaux prévus',
    description: 'Suivez la version courante de M8Shift, la logique de release et la roadmap du relais local multi-agents pour le code.'
  },
  '/faq': {
    title: 'M8Shift FAQ — practical answers for multi-agent coding',
    description: 'Frequently asked questions about M8Shift, including local state, supported agents, safety, workflows and how it differs from agent frameworks.'
  },
  '/fr/faq': {
    title: 'FAQ M8Shift — réponses pratiques pour le code multi-agents',
    description: 'Questions fréquentes sur M8Shift : état local, agents supportés, sécurité, workflows et différences avec les frameworks d’agents.'
  }
}

const alternatePairs = [
  ['/', '/fr/'],
  ['/guide/', '/fr/guide/'],
  ['/guide/why', '/fr/guide/why'],
  ['/guide/quickstart', '/fr/guide/quickstart'],
  ['/guide/vscode', '/fr/guide/vscode'],
  ['/guide/headless', '/fr/guide/headless'],
  ['/guide/windows', '/fr/guide/windows'],
  ['/guide/linux', '/fr/guide/linux'],
  ['/guide/macos', '/fr/guide/macos'],
  ['/guide/two-agent-relay', '/fr/guide/two-agent-relay'],
  ['/guide/multi-agent', '/fr/guide/multi-agent'],
  ['/guide/worktree-toolbox', '/fr/guide/worktree-toolbox'],
  ['/concepts/', '/fr/concepts/'],
  ['/concepts/pen', '/fr/concepts/pen'],
  ['/concepts/agents-roles', '/fr/concepts/agents-roles'],
  ['/concepts/relations', '/fr/concepts/relations'],
  ['/concepts/handoff-contracts', '/fr/concepts/handoff-contracts'],
  ['/concepts/validation', '/fr/concepts/validation'],
  ['/reference/', '/fr/reference/'],
  ['/reference/features', '/fr/reference/features'],
  ['/reference/rfc', '/fr/reference/rfc'],
  ['/reference/cli', '/fr/reference/cli'],
  ['/reference/state-model', '/fr/reference/state-model'],
  ['/reference/contract-schema', '/fr/reference/contract-schema'],
  ['/reference/generated-files', '/fr/reference/generated-files'],
  ['/reference/exit-codes', '/fr/reference/exit-codes'],
  ['/reference/limitations', '/fr/reference/limitations'],
  ['/security/', '/fr/security/'],
  ['/security/threat-model', '/fr/security/threat-model'],
  ['/security/permissions', '/fr/security/permissions'],
  ['/roadmap', '/fr/roadmap'],
  ['/use-cases', '/fr/use-cases'],
  ['/comparison', '/fr/comparison'],
  ['/faq', '/fr/faq'],
  ['/contributing', '/fr/contributing'],
  ['/license', '/fr/license']
]

const alternateRoutes = Object.fromEntries(
  alternatePairs.flatMap(([en, fr]) => [[en, fr], [fr, en]])
)

function routeFromPage(page: string) {
  const normalized = page
    .replace(/\\/g, '/')
    .replace(/^\/+/, '')
    .replace(/\.(md|html)$/, '')

  if (!normalized || normalized === 'index') return '/'
  if (normalized.endsWith('/index')) return `/${normalized.slice(0, -'/index'.length)}/`
  return `/${normalized}`
}

function urlForRoute(route: string) {
  return `${siteUrl}${route === '/' ? '/' : route}`
}

function localeForRoute(route: string) {
  return route === '/fr/' || route.startsWith('/fr/') ? 'fr-FR' : 'en-US'
}

function fallbackSeo(route: string, pageTitle: string): SeoEntry {
  const isFrench = localeForRoute(route) === 'fr-FR'
  const title = pageTitle && pageTitle !== 'M8Shift'
    ? `${pageTitle} | M8Shift`
    : isFrench
      ? 'M8Shift — relais local pour agents IA de code'
      : 'M8Shift — local relay for AI coding agents'

  if (route.includes('/guide/')) {
    return {
      title,
      description: isFrench
        ? 'Guide pratique M8Shift pour installer, configurer et utiliser un relais local entre agents IA de code.'
        : 'Practical M8Shift guide for installing, configuring and using a local relay between AI coding agents.'
    }
  }

  if (route.includes('/concepts/')) {
    return {
      title,
      description: isFrench
        ? 'Concepts clés de M8Shift : stylo, agents, rôles, relations, contrats de passation et validation.'
        : 'Core M8Shift concepts: the pen, agents, roles, relations, handoff contracts and validation.'
    }
  }

  if (route.includes('/reference/')) {
    return {
      title,
      description: isFrench
        ? 'Référence M8Shift pour les commandes, fichiers générés, modèles d’état, schémas, codes de sortie et limites.'
        : 'M8Shift reference for commands, generated files, state models, schemas, exit codes and limitations.'
    }
  }

  if (route.includes('/security/')) {
    return {
      title,
      description: isFrench
        ? 'Documentation sécurité M8Shift pour les verrous locaux, permissions, fichiers générés et modèle de menaces.'
        : 'M8Shift security documentation for local locks, permissions, generated files and threat model.'
    }
  }

  return {
    title,
    description: isFrench ? defaultFrenchDescription : defaultDescription
  }
}

function seoForRoute(route: string, pageTitle: string) {
  return pageSeo[route] || fallbackSeo(route, pageTitle)
}

function buildStructuredData(route: string, seo: SeoEntry) {
  const inLanguage = localeForRoute(route)
  const pageUrl = urlForRoute(route)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'M8Shift',
        url: `${siteUrl}/`,
        inLanguage,
        description: inLanguage === 'fr-FR' ? defaultFrenchDescription : defaultDescription
      },
      {
        '@type': 'SoftwareSourceCode',
        '@id': `${siteUrl}/#software`,
        name: 'M8Shift',
        codeRepository: repositoryUrl,
        programmingLanguage: 'Python',
        runtimePlatform: 'Python 3',
        license: 'https://www.apache.org/licenses/LICENSE-2.0',
        applicationCategory: 'DeveloperApplication',
        description: defaultDescription,
        url: `${siteUrl}/`
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: seo.title,
        description: seo.description,
        inLanguage,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#software` }
      }
    ]
  }
}

function buildSeoHead(route: string, seo: SeoEntry) {
  const isFrench = localeForRoute(route) === 'fr-FR'
  const alternateRoute = alternateRoutes[route]
  const head = [
    ['meta', { name: 'description', content: seo.description }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'author', content: 'M8Shift contributors' }],
    ['link', { rel: 'canonical', href: urlForRoute(route) }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'M8Shift' }],
    ['meta', { property: 'og:title', content: seo.title }],
    ['meta', { property: 'og:description', content: seo.description }],
    ['meta', { property: 'og:url', content: urlForRoute(route) }],
    ['meta', { property: 'og:image', content: socialImage }],
    ['meta', { property: 'og:image:alt', content: 'M8Shift logo' }],
    ['meta', { property: 'og:locale', content: isFrench ? 'fr_FR' : 'en_US' }],
    ['meta', { property: 'og:locale:alternate', content: isFrench ? 'en_US' : 'fr_FR' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: seo.title }],
    ['meta', { name: 'twitter:description', content: seo.description }],
    ['meta', { name: 'twitter:image', content: socialImage }]
  ]

  if (seo.keywords?.length) {
    head.push(['meta', { name: 'keywords', content: seo.keywords.join(', ') }])
  }

  if (alternateRoute) {
    const englishRoute = isFrench ? alternateRoute : route
    const frenchRoute = isFrench ? route : alternateRoute
    head.push(
      ['link', { rel: 'alternate', hreflang: 'en', href: urlForRoute(englishRoute) }],
      ['link', { rel: 'alternate', hreflang: 'fr', href: urlForRoute(frenchRoute) }],
      ['link', { rel: 'alternate', hreflang: 'x-default', href: urlForRoute(englishRoute) }]
    )
  }

  head.push([
    'script',
    { type: 'application/ld+json' },
    JSON.stringify(buildStructuredData(route, seo))
  ])

  return head
}

// Render ```mermaid fences via a client-side <Mermaid> component (no plugin needed).
let mermaidCount = 0

export default defineConfig({
  title: 'M8Shift',
  description: 'Coordinate AI coding agents across turns, roles, and reviews — one writer at a time.',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: siteUrl
  },
  transformPageData(pageData) {
    const route = routeFromPage(pageData.relativePath)
    const seo = seoForRoute(route, pageData.title)
    return {
      description: seo.description
    }
  },
  transformHead({ page, pageData }) {
    const route = routeFromPage(page || pageData.relativePath)
    return buildSeoHead(route, seoForRoute(route, pageData.title))
  },
  async buildEnd(siteConfig) {
    await writeFile(
      join(siteConfig.outDir, 'robots.txt'),
      `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`
    )
  },
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
    ['meta', { name: 'theme-color', content: '#5D26F2' }],
    ['meta', { name: 'application-name', content: 'M8Shift' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'M8Shift' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/M8Shift-icone-white.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/M8Shift-icone-white.png' }]
  ],
  themeConfig: {
    logo: '/M8Shift-icone-white.png',
    siteTitle: 'M8Shift',
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/M8Shift/M8Shift', ariaLabel: 'M8Shift GitHub repository' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/m8shift/', ariaLabel: 'M8Shift LinkedIn page' },
      { icon: 'discord', link: 'https://discord.gg/qNfmjxJJ', ariaLabel: 'M8Shift Discord server' }
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
          {
            text: 'More', items: [
              { text: 'Features', link: '/reference/features' },
              { text: 'RFC reference', link: '/reference/rfc' },
              { text: 'Use cases', link: '/use-cases' },
              { text: 'Comparison', link: '/comparison' },
              { text: 'FAQ', link: '/faq' },
              { text: 'Contributing', link: '/contributing' },
              { text: 'License', link: '/license' }
            ]
          }
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Getting started', items: [
                { text: 'Overview', link: '/guide/' },
                { text: 'Why M8Shift', link: '/guide/why' },
                { text: 'Quickstart', link: '/guide/quickstart' },
                { text: 'VS Code', link: '/guide/vscode' },
                { text: 'Headless runner', link: '/guide/headless' }
              ]
            },
            {
              text: 'Installation', items: [
                { text: 'Windows', link: '/guide/windows' },
                { text: 'Linux', link: '/guide/linux' },
                { text: 'macOS', link: '/guide/macos' }
              ]
            },
            {
              text: 'Workflows', items: [
                { text: 'Two-agent relay', link: '/guide/two-agent-relay' },
                { text: 'Multi-agent workflow', link: '/guide/multi-agent' },
                { text: 'Worktree toolbox', link: '/guide/worktree-toolbox' }
              ]
            }
          ],
          '/concepts/': [
            {
              text: 'Core concepts', items: [
                { text: 'Overview', link: '/concepts/' },
                { text: 'The pen', link: '/concepts/pen' },
                { text: 'Agents and roles', link: '/concepts/agents-roles' },
                { text: 'Relations', link: '/concepts/relations' },
                { text: 'Handoff contracts', link: '/concepts/handoff-contracts' },
                { text: 'Validation', link: '/concepts/validation' }
              ]
            }
          ],
          '/reference/': [
            {
              text: 'Reference', items: [
                { text: 'Overview', link: '/reference/' },
                { text: 'Feature matrix', link: '/reference/features' },
                { text: 'RFC reference', link: '/reference/rfc' },
                { text: 'CLI', link: '/reference/cli' },
                { text: 'State model', link: '/reference/state-model' },
                { text: 'Turn schema', link: '/reference/contract-schema' },
                { text: 'Generated files', link: '/reference/generated-files' },
                { text: 'Exit codes', link: '/reference/exit-codes' },
                { text: 'Limitations', link: '/reference/limitations' }
              ]
            }
          ],
          '/security/': [
            {
              text: 'Security', items: [
                { text: 'Security model', link: '/security/' },
                { text: 'Threat model', link: '/security/threat-model' },
                { text: 'Permissions', link: '/security/permissions' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/M8Shift/m8shift.github.io/edit/main/docs/:path',
          text: 'Edit this page'
        },
        footer: {
          message: 'Built with ❤️ and <a href="/">M8Shift</a> by <a href="https://m8shift.ai/" target="_blank" rel="noopener noreferrer">M8Shift contributors</a>',
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
          {
            text: 'Plus', items: [
              { text: 'Fonctionnalités', link: '/fr/reference/features' },
              { text: 'Référence RFC', link: '/fr/reference/rfc' },
              { text: "Cas d'usage", link: '/fr/use-cases' },
              { text: 'Comparaison', link: '/fr/comparison' },
              { text: 'FAQ', link: '/fr/faq' },
              { text: 'Contribuer', link: '/fr/contributing' },
              { text: 'Licence', link: '/fr/license' }
            ]
          }
        ],
        sidebar: {
          '/fr/guide/': [
            {
              text: 'Prise en main', items: [
                { text: 'Aperçu', link: '/fr/guide/' },
                { text: 'Pourquoi M8Shift', link: '/fr/guide/why' },
                { text: 'Démarrage rapide', link: '/fr/guide/quickstart' },
                { text: 'VS Code', link: '/fr/guide/vscode' },
                { text: 'Exécution headless', link: '/fr/guide/headless' }
              ]
            },
            {
              text: 'Installation', items: [
                { text: 'Windows', link: '/fr/guide/windows' },
                { text: 'Linux', link: '/fr/guide/linux' },
                { text: 'macOS', link: '/fr/guide/macos' }
              ]
            },
            {
              text: 'Flux de travail', items: [
                { text: 'Relais à deux agents', link: '/fr/guide/two-agent-relay' },
                { text: 'Flux multi-agents', link: '/fr/guide/multi-agent' },
                { text: 'Boîte à outils worktree', link: '/fr/guide/worktree-toolbox' }
              ]
            }
          ],
          '/fr/concepts/': [
            {
              text: 'Concepts clés', items: [
                { text: 'Aperçu', link: '/fr/concepts/' },
                { text: 'Le stylo', link: '/fr/concepts/pen' },
                { text: 'Agents et rôles', link: '/fr/concepts/agents-roles' },
                { text: 'Relations', link: '/fr/concepts/relations' },
                { text: 'Contrats de passation', link: '/fr/concepts/handoff-contracts' },
                { text: 'Validation', link: '/fr/concepts/validation' }
              ]
            }
          ],
          '/fr/reference/': [
            {
              text: 'Référence', items: [
                { text: 'Aperçu', link: '/fr/reference/' },
                { text: 'Matrice fonctionnelle', link: '/fr/reference/features' },
                { text: 'Référence RFC', link: '/fr/reference/rfc' },
                { text: 'CLI', link: '/fr/reference/cli' },
                { text: 'Modèle d’états', link: '/fr/reference/state-model' },
                { text: 'Schéma de tour', link: '/fr/reference/contract-schema' },
                { text: 'Fichiers générés', link: '/fr/reference/generated-files' },
                { text: 'Codes de sortie', link: '/fr/reference/exit-codes' },
                { text: 'Limites', link: '/fr/reference/limitations' }
              ]
            }
          ],
          '/fr/security/': [
            {
              text: 'Sécurité', items: [
                { text: 'Modèle de sécurité', link: '/fr/security/' },
                { text: 'Modèle de menaces', link: '/fr/security/threat-model' },
                { text: 'Permissions', link: '/fr/security/permissions' }
              ]
            }
          ]
        },
        editLink: {
          pattern: 'https://github.com/M8Shift/m8shift.github.io/edit/main/docs/:path',
          text: 'Modifier cette page'
        },
        footer: {
          message: 'Built with ❤️ and <a href="/fr/">M8Shift</a> by <a href="https://m8shift.ai/" target="_blank" rel="noopener noreferrer">M8Shift contributors</a>',
          copyright: 'Independent project, not affiliated with Anthropic, Google, Mistral, OpenAI · Copyright © 2026 M8Shift contributors'
        }
      }
    }
  }
})
