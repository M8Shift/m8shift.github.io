// Validate every ```mermaid block in docs/ by parsing it with mermaid under jsdom.
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!DOCTYPE html><body></body>', { pretendToBeVisual: true })
globalThis.window = dom.window
globalThis.document = dom.window.document

const mermaid = (await import('mermaid')).default
mermaid.initialize({ startOnLoad: false, securityLevel: 'loose' })

function walk(dir) {
  let out = []
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    if (e === 'dist' || e === 'cache' || e === 'node_modules') continue
    if (statSync(p).isDirectory()) out = out.concat(walk(p))
    else if (e.endsWith('.md')) out.push(p)
  }
  return out
}

const files = walk('docs')
let total = 0, failed = 0
for (const f of files) {
  const md = readFileSync(f, 'utf8')
  const re = /```mermaid\n([\s\S]*?)```/g
  let m, i = 0
  while ((m = re.exec(md))) {
    total++; i++
    try {
      await mermaid.parse(m[1])
    } catch (e) {
      failed++
      console.log(`FAIL ${f} #${i}: ${(e && e.message ? e.message : e).split('\n')[0]}`)
    }
  }
}
console.log(`\n${total} diagrams, ${failed} failed`)
process.exit(failed ? 1 : 0)
