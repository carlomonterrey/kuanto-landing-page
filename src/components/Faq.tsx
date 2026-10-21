import { faq } from '../data/content';
import { Lines } from './Lines';
import { Reveal } from './Reveal';

/** Preguntas frecuentes visibles; su texto coincide con el FAQPage del JSON-LD. */
export function Faq() {
  return (
    <section className="faq" id="preguntas">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="h2">
            <Lines lines={faq.title} />
          </Reveal>
          <Reveal as="p" className="section-head__lead">
            {faq.lead}
          </Reveal>
        </div>

        <Reveal className="faq__list">
          {faq.items.map((item) => (
            <details className="faq__item" key={item.q}>
              <summary>
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
