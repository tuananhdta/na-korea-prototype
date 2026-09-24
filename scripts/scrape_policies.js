const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const urls = [
  { slug: 'chinh-sach-bao-mat', url: 'https://kimsredginseng.com/chinh-sach-bao-mat/' },
  { slug: 'huong-dan-mua-hang', url: 'https://kimsredginseng.com/huong-dan-mua-hang/' },
  { slug: 'chinh-sach-doi-tra', url: 'https://kimsredginseng.com/chinh-sach-doi-tra/' },
  { slug: 'chinh-sach-kiem-hang', url: 'https://kimsredginseng.com/chinh-sach-kiem-hang/' },
  { slug: 'chinh-sach-giao-hang', url: 'https://kimsredginseng.com/chinh-sach-giao-hang/' },
  { slug: 'chinh-sach-thanh-toan', url: 'https://kimsredginseng.com/chinh-sach-thanh-toan/' },
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (!loc.startsWith('http')) {
          loc = 'https://kimsredginseng.com' + loc;
        }
        return resolve(fetchPage(loc));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function cleanHtml(html) {
  // Extract title
  let title = '';
  const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || html.match(/<title>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    title = titleMatch[1].replace(/<[^>]+>/g, '').replace(/ - .*$/, '').trim();
  }

  // Extract main content
  let content = '';
  const contentMatch = 
    html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<!-- \.entry-content -->/i) ||
    html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>/i) ||
    html.match(/<article[^>]*>([\s\S]*?)<\/article>/i) ||
    html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);

  if (contentMatch) {
    content = contentMatch[1];
  } else {
    content = html;
  }

  return { title, content };
}

async function run() {
  const results = {};
  for (const item of urls) {
    console.log(`Fetching ${item.url}...`);
    try {
      const rawHtml = await fetchPage(item.url);
      const parsed = cleanHtml(rawHtml);
      results[item.slug] = {
        slug: item.slug,
        url: item.url,
        title: parsed.title,
        rawHtmlLength: rawHtml.length,
        contentLength: parsed.content.length,
        content: parsed.content,
      };
      fs.writeFileSync(path.join(__dirname, `${item.slug}.html`), rawHtml);
      console.log(`Saved ${item.slug}, title: "${parsed.title}"`);
    } catch (e) {
      console.error(`Error fetching ${item.slug}:`, e);
    }
  }

  fs.writeFileSync(
    path.join(__dirname, 'policies_extracted.json'),
    JSON.stringify(results, null, 2)
  );
  console.log('All done!');
}

run();
