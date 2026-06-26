import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import './custom.css'

export default {
  extends: DefaultTheme
} satisfies Theme
