import { Producto } from "../interfaces/Producto.js";
import { 
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
    obtenerProductos,
    obtenerProductoPorId
 } from "../services/ProductoService.js";

 // Mostrar todos los productos
 export async function mostrarProductos(): Promise<void> {

    const productos = await obtenerProductos();

    console.table(productos);

}

// Buscar un producto por ID
export async function buscarProducto(id: number): Promise<void> {

    const producto = await obtenerProductoPorId(id);

    console.table(producto);

}

// Registrar producto
export async function registrarProducto(producto: Producto): Promise<void> {

    await agregarProducto(producto);

    console.log("Producto registrado correctamente.");

}

// Modificar producto
export async function modificarProducto(id: number, producto: Producto): Promise<void> {

    await actualizarProducto(id, producto);

    console.log("Producto actualizado correctamente.");

}

// Eliminar producto
export async function borrarProducto(id: number): Promise<void> {

    await eliminarProducto(id);

    console.log("Producto eliminado correctamente.");

}