import { obtenerPedidos } from "../services/PedidoService.js";
import { obtenerDetalles } from "../services/DetallePedidoService.js";

// Reporte de ventas: suma el total de todos los pedidos pagados
export async function reporteVentas(): Promise<void> {

    const pedidos = await obtenerPedidos();

    const pedidosPagados = pedidos.filter((p) => p.estado === "Pagado");

    const totalVentas = pedidosPagados.reduce((acumulado, p) => acumulado + p.total, 0);

    console.log("=== Reporte de Ventas ===");
    console.log(`Pedidos pagados: ${pedidosPagados.length}`);
    console.log(`Total vendido: ${totalVentas}`);

}

// Reporte de productos más vendidos (por cantidad)
export async function productosMasVendidos(): Promise<void> {

    const detalles = await obtenerDetalles();

    const conteo = new Map<string, number>();

    for (const detalle of detalles) {
        const nombre = detalle.producto.nombre;
        const cantidadActual = conteo.get(nombre) ?? 0;
        conteo.set(nombre, cantidadActual + detalle.cantidad);
    }

    const ranking = Array.from(conteo.entries())
        .map(([nombre, cantidad]) => ({ nombre, cantidad }))
        .sort((a, b) => b.cantidad - a.cantidad);

    console.log("=== Productos Más Vendidos ===");
    console.table(ranking);

}