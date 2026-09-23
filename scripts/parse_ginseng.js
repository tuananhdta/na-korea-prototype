const fs = require('fs');
const path = require('path');

function extractMainContent(html) {
  // Remove scripts, styles
  let clean = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                  .replace(/<style[\s\S]*?<\/style>/gi, '')
                  .replace(/<header[\s\S]*?<\/header>/gi, '')
                  .replace(/<footer[\s\S]*?<\/footer>/gi, '');

  // Extract text within elementor content or article
  const elementorMatch = clean.match(/<div class="elementor-inner"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/i) ||
                         clean.match(/<article[\s\S]*?<\/article>/i) ||
                         clean.match(/<main[\s\S]*?<\/main>/i);
  return elementorMatch ? elementorMatch[0] : clean;
}

const gHtml = fs.readFileSync(path.join(__dirname, 'ginseng.html'), 'utf8');
const rgHtml = fs.readFileSync(path.join(__dirname, 'red_ginseng.html'), 'utf8');

// Let's print out text paragraphs and headings
console.log('--- GINSENG TEXT ---');
const gText = gHtml.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
console.log(gText.slice(0, 3000));

console.log('\n--- RED GINSENG TEXT ---');
const rgText = rgHtml.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
console.log(rgText.slice(0, 3000));
