const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

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

async function parseContact() {
  const html = fs.readFileSync(path.join(__dirname, 'contact.html'), 'utf8');

  // Extract all images
  const imgRegex = /https:\/\/kimsredginseng\.com\/wp-content\/uploads\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)/gi;
  const images = Array.from(new Set(html.match(imgRegex) || []));
  console.log('Images found in contact page:', images);

  const targetDir = path.join(__dirname, '..', 'public', 'images', 'contact');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const imgUrl of images) {
    const filename = path.basename(imgUrl.split('?')[0]);
    const dest = path.join(targetDir, filename);
    console.log(`Downloading ${filename}...`);
    try {
      await downloadImage(imgUrl, dest);
    } catch (e) {
      console.error(`Error downloading ${filename}:`, e.message);
    }
  }

  const clean = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                    .replace(/<style[\s\S]*?<\/style>/gi, '')
                    .replace(/<header[\s\S]*?<\/header>/gi, '')
                    .replace(/<footer[\s\S]*?<\/footer>/gi, '');

  console.log('--- CLEAN CONTACT TEXT ---');
  console.log(clean.replace(/<[^>]+>/g, '\n').replace(/\n\s*\n/g, '\n').slice(0, 3000));
}

parseContact().catch(console.error);
