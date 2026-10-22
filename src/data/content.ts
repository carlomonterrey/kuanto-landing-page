export type NavLink = { label: string; href: string };

/* --------------------------------------------------------------------------
   WhatsApp: cambia el número aquí y todos los CTA lo usan.
   -------------------------------------------------------------------------- */
export const WHATSAPP_NUMBER = '5355230827';
export const WHATSAPP_MESSAGES = {
  install: 'Hola, quiero descargar Kuanto.',
  support: 'Hola, necesito soporte con Kuanto.',
};
export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export type Item = { title: string; text: string };

export type CapabilityGroup = {
  title: string;
  items: Item[];
};

export type GalleryShot = {
  id: string;
  src: string;
  alt: string;
  title: string;
  text: string;
};

export type Step = { title: string; text: string };

export type TrustItem = { value: string; text: string };

export type Platform = { label: string; icon: 'apple' | 'windows' | 'android' };

export type DownloadId = 'windows' | 'macos' | 'android';

export type DownloadItem = {
  id: DownloadId;
  label: string;
  detail: string;
  kind: string;
  url: string;
};

/* --------------------------------------------------------------------------
   Descargas. Cuando publiques una versión nueva, cambia version y las URLs.
   -------------------------------------------------------------------------- */
export const downloads = {
  version: '1.1.13',
  title: 'Kuanto en tu computadora, listo para cobrar.',
  lead:
    'Elige tu sistema. La prueba de 30 días empieza al abrir la aplicación: sin tarjeta, sin cuenta y sin internet.',
  items: [
    {
      id: 'windows',
      label: 'Windows',
      detail: 'Windows 10/11 · 64 bits',
      kind: 'Instalador .exe',
      url: 'https://github.com/carlomonterrey/kuanto-downloads/releases/download/v1.1.13/kuanto-1.1.13-setup.exe',
    },
    {
      id: 'macos',
      label: 'macOS',
      detail: 'macOS 12+ · Apple Silicon',
      kind: 'Imagen .dmg',
      url: 'https://github.com/carlomonterrey/kuanto-downloads/releases/download/v1.1.13/kuanto-1.1.13-arm64.dmg',
    },
    {
      id: 'android',
      label: 'Android',
      detail: 'Android 8+',
      kind: 'Archivo .apk',
      url: 'https://github.com/carlomonterrey/kuanto-downloads/releases/download/v1.1.13/kuanto-1.1.13.apk',
    },
  ] as DownloadItem[],
} as const;

/* --------------------------------------------------------------------------
   Todo el copy vive aquí para que puedas editarlo sin tocar los componentes.
   -------------------------------------------------------------------------- */

export const navLinks: NavLink[] = [
  { label: 'Problema', href: '#problema' },
  { label: 'El dólar', href: '#dolar' },
  { label: 'Para quién', href: '#para-quien' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Funciones', href: '#funcionalidades' },
  { label: 'Descargas', href: '#descargas' },
];

export const hero = {
  titleLines: ['Sin internet,', 'el negocio', 'sigue.'],
  cardText:
    'Kuanto es el punto de venta y el almacén para pequeños y medianos negocios en Cuba. Corre en tu computadora, guarda los datos ahí mismo y te deja cobrar en CUP y USD aunque no haya red.',
  primaryCta: { label: 'Descargar Kuanto', href: '#descargas' },
  secondaryCta: { label: 'Ver cómo funciona', href: '#como-funciona' },
  chips: {
    rate: {
      label: 'Tasa del local',
      value: 'La pones tú',
      text: 'Ajusta el CUP/USD cuando el dólar se mueva.',
    },
    offline: {
      label: 'Sin conexión',
      value: '0 servidores',
      text: 'Tu computadora es el servidor.',
    },
  },
  facts: [
    'Descarga inmediata',
    '30 días gratis',
    'Datos en tu computadora',
    'CUP y USD con tasa propia',
  ],
  platformNote: 'macOS · Windows · Android',
};

export const problem = {
  title: ['La red', 'no es una', 'garantía.'],
  lead:
    'En Cuba la conexión se corta, se cae o simplemente no llega. Un sistema que vive en la nube necesita internet hasta para cobrar: sin señal no hay venta, no hay inventario y no hay cierre.',
  items: [
    {
      title: 'Sin señal no hay cobro',
      text: 'Si el punto de venta depende de un servidor remoto, el mostrador se detiene con la conexión.',
    },
    {
      title: 'Sin red no hay stock al día',
      text: 'La actualización en tiempo real depende de una conexión que el local no controla. Cuando no hay red, no hay sincronía.',
    },
    {
      title: 'Sin nube no hay respaldo',
      text: 'Y si el proveedor cierra o cambia de precio, el negocio se queda sin sistema y sin sus datos.',
    },
  ] as Item[],
};

export type PromiseToken = { text: string } | { mark: string };

export const promise: { intro: string; lines: PromiseToken[][] } = {
  intro: 'Kuanto no promete tiempo real.',
  lines: [
    [{ text: 'Promete ' }, { mark: 'inventario controlado' }, { text: ',' }],
    [{ mark: 'caja cuadrada' }, { text: ' y ' }, { mark: 'ventas registradas' }, { text: ',' }],
    [{ text: 'aunque la red no esté.' }],
  ],
};

export const dollar = {
  title: ['El dólar se mueve.', 'Tu precio, también.'],
  lead:
    'La tasa cambia todas las semanas y los precios se quedan viejos. Kuanto guarda la tasa en el local, calcula el equivalente en cada venta y deja historial de cada cambio.',
  items: [
    {
      title: 'Tasa configurable',
      text: 'Defines cuántos CUP vale un USD. El sistema calcula el equivalente en el carrito y en el ticket.',
    },
    {
      title: 'Precios en las dos monedas',
      text: 'Cada producto se vende en CUP o en USD. El ticket muestra el total en ambas monedas.',
    },
    {
      title: 'Márgenes por producto',
      text: 'Margen bajo, normal o bueno: sabes cuánto ganas antes de vender, no después.',
    },
    {
      title: 'Historial de precios',
      text: 'Cada cambio de precio queda registrado con fecha. Puedes revisar cuándo subió y cuánto.',
    },
    {
      title: 'Compras y costos',
      text: 'El costo real de la mercancía entra al margen, para que la utilidad no sea una suposición.',
    },
  ] as Item[],
  calculator: {
    title: 'Prueba la tasa',
    text: 'Así cambia el precio de un producto en USD cuando se mueve la tasa del local.',
    rateLabel: 'Tasa del local (CUP por USD)',
    priceLabel: 'Precio del producto (USD)',
    resultLabel: 'Equivalente en CUP',
    note: 'Ejemplo ilustrativo. La tasa real se configura dentro de la aplicación y queda guardada en la computadora.',
  },
};

export const question = {
  questions: ['¿Cuánto ganas realmente?', '¿Tú lo sabes?'],
  answer: 'Kuanto lo sabe.',
  note: 'Reportes de utilidad con ingreso, costo y margen por producto.',
};

export const audience = {
  title: 'Para negocios que no pueden depender de la nube.',
  lead:
    'Pensado para el dueño que opera solo, sin técnico al lado: lenguaje llano, pasos guiados y una licencia que se activa sin internet.',
  cta: { label: 'Ver las funcionalidades', href: '#funcionalidades' },
  items: [
    { value: 'Bodegas', label: 'Stock y precios que siguen al dólar.' },
    { value: 'Paladares', label: 'Caja, tickets y cierre de turno con arqueo.' },
    { value: 'Tiendas', label: 'Ventas en CUP y USD, devoluciones y fiado.' },
    { value: 'Almacenes', label: 'Entradas, transferencias y consignación.' },
  ],
  platforms: [
    { label: 'macOS', icon: 'apple' },
    { label: 'Windows', icon: 'windows' },
    { label: 'Android', icon: 'android' },
  ] as Platform[],
};

export const limits = {
  title: ['Lo que Kuanto', 'no hace.'],
  lead:
    'También conviene saberlo: no es una nube ni promete magia. Es un sistema local, pensado para la realidad del local.',
  items: [
    {
      title: 'No sincroniza en tiempo real',
      text: 'Las computadoras se actualizan por jornadas: se pasan los datos con una memoria USB cifrada AES-256.',
    },
    {
      title: 'No es una nube',
      text: 'No hay acceso remoto ni panel desde el teléfono. Los datos se quedan en la computadora del negocio.',
    },
    {
      title: 'No reemplaza internet',
      text: 'Lo vuelve innecesario para operar: vender, inventariar y cerrar caja funcionan igual sin red.',
    },
  ] as Item[],
};

export const faq = {
  title: ['Preguntas', 'frecuentes.'],
  lead: 'Lo que más nos preguntan antes de instalar Kuanto.',
  items: [
    {
      q: '¿Kuanto funciona sin internet?',
      a: 'Sí. La caja, el inventario y los reportes corren en la computadora del negocio. La licencia se valida en la computadora, sin conexión, y los datos viven en una base SQLite local.',
    },
    {
      q: '¿Puedo cobrar en dólares?',
      a: 'Sí. Kuanto maneja precios y ventas en CUP y USD con la tasa del dólar que configura el local, y guarda historial de cada cambio de precio.',
    },
    {
      q: '¿En qué plataformas funciona?',
      a: 'En macOS y Windows como instalador de escritorio, y en Android como APK.',
    },
    {
      q: '¿Cómo se sincronizan las computadoras?',
      a: 'Por jornadas, con una memoria USB cifrada AES-256. No hay sincronización en tiempo real porque no depende de internet.',
    },
  ],
};

export const gallery = {
  title: ['Así se ve', 'por dentro.'],
  lead:
    'Capturas reales de la aplicación. Muestran datos de prueba del entorno local, no información de ningún negocio.',
  note: 'Toca una captura para verla completa.',
  items: [] as GalleryShot[],
};

export const capabilities = {
  title: ['Todo lo que', 'hace falta.'],
  lead:
    'La operación completa del local en una sola aplicación: vender, almacenar y administrar sin que nada dependa de la red.',
  groups: [
    {
      title: 'Vender',
      items: [
        { title: 'Caja y turnos', text: 'Apertura con fondo y cierre con arqueo de efectivo.' },
        { title: 'Cobro en CUP y USD', text: 'Efectivo, transferencia y fiado en la misma venta.' },
        { title: 'Devoluciones', text: 'Tickets devueltos con folio y estado auditado.' },
        { title: 'Consignación entregada', text: 'Tu mercancía en locales de terceros, con liquidación.' },
      ],
    },
    {
      title: 'Almacenar',
      items: [
        { title: 'Catálogo', text: 'Ficha maestra con precios en las dos monedas.' },
        { title: 'Existencias por local', text: 'Stock propio y en consignación, con costo promedio.' },
        { title: 'Entradas y transferencias', text: 'Envíos entre locales con recepción confirmada.' },
        { title: 'Compras y costos', text: 'Viajes de compra, costo por producto y margen.' },
      ],
    },
    {
      title: 'Administrar',
      items: [
        { title: 'Reportes de utilidad', text: 'Ingreso, costo y margen por producto en un rango.' },
        { title: 'Liquidaciones', text: 'Pagos recibidos y entregados, en efectivo o productos.' },
        { title: 'Roles por computadora', text: 'ADMIN, ALMACÉN o POS: cada computadora con su alcance.' },
        { title: 'Licencia offline', text: 'Archivo .key firmado por computadora, sin validar en red.' },
      ],
    },
  ] as CapabilityGroup[],
};

export const steps = {
  title: ['Tres pasos', 'y a facturar.'],
  items: [
    {
      title: 'Configura la computadora',
      text: 'Instalador para macOS y Windows, o APK para Android. No hay servidor que montar ni puerto que abrir.',
    },
    {
      title: 'Activa la licencia',
      text: 'Un archivo .key ligado a la computadora. Se valida en el primer arranque, sin internet.',
    },
    {
      title: 'Abre el turno',
      text: 'Defines el fondo, cargas el catálogo y empiezas a facturar. El rol de cada computadora queda fijo.',
    },
  ] as Step[],
};

export const trust = {
  title: ['Confianza', 'que se verifica.'],
  lead: 'No hace falta creer en una promesa de marketing: así está construido el sistema.',
  items: [
    { value: 'AES-256', text: 'Cifrado de la memoria USB con la que se sincronizan las computadoras.' },
    { value: 'ECDSA P-256', text: 'Firma de la licencia por computadora, validada sin red.' },
    { value: 'SQLite local', text: 'Los datos del negocio viven en la computadora del local.' },
    { value: 'Sin servidor', text: 'Ni la caja ni el arranque necesitan conexión a internet.' },
  ] as TrustItem[],
  claim: 'Negocios locales ya confían en Kuanto.',
};

export const cta = {
  title: 'Empieza hoy. Sin señal, sin vueltas.',
  text:
    'Descarga Kuanto para tu computadora y empieza la prueba de 30 días. Sin tarjeta, sin cuenta y sin internet. Si necesitas ayuda, escribe por WhatsApp.',
  primary: { label: 'Descargar Kuanto', href: '#descargas' },
  secondary: { label: 'Hablar con soporte', href: whatsappLink(WHATSAPP_MESSAGES.support) },
  note: 'Windows · macOS · Android · 30 días gratis',
};

export const footer = {
  tagline: 'La respuesta a tu negocio.',
  columns: [
    {
      title: 'Producto',
      links: [
        { label: 'Problema', href: '#problema' },
        { label: 'El dólar', href: '#dolar' },
        { label: 'Funciones', href: '#funcionalidades' },
        { label: 'Galería', href: '#galeria' },
        { label: 'Descargas', href: '#descargas' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { label: 'Cómo funciona', href: '#como-funciona' },
        { label: 'Confianza', href: '#confianza' },
        { label: 'Contacto', href: '#contacto' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Licencia por computadora', href: '#contacto' },
        { label: 'Privacidad', href: '#contacto' },
      ],
    },
  ],
  copyright: '© 2026 Kuanto. Hecho para operar sin red.',
};
