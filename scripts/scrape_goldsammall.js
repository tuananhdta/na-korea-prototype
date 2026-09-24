const fs = require('fs');

async function fetchPage(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
    }
  });
  return await res.text();
}

async function inspectProduct(goodsNo) {
  console.log(`--- Inspecting product goodsNo=${goodsNo} ---`);
  const html = await fetchPage(`https://goldsammall.com/goods/goods_view.php?goodsNo=${goodsNo}`);
  
  // Extract Title
  const titleMatch = html.match(/<h2 class="item_name">([^<]+)<\/h2>/) || html.match(/<h3[^>]*class="[^"]*goods_name[^"]*"[^>]*>([^<]+)<\/h3>/) || html.match(/<title>([^<]+)<\/title>/);
  console.log("Title:", titleMatch ? titleMatch[1].trim() : "Not found");

  // Extract Price
  const priceMatch = html.match(/class="[^"]*price[^"]*"[^>]*>[\s\S]*?(\d[\d,]*)\s*원/i) || html.match(/(\d{1,3}(,\d{3})+)\s*원/);
  console.log("Price:", priceMatch ? priceMatch[1] + " 원" : "Not found");

  // Extract main image
  const imgMatch = html.match(/<img[^>]+src="([^"]+)"[^>]+class="[^"]*big_img[^"]*"/i) || html.match(/<span class="img_photo_big">[\s\S]*?<img src="([^"]+)"/i) || html.match(/https:\/\/cdn-saas-web[^\s"']+\.(jpg|png|jpeg|gif)/i);
  console.log("Main image:", imgMatch ? imgMatch[1] : "Not found");

  // Extract detail images
  const detailImgMatches = [...html.matchAll(/src="([^"]+\/data\/editor\/goods\/[^"]+)"/gi)].map(m => m[1]);
  console.log(`Found ${detailImgMatches.length} detail images:`, detailImgMatches.slice(0, 5));

  // Check review API / HTML
  const reviewBoardMatch = html.match(/goods_board_list\.php[^"'\s>]+/gi) || html.match(/board_list\.php[^"'\s>]+/gi);
  console.log("Review board links:", reviewBoardMatch);

  // Try fetching review endpoint directly
  const reviewHtml = await fetchPage(`https://goldsammall.com/goods/goods_board_list.php?goodsNo=${goodsNo}&bdId=goodsreview`);
  console.log(`Review page HTML length: ${reviewHtml.length}`);
  const reviewMatches = [...reviewHtml.matchAll(/class="[^"]*review[^"]*"|class="[^"]*td_board[^"]*"/gi)];
  console.log("Review matches count:", reviewMatches.length);

  // Save sample HTML to inspect
  fs.writeFileSync(`/Users/tuananh/Na-Korea/na-korea-prototype/scripts/sample_product_${goodsNo}.html`, html);
  fs.writeFileSync(`/Users/tuananh/Na-Korea/na-korea-prototype/scripts/sample_review_${goodsNo}.html`, reviewHtml);
}

inspectProduct('1000000035').catch(console.error);
