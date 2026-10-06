import type { Product } from "../../../types/product";

const VAT = 0.21;

/** 
* Recibe una lista de productos y promete devolver una lista de numeros con el precio incluyendo el IVA
* */
export function priceWithVat(myProducts: Product[]): number[] {

  return myProducts.map(product => Math.round(product.price * (1 + VAT)))

}
