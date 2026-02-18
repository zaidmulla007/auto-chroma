import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const appDir = join(__dirname, '..', 'app');

const inputImage = join(publicDir, 'logo.jpg');

async function generateFavicons() {
  // Generate favicon.ico (32x32)
  const ico32 = await sharp(inputImage)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toBuffer();
  writeFileSync(join(appDir, 'favicon.ico'), ico32);

  // Generate apple-touch-icon (180x180)
  await sharp(inputImage)
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));

  // Generate favicon-16x16
  await sharp(inputImage)
    .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(join(publicDir, 'favicon-16x16.png'));

  // Generate favicon-32x32
  await sharp(inputImage)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(join(publicDir, 'favicon-32x32.png'));

  // Generate OG image (1200x630)
  await sharp(inputImage)
    .resize(1200, 630, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .jpeg({ quality: 90 })
    .toFile(join(publicDir, 'og-image.jpg'));

  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error);
