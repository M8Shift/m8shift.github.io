import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { defineConfig } from 'vitepress'

const repositoryUrl = 'https://github.com/M8Shift/M8Shift'
const siteUrl = (process.env.M8SHIFT_SITE_URL || 'https://m8shift.ai').replace(/\/+$/, '')
const socialImage = `${siteUrl}/logo.png`

const defaultDescription =
  'Free open-source local relay for Claude, Codex, Gemini, Vibe and other coding agents: one writer at a time, structured handoffs, auditable repo state.'


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
  '/guide/': {
    title: 'M8Shift Guide — install and coordinate AI coding agents',
    description: 'Install M8Shift, understand the relay workflow, and start coordinating multiple CLI-capable AI coding agents in one repository.'
  },
  '/guide/quickstart': {
    title: 'M8Shift Quickstart — install the local AI agent relay',
    description: 'Install M8Shift on macOS, Linux, Windows or WSL, initialize your roster, claim the pen, and pass a structured handoff to another AI agent.'
  },
  '/guide/why': {
    title: 'Why M8Shift — multi-agent coding without a hosted control plane',
    description: 'Why use M8Shift for multi-agent software work: local state, explicit roles, human arbitration, one writer at a time, and inspectable handoffs.'
  },
  '/use-cases': {
    title: 'M8Shift Use Cases — software, docs, websites and research',
    description: 'Practical M8Shift workflows for building software, reviewing code, writing documentation, producing websites, researching, marketing and long-form writing.'
  },
  '/comparison': {
    title: 'M8Shift Comparison — OpenClaw, LangGraph, AutoGen, CrewAI and more',
    description: 'Compare M8Shift with OpenClaw, LangGraph, AutoGen, CrewAI and adjacent multi-agent tools, including where they are comparable and where they are not.'
  },
  '/reference/features': {
    title: 'M8Shift Feature Matrix — complete list of relay capabilities',
    description: 'A complete feature table for M8Shift: pen locking, append-only turns, contracts, memory notes, task files, sessions, validation and local state.'
  },
  '/reference/cli': {
    title: 'M8Shift CLI Reference — commands for the AI agent relay',
    description: 'Reference for M8Shift commands such as init, status, claim, next, append, done, memory, tasks, sessions, doctor and contract validation.'
  },
  '/reference/rfc': {
    title: 'M8Shift RFC Reference — statuses, versions and implementation notes',
    description: 'Complete M8Shift RFC reference from 001 to 029, including status, implementation version, implementation date and notes.'
  },
  '/security/': {
    title: 'M8Shift Security Model — local files, locks and permissions',
    description: 'Understand M8Shift security boundaries: local repository state, file locks, generated files, permissions, threat model and operational guardrails.'
  },
  '/security/audits': {
    title: 'M8Shift Security Audits — OWASP, MITRE ATLAS, NIST, CISA, ANSSI, IBM coverage',
    description: 'How M8Shift maps to agentic-security frameworks — OWASP Agentic Top 10, MITRE ATLAS, NIST AI RMF, CISA, ANSSI-PA-102 and the IBM AI Risk Atlas — including what is N/A by design because it has no model.'
  },
  '/roadmap': {
    title: 'M8Shift Releases and Roadmap — current version and planned work',
    description: 'Follow the current M8Shift version, release rationale and roadmap for the local multi-agent coding relay.'
  },
  '/faq': {
    title: 'M8Shift FAQ — practical answers for multi-agent coding',
    description: 'Frequently asked questions about M8Shift, including local state, supported agents, safety, workflows and how it differs from agent frameworks.'
  },
}

// English-only site: no locale alternates.
const alternateRoutes: Record<string, string> = {}

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

function localeForRoute(_route: string) {
  return 'en-US'
}

function fallbackSeo(route: string, pageTitle: string): SeoEntry {
  const title = pageTitle && pageTitle !== 'M8Shift'
    ? `${pageTitle} | M8Shift`
    : 'M8Shift — local relay for AI coding agents'

  if (route.includes('/guide/')) {
    return {
      title,
      description: 'Practical M8Shift guide for installing, configuring and using a local relay between AI coding agents.'
    }
  }

  if (route.includes('/concepts/')) {
    return {
      title,
      description: 'Core M8Shift concepts: the pen, agents, roles, relations, handoff contracts and validation.'
    }
  }

  if (route.includes('/reference/')) {
    return {
      title,
      description: 'M8Shift reference for commands, generated files, state models, schemas, exit codes and limitations.'
    }
  }

  if (route.includes('/security/')) {
    return {
      title,
      description: 'M8Shift security documentation for local locks, permissions, generated files and threat model.'
    }
  }

  return {
    title,
    description: defaultDescription
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
        description: defaultDescription
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
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: seo.title }],
    ['meta', { name: 'twitter:description', content: seo.description }],
    ['meta', { name: 'twitter:image', content: socialImage }]
  ]

  if (seo.keywords?.length) {
    head.push(['meta', { name: 'keywords', content: seo.keywords.join(', ') }])
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
                { text: 'Audits & frameworks', link: '/security/audits' },
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
  }
})
