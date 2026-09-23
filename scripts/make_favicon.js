const sharp = require('sharp');
const fs = require('fs');

async function createFavicon() {
  const { data, info } = await sharp('public/images/logos/logo-vertical-hd.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Pure emblem region: y from 220 to 715, x from 120 to 900
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  
  for (let y = 220; y < 715; y++) {
    for (let x = 120; x < 900; x++) {
      const idx = (y * info.width + x) * info.channels;
      const alpha = info.channels === 4 ? data[idx + 3] : 255;
      if (alpha > 20) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Add 15px padding around the crest
  minX = Math.max(0, minX - 15);
  maxX = Math.min(info.width - 1, maxX + 15);
  minY = Math.max(0, minY - 15);
  maxY = Math.min(info.height - 1, maxY + 15);

  const emblemWidth = maxX - minX + 1;
  const emblemHeight = maxY - minY + 1;

  console.log('Pure crest bounds:', { minX, minY, emblemWidth, emblemHeight });

  const emblem = await sharp('public/images/logos/logo-vertical-hd.png')
    .extract({ left: minX, top: minY, width: emblemWidth, height: emblemHeight })
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  fs.writeFileSync('src/app/icon.png', emblem);
  fs.writeFileSync('src/app/apple-icon.png', emblem);
  fs.writeFileSync('public/favicon.ico', emblem);
  fs.writeFileSync('src/app/favicon.ico', emblem);
  fs.writeFileSync('public/images/favicon.png', emblem);

  await sharp(emblem).resize(32, 32).toFile('public/favicon-32x32.png');
  await sharp(emblem).resize(192, 192).toFile('public/favicon-192x192.png');

  console.log('Clean emblem favicon generated successfully!');
}

createFavicon().catch(console.error);
