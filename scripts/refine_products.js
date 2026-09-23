const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function decodeEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#8363;/g, '₫')
    .replace(/&#8211;/g, '-')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'");
}

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
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

async function refineProducts() {
  const dataPath = path.join(__dirname, '..', 'src', 'data', 'products.json');
  const products = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    console.log(`[${i+1}/${products.length}] Refining title & metadata for: ${p.id}`);
    try {
      const html = await fetchPage(p.url);

      // Extract title from og:title or <title>
      const ogTitleMatch = html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i) ||
                           html.match(/<title>([^<]+)<\/title>/i);
      if (ogTitleMatch) {
        let rawTitle = ogTitleMatch[1];
        rawTitle = rawTitle.replace(/\s*-\s*Kimsredginseng\s+Việt\s+Nam/i, '')
                           .replace(/\s*-\s*Kim's\s+Red\s+Ginseng/i, '')
                           .trim();
        p.title = decodeEntities(rawTitle);
      }

      p.price = decodeEntities(p.price);
      if (p.originalPrice) {
        p.originalPrice = decodeEntities(p.originalPrice);
      }

      // Clean categories (strip "Category:" or "Categories:")
      if (p.categories) {
        p.categories = p.categories.map(c => decodeEntities(c).replace(/^Category:\s*/i, '').replace(/^Categories:\s*/i, '').trim()).filter(Boolean);
      }

      p.shortDescription = decodeEntities(p.shortDescription);
      p.description = decodeEntities(p.description).replace(/^Description\s+/i, '');
    } catch (e) {
      console.error(`Error refining ${p.id}:`, e.message);
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2), 'utf8');
  console.log('Successfully updated src/data/products.json with cleaned titles and formatted pricing!');
}

refineProducts().catch(console.error);
