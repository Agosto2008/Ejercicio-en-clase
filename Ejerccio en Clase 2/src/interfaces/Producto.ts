import { Categoria } from "./Categoria.js";

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    categoria: Categoria;
}