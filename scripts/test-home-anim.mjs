/**
 * Non-regression test for the home dynamism (animations).
 * Drives system Chrome via Playwright against a running preview/dev server.
 *
 *   BASE=http://localhost:4173 node scripts/test-home-anim.mjs
 *
 * Reproduces the reported regression: after CLIENT-SIDE (SPA) navigation to
 * /use-cases, /roadmap, ... the content animated by the home reveal must NOT stay
 * stuck at opacity:0. Each reveal target is scrolled into view and must settle
 * visible (polled, to avoid catching mid-transition frames). Fails on runtime errors.
 */
import { chromium } from 'playwright'

const BASE = (process.env.BASE || 'http://localhost:4173').replace(/\/$/, '')
const REVEAL_SEL = [
  '.VPHomeFeatures .VPFeature',
  '.m8-doc-card', '.m8-faq-card', '.m8-usecase-card',
  '.m8-usecase-image-card', '.m8-tool-card',
  '.m8-quickstart', '.m8-callout', '.m8-section-lead'
].join(',')

const failures = []
const errors = []

const browser = await chromium.launch({ channel: 'chrome', headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, reducedMotion: 'no-preference' })
// Ignore environment-specific noise that is NOT a code regression:
// - CookieYes only runs on its registered domain (errors on localhost)
// - analytics endpoints are sinkholed by the local network DNS (ERR_CONNECTION_REFUSED)
const IGNORE_ERR = /cookieyes|ERR_CONNECTION_REFUSED|google-analytics|googletagmanager/i
page.on('pageerror', (e) => { if (!IGNORE_ERR.test(e.message)) errors.push('pageerror: ' + e.message) })
page.on('console', (m) => { if (m.type() === 'error' && !IGNORE_ERR.test(m.text())) errors.push('console: ' + m.text()) })

// Poll the opacity until it settles >= 0.99 (or timeout): ignores mid-transition frames,
// but a truly stuck (opacity:0 forever) element never settles -> reported.
async function pollOpaque(el, timeout = 1800) {
  const t0 = Date.now()
  let op = 0
  while (Date.now() - t0 < timeout) {
    op = parseFloat(await el.evaluate((e) => getComputedStyle(e).opacity))
    if (op >= 0.99) return op
    await page.waitForTimeout(90)
  }
  return op
}

async function assertVisible(label) {
  const loc = page.locator(REVEAL_SEL)
  const n = await loc.count()
  const stuck = []
  for (let i = 0; i < n; i++) {
    const el = loc.nth(i)
    const box = await el.boundingBox().catch(() => null)
    if (!box) continue // not rendered (e.g. responsive-hidden) -> skip
    // Force-center (scrollIntoViewIfNeeded no-ops when an element is already partly visible).
    await el.evaluate((e) => e.scrollIntoView({ block: 'center' })).catch(() => {})
    const op = await pollOpaque(el)
    if (!(op >= 0.99)) stuck.push({ i, opacity: Number(op.toFixed(2)) })
  }
  if (stuck.length) failures.push(`[${label}] ${stuck.length} élément(s) bloqué(s) opacity<1: ${JSON.stringify(stuck.slice(0, 8))}`)
  else console.log(`  [${label}] OK — ${n} cibles visibles`)
}

// Proves the reveal animation is actually ACTIVE: targets below the fold must be
// hidden (opacity<0.5) before any scroll. Catches "we lost the animations".
async function assertAnimated(label) {
  const loc = page.locator(REVEAL_SEL)
  const n = await loc.count()
  const vh = page.viewportSize().height
  let below = 0, hidden = 0
  for (let i = 0; i < n; i++) {
    const el = loc.nth(i)
    const box = await el.boundingBox().catch(() => null)
    if (!box || box.y <= vh) continue // only below-the-fold targets
    below++
    const op = parseFloat(await el.evaluate((e) => getComputedStyle(e).opacity))
    if (op < 0.5) hidden++
  }
  if (below === 0) { console.log(`  [${label}] (aucune cible sous la ligne de flottaison — anim non vérifiable ici)`); return }
  if (hidden === 0) failures.push(`[${label}] ANIMATIONS ABSENTES : ${below} cible(s) sous la ligne de flottaison, aucune masquée avant scroll`)
  else console.log(`  [${label}] animations actives — ${hidden}/${below} cibles masquées avant scroll`)
}

async function spaClick(slug, { required = true } = {}) {
  // Target the actual PAGE link (href ending with /slug), NOT a "#...-slug" section anchor.
  const link = page.locator(`a[href$="/${slug}"]:visible, a[href$="/${slug}.html"]:visible`).first()
  if (await link.count() === 0) { if (required) failures.push(`[${slug}] aucun lien de page trouvé`); return false }
  await link.click()
  // Strict: a real /slug path, not the substring of "/#...-slug".
  try { await page.waitForURL(new RegExp('/' + slug + '(\\.html)?([#?]|$)'), { timeout: 6000 }) }
  catch { failures.push(`[${slug}] navigation SPA : l'URL n'est pas passée à /${slug}`); return false }
  await page.waitForTimeout(400) // let the new view mount
  // Guard against false positives: a real page nav must leave the home layout.
  if (await page.locator('.VPHomeHero').count() > 0) {
    failures.push(`[${slug}] navigation SPA : toujours sur la home (contenu non chargé)`); return false
  }
  await page.evaluate(() => window.scrollTo(0, 0)) // deterministic scroll state
  await page.waitForTimeout(300)
  return true
}

try {
  console.log('→ BASE = ' + BASE)
  await page.goto(BASE + '/', { waitUntil: 'networkidle' })
  await assertAnimated('home (animations présentes)')
  await assertVisible('home (chargement direct)')

  if (await spaClick('use-cases')) await assertVisible('use-cases (navigation SPA)')
  if (await spaClick('roadmap')) await assertVisible('roadmap (navigation SPA)')
  if (await spaClick('faq', { required: false })) await assertVisible('faq (navigation SPA)')
} catch (e) {
  failures.push('Exception: ' + e.message)
}

if (errors.length) failures.push('Erreurs runtime : ' + JSON.stringify([...new Set(errors)].slice(0, 6)))

await browser.close()

if (failures.length) {
  console.error('\n❌ ÉCHEC\n' + failures.map((f) => '  - ' + f).join('\n'))
  process.exit(1)
}
console.log('\n✅ OK — navigation SPA fonctionnelle, contenu visible sur toutes les pages testées')
