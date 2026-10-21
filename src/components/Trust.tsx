import { trust } from '../data/content';
import { Lines } from './Lines';
import { Reveal } from './Reveal';

export function Trust() {
  return (
    <section className="trust" id="confianza">
      <div className="wrap">
        <div className="trust__head">
          <Reveal as="h2">
            <Lines lines={trust.title} />
          </Reveal>
          <Reveal as="p">{trust.lead}</Reveal>
        </div>

        <dl className="trust__grid">
          {trust.items.map((item, index) => (
            <Reveal as="div" className="trust__item" key={item.value} delay={index * 0.06}>
              <dt>{item.value}</dt>
              <dd>{item.text}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal as="p" className="trust__claim">
          <span>{trust.claim}</span>
        </Reveal>
      </div>
    </section>
  );
}
