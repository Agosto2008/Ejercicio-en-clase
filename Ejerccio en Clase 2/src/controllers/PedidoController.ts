import { Pedido } from "../interfaces/Pedido.js";
import { Cliente } from "../interfaces/Cliente.js";
import { Mesa } from "../interfaces/Mesa.js";
import { DetallePedido } from "../interfaces/DetallePedido.js";
import { Pago } from "../interfaces/Pago.js";
import {
    obtenerPedidos,
    obtenerPedidoPorId,
    agregarPedido,
    actualizarPedido,
    eliminarPedido
} from "../services/PedidoService.js";
import {
    obtenerDetalles,
    agregarDetalle
} from "../services/DetallePedidoService.js";
import { obtenerProductoPorId } from "../services/ProductoService.js";
import { agregarPago } from "../services/PagoService.js";

// Abrir un pedido nuevo para una mesa
// Regla: una mesa solo puede tener un pedido abierto a la vez
export async function abrirPedido(cliente: Cliente, mesa: Mesa): Promise<void> {

    const pedidos = await obtenerPedidos();

    const mesaOcupada = pedidos.some(
        (p) => p.mesa.id === mesa.id && p.estado === "Abierto"
    );

    if (mesaOcupada) {
        throw new Error(`La mesa ${mesa.numero} ya tiene un pedido abierto.`);
    }

    const nuevoPedido = {
        cliente,
        mesa,
        fecha: new Date().toISOString(),
        estado: "Abierto",
        total: 0
    } as Pedido;

    await agregarPedido(nuevoPedido);

    console.log(`Pedido abierto correctamente para la mesa ${mesa.numero}.`);

}

// Agregar un producto a un pedido abierto
export async function agregarProductoPedido(pedidoId: number, productoId: number, cantidad: number): Promise<void> {

    const pedido = await obtenerPedidoPorId(pedidoId);

    if (pedido.estado !== "Abierto") {
        throw new Error("Solo se pueden agregar productos a un pedido abierto.");
    }

    const producto = await obtenerProductoPorId(productoId);

    const subtotal = producto.precio * cantidad;

    const nuevoDetalle = {
        pedido,
        producto,
        cantidad,
        subtotal
    } as DetallePedido;

    await agregarDetalle(nuevoDetalle);

    // Recalcular el total del pedido automáticamente
    const nuevoTotal = await calcularCuenta(pedidoId);

    await actualizarPedido(pedidoId, { ...pedido, total: nuevoTotal });

    console.log(`Producto "${producto.nombre}" agregado al pedido ${pedidoId}.`);

}

// Calcular el total de la cuenta de un pedido (suma de los subtotales)
export async function calcularCuenta(pedidoId: number): Promise<number> {

    const detalles = await obtenerDetalles();

    const detallesPedido = detalles.filter((d) => d.pedido.id === pedidoId);

    const total = detallesPedido.reduce((acumulado, d) => acumulado + d.subtotal, 0);

    return total;

}

// Pagar y cerrar un pedido
// Reglas: no se puede pagar un pedido vacío, ni uno ya pagado
export async function pagarPedido(pedidoId: number, metodoPago: string): Promise<void> {

    const pedido = await obtenerPedidoPorId(pedidoId);

    if (pedido.estado === "Pagado") {
        throw new Error("Este pedido ya fue pagado.");
    }

    const total = await calcularCuenta(pedidoId);

    if (total === 0) {
        throw new Error("No se puede pagar un pedido vacío.");
    }

    const nuevoPago = {
        pedido,
        metodoPago,
        monto: total,
        fecha: new Date().toISOString()
    } as Pago;

    await agregarPago(nuevoPago);

    await actualizarPedido(pedidoId, { ...pedido, estado: "Pagado", total });

    console.log(`Pedido ${pedidoId} pagado y cerrado correctamente. Total: ${total}`);

}

// Cancelar un pedido
// Regla: no se puede cancelar un pedido ya pagado
export async function cancelarPedido(pedidoId: number): Promise<void> {

    const pedido = await obtenerPedidoPorId(pedidoId);

    if (pedido.estado === "Pagado") {
        throw new Error("No se puede cancelar un pedido que ya fue pagado.");
    }

    await actualizarPedido(pedidoId, { ...pedido, estado: "Cancelado" });

    console.log(`Pedido ${pedidoId} cancelado correctamente.`);

}

// Dividir la cuenta de un pedido entre varias personas
export async function dividirCuenta(pedidoId: number, numeroPersonas: number): Promise<void> {

    if (numeroPersonas <= 0) {
        throw new Error("El número de personas debe ser mayor a cero.");
    }

    const total = await calcularCuenta(pedidoId);

    const montoPorPersona = total / numeroPersonas;

    console.log(`Cuenta total: ${total}`);
    console.log(`Dividida entre ${numeroPersonas} personas: ${montoPorPersona.toFixed(2)} c/u`);

}

// Eliminar un pedido (solo si está abierto o cancelado)
export async function eliminarPedidoSiAbiertoOCancelado(pedidoId: number): Promise<void> {

    const pedido = await obtenerPedidoPorId(pedidoId);

    if (pedido.estado === "Pagado") {
        throw new Error("No se puede eliminar un pedido que ya fue pagado.");
    }

    await eliminarPedido(pedidoId);

    console.log(`Pedido ${pedidoId} eliminado correctamente.`);

}