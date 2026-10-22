import { offer } from '../data/content';

/** Oferta compacta justo debajo del header. */
export function OfferStrip() {
  return (
    <section className="offer-strip" aria-label="Oferta de prueba">
      <div className="wrap offer-strip__inner">
        <p className="offer-strip__title">
          Un mes. <span className="offer-strip__accent">Gratis.</span> Sin cuentos.
        </p>
        <span className="offer-strip__note">{offer.note}</span>
        <a className="offer-strip__cta" href="#descargas" data-cta="strip-descargar">
          {offer.cta}
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
