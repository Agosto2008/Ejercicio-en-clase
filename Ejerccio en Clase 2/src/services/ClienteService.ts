import { Cliente } from "../interfaces/Cliente.js";
import { API_URL } from "../utils/Api.js";

const URL = `${API_URL}/clientes`;

export async function obtenerClientes(): Promise<Cliente[]> {
    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
        throw new Error("No se pudieron obtener los clientes.");
    }

    return await respuesta.json();
}

export async function obtenerClientePorId(id: number): Promise<Cliente> {
    const respuesta = await fetch(`${URL}/${id}`);

    if (!respuesta.ok) {
        throw new Error("Cliente no encontrado.");
    }

    return await respuesta.json();
}

export async function agregarCliente(cliente: Cliente): Promise<void> {
    const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo agregar el cliente.");
    }
}

export async function actualizarCliente(id: number, cliente: Cliente): Promise<void> {
    const respuesta = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cliente)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo actualizar el cliente.");
    }
}

export async function eliminarCliente(id: number): Promise<void> {
    const respuesta = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo eliminar el cliente.");
    }
}