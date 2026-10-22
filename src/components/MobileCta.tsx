import { useEffect, useState } from 'react';

/**
 * Barra fija de conversión en móvil. Aparece al pasar el hero para no tapar
 * el primer pantallazo, que ya tiene su propio CTA.
 */
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="mobile-bar">
      <a className="btn btn--primary" href="#descargas" data-cta="mobile-descargar">
        Descargar Kuanto
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  );
}
