import { useEffect, useRef } from 'react';
import { question } from '../data/content';

/**
 * Pregunta retórica a pantalla completa: las líneas entran en secuencia y la
 * respuesta se resalta con un barrido Ember. El disparo es la sección visible.
 */
export function Question() {
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
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="question" id="ganancias" ref={ref}>
      <div className="wrap question__inner">
        <p className="question__line question__line--first">{question.questions[0]}</p>
        <p className="question__line question__line--second">{question.questions[1]}</p>
        <p className="question__answer">
          <span>{question.answer}</span>
        </p>
        <p className="question__note">{question.note}</p>
      </div>
    </section>
  );
}
