import { useEffect, useRef } from 'react';

/**
 * Desplaza lentamente la imagen del bloque del hero al hacer scroll.
 * Se desactiva en móvil y con `prefers-reduced-motion`.
 */
export function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const host = ref.current;
    const image = host?.querySelector('img');
    if (!host || !image) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(min-width: 901px)').matches) return;

    let frame = 0;

    const update = () => {
      const offset = Math.min(window.scrollY, 700) * 0.07;
      image.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.14)`;
      frame = 0;
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
