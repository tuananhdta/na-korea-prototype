const fs = require('fs');
const path = require('path');

const slugs = [
  'chinh-sach-bao-mat',
  'huong-dan-mua-hang',
  'chinh-sach-doi-tra',
  'chinh-sach-kiem-hang',
  'chinh-sach-giao-hang',
  'chinh-sach-thanh-toan',
];

const results = {};

for (const slug of slugs) {
  const file = path.join(__dirname, `${slug}.html`);
  const html = fs.readFileSync(file, 'utf8');

  // Find page title
  let title = '';
  const titleTagMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleTagMatch) {
    title = titleTagMatch[1].replace(/ - .*$/, '').trim();
  }

  // Find content in <div class="page-content"> or between <main ...> and </main>
  let content = '';
  const pageContentMatch = html.match(/<div class="page-content">([\s\S]*?)<\/div>\s*<\/main>/i);
  if (pageContentMatch) {
    content = pageContentMatch[1];
  } else {
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    if (mainMatch) {
      content = mainMatch[1];
    }
  }

  // Clean WordPress/HTML extra spacing
  content = content.trim();

  console.log(`[${slug}] Title: "${title}", Length: ${content.length}`);
  results[slug] = {
    slug,
    title,
    content,
  };
}

fs.writeFileSync(path.join(__dirname, '../src/data/policies.json'), JSON.stringify(results, null, 2));
console.log('Saved to src/data/policies.json');
