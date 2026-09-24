const fs = require('fs');
const path = require('path');

const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/products.json'), 'utf-8'));
const publicProductsDir = path.join(__dirname, '../public/images/products');

if (!fs.existsSync(publicProductsDir)) {
  fs.mkdirSync(publicProductsDir, { recursive: true });
}

async function fetchHtml(goodsNo) {
  const url = `https://goldsammall.com/goods/goods_view.php?goodsNo=${goodsNo}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    }
  });
  return await res.text();
}

async function downloadFile(imgUrl, destPath) {
  try {
    const res = await fetch(imgUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Referer': 'https://goldsammall.com/'
      }
    });
    if (!res.ok) return false;
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (e) {
    console.error(`  Download error for ${imgUrl}:`, e.message);
    return false;
  }
}

async function run() {
  console.log(`Starting image extraction and download for ${products.length} products...`);
  
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const goodsNo = p.goodsNo || p.id.replace('sp-kims-ginseng-', '');
    console.log(`\n[${i + 1}/${products.length}] Product goodsNo=${goodsNo} - "${p.title}"`);

    const html = await fetchHtml(goodsNo);
    
    // Exact Regex for NHN Commerce / Godomall Storage image CDN
    const godomallCdnMatches = [...html.matchAll(/(https:\/\/godomall-storage\.cdn-nhncommerce\.com\/[^\s"'>]+\.(jpg|png|jpeg|webp))/gi)].map(m => m[1]);
    const cdnMatches = [...html.matchAll(/(https:\/\/cdn-saas-web[^\s"']+\.(jpg|png|jpeg|gif))/gi)].map(m => m[1]);
    const localMatches = [...html.matchAll(/src="(\/data\/[^\s"']+\.(jpg|png|jpeg|gif))"/gi)].map(m => `https://goldsammall.com${m[1]}`);
    
    const allCandidates = [...new Set([...godomallCdnMatches, ...cdnMatches, ...localMatches])];
    
    // Filter out banners, icons, buttons
    const validCandidates = allCandidates.filter(url => {
      if (url.includes('btn_') || url.includes('icon_') || url.includes('banner') || url.includes('logo') || url.includes('policy')) {
        return false;
      }
      return url.includes('goods') || url.includes(goodsNo);
    });

    console.log(`  Found ${validCandidates.length} product candidate image URLs:`, validCandidates.slice(0, 3));

    let downloaded = false;
    let targetFilename = `goods_${goodsNo}.jpg`;
    let localRelativePath = `/images/products/${targetFilename}`;
    let targetFullPath = path.join(publicProductsDir, targetFilename);

    for (const imgUrl of validCandidates) {
      console.log(`  Attempting download: ${imgUrl}`);
      const ok = await downloadFile(imgUrl, targetFullPath);
      if (ok) {
        console.log(`  ✓ Successfully downloaded image to ${localRelativePath}`);
        p.image = localRelativePath;
        p.originalImageUrl = imgUrl;
        downloaded = true;
        successCount++;
        break;
      }
    }

    if (!downloaded) {
      console.log(`  ⚠️ Checking existing local image fallback for ${goodsNo}...`);
      const existingLocal = path.join(__dirname, '../public', p.image || '');
      if (p.image && fs.existsSync(existingLocal)) {
        console.log(`  ✓ Retaining existing valid local image: ${p.image}`);
        successCount++;
      } else {
        console.log(`  ⚠️ Setting fallback image to /images/products/red-ginseng.jpg`);
        p.image = "/images/products/red-ginseng.jpg";
        failCount++;
      }
    }
  }

  // Save updated products.json
  const productsJsonPath = path.join(__dirname, '../src/data/products.json');
  fs.writeFileSync(productsJsonPath, JSON.stringify(products, null, 2), 'utf-8');
  console.log(`\n========================================`);
  console.log(`Finished! Successfully fixed ${successCount} images. Fallbacks used: ${failCount}.`);
  console.log(`Updated products saved to ${productsJsonPath}`);
}

run().catch(console.error);
