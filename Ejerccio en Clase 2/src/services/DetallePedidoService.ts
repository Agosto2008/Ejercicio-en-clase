import { DetallePedido } from "../interfaces/DetallePedido.js";
import { API_URL } from "../utils/Api.js";

const URL = `${API_URL}/detallePedidos`;

// Obtener todos los detalles
export async function obtenerDetalles(): Promise<DetallePedido[]> {

    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
        throw new Error("No se pudieron obtener los detalles.");
    }

    return await respuesta.json();

}

// Obtener detalle por ID
export async function obtenerDetallePorId(id: number): Promise<DetallePedido> {

    const respuesta = await fetch(`${URL}/${id}`);

    if (!respuesta.ok) {
        throw new Error("Detalle no encontrado.");
    }

    return await respuesta.json();

}

// Agregar detalle
export async function agregarDetalle(detalle: DetallePedido): Promise<void> {

    const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(detalle)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo agregar el detalle.");
    }

}

// Actualizar detalle
export async function actualizarDetalle(id: number, detalle: DetallePedido): Promise<void> {

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(detalle)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo actualizar el detalle.");
    }

}

// Eliminar detalle
export async function eliminarDetalle(id: number): Promise<void> {

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo eliminar el detalle.");
    }

}