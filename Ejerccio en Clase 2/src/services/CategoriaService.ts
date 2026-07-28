import { Categoria } from "../interfaces/Categoria.js";
import { API_URL } from "../utils/Api.js";

const URL = `${API_URL}/categorias`;

// Obtener todas las categorías
export async function obtenerCategorias(): Promise<Categoria[]> {

    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
        throw new Error("No se pudieron obtener las categorías.");
    }

    return await respuesta.json();

}

// Obtener categoría por ID
export async function obtenerCategoriaPorId(id: number): Promise<Categoria> {

    const respuesta = await fetch(`${URL}/${id}`);

    if (!respuesta.ok) {
        throw new Error("Categoría no encontrada.");
    }

    return await respuesta.json();

}

// Agregar categoría
export async function agregarCategoria(categoria: Categoria): Promise<void> {

    const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categoria)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo agregar la categoría.");
    }

}

// Actualizar categoría
export async function actualizarCategoria(id: number, categoria: Categoria): Promise<void> {

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(categoria)
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo actualizar la categoría.");
    }

}

// Eliminar categoría
export async function eliminarCategoria(id: number): Promise<void> {

    const respuesta = await fetch(`${URL}/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo eliminar la categoría.");
    }

}