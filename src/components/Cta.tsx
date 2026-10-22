import { cta } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Reveal } from './Reveal';

export function Cta() {
  return (
    <section className="cta" id="contacto">
      <div className="wrap cta__inner">
        <Reveal as="h2">{cta.title}</Reveal>
        <Reveal as="p">{cta.text}</Reveal>
        <Reveal className="actions actions--center">
          <a className="btn btn--dark" href={cta.primary.href} data-cta="cta-descargar">
            {cta.primary.label}
            <span aria-hidden="true">↓</span>
          </a>
          <a
            className="btn btn--outline-dark"
            href={cta.secondary.href}
            data-cta="soporte"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            {cta.secondary.label}
          </a>
        </Reveal>
        <p className="cta__note">{cta.note}</p>
      </div>
    </section>
  );
}
