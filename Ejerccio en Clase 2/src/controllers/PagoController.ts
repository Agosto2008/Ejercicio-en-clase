import { Pago } from "../interfaces/Pago.js";
import {  
    obtenerPagos,
    obtenerPagoPorId,
    agregarPago,
    actualizarPago,
    eliminarPago
} from "../services/PagoService.js";

// Mostrar todos los pagos
export async function mostrarPagos(): Promise<void> {

    const pagos = await obtenerPagos();

    console.table(pagos);

}

// Buscar un pago por ID
export async function buscarPago(id: number): Promise<void> {

    const pago = await obtenerPagoPorId(id);

    console.table(pago);

}

// Registrar pago
export async function registrarPago(pago: Pago): Promise<void> {

    await agregarPago(pago);

    console.log("Pago registrado correctamente.");

}

// Modificar pago
export async function modificarPago(id: number, pago: Pago): Promise<void> {

    await actualizarPago(id, pago);

    console.log("Pago actualizado correctamente.");

}

// Eliminar pago
export async function borrarPago(id: number): Promise<void> {

    await eliminarPago(id);

    console.log("Pago eliminado correctamente.");

}