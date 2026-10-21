import { limits } from '../data/content';
import { Lines } from './Lines';
import { Reveal } from './Reveal';

export function Limits() {
  return (
    <section className="limits">
      <div className="wrap limits__inner">
        <Reveal as="h2">
          <Lines lines={limits.title} />
        </Reveal>
        <div className="limits__body">
          <Reveal as="p" className="limits__lead">
            {limits.lead}
          </Reveal>
          <ul className="limits__list">
            {limits.items.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 0.06}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
