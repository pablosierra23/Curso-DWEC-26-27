// Enunciado: Proyecto creacion de una tienda
// Autor: Pablo SG
// Investigación: 
//
// -------------- Importaciones --------------

//import type { Product } from "./types/product";
//import { products } from "./data/products";

//Mostrar todos los productos de mi tienda
//console.log("Catalogo de productos TechStore: ", products)

//Mostrar el primer producto
//const first: Product | undefined = products[0] //creamos la variable first para que no se rompa si el array esta vacio
//console.log("Primer producto: ", first)

//Mostrar del primer producto el precio
//console.log("Precio del primer producto: ", first.price)

// -------------------- IMPORTS CONSOLA 01HOMEWORK------------------

//EJ1
import { products } from './data/products';
import { tags } from './exercises/s01-homework/ex01-tags';

console.log('ej01', tags(products));

//EJ2
import { soldOutNames } from './exercises/s01-homework/ex02-sold-out-names';

console.log('ej02', soldOutNames(products));

//EJ3
import { byCategory } from './exercises/s01-homework/ex03-by-category';

console.log('ej03', byCategory(products, 'audio').map((p) => p.name));
console.log('ej03', byCategory(products, 'monitors').map((p) => p.name));
console.log('ej03', byCategory([], 'audio'));

//EJ4
import { priceOf } from './exercises/s01-homework/ex04-price-of';

console.log('ej04', priceOf(products, 3));
console.log('ej04', priceOf(products, 99));

//EJ5
import { canBuy } from './exercises/s01-homework/ex05-can-buy';
console.log(
  'ej05',
  canBuy(products, 1, 2), // teclado, hay 5 → true
  canBuy(products, 1, 6), // teclado, pide 6 y solo hay 5 → false
  canBuy(products, 2, 1), // ratón agotado → false
  canBuy(products, 99, 1), // no existe → false
  canBuy(products, 1, 0), // 0 unidades → false
);


//EJ6
import type { Product } from '../../../types/product';

export const allInStock = (list: Product[]): boolean => list.every((p) =>
  p.stock > 0);

