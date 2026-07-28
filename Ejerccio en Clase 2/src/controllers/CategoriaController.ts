import { Categoria } from "../interfaces/Categoria.js";
import { 
    agregarCategoria,
    actualizarCategoria,
    eliminarCategoria,
    obtenerCategorias,
    obtenerCategoriaPorId
} from "../services/CategoriaService.js";

// Mostrar todas las categorías
export async function mostrarCategorias(): Promise<void> {

    const categorias = await obtenerCategorias();

    console.table(categorias);

}

// Buscar una categoría por ID
export async function buscarCategoria(id: number): Promise<void> {

    const categoria = await obtenerCategoriaPorId(id);

    console.table(categoria);

}

// Registrar categoría
export async function registrarCategoria(categoria: Categoria): Promise<void> {

    await agregarCategoria(categoria);

    console.log("Categoría registrada correctamente.");
    
}

// Modificar categoría
export async function modificarCategoria(id: number, categoria: Categoria): Promise<void> {

    await actualizarCategoria(id, categoria);

    console.log("Categoría actualizada correctamente.");

}

// Eliminar categoría
export async function borrarCategoria(id: number): Promise<void> {

    await eliminarCategoria(id);

    console.log("Categoría eliminada correctamente.");

}