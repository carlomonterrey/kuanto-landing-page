import { createElement, useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Etiqueta HTML a renderizar. Por defecto `div`. */
  as?: ElementType;
  /** `media` activa el barrido de las capturas. */
  variant?: 'default' | 'media';
  /** Retardo en segundos para escalonar grupos. */
  delay?: number;
  className?: string;
};

/**
 * Envuelve un bloque para que aparezca al entrar en pantalla.
 * El movimiento vive en CSS (`[data-reveal]`); aquí solo se añade `.is-in`.
 */
export function Reveal({ children, as = 'div', variant = 'default', delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      el.classList.add('is-in');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in');
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const props = {
    ref,
    className: ['reveal', className].filter(Boolean).join(' '),
    'data-reveal': variant,
    style: delay ? ({ '--d': `${delay}s` } as CSSProperties) : undefined,
  };

  return createElement(as as string, props, children);
}
