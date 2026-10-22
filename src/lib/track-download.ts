import { downloads, type DownloadId } from '../data/content';

const API = import.meta.env.VITE_DOWNLOADS_API ?? 'https://kuanto-licencias.carlosmonterrey17.workers.dev';
const VISITOR_KEY = 'kuanto:visitor';

function visitorId(): string {
  try {
    const existing = window.localStorage.getItem(VISITOR_KEY);
    if (existing) return existing;

    const id =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `anon-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
    window.localStorage.setItem(VISITOR_KEY, id);
    return id;
  } catch {
    // Sin localStorage (modo privado estricto) contamos el clic, no el visitante.
    return `anon-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
  }
}

/**
 * Envía un evento anónimo de descarga. No bloquea ni cambia la navegación:
 * el usuario va a GitHub igual aunque el endpoint falle.
 */
export function trackDownload(platform: DownloadId): void {
  const payload = JSON.stringify({
    platform,
    visitorId: visitorId(),
    version: downloads.version,
  });

  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        `${API}/download`,
        new Blob([payload], { type: 'text/plain;charset=UTF-8' }),
      );
      return;
    }

    void fetch(`${API}/download`, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: payload,
      keepalive: true,
      mode: 'cors',
    }).catch(() => undefined);
  } catch {
    // La descarga nunca depende de la analítica.
  }
}
