import { Mesa } from "../interfaces/Mesa.js";
import {
    obtenerMesas,
    obtenerMesaPorId,
    agregarMesa,
    actualizarMesa,
    eliminarMesa
} from "../services/MesaService.js";

// Mostrar mesas
export async function mostrarMesas(): Promise<void> {

    const mesas = await obtenerMesas();

    console.table(mesas);

}

// Buscar una mesa
export async function buscarMesa(id: number): Promise<void> {

    const mesa = await obtenerMesaPorId(id);

    console.table(mesa);

}

// Registrar mesa
export async function registrarMesa(mesa: Mesa): Promise<void> {

    await agregarMesa(mesa);

    console.log("Mesa registrada correctamente.");

}

// Modificar mesa
export async function modificarMesa(id: number, mesa: Mesa): Promise<void> {

    await actualizarMesa(id, mesa);

    console.log("Mesa actualizada correctamente.");

}

// Eliminar mesa
export async function borrarMesa(id: number): Promise<void> {

    await eliminarMesa(id);

    console.log("Mesa eliminada correctamente.");

}