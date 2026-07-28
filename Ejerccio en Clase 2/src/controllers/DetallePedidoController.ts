import { DetallePedido } from "../interfaces/DetallePedido.js";
import {
    obtenerDetalles,
    obtenerDetallePorId,
    agregarDetalle,
    actualizarDetalle,
    eliminarDetalle
} from "../services/DetallePedidoService.js";

// Mostrar todos los detalles de pedido
export async function mostrarDetalles(): Promise<void> {

    const detalles = await obtenerDetalles();

    console.table(detalles);

}

// Buscar un detalle por ID
export async function buscarDetalle(id: number): Promise<void> {

    const detalle = await obtenerDetallePorId(id);

    console.table(detalle);

}

// Registrar detalle
export async function registrarDetalle(detalle: DetallePedido): Promise<void> {

    await agregarDetalle(detalle);

    console.log("Detalle registrado correctamente.");

}

// Modificar detalle
export async function modificarDetalle(id: number, detalle: DetallePedido): Promise<void> {

    await actualizarDetalle(id, detalle);

    console.log("Detalle actualizado correctamente.");

}

// Eliminar detalle
export async function borrarDetalle(id: number): Promise<void> {

    await eliminarDetalle(id);

    console.log("Detalle eliminado correctamente.");

}