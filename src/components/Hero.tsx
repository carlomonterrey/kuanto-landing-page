import halftoneViolet from '../assets/img/halftone-violet.svg';
import halftoneOrange from '../assets/img/halftone-orange.svg';
import { hero } from '../data/content';
import { useParallax } from '../hooks/useParallax';

/* La figura del hero: titular, bloque violeta, bloque naranja y tarjeta crema.
   Las posiciones viven en `.hero__*` dentro de app.css. */
export function Hero() {
  const violetRef = useParallax<HTMLDivElement>();

  return (
    <section className="hero" id="inicio">
      <div className="wrap hero__stage">
        <h1 className="hero__title">
          {hero.titleLines.map((line, index) => (
            <span className="line" key={line}>
              <span style={{ animationDelay: `${0.05 + index * 0.08}s` }}>{line}</span>
            </span>
          ))}
        </h1>

        <div className="hero__block hero__block--violet" ref={violetRef}>
          <img src={halftoneViolet} alt="" width={1400} height={900} />
          <div className="hero__chip">
            <span className="hero__chip-label">{hero.chips.rate.label}</span>
            <strong className="hero__chip-value">{hero.chips.rate.value}</strong>
            <span className="hero__chip-text">{hero.chips.rate.text}</span>
          </div>
        </div>

        <div className="hero__block hero__block--orange">
          <img src={halftoneOrange} alt="" width={1400} height={900} />
          <div className="hero__chip">
            <span className="hero__chip-label">{hero.chips.offline.label}</span>
            <strong className="hero__chip-value">{hero.chips.offline.value}</strong>
            <span className="hero__chip-text">{hero.chips.offline.text}</span>
          </div>
        </div>

        <div className="hero__card">
          <p>{hero.cardText}</p>
          <div className="actions">
            <a
              className="btn btn--primary"
              href={hero.primaryCta.href}
              data-cta="hero-descargar"
            >
              {hero.primaryCta.label}
              <span aria-hidden="true">↓</span>
            </a>
            <a className="btn btn--ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="hero__platform">{hero.platformNote}</p>
        </div>
      </div>

      <ul className="wrap hero__facts">
        {hero.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </section>
  );
}
