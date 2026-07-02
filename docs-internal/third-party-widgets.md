# Third-party widgets — configuration & customization

> [!NOTE]
> Maintainer notes. This file lives **outside** `docs/`, so it is **not** built into the
> public site (`vitepress build docs`). It documents the two CookieYes embeds on
> m8shift.ai and how to customize them.

Both are wired up in [`docs/.vitepress/config.mts`](../docs/.vitepress/config.mts):
`buildAccessibilityHead()` and `buildCookieConsentHead()`, spread into the `head` array.

| Widget | Integration | Where the look is configured |
| --- | --- | --- |
| Accessibility toolbar (AccessiYes) | `window._cyA11yConfig` injected **locally** + `cdn-cookieyes.com/widgets/accessibility.js` | **In code** (this repo) |
| Cookie consent banner (CookieYes CMP) | Hosted `cdn-cookieyes.com/client_data/<id>/script.js` | **CookieYes dashboard** (cloud) — not in code |

Env vars (with baked-in defaults in `config.mts`):

- `M8SHIFT_ACCESSIBILITY_WIDGET_ID` (default `538019fc-b197-4c20-824c-f7d629857640`)
- `M8SHIFT_COOKIEYES_CLIENT_DATA_ID` (default `62897b62030c6fecabf8f3ba3f6db80e`)
- `M8SHIFT_GA_MEASUREMENT_ID`

---

## 1. Accessibility toolbar (AccessiYes)

Fully customizable **from code**: we inject `window._cyA11yConfig` before the widget
script loads, in `buildAccessibilityHead()`. The widget renders inside a **Shadow DOM**,
so site-wide CSS does **not** cascade into it — the config object is the supported way to
customize it.

### Current config

```js
window._cyA11yConfig = {
  iconId: 'default',
  primaryColor: '#5D26F2',                 // M8Shift purple (brand)
  position: { mobile: 'bottom-right', desktop: 'bottom-right' },
  language: { default: 'en', selected: [] },
  modules: { statement: { enabled: true, url: 'https://m8shift.ai/accessibility' } },
  keyboard: { enabled: true, shortcut: 'alt+a' }
}
```

### Full config keys

Several keys are **undocumented** in CookieYes's public JS guide but are read by the
widget (confirmed in the WP plugin source `accessibility-widget` 3.2.3 and `widget.min.js`).

| Key | Type / values | Effect | Default |
| --- | --- | --- | --- |
| `iconId` | `default` \| `accessibility` \| `wheel` \| `assist` | Launcher icon style | `default` |
| `primaryColor` | hex | Brand colour → Shadow-DOM `--cya11y-primary-color` (icon, buttons, active states). Widget contrast-checks it vs white. | `#1863DC` |
| `focusRingColor` | hex (3/6/8-digit) | Focus-ring colour on widget chrome. Empty ⇒ derived from `primaryColor`. | auto |
| `iconSize` | px | Launcher button size → `--cya11y-size` | — |
| `position` | `{ mobile, desktop }` ∈ `bottom-right` \| `bottom-left` \| `top-right` \| `top-left` | Placement | `bottom-right` |
| `keyboard` | `{ enabled, shortcut }` — shortcut = `alt`/`shift`/`ctrl`/`space` + key | Open with keyboard | `alt+a` |
| `modules.*` | see below | Enable/disable individual features (all ON by default) | all ON |
| `modules.statement` | `{ enabled, url }` | "Accessibility statement" link → we point it at `/accessibility` | enabled |

`modules` groups (each entry `{ enabled: true|false }`):

- **color** — `darkContrast`, `lightContrast`, `highContrast`, `highSaturation`, `lowSaturation`, `monochrome`
- **content** — `adjustFontSizing`, `highlightTitle`, `highlightLinks`, `dyslexicFont`, `letterSpacing`, `lineHeight`, `fontWeight`, `textAlign`
- **navigation** — `readingGuide`, `pauseAnimations`, `bigCursor`
- **statement**, **profiles**, **pageRead**

### How to re-customize

Edit the `config` object in `buildAccessibilityHead()` in `config.mts`, rebuild
(`npm run docs:build`), commit, and push. Examples:

- Change the launcher icon: `iconId: 'assist'`
- Resize the launcher: add `iconSize: 56`
- Disable a feature: `modules: { color: { monochrome: { enabled: false } }, statement: { … } }`

> [!TIP]
> `#5D26F2` passes the widget's own contrast check against white (~5.9:1). If you pick a
> lighter brand colour, the widget auto-falls back to black for the focus ring; set
> `focusRingColor` explicitly if you want to override that.

The public statement link points to [`docs/accessibility.md`](../docs/accessibility.md)
(route `/accessibility`).

---

## 2. Cookie consent banner (CookieYes CMP)

> [!IMPORTANT]
> Unlike the accessibility toolbar, the banner's **appearance and content are configured
> in the CookieYes dashboard** (app.cookieyes.com), **not** in this repo. The site loads
> the hosted `client_data/<id>/script.js`, which bakes the design/config server-side.
> There is **no** local `_ckyConfig` object we inject.

`buildCookieConsentHead()` only sequences three tags for Google Consent Mode:

1. `gtag('consent', 'default', …)` (must be first),
2. the CookieYes CMP script (updates consent on accept),
3. the Google tag.

### To re-brand the banner (recommended)

Do it in the **CookieYes dashboard** → *Cookie Banner → Appearance / Design*
(colours, buttons, layout, text, categories). Changes propagate to the hosted script;
no code change or redeploy needed.

### Code-side branding (implemented)

Because the dashboard default is blue (`#1863DC`), the banner is re-branded to the
M8Shift purple via a CSS override in
[`docs/.vitepress/theme/custom.css`](../docs/.vitepress/theme/custom.css) (search
"CookieYes cookie-consent banner"). The hosted banner is **not** in a Shadow DOM, so site
CSS applies; colours are set as inline styles, so the override uses `!important`.

Selectors were verified against the **live** m8shift.ai DOM (CookieYes v3, `data-cky-tag`
markup):

| Element | Selector | `data-cky-tag` | Default → now |
| --- | --- | --- | --- |
| Accept All | `.cky-btn-accept` | `accept-button` | `#1863DC` → `#5D26F2` |
| Reject All | `.cky-btn-reject` | `reject-button` | `#1863DC` → `#5D26F2` |
| Customise (outline) | `.cky-btn-customize` | `settings-button` | `#1863DC` → `#5D26F2` |
| Save preferences (modal) | `.cky-btn-preferences` | — | filled `#5D26F2` |
| Revisit badge (floating) | `.cky-btn-revisit-wrapper` | `revisit-consent` | `#0056A7` → `#5D26F2` |

> [!WARNING]
> These class names belong to a third-party bundle and can change — re-verify against the
> live DOM (or re-run the Playwright capture) after any CookieYes update.
>
> Not covered by CSS: the preference-center **toggle switches'** active colour is set by
> the widget's own JS from the dashboard config — change that in the dashboard.

### Self-hosted WP plugin (not used here)

The plugin `cookie-law-info` 3.5.1 is CookieYes's **self-hosted** WordPress path. It
injects `_ckyConfig` / `_ckyStyles` locally and exposes colour settings (background,
border, button, text) in WP admin. The M8Shift site uses the **hosted CMP** instead, so
that local-config route does not apply here — it is documented only to explain why the
"same as the accessibility widget" code-branding is **not** available for the banner.

---

*Last updated: July 2026 · sources inspected: `accessibility-widget` 3.2.3, `cookie-law-info` 3.5.1.*
