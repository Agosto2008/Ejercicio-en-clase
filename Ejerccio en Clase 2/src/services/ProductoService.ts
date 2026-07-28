import { Producto } from "../interfaces/Producto.js";
import { API_URL } from "../utils/Api.js";

const URL = `${API_URL}/productos`;

// Obtener todos los productos
export async function obtenerProductos(): Promise<Producto[]> {

    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
        throw new Error("No se pudieron obtener los productos.");
    }

    return await respuesta.json();

}

// Obtener producto por ID
export async function obtenerProductoPorId(id: number): Promise<Producto> {

    const respuesta = await fetch(`${URL}/${id}`);

    if (!respuesta.ok) {
        throw new Error("Producto no encontrado.");
    }

    return await respuesta.json();

}

// Agregar producto
export async function agregarProducto(producto: Producto): Promise<void> {

    const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo agregar el producto.");
    }

}

// Actualizar producto
export async function actualizarProducto(id: number, producto: Producto): Promise<void> {

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo actualizar el producto.");
    }

}

// Eliminar producto
export async function eliminarProducto(id: number): Promise<void> {

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo eliminar el producto.");
    }

}