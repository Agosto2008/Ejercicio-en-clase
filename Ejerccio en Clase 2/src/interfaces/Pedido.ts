import { Cliente } from "./Cliente.js";
import { Mesa } from "./Mesa.js";

export interface Pedido {
    id: number;
    cliente: Cliente;
    mesa: Mesa;
    fecha: string;
    estado: string;
    total: number;
}