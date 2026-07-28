import { Cliente } from "../interfaces/Cliente.js";
import {
    obtenerClientes,
    obtenerClientePorId,
    agregarCliente,
    actualizarCliente,
    eliminarCliente
} from "../services/ClienteService.js";

// Mostrar todos los clientes
export async function mostrarClientes(): Promise<void> {

    const clientes = await obtenerClientes();

    console.table(clientes);

}

// Buscar un cliente por ID
export async function buscarCliente(id: number): Promise<void> {

    const cliente = await obtenerClientePorId(id);

    console.table(cliente);

}

// Registrar cliente
export async function registrarCliente(cliente: Cliente): Promise<void> {

    await agregarCliente(cliente);

    console.log("Cliente registrado correctamente.");

}

// Modificar cliente
export async function modificarCliente(id: number, cliente: Cliente): Promise<void> {

    await actualizarCliente(id, cliente);

    console.log("Cliente actualizado correctamente.");

}

// Eliminar cliente
export async function borrarCliente(id: number): Promise<void> {

    await eliminarCliente(id);

    console.log("Cliente eliminado correctamente.");

}