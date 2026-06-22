<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{ id: string; code: string }>()
const { isDark } = useData()
const svg = ref('')

// Decode a UTF-8 base64 payload (handles accented French labels).
function decode(b64: string): string {
  return decodeURIComponent(
    atob(b64)
      .split('')
      .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')
  )
}

async function render() {
  const mermaid = (await import('mermaid')).default
  mermaid.initialize({
    startOnLoad: false,
    theme: isDark.value ? 'dark' : 'default',
    securityLevel: 'loose',
    fontFamily: 'inherit'
  })
  const graph = decode(props.code)
  const renderId = 'mmd-' + props.id + '-' + (isDark.value ? 'd' : 'l')
  try {
    const { svg: out } = await mermaid.render(renderId, graph)
    svg.value = out
  } catch (e) {
    svg.value = '<pre class="mermaid-error">' + String(e) + '</pre>'
  }
}

onMounted(render)
watch(isDark, render)
</script>

<template>
  <div class="m8-mermaid" v-html="svg" />
</template>

<style>
.m8-mermaid {
  display: flex;
  justify-content: center;
  margin: 1.25rem 0;
}
.m8-mermaid svg {
  max-width: 100%;
  height: auto;
}
.mermaid-error {
  color: var(--vp-c-danger-1, #e11d48);
  white-space: pre-wrap;
}
</style>
