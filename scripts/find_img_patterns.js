const fs = require('fs');

const html = fs.readFileSync('/Users/tuananh/Na-Korea/na-korea-prototype/scripts/sample_product_1000000035.html', 'utf-8');

console.log("=== All IMG src in html ===");
const imgSrcs = [...html.matchAll(/<img[^>]+src="([^"]+)"/gi)].map(m => m[1]);
console.log(imgSrcs);

console.log("\n=== All background-image in html ===");
const bgImgs = [...html.matchAll(/url\(['"]?([^'"]+)['"]?\)/gi)].map(m => m[1]);
console.log(bgImgs);

console.log("\n=== All /data/ in html ===");
const dataMatches = [...html.matchAll(/(\/data\/[^\s"'>]+)/gi)].map(m => m[1]);
console.log(dataMatches.slice(0, 20));
