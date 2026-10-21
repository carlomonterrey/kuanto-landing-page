/**
 * Genera los PNG de producción: iconos PWA, apple-touch y la imagen Open Graph.
 * Es un paso de mantenimiento, no del build: ejecuta `node scripts/generate-assets.mjs`
 * cuando cambien logo o marca, y commitea los PNG resultantes.
 */
import { chromium } from 'playwright';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const out = join(root, 'public');

const logo = await readFile(join(root, 'src/assets/img/logo.svg'), 'utf8');
const logoUri = `data:image/svg+xml;base64,${Buffer.from(logo).toString('base64')}`;

const halftone = await readFile(join(root, 'src/assets/img/halftone-violet.svg'), 'utf8');
const halftoneUri = `data:image/svg+xml;base64,${Buffer.from(halftone).toString('base64')}`;

const anton = await readFile(join(root, 'src/assets/fonts/anton-latin.woff2'));
const dmSans = await readFile(join(root, 'src/assets/fonts/dm-sans-latin.woff2'));

const fonts = `
@font-face { font-family: 'Anton'; src: url(data:font/woff2;base64,${anton.toString('base64')}) format('woff2'); font-weight: 400; }
@font-face { font-family: 'DM Sans'; src: url(data:font/woff2;base64,${dmSans.toString('base64')}) format('woff2'); font-weight: 100 900; }
`;

await mkdir(join(out, 'icons'), { recursive: true });
await mkdir(join(out, 'og'), { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ deviceScaleFactor: 1, reducedMotion: 'reduce' });

async function shot(html, width, height, path, { transparent = false } = {}) {
  await page.setViewportSize({ width, height });
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(150);
  await page.screenshot({ path: join(out, path), omitBackground: transparent });
  console.log('·', path);
}

const icon = (size, padding = 0, background = 'transparent') => `
  <!doctype html><html><head><style>
    html,body{margin:0;width:${size}px;height:${size}px;background:${background};}
    .wrap{width:100%;height:100%;display:grid;place-items:center;}
    img{width:${Math.round(size * (1 - padding * 2))}px;height:${Math.round(size * (1 - padding * 2))}px;display:block;}
  </style></head><body><div class="wrap"><img src="${logoUri}"></div></body></html>`;

await shot(icon(512, 0.08), 512, 512, 'icons/icon-512.png', { transparent: true });
await shot(icon(192, 0.08), 192, 192, 'icons/icon-192.png', { transparent: true });
await shot(icon(180, 0.08, '#f7f6f2'), 180, 180, 'icons/apple-touch-icon.png');
await shot(icon(512, 0.22, '#20123a'), 512, 512, 'icons/maskable-512.png');

const og = `<!doctype html><html><head><style>
  ${fonts}
  *{box-sizing:border-box;margin:0;padding:0}
  body{width:1200px;height:630px;background:#e2e2df;color:#070607;font-family:'DM Sans',sans-serif;overflow:hidden;position:relative}
  body::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(7,6,7,.16) 1.2px,transparent 1.4px);background-size:22px 22px;mask-image:linear-gradient(180deg,#000 40%,transparent 100%)}
  .wrap{position:relative;z-index:2;display:grid;grid-template-columns:1.15fr .85fr;height:100%;padding:56px 64px;gap:40px}
  .left{display:flex;flex-direction:column;justify-content:space-between}
  .brand{display:flex;align-items:center;gap:14px}
  .brand img{width:44px;height:44px;border-radius:12px}
  .brand span{font-family:'Anton';font-size:30px;letter-spacing:.02em}
  h1{font-family:'Anton';font-weight:400;font-size:104px;line-height:.88;letter-spacing:.004em}
  p{font-size:22px;line-height:1.4;color:#33302f;max-width:520px}
  .url{font-weight:700;font-size:18px;letter-spacing:.02em;color:#33302f}
  .art{position:relative;border-radius:40px;overflow:hidden;background:#524ae9}
  .art img{width:100%;height:100%;object-fit:cover;display:block}
  .tag{position:absolute;left:20px;bottom:20px;background:#f5f28e;color:#070607;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:8px 14px;border-radius:999px}
</style></head><body>
  <div class="wrap">
    <div class="left">
      <div class="brand"><img src="${logoUri}"><span>kuanto</span></div>
      <h1>Sin internet,<br>el negocio<br>sigue.</h1>
      <div>
        <p>Punto de venta y almacén offline para negocios locales en Cuba. CUP y USD, tasa propia e historial de precios.</p>
        <div style="height:18px"></div>
        <div class="url">kuanto.app</div>
      </div>
    </div>
    <div class="art"><img src="${halftoneUri}"><span class="tag">Funciona sin conexión</span></div>
  </div>
</body></html>`;

await shot(og, 1200, 630, 'og/kuanto-og.png');

await writeFile(join(out, 'og', '.gitkeep'), '');
await browser.close();
console.log('Listo');
