import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { defineConfig } from 'vitepress'

const siteUrl = (process.env.M8SHIFT_SITE_URL || 'https://m8shift.github.io').replace(/\/+$/, '')
const title = 'M8Shift — official site coming soon'
const description =
  'M8Shift is a free, open-source local relay for coordinating multiple AI agents on the same repository: one writer at a time, explicit handoffs, and a readable turn journal.'

export default defineConfig({
  title: 'M8Shift',
  description,
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: false,
  srcExclude: [
    'fr/**',
    'guide/**',
    'concepts/**',
    'reference/**',
    'security/**',
    'comparison.md',
    'contributing.md',
    'faq.md',
    'license.md',
    'roadmap.md',
    'use-cases.md'
  ],
  sitemap: {
    hostname: siteUrl
  },
  transformHead() {
    return [
      ['meta', { name: 'description', content: description }],
      ['meta', { name: 'robots', content: 'index,follow' }],
      ['link', { rel: 'canonical', href: `${siteUrl}/` }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: 'M8Shift' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: `${siteUrl}/` }],
      ['meta', { property: 'og:image', content: `${siteUrl}/logo.png` }],
      ['meta', { property: 'og:image:alt', content: 'Logo M8Shift' }],
      ['meta', { property: 'og:locale', content: 'en_US' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: `${siteUrl}/logo.png` }],
      [
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareSourceCode',
          name: 'M8Shift',
          url: `${siteUrl}/`,
          codeRepository: 'https://github.com/M8Shift/M8Shift',
          programmingLanguage: 'Python',
          license: 'https://www.apache.org/licenses/LICENSE-2.0',
          applicationCategory: 'DeveloperApplication',
          description
        })
      ]
    ]
  },
  async buildEnd(siteConfig) {
    await writeFile(
      join(siteConfig.outDir, 'robots.txt'),
      `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`
    )
  },
  head: [
    ['meta', { name: 'theme-color', content: '#5D26F2' }],
    ['meta', { name: 'application-name', content: 'M8Shift' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'M8Shift' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', href: '/M8Shift-icone-white.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/M8Shift-icone-white.png' }]
  ],
  themeConfig: {
    logo: '/M8Shift-icone-white.png',
    siteTitle: 'M8Shift',
    nav: [
      { text: 'GitHub', link: 'https://github.com/M8Shift/M8Shift' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/M8Shift/M8Shift', ariaLabel: 'M8Shift GitHub repository' }
    ],
    footer: {
      message: 'Official site coming soon.',
      copyright: 'Independent project, not affiliated with Anthropic, Google, Mistral, OpenAI · Copyright © 2026 M8Shift contributors'
    }
  }
})
