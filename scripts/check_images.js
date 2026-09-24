const fs = require('fs');
const path = require('path');

const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/products.json'), 'utf-8'));
const publicDir = path.join(__dirname, '../public');

async function testUrl(url) {
  if (!url) return false;
  if (url.startsWith('/')) {
    const localPath = path.join(publicDir, url);
    return fs.existsSync(localPath);
  }
  try {
    const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (res.ok) return true;
    const resGet = await fetch(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0' } });
    return resGet.ok;
  } catch (e) {
    return false;
  }
}

async function checkAllImages() {
  console.log(`Checking images for ${products.length} products...\n`);
  
  let brokenCount = 0;
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const isLocalOk = p.image ? testUrl(p.image) : false;
    const isLocalOkBool = await isLocalOk;
    
    let isOriginalOkBool = false;
    if (p.originalImageUrl) {
      isOriginalOkBool = await testUrl(p.originalImageUrl);
    }

    console.log(`[${i + 1}/${products.length}] ID: ${p.id} (${p.goodsNo})`);
    console.log(`   Image path: "${p.image}" -> ${isLocalOkBool ? '✓ OK' : '❌ BROKEN'}`);
    console.log(`   Original URL: "${p.originalImageUrl}" -> ${isOriginalOkBool ? '✓ OK' : '❌ BROKEN'}`);
    
    if (!isLocalOkBool) {
      brokenCount++;
    }
  }

  console.log(`\nTotal broken local images: ${brokenCount} / ${products.length}`);
}

checkAllImages().catch(console.error);
