import type { GalleryShot } from './content';
import posVenta from '../assets/screens/02-pos-venta.jpg';
import panel from '../assets/screens/01-panel-control.jpg';
import inventario from '../assets/screens/04-inventario.jpg';
import catalogo from '../assets/screens/03-catalogo.jpg';
import consignacion from '../assets/screens/07-consignacion.jpg';
import ventas from '../assets/screens/05-ventas.jpg';

/* Las capturas viven solo aquí. Para cambiar una imagen, reemplaza el archivo
   en src/assets/screens y ajusta el título y la explicación. */
export const shots: GalleryShot[] = [
  {
    id: 'pos',
    src: posVenta,
    alt: 'Pantalla de Caja / Venta con el catálogo de productos y un carrito de tres artículos que suma 632 CUP',
    title: 'Caja / Venta',
    text: 'El mostrador: catálogo, carrito y cobro en CUP y USD con la tasa del local',
  },
  {
    id: 'panel',
    src: panel,
    alt: 'Panel de control con ventas del turno, devoluciones, mermas y efectivo en caja',
    title: 'Panel de control',
    text: 'El turno de un vistazo: vendido, devuelto, mermado y efectivo en caja',
  },
  {
    id: 'inventario',
    src: inventario,
    alt: 'Existencias del local con cantidad, costo promedio, precio de venta y margen por producto',
    title: 'Existencias',
    text: 'Stock por local, costo promedio, precio de venta y margen de cada producto',
  },
  {
    id: 'catalogo',
    src: catalogo,
    alt: 'Catálogo de productos con código, tipo y estado de cada artículo',
    title: 'Catálogo',
    text: 'La ficha maestra: código, tipo (propio, mixto o consignación) y estado',
  },
  {
    id: 'consignacion',
    src: consignacion,
    alt: 'Consignación recibida con deuda total, abonos y saldo pendiente del proveedor',
    title: 'Consignación recibida',
    text: 'Deuda con el proveedor, abonos y saldo pendiente en una sola cuenta',
  },
  {
    id: 'ventas',
    src: ventas,
    alt: 'Historial de ventas con folios, cajero, total en CUP y estado de cada ticket',
    title: 'Historial de ventas',
    text: 'Cada ticket con folio, cajero, total y estado, incluidas las devoluciones',
  },
];
