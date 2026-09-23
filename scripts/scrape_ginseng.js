const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
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

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    if (!url) return resolve();
    const client = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (!loc.startsWith('http')) loc = 'https://kimsredginseng.com' + loc;
        return resolve(downloadImage(loc, dest));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function scrapeGinsengPages() {
  const ginsengHtml = await fetchPage('https://kimsredginseng.com/ginseng/');
  fs.writeFileSync(path.join(__dirname, 'ginseng.html'), ginsengHtml, 'utf8');

  // Let's find what the other sub-menu links are
  const menuLinks = ginsengHtml.match(/href="([^"]+)"/g) || [];
  const cleanLinks = Array.from(new Set(menuLinks.map(l => l.replace(/href="|"/g, ''))));
  console.log('All menu links found:', cleanLinks.filter(l => l.includes('kimsredginseng.com')));
}

scrapeGinsengPages().catch(console.error);
