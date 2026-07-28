import { Pedido } from "./Pedido.js";

export interface Pago {
    id: number;
    pedido: Pedido;
    metodoPago: string;
    monto: number;
    fecha: string;
}