import { offer } from '../data/content';

/** Oferta compacta entre el hero y el problema. */
export function OfferStrip() {
  return (
    <section className="offer-strip" aria-label="Oferta de prueba">
      <div className="wrap offer-strip__inner">
        <span className="sr-only">
          {offer.before} {offer.accent} {offer.after} {offer.note}.
        </span>

        <div className="offer-strip__marquee" aria-hidden="true">
          <div className="offer-strip__track">
            {[0, 1, 2, 3].map((index) => (
              <span className="offer-strip__group" key={index}>
                <span className="offer-strip__title">
                  {offer.before}{' '}
                  <span className="offer-strip__accent">{offer.accent}</span>{' '}
                  {offer.after}
                </span>
                <span className="offer-strip__sep">·</span>
              </span>
            ))}
          </div>
        </div>

        <span className="offer-strip__note">{offer.note}</span>
        <a className="offer-strip__cta" href="#descargas" data-cta="strip-descargar">
          {offer.cta}
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
