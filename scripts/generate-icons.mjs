import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const targets = [
  { src: 'pwa-icon.svg',          out: 'icon-192.png',          size: 192 },
  { src: 'pwa-icon.svg',          out: 'icon-512.png',          size: 512 },
  { src: 'pwa-icon-maskable.svg', out: 'icon-512-maskable.png', size: 512 },
  { src: 'pwa-icon.svg',          out: 'apple-touch-icon.png',  size: 180 },
];

await Promise.all(
  targets.map(async ({ src, out, size }) => {
    const svg = readFileSync(join(publicDir, src));
    const png = await sharp(svg, { density: 384 }).resize(size, size).png().toBuffer();
    writeFileSync(join(publicDir, out), png);
    console.log(`✓ ${out} (${size}×${size})`);
  }),
);
