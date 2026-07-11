const MARKDOWN_ACCEPT = 'text/markdown'

export async function onRequest(context) {
  const { request, env } = context
  const method = request.method.toUpperCase()
  const accept = request.headers.get('Accept') || ''

  if ((method !== 'GET' && method !== 'HEAD') || !acceptsMarkdown(accept)) {
    return env.ASSETS.fetch(request)
  }

  const url = new URL(request.url)
  const candidates = markdownCandidates(url.pathname)

  for (const candidate of candidates) {
    const markdownUrl = new URL(candidate, url.origin)
    const markdownRequest = new Request(markdownUrl, {
      method,
      headers: request.headers
    })
    const response = await env.ASSETS.fetch(markdownRequest)

    if (response.ok) {
      const headers = new Headers(response.headers)
      headers.set('Content-Type', 'text/markdown; charset=utf-8')
      headers.append('Vary', 'Accept')
      headers.set('X-Markdown-Source', candidate)

      return new Response(method === 'HEAD' ? null : response.body, {
        status: 200,
        headers
      })
    }
  }

  return env.ASSETS.fetch(request)
}

function acceptsMarkdown(accept) {
  return accept
    .split(',')
    .map((part) => part.trim().toLowerCase())
    .some((part) => part === MARKDOWN_ACCEPT || part.startsWith(`${MARKDOWN_ACCEPT};`))
}

function markdownCandidates(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/'

  if (clean === '/') {
    return ['/_markdown/index.md']
  }

  return [
    `/_markdown${clean}.md`,
    `/_markdown${clean}/index.md`
  ]
}
