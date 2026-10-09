// Enunciado: Ejercicio del uso del CRUD en un carrito
// Autor: Pablo SG
// Investigación: Fuentes consultadas

import type { Cart } from "../../types/cart";

/**
 * Funcion que añade un elemento al carrito  
 * @param cart: Array con el carrito
 * @param producID: Number El ID del producto a añadir 
 */
export function addToCart(cart: Cart, producID: number): Cart {
  //Comprobar si el id esta

  const exists = cart.some(p => p.productID === producID);
  if (exists) {
    return cart.map(p => {
      return p.productID === producID ? { ...p.quantify: p.quantify + 1 } : p;


    })
  }

  return [...cart, { productID: producID, quantify: 1 }]
}

export function removeFromCart() {



}

export function cartTotal() {



}


