import { useEffect, useRef } from 'react';
import { promise } from '../data/content';

/**
 * Cierre del problema: el compromiso real, sobre fondo negro.
 * Las líneas suben desde una máscara y los tres entregables se subrayan en Ember.
 */
export function Promise() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      section.classList.add('is-in');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-in');
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="promise" ref={ref} aria-label="El compromiso de Kuanto">
      <div className="wrap promise__inner">
        <span className="promise__rule" aria-hidden="true" />

        <p className="promise__text">
          <span className="promise__line promise__line--intro">
            <span>{promise.intro}</span>
          </span>

          {promise.lines.map((line, lineIndex) => (
            <span className="promise__line" key={lineIndex}>
              <span>
                {line.map((token, tokenIndex) =>
                  'mark' in token ? (
                    <em className="promise__mark" key={tokenIndex}>
                      {token.mark}
                    </em>
                  ) : (
                    token.text
                  ),
                )}
              </span>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
