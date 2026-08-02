// Smoke-check of the generated output: run after `npm run generate`
// to catch missing locales or broken prerendering before deploying.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const OUT = '.output/public';

const REQUIRED_PAGES = [
  'index.html',
  'ru/index.html',
  'th/index.html',
  '404.html',
  'projects/index.html',
  'ru/projects/index.html',
  'th/projects/index.html',
  'equipment/index.html',
  'services/earthworks/index.html',
  'sitemap_index.xml',
  'robots.txt',
];

const errors = [];

if (!existsSync(OUT)) {
  console.error(`✗ ${OUT} not found - run \`npm run generate\` first`);
  process.exit(1);
}

for (const page of REQUIRED_PAGES) {
  if (!existsSync(join(OUT, page))) errors.push(`missing: ${page}`);
}

// Every project markdown file must have a prerendered page in every locale.
const slugs = readdirSync('content/projects/en')
  .filter(f => f.endsWith('.md'))
  .map(f => f.replace(/\.md$/, ''));

for (const slug of slugs) {
  for (const prefix of ['', 'ru/', 'th/']) {
    const page = `${prefix}projects/${slug}/index.html`;
    if (!existsSync(join(OUT, page))) errors.push(`missing project page: ${page}`);
  }
}

// A page that prerendered as an error shell is as bad as a missing one.
for (const page of ['index.html', 'ru/index.html', 'th/index.html']) {
  const html = readFileSync(join(OUT, page), 'utf8');
  if (!html.includes('Superman Samui')) errors.push(`suspicious content: ${page}`);
}

if (errors.length) {
  for (const e of errors) console.error(`✗ ${e}`);
  process.exit(1);
}

console.log(`✓ ${REQUIRED_PAGES.length} base pages + ${slugs.length} projects × 3 locales - all in place`);
