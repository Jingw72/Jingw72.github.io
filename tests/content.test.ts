import { test } from 'node:test';
import assert from 'node:assert/strict';
import { localized, filterWorks, validateContent, works, experiences, education, settings, type Work } from '../lib/content';
test('English fallback remains explicit and approved Chinese takes precedence', () => {
  assert.deepEqual(localized({ en: 'English' }, 'zh'), { value: 'English', fallback: true });
  assert.deepEqual(localized({ en: 'English', zh: '中文' }, 'zh'), { value: '中文', fallback: false });
  assert.deepEqual(localized({ en: 'English', zh: '中文' }, 'en'), { value: 'English', fallback: false });
});
test('multi-tagged work is stored once and matches either relevant filter', () => {
  const item: Work = { id: 'test-only', copy: { en: { title: 'Test fixture', summary: 'Not public content' } }, tags: ['Quant', 'Engineering'], stack: [], links: [] };
  assert.equal(filterWorks([item], 'All').length, 1);
  assert.equal(filterWorks([item], 'Quant').length, 1);
  assert.equal(filterWorks([item], 'Engineering').length, 1);
  assert.equal(filterWorks([item], 'Financial Risk').length, 0);
});
test('public content validates with no source TODOs in published entries', () => {
  validateContent();
  for (const item of [...works, ...experiences, ...education]) {
    assert(!/TODO|PLACEHOLDER|Lorem ipsum/i.test(JSON.stringify(item.copy)), 'Source TODOs must not be published');
  }
  if (settings.contactEmail) assert.match(settings.contactEmail, /^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  assert.equal(settings.siteUrl, 'https://jingw72.github.io');
});
