import { steps } from '../data/content';
import { Lines } from './Lines';
import { Reveal } from './Reveal';

export function Steps() {
  return (
    <section className="steps-band" id="como-funciona">
      <div className="wrap">
        <Reveal as="h2">
          <Lines lines={steps.title} />
        </Reveal>

        <ol className="steps">
          {steps.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 0.08}>
              <span className="step__num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
