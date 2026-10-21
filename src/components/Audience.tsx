import { audience } from '../data/content';
import { PlatformIcon } from './PlatformIcon';
import { Reveal } from './Reveal';

export function Audience() {
  return (
    <section className="audience" id="para-quien">
      <div className="wrap audience__inner">
        <Reveal as="h2">{audience.title}</Reveal>
        <Reveal as="p" className="audience__lead">
          {audience.lead}
        </Reveal>
        <Reveal>
          <a className="btn btn--ghost" href={audience.cta.href}>
            {audience.cta.label}
          </a>
        </Reveal>

        <ul className="aud-grid">
          {audience.items.map((item, index) => (
            <Reveal as="li" className="aud-card" key={item.value} delay={index * 0.06}>
              <span className="aud-card__label">{item.label}</span>
              <span className="aud-card__value">{item.value}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal as="ul" className="aud-strip" delay={0.1}>
          {audience.platforms.map((platform) => (
            <li key={platform.label}>
              <PlatformIcon name={platform.icon} />
              <span>{platform.label}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
