import { useEffect, useState } from 'react';
import {
  downloads,
  type DownloadId,
  WHATSAPP_MESSAGES,
  whatsappLink,
} from '../data/content';
import { trackDownload } from '../lib/track-download';

type Sistema = DownloadId | 'otro';

function detectarSistema(): Sistema {
  if (typeof navigator === 'undefined') return 'otro';

  const ua = navigator.userAgent.toLowerCase();

  if (ua.includes('android')) return 'android';
  if (/iphone|ipad|ipod/.test(ua)) return 'otro';
  if (ua.includes('mac')) {
    // iPadOS 13+ se hace pasar por Macintosh.
    return navigator.maxTouchPoints > 1 ? 'otro' : 'macos';
  }
  if (ua.includes('win')) return 'windows';
  return 'otro';
}

function PlatformIcon({ id }: { id: DownloadId }) {
  if (id === 'windows') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5.4 10.6 4.3v7.3H3V5.4Zm8.6-1.2L21 3v8.6h-9.4V4.2ZM3 12.6h7.6v7.3L3 18.6v-6Zm8.6 0H21V21l-9.4-1.3v-7.1Z" />
      </svg>
    );
  }

  if (id === 'macos') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16.7 12.9c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.6.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7c1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2-.8-2-3.4ZM14.6 5.9c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1 1.6-.9 2.6 1 .1 2-.5 2.6-1.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 8h10v7.2a2 2 0 0 1-1.6 2L15 17.4V21h-2v-3.5h-2V21H9v-3.6l-.4-.2A2 2 0 0 1 7 15.2V8Zm-2 .4a1.6 1.6 0 0 1 1.6 1.6v4.2a1.6 1.6 0 0 1-3.2 0V10A1.6 1.6 0 0 1 5 8.4Zm14 0A1.6 1.6 0 0 1 20.6 10v4.2a1.6 1.6 0 0 1-3.2 0V10A1.6 1.6 0 0 1 19 8.4ZM8.2 4.1 7.1 2.3l1.1-.6 1.1 1.9a6.6 6.6 0 0 1 5.4 0l1.1-1.9 1.1.6-1.1 1.8A5.7 5.7 0 0 1 19 8H5a5.7 5.7 0 0 1 3.2-3.9ZM9.2 6a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Zm5.6 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z" />
    </svg>
  );
}

export function Downloads() {
  const [sistema, setSistema] = useState<Sistema>('otro');

  useEffect(() => {
    setSistema(detectarSistema());
  }, []);

  const actual = downloads.items.find((item) => item.id === sistema);

  return (
    <section className="downloads" id="descargas">
      <div className="wrap downloads__content" id="descargas-lista">
        <div className="downloads__head">
          <div className="downloads__title">
            <p className="downloads__kicker">Descargas</p>
            <h2>{downloads.title}</h2>
          </div>
          <div className="downloads__intro">
            <p>{downloads.lead}</p>
            {actual ? (
              <a
                className="btn btn--primary"
                href={actual.url}
                data-download={actual.id}
                onClick={() => trackDownload(actual.id)}
              >
                Descargar para {actual.label}
                <span aria-hidden="true">↓</span>
              </a>
            ) : (
              <p className="downloads__detect">Elige tu sistema abajo</p>
            )}
          </div>
        </div>

        <div className="downloads__grid">
          {downloads.items.map((item) => {
            const esActual = item.id === sistema;

            return (
              <article
                key={item.id}
                className={`download-card${esActual ? ' is-current' : ''}`}
              >
                <div className="download-card__top">
                  <span className={`download-card__icon download-card__icon--${item.id}`}>
                    <PlatformIcon id={item.id} />
                  </span>
                  <div className="download-card__name">
                    <h3>{item.label}</h3>
                    <p>{item.detail}</p>
                  </div>
                  {esActual && <span className="download-card__badge">Tu sistema</span>}
                </div>

                <p className="download-card__kind">{item.kind}</p>

                <a
                  className={`btn ${esActual ? 'btn--primary' : 'btn--ghost'}`}
                  href={item.url}
                  data-download={item.id}
                  onClick={() => trackDownload(item.id)}
                >
                  Descargar
                  <span aria-hidden="true">↓</span>
                </a>
              </article>
            );
          })}
        </div>

        <div className="downloads__meta">
          <span>Versión {downloads.version}</span>
          <span>Un mes gratis · sin tarjeta</span>
          <span id="contacto">
            ¿Dudas?{' '}
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.support)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Habla con soporte
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
