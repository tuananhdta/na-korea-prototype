const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (!loc.startsWith('http')) loc = 'https://kimsredginseng.com' + loc;
        return resolve(fetchPage(loc));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

const pages = [
  { url: 'https://kimsredginseng.com/about-us/', name: 'about_us' },
  { url: 'https://kimsredginseng.com/greeting/', name: 'greeting' },
  { url: 'https://kimsredginseng.com/history/', name: 'history' },
  { url: 'https://kimsredginseng.com/certification/', name: 'certification' },
  { url: 'https://kimsredginseng.com/dang-ky-dai-ly/', name: 'wholesale' },
  { url: 'https://kimsredginseng.com/contact/', name: 'contact' },
];

async function inspectOtherPages() {
  for (const p of pages) {
    try {
      console.log(`Fetching ${p.name}...`);
      const html = await fetchPage(p.url);
      fs.writeFileSync(path.join(__dirname, `${p.name}.html`), html, 'utf8');
      const text = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      console.log(`[${p.name}] preview:`, text.slice(0, 300));
    } catch (e) {
      console.error(`Error ${p.name}:`, e.message);
    }
  }
}

inspectOtherPages().catch(console.error);
