import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Mermaid from './Mermaid.vue'
// FontAwesome solid, subset to the icons actually used (see scripts/build-fa-subset.py).
import './fontawesome-core-subset.css'
import './fontawesome-solid-subset.css'
import './custom.css'
import './animations.css'
import './story.css'

// Elements faded/risen into view on scroll (see animations.css).
const REVEAL_SEL = [
  '.VPHomeFeatures .VPFeature',
  '.m8-doc-card', '.m8-faq-card', '.m8-usecase-card',
  '.m8-usecase-image-card', '.m8-tool-card',
  '.m8-quickstart', '.m8-callout', '.m8-section-lead',
  '.m8-reveal'
].join(',')

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void
}

type VitePressRouter = {
  onAfterRouteChange?: (to: string) => void
}

let lastTrackedPage = ''

function trackAnalyticsPageView() {
  const gtag = (window as AnalyticsWindow).gtag
  if (typeof gtag !== 'function') return

  const pagePath = `${window.location.pathname}${window.location.search}${window.location.hash}`
  if (pagePath === lastTrackedPage) return
  lastTrackedPage = pagePath

  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pagePath
  })
}

function initAnalyticsRouteTracking(router: VitePressRouter) {
  const previousAfterRouteChange = router.onAfterRouteChange

  router.onAfterRouteChange = (to: string) => {
    previousAfterRouteChange?.(to)
    window.setTimeout(trackAnalyticsPageView, 0)
  }
}

function initReveal() {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // Only hide content once JS is running (graceful: no JS => content visible).
  document.documentElement.classList.add('m8-anim')

  let raf = 0
  let navTimer = 0
  // Reveal any target whose top has entered the lower ~92% of the viewport.
  // Simple + robust: no IntersectionObserver thresholds/margins, so no dead zone
  // (the last element at page bottom always reveals when scrolled to).
  const reveal = () => {
    raf = 0
    const h = window.innerHeight
    document.querySelectorAll(REVEAL_SEL).forEach((el) => {
      if (el.classList.contains('m8-in')) return
      if (el.getBoundingClientRect().top < h * 0.92) el.classList.add('m8-in')
    })
  }
  const scheduleRaf = () => { if (!raf) raf = requestAnimationFrame(reveal) }
  // After a DOM change (e.g. SPA navigation) wait a beat so VitePress can reset
  // scroll-to-top before we decide what is in view — otherwise a stale scroll
  // position would reveal everything at once (killing the animation on that page).
  const scheduleNav = () => { if (navTimer) clearTimeout(navTimer); navTimer = window.setTimeout(reveal, 100) }

  scheduleRaf()
  window.addEventListener('scroll', scheduleRaf, { passive: true })
  window.addEventListener('resize', scheduleRaf)
  // Re-arm on any DOM change => covers SPA navigation deterministically,
  // without touching the router. Class toggles don't fire it (childList only).
  new MutationObserver(scheduleNav).observe(document.body, { childList: true, subtree: true })
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component('Mermaid', Mermaid)
    if (import.meta.env.SSR) return
    initAnalyticsRouteTracking(router)
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', initReveal)
    } else {
      initReveal()
    }
  }
} satisfies Theme
