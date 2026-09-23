const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'src', 'data', 'products.json');
let text = fs.readFileSync(dataPath, 'utf8');
text = text.replace(/&#039;/g, "'").replace(/&amp;/g, '&');
fs.writeFileSync(dataPath, text, 'utf8');
console.log('Fixed quotes in products.json');
