declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

/**
 * Medición de los CTA de WhatsApp en Clarity. El stub del snippet encola los
 * eventos hasta que el script carga, así que se puede disparar en el clic.
 * Delegamos en el documento para no tocar cada botón y para que funcione con
 * el HTML prerenderizado.
 */
export function initTracking(): void {
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href*="wa.me"]');
      if (!link) return;

      window.clarity?.('event', `whatsapp_${link.dataset.cta ?? 'otro'}`);
    },
    { capture: true },
  );
}
