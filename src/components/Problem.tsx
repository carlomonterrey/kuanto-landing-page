import { problem } from '../data/content';
import { Lines } from './Lines';
import { Reveal } from './Reveal';

export function Problem() {
  return (
    <section className="problem" id="problema">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="h2">
            <Lines lines={problem.title} />
          </Reveal>
          <Reveal as="p" className="section-head__lead">
            {problem.lead}
          </Reveal>
        </div>

        <ul className="problem__list">
          {problem.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 0.07}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  );
}
