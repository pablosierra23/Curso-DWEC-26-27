// Enunciado: Proyecto creacion de una tienda
// Autor: Pablo SG
// Investigación: 
//
// -------------- Importaciones --------------

import type { Product } from "./types/product";
import { products } from "./data/products";

//Mostrar todos los productos de mi tienda

console.log("Catalogo de productos TechStore: ", products)

//Mostrar el primer producto

const first: Product | undefined = products[0] //creamos la variable first para que no se rompa si el array esta vacio
console.log("Primer producto: ", first)

//Mostrar del primer producto el precio

console.log("Precio del primer producto: ", first.price)


