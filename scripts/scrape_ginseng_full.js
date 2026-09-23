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

async function scrapeBoth() {
  console.log('Fetching Ginseng page...');
  const ginsengHtml = await fetchPage('https://kimsredginseng.com/ginseng/');
  fs.writeFileSync(path.join(__dirname, 'ginseng.html'), ginsengHtml, 'utf8');

  console.log('Fetching Red Ginseng page...');
  const redGinsengHtml = await fetchPage('https://kimsredginseng.com/red-ginseng/');
  fs.writeFileSync(path.join(__dirname, 'red_ginseng.html'), redGinsengHtml, 'utf8');

  // Extract all image URLs from both pages
  const imgRegex = /https:\/\/kimsredginseng\.com\/wp-content\/uploads\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)/gi;
  const gImages = ginsengHtml.match(imgRegex) || [];
  const rgImages = redGinsengHtml.match(imgRegex) || [];

  const allImages = Array.from(new Set([...gImages, ...rgImages]));
  console.log(`Found ${allImages.length} images across both pages:`, allImages);

  const imagesDir = path.join(__dirname, '..', 'public', 'images', 'ginseng');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (let i = 0; i < allImages.length; i++) {
    const imgUrl = allImages[i];
    const filename = path.basename(imgUrl.split('?')[0]);
    const dest = path.join(imagesDir, filename);
    console.log(`[${i+1}/${allImages.length}] Downloading ${filename}...`);
    try {
      await downloadImage(imgUrl, dest);
    } catch (e) {
      console.error(`Failed downloading ${filename}:`, e.message);
    }
  }

  console.log('All images downloaded successfully!');
}

scrapeBoth().catch(console.error);
