//Crear una funcion que permita añadir productos a mi Data
//Restricciones: 
//
//------------ IMPORTACIONES --------------

import { products } from "../../data/products";
import type { Product } from "../../types/product";

//------------ DECLARACION DE VARIABLES Y FUNCIONES --------------

//const copy = [...products]
const original = { name: 'teclado', price: 80 }
const other = original; // <-- asi no debo de crear una copia porque la copia puede mutar el objeto
other.price = 0;
console.log(original.price);

//ORIGINAL ------
//               | ------ {name: 'teclado', price:0}
//OTHER ---------

export type NewProduct = Omit<Product, 'id'>; // <-- este es un utility type (tipo de utilidad)
//Crea un nuevo tipo igual que product pero sin id


//Crea una funcion que me actualize el precio de los productos, le paso id, y el nuevo precio

function updatePrice(list: Product[], id: number, price: number): Product[] {

  return list.map((product) => {

    return product.id === id ? { ...product, price: price } : product  // <-- MODO DIOS

  })

}


//Actualizaciones parciales

export type ProductChanges = Partial<Omit<Product, 'id'>>;
//Se lee de dentro hacia fuera --> Quita el id de Product, y lo que queda hazlo opcional con esto me aseguro que no voy a cambiar nunca el iid


function updateProduct(list: Product[], id: number, changes: ProductChanges): Product[] {

  return list
    .map(p => {
      return p.id === id ? { ...p, ...changes } : p;

    })

}

// updateProduct(products, 1, {stock:10, name: 'Teclado Gaming'})

// CRUD <-- C create, R read, U update, D delete

function deleteProduct(list: Product[], id: number): Product[] {

  return list.filter(p => p.id !== id)

}


//EJERCICIOS:
//
//1. Crear un tipo(cart.ts) llamado CartLine que tenga el id del producto y la cantidad a comprar, recuerda exportarlo



//añadir elementos al carrito



//borrar elementos del carrito



//obtener el total del carrito





//------------ INICIO DE LA APLICACION --------------

