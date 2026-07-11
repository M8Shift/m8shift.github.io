import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { readdirSync, statSync } from 'node:fs'

const root = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(root, '..')
const docsDir = join(repoRoot, 'docs')
const outDir = join(docsDir, '.vitepress', 'dist', '_markdown')

const ignoredDirs = new Set(['.vitepress', 'public', 'node_modules'])

await rm(outDir, { recursive: true, force: true })

const files = listMarkdownFiles(docsDir)

for (const file of files) {
  const rel = relative(docsDir, file)
  const target = join(outDir, rel)
  const content = await readFile(file, 'utf8')
  await mkdir(dirname(target), { recursive: true })
  await writeFile(target, normalizeMarkdown(content))
}

console.log(`Generated ${files.length} markdown negotiation assets in ${relative(repoRoot, outDir)}`)

function listMarkdownFiles(dir) {
  const entries = readdirSync(dir)
  const files = []

  for (const entry of entries) {
    if (ignoredDirs.has(entry)) continue

    const path = join(dir, entry)
    const stat = statSync(path)

    if (stat.isDirectory()) {
      files.push(...listMarkdownFiles(path))
    } else if (entry.endsWith('.md')) {
      files.push(path)
    }
  }

  return files
}

function normalizeMarkdown(content) {
  return `${content.replace(/\s+$/u, '')}\n`
}
