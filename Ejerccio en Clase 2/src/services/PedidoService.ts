import { Pedido } from "../interfaces/Pedido.js";
import { API_URL } from "../utils/Api.js";

const URL = `${API_URL}/pedidos`;

// Obtener todos los pedidos
export async function obtenerPedidos(): Promise<Pedido[]> {

    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
        throw new Error("No se pudieron obtener los pedidos.");
    }

    return await respuesta.json();

}

// Obtener pedido por ID
export async function obtenerPedidoPorId(id: number): Promise<Pedido> {

    const respuesta = await fetch(`${URL}/${id}`);

    if (!respuesta.ok) {
        throw new Error("Pedido no encontrado.");
    }

    return await respuesta.json();

}

// Agregar pedido
export async function agregarPedido(pedido: Pedido): Promise<void> {

    const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedido)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo agregar el pedido.");
    }

}

// Actualizar pedido
export async function actualizarPedido(id: number, pedido: Pedido): Promise<void> {

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pedido)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo actualizar el pedido.");
    }

}

// Eliminar pedido
export async function eliminarPedido(id: number): Promise<void> {

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo eliminar el pedido.");
    }

}