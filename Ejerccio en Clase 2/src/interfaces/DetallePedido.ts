import { Pedido } from "./Pedido.js";
import { Producto } from "./Producto.js";

export interface DetallePedido {
    id: number;
    pedido: Pedido;
    producto: Producto;
    cantidad: number;
    subtotal: number;
}