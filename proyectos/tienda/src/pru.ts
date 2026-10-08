import { products } from "./data/products";


//import type { Product } from '../types/product';
//export const products: Product[] = [
//  { id: 1, name: 'Teclado mec├ínico', price: 80, category: 'peripherals', stock: 5 },
//  { id: 2, name: 'Rat├│n inal├ímbrico', price: 25, category: 'peripherals', stock: 0 },
//  { id: 3, name: 'Monitor 27"', price: 220, category: 'monitors', stock: 3 },
//  { id: 4, name: 'Auriculares', price: 60, category: 'audio', stock: 10 },
//  { id: 5, name: 'Monitor 24"', price: 140, category: 'monitors', stock: 0 },
//  { id: 6, name: 'Micr├│fono USB', price: 45, category: 'audio', stock: 2 },
//];


const prices = [10, 20, 30];

const doubles = prices.map((precio) => precio * 2)

console.log(doubles)

// REPASO DE METODOS

products
  .filter(product => product.stock > 3)
  .map(product => product.name) // <-- [ 'teclado mecanico', 'auriculares' ] 
  .some(name => name === 'Auriculares') // <-- True
  .every(name => name === 'Auriculares') // <-- False
  .includes(name => name === 'Auriculares') // <-- True
  .indexOf(name => name === 'Auriculares') // <-- -1


products
  .find(product => product.category === 'peripherals') // <-- Me devuelve todo el objeto que cumple esa condicion, pero la primera ocurrencia


// METODO REDUCE

console.log(products[0]?.vat ?? "No existe la clave") //Si esto de la izquierda es null o undefined ?? entonces devuelce esto


//Calcular el valor total de todos mis productos (suma de precio * stock)

let total = 0;

for (const product of products) {
  total += product.price * product.stock;
}

// [ ].reduce((Acumulador, Elemento_que_itera, posicion, el_array_de_partida) => , valor_inicial)

products.reduce((totalProductsValue, product) => totalProductsValue + product.price * product.stock, 0)


// sort() <-- ordenar MUTA (MALOOO)
//
//

// toSorted() <-- ordenacion en ascendente
// slice() <-- bueno   y     splice() <-- malo
