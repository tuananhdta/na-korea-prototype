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

async function scrapeBlog() {
  console.log('Fetching blog page...');
  const blogHtml = await fetchPage('https://kimsredginseng.com/blog/');
  fs.writeFileSync(path.join(__dirname, 'blog.html'), blogHtml, 'utf8');

  // Extract all blog links
  // Pattern: https://kimsredginseng.com/<slug>/
  const linkRegex = /href="(https:\/\/kimsredginseng\.com\/[a-zA-Z0-9_-]+\/)"/g;
  const allLinks = Array.from(new Set(blogHtml.match(linkRegex) || []))
    .map(l => l.replace(/href="|"/g, ''))
    .filter(l => 
      !l.includes('/cua-hang') &&
      !l.includes('/san-pham') &&
      !l.includes('/danh-muc-san-pham') &&
      !l.includes('/about-us') &&
      !l.includes('/greeting') &&
      !l.includes('/history') &&
      !l.includes('/certification') &&
      !l.includes('/ginseng') &&
      !l.includes('/red-ginseng') &&
      !l.includes('/dang-ky-dai-ly') &&
      !l.includes('/blog') &&
      !l.includes('/contact') &&
      !l.includes('/chinh-sach') &&
      !l.includes('/huong-dan') &&
      !l.includes('/thanhtoan') &&
      !l.includes('/gio-hang') &&
      !l.includes('/feed') &&
      !l.includes('/comments') &&
      !l.includes('/wp-') &&
      l !== 'https://kimsredginseng.com/'
    );

  console.log('Found potential blog post URLs:', allLinks);

  const blogDir = path.join(__dirname, '..', 'public', 'images', 'blog');
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  const posts = [];

  for (let i = 0; i < allLinks.length; i++) {
    const postUrl = allLinks[i];
    console.log(`[${i+1}/${allLinks.length}] Crawling post: ${postUrl}`);
    try {
      const html = await fetchPage(postUrl);

      // Title
      const titleMatch = html.match(/<h1[^>]*class="[^"]*entry-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i) ||
                         html.match(/<h1[^>]*class="[^"]*elementor-heading-title[^"]*"[^>]*>([\s\S]*?)<\/h1>/i) ||
                         html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) ||
                         html.match(/<title>([^<]+)<\/title>/i);
      let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').replace(/\s*-\s*Kimsredginseng.*/i, '').trim() : '';

      // Date
      const dateMatch = html.match(/<time[^>]*class="[^"]*entry-date[^"]*"[^>]*>([\s\S]*?)<\/time>/i) ||
                        html.match(/class="[^"]*posted-on[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
      let date = dateMatch ? dateMatch[1].replace(/<[^>]+>/g, '').trim() : '2026-09-15';

      // Category
      const catMatch = html.match(/class="[^"]*cat-links[^"]*"[^>]*>([\s\S]*?)<\/span>/i) ||
                       html.match(/rel="category tag"[^>]*>([^<]+)<\/a>/i);
      let category = catMatch ? catMatch[1].replace(/<[^>]+>/g, '').trim() : 'Kiến Thức Sức Khỏe';

      // Main image
      const imgMatch = html.match(/<div class="[^"]*post-thumbnail[^"]*"[^>]*>[\s\S]*?<img[^>]+src="([^">]+)"/i) ||
                       html.match(/<meta property="og:image" content="([^"]+)"/i) ||
                       html.match(/<img[^>]+class="[^"]*wp-post-image[^"]*"[^>]+src="([^">]+)"/i);
      let imageUrl = imgMatch ? imgMatch[1] : '';

      // Content
      const contentMatch = html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<!-- \.entry-content -->/i) ||
                           html.match(/<div[^>]*class="[^"]*elementor-widget-theme-post-content[^"]*"[^>]*>([\s\S]*?)<\/div>/i) ||
                           html.match(/<article[\s\S]*?>([\s\S]*?)<\/article>/i);
      let rawContent = contentMatch ? contentMatch[1] : '';
      let textContent = rawContent.replace(/<script[\s\S]*?<\/script>/gi, '')
                                  .replace(/<style[\s\S]*?<\/style>/gi, '')
                                  .replace(/<[^>]+>/g, ' ')
                                  .replace(/\s+/g, ' ')
                                  .trim();

      const slug = postUrl.replace(/https:\/\/kimsredginseng\.com\//, '').replace(/\/$/, '').trim();
      const ext = imageUrl ? path.extname(imageUrl.split('?')[0]) || '.jpg' : '.jpg';
      const localImageName = `${slug}${ext}`;
      const localImagePath = `/images/blog/${localImageName}`;
      const diskPath = path.join(blogDir, localImageName);

      if (imageUrl) {
        console.log(`Downloading thumbnail for ${slug}...`);
        await downloadImage(imageUrl, diskPath);
      }

      if (title && textContent.length > 50) {
        posts.push({
          id: slug,
          title,
          url: postUrl,
          date,
          category,
          image: imageUrl ? localImagePath : '/images/ginseng-hero-1.jpg',
          originalImageUrl: imageUrl,
          excerpt: textContent.slice(0, 180) + '...',
          content: textContent
        });
      }
    } catch (e) {
      console.error(`Error crawling ${postUrl}:`, e.message);
    }
  }

  // Save to src/data/blogs.json
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(path.join(dataDir, 'blogs.json'), JSON.stringify(posts, null, 2), 'utf8');
  console.log(`Saved ${posts.length} blog posts to src/data/blogs.json!`);
}

scrapeBlog().catch(console.error);
