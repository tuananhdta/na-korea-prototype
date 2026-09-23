const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'data', 'blogs.json');
let d = fs.readFileSync(file, 'utf8');
d = d.replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"');
fs.writeFileSync(file, d, 'utf8');
console.log('Cleaned blogs.json successfully');
