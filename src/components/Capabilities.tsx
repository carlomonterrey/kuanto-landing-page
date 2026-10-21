import { capabilities } from '../data/content';
import { Lines } from './Lines';
import { Reveal } from './Reveal';

export function Capabilities() {
  return (
    <section className="capabilities" id="funcionalidades">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="h2">
            <Lines lines={capabilities.title} />
          </Reveal>
          <Reveal as="p" className="section-head__lead">
            {capabilities.lead}
          </Reveal>
        </div>

        <div className="cap__grid">
          {capabilities.groups.map((group, index) => (
            <Reveal as="div" className="cap__group" key={group.title} delay={index * 0.08}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.title}>
                    <span className="cap__name">{item.title}</span>
                    <span className="cap__desc">{item.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
