/**
 * Pretvori originalne slike v WebP za splet.
 *
 *   image-originals/**\/<ključ>.(jpg|jpeg|png|webp)  →  public/images/<ključ>-800.webp
 *                                                      public/images/<ključ>-1400.webp (če je original dovolj širok)
 *
 * Ime datoteke je ključ slike, ki ga uporablja src/data/images.ts. Dimenzije zapiše v
 * src/data/image-manifest.json, da imajo <img> pravilne width/height (brez skakanja postavitve).
 */
import { mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'image-originals');
const OUT = join(ROOT, 'public', 'images');
const MANIFEST = join(ROOT, 'src', 'data', 'image-manifest.json');
const WIDTHS = [800, 1400];
// Iz te slike nastane public/og.jpg (deljenje na omrežjih); naslovna slika s Facebooka je ležeča.
const OG_SOURCE = 'salon';

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

mkdirSync(OUT, { recursive: true });
const manifest = {};

for (const file of walk(SRC).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort()) {
  const key = basename(file, extname(file));
  const image = sharp(file).rotate();
  const { width, height } = await image.metadata();
  const sizes = [];
  for (const w of WIDTHS) {
    // Manjši original: zadnja različica je v polni širini (srcset dobi njeno pravo širino).
    if (sizes.length && sizes[sizes.length - 1] >= width) break;
    const target = Math.min(w, width);
    await image
      .clone()
      .resize({ width: target })
      .webp({ quality: 78 })
      .toFile(join(OUT, `${key}-${w}.webp`));
    sizes.push(w);
  }
  manifest[key] = { width, height, sizes };
  // Slika za deljenje na družbenih omrežjih (og:image).
  if (key === OG_SOURCE) {
    await image.clone().resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 82 }).toFile(join(ROOT, 'public', 'og.jpg'));
  }
  console.log(`  ${key.padEnd(20)} ${width}×${height} → ${sizes.join(', ')}`);
}

writeFileSync(MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`\n${Object.keys(manifest).length} slik → public/images/, manifest → src/data/image-manifest.json`);
