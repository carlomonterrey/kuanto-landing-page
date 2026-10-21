import { useEffect, useRef, useState } from 'react';
import { gallery, type GalleryShot } from '../data/content';
import { shots } from '../data/gallery';
import { Lines } from './Lines';
import { Reveal } from './Reveal';

export function Gallery() {
  const [active, setActive] = useState<GalleryShot | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  return (
    <section className="gallery" id="galeria">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="h2">
            <Lines lines={gallery.title} />
          </Reveal>
          <Reveal as="p" className="section-head__lead">
            {gallery.lead}
          </Reveal>
        </div>

        <div className="gallery__grid">
          {shots.map((shot, index) => (
            <Reveal
              as="figure"
              className="gallery__item"
              variant="media"
              key={shot.id}
              delay={(index % 3) * 0.07}
            >
              <button
                type="button"
                className="gallery__button"
                onClick={() => setActive(shot)}
                aria-label={`Ampliar captura: ${shot.title}`}
              >
                <img src={shot.src} alt={shot.alt} loading="lazy" width={1600} height={1000} />
              </button>
              <figcaption>
                <strong>{shot.title}</strong>
                <span>{shot.text}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <p className="gallery__note">{gallery.note}</p>
      </div>

      <dialog
        className="lightbox"
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setActive(null);
        }}
      >
        {active && (
          <div className="lightbox__inner">
            <button
              type="button"
              className="lightbox__close"
              onClick={() => setActive(null)}
              aria-label="Cerrar captura"
            >
              ×
            </button>
            <img src={active.src} alt={active.alt} />
            <p>
              <strong>{active.title}</strong> — {active.text}
            </p>
          </div>
        )}
      </dialog>
    </section>
  );
}
