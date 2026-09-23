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

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (!loc.startsWith('http')) {
          loc = 'https://kimsredginseng.com' + loc;
        }
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

async function scrapeAll() {
  const productUrls = new Set();
  const pagesToVisit = ['https://kimsredginseng.com/cua-hang/'];
  const visitedPages = new Set();

  const productsDir = path.join(__dirname, '..', 'public', 'images', 'products');
  if (!fs.existsSync(productsDir)) {
    fs.mkdirSync(productsDir, { recursive: true });
  }

  while (pagesToVisit.length > 0) {
    const pageUrl = pagesToVisit.shift();
    if (visitedPages.has(pageUrl)) continue;
    visitedPages.add(pageUrl);

    console.log(`Scanning page: ${pageUrl}`);
    const html = await fetchPage(pageUrl);

    // Find pagination links
    const pageMatches = html.match(/https:\/\/kimsredginseng\.com\/cua-hang\/page\/\d+\/?/g) || [];
    for (const p of pageMatches) {
      if (!visitedPages.has(p) && !pagesToVisit.includes(p)) {
        pagesToVisit.push(p);
      }
    }

    // Find all links to products (/san-pham/...)
    const matches = html.match(/https:\/\/kimsredginseng\.com\/san-pham\/[a-zA-Z0-9_-]+\/?/g) || [];
    for (const link of matches) {
      productUrls.add(link);
    }
  }

  const urlList = Array.from(productUrls);
  console.log(`Found ${urlList.length} unique product URLs!`);
  console.log(urlList);

  const productList = [];

  for (let i = 0; i < urlList.length; i++) {
    const prodUrl = urlList[i];
    console.log(`\n[${i + 1}/${urlList.length}] Crawling product: ${prodUrl}`);
    try {
      const html = await fetchPage(prodUrl);

      // Extract title
      const titleMatch = html.match(/<h1[^>]*class="[^"]*product_title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i) ||
                         html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';

      // Extract price
      let price = '';
      let originalPrice = '';
      const priceInsMatch = html.match(/<ins[^>]*>([\s\S]*?)<\/ins>/i);
      const priceDelMatch = html.match(/<del[^>]*>([\s\S]*?)<\/del>/i);
      if (priceInsMatch) {
        price = priceInsMatch[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
      }
      if (priceDelMatch) {
        originalPrice = priceDelMatch[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
      }
      if (!price) {
        const anyPrice = html.match(/<p class="price">([\s\S]*?)<\/p>/i) ||
                         html.match(/<span class="woocommerce-Price-amount amount">([\s\S]*?)<\/span>/i);
        if (anyPrice) {
          price = anyPrice[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim();
        }
      }

      // Extract category
      const catMatch = html.match(/<span class="posted_in">([\s\S]*?)<\/span>/i);
      let categories = [];
      if (catMatch) {
        categories = catMatch[1].replace(/<[^>]+>/g, '').split(',').map(s => s.trim()).filter(Boolean);
      }

      // Extract image URL (main product gallery image)
      const imgMatch = html.match(/<div class="woocommerce-product-gallery__image"[^>]*data-thumb="([^"]+)"/i) ||
                       html.match(/<div class="woocommerce-product-gallery__image"[^>]*>[\s\S]*?<a href="([^"]+)"/i) ||
                       html.match(/<img[^>]+class="[^"]*wp-post-image[^"]*"[^>]+src="([^"]+)"/i);
      let imageUrl = imgMatch ? imgMatch[1] : '';

      // Extract short description / summary
      const shortDescMatch = html.match(/<div class="woocommerce-product-details__short-description">([\s\S]*?)<\/div>/i);
      let shortDescription = shortDescMatch ? shortDescMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : '';

      // Extract full description
      const descMatch = html.match(/<div[^>]*id="tab-description"[^>]*>([\s\S]*?)<\/div>/i) ||
                        html.match(/<div class="elementor-widget-theme-post-content"[^>]*>([\s\S]*?)<\/div>/i);
      let description = descMatch ? descMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : shortDescription;

      // Extract specifications / attributes / table if available
      const skuMatch = html.match(/<span class="sku">([^<]+)<\/span>/i);
      let sku = skuMatch ? skuMatch[1].trim() : '';

      const slug = prodUrl.replace(/https:\/\/kimsredginseng\.com\/san-pham\//, '').replace(/\/$/, '').trim();
      const ext = imageUrl ? path.extname(imageUrl.split('?')[0]) || '.jpg' : '.jpg';
      const localImageName = `${slug}${ext}`;
      const localImagePath = `/images/products/${localImageName}`;
      const diskPath = path.join(productsDir, localImageName);

      if (imageUrl) {
        console.log(`Downloading image from ${imageUrl} to ${localImageName}...`);
        await downloadImage(imageUrl, diskPath);
      }

      productList.push({
        id: slug,
        title: title || slug,
        url: prodUrl,
        price: price || 'Liên hệ',
        originalPrice: originalPrice || null,
        categories: categories.length > 0 ? categories : ['Hồng Sâm Hàn Quốc'],
        image: localImagePath,
        originalImageUrl: imageUrl,
        sku: sku || null,
        shortDescription: shortDescription || description.slice(0, 160) + '...',
        description: description || ''
      });
    } catch (err) {
      console.error(`Failed crawling ${prodUrl}:`, err.message);
    }
  }

  // Save to src/data/products.json
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(path.join(dataDir, 'products.json'), JSON.stringify(productList, null, 2), 'utf8');
  console.log(`\nSuccessfully crawled and saved ${productList.length} products to src/data/products.json!`);
}

scrapeAll().catch(console.error);
