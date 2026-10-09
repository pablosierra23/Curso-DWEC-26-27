//Tipo de dato carrito

//EJERCICIOS:
//
//1. Crear un tipo(cart.ts) llamado CartLine que tenga el id del producto y la cantidad a comprar, recuerda exportarlo

export interface CartLine {
  productID: number;
  quantify: number;
}

export type Cart = CartLine[]


//añadir elementos al carrito
//borrar elementos del carrito
//obtener el total del carrito

