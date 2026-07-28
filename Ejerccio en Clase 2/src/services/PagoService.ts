import { Pago } from "../interfaces/Pago.js";
import { API_URL } from "../utils/Api.js";

const URL = `${API_URL}/pagos`;

// Obtener todos los pagos
export async function obtenerPagos(): Promise<Pago[]> {

    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
        throw new Error("No se pudieron obtener los pagos.");
    }

    return await respuesta.json();

}

// Obtener pago por ID
export async function obtenerPagoPorId(id: number): Promise<Pago> {

    const respuesta = await fetch(`${URL}/${id}`);

    if (!respuesta.ok) {
        throw new Error("Pago no encontrado.");
    }

    return await respuesta.json();

}

// Agregar pago
export async function agregarPago(pago: Pago): Promise<void> {

    const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pago)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo registrar el pago.");
    }

}

// Actualizar pago
export async function actualizarPago(id: number, pago: Pago): Promise<void> {

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pago)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo actualizar el pago.");
    }

}

// Eliminar pago
export async function eliminarPago(id: number): Promise<void> {

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo eliminar el pago.");
    }

}