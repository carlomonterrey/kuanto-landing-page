/**
 * Inyecta el HTML renderizado en dist/index.html para que los buscadores y los
 * clientes sin JavaScript reciban el contenido completo.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const distIndex = new URL('../dist/index.html', import.meta.url);
const serverEntry = new URL('../dist-ssr/entry-server.js', import.meta.url);

const { render } = await import(pathToFileURL(serverEntry.pathname).href);
const markup = render();

const document = await readFile(distIndex, 'utf8');
const marker = '<div id="root"></div>';

if (!document.includes(marker)) {
  throw new Error('No se encontró <div id="root"></div> en dist/index.html');
}

await writeFile(distIndex, document.replace(marker, `<div id="root">${markup}</div>`), 'utf8');
console.log(`Prerender listo: ${(markup.length / 1024).toFixed(1)} kB de HTML estático.`);
