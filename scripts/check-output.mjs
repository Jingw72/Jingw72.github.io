import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
for (const [locale, lang] of [['en', 'en']]) {
  const html = readFileSync(`out/${locale}/index.html`, 'utf8');
  assert(html.includes(`lang="${lang}"`));
  assert(html.includes(`href="https://jingw72.github.io/${locale}/"`));
  assert(!html.includes('href="/zh/'), 'Chinese route must not be linked');
  assert(!html.includes('hreflang="zh-TW"'), 'Removed language metadata');
  for (const id of ['about', 'experience', 'work', 'skills', 'education', 'contact']) assert(html.includes(`id="${id}"`), `${locale}: missing ${id}`);
  assert(!html.includes('href="#"'), 'Dead placeholder link');
  assert(!html.includes('mailto:'), 'Do not leak unapproved email');
}
for (const file of ['index.html', '404.html', 'robots.txt', 'sitemap.xml', 'icon.svg']) assert(existsSync(`out/${file}`), `Missing ${file}`);
assert(!existsSync('out/zh/index.html'), 'Chinese route must not be exported');
console.log('Static output: English-only route, section anchors, metadata, and assets verified.');
