const fs = require('fs');

async function testReviewView(sno) {
  const url1 = `https://goldsammall.com/goods/goods_board_view.php?sno=${sno}&bdId=goodsreview`;
  const url2 = `https://goldsammall.com/board/view.php?bdId=goodsreview&sno=${sno}`;
  
  const res1 = await fetch(url1, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html1 = await res1.text();
  console.log(`=== Review View ${url1} (len ${html1.length}) ===`);
  console.log(html1.substring(0, 1500));
}

testReviewView(317).catch(console.error);
