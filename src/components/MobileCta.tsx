import { useEffect, useState } from 'react';
import { whatsappLink, WHATSAPP_MESSAGES } from '../data/content';
import { WhatsAppIcon } from './WhatsAppIcon';

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
      <a
        className="btn btn--primary"
        href={whatsappLink(WHATSAPP_MESSAGES.install)}
        data-cta="mobile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        Solicitar instalación
      </a>
    </div>
  );
}
