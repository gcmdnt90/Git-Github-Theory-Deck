#!/usr/bin/env node
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const modulesDir = join(root, 'modules');
const themePath = join(root, 'css', 'theme.css');

const files = (await readdir(modulesDir))
  .filter(f => f.endsWith('.html'))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

if (files.length === 0) {
  console.error('No module fragments found in modules/. Nothing to build.');
  process.exit(1);
}

const parts = [];
for (const f of files) {
  const html = await readFile(join(modulesDir, f), 'utf8');
  parts.push(`\n<!-- ===== ${f} ===== -->\n${html.trim()}\n`);
}

const template = await readFile(join(root, 'template.html'), 'utf8');
const themeCss = await readFile(themePath, 'utf8');

if (!template.includes('{{MODULES}}')) {
  console.error('template.html is missing the {{MODULES}} placeholder.');
  process.exit(1);
}

if (!template.includes('{{THEME_CSS}}')) {
  console.error('template.html is missing the {{THEME_CSS}} placeholder.');
  process.exit(1);
}

const out = template
  .replace('{{THEME_CSS}}', themeCss.trim())
  .replace('{{MODULES}}', parts.join('\n'));
await writeFile(join(root, 'index.html'), out, 'utf8');

console.log(`Built index.html from ${files.length} fragment(s):`);
for (const f of files) console.log(`  - ${f}`);
