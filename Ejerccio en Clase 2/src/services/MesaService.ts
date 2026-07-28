import { Mesa } from "../interfaces/Mesa.js";
import { API_URL } from "../utils/Api.js";

const URL = `${API_URL}/mesas`;

// Obtener todas las mesas
export async function obtenerMesas(): Promise<Mesa[]> {

    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
        throw new Error("No se pudieron obtener las mesas.");
    }

    return await respuesta.json();

}

// Obtener una mesa por ID
export async function obtenerMesaPorId(id: number): Promise<Mesa> {

    const respuesta = await fetch(`${URL}/${id}`);

    if (!respuesta.ok) {
        throw new Error("Mesa no encontrada.");
    }

    return await respuesta.json();

}

// Agregar una nueva mesa
export async function agregarMesa(mesa: Mesa): Promise<void> {

    const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mesa)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo agregar la mesa.");
    }

}

// Actualizar una mesa
export async function actualizarMesa(id: number, mesa: Mesa): Promise<void> {

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mesa)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo actualizar la mesa.");
    }

}

// Eliminar una mesa
export async function eliminarMesa(id: number): Promise<void> {

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo eliminar la mesa.");
    }

}