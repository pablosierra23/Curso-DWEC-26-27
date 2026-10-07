// Enunciado: Validar si una compra es posible comprobando existencia del producto, cantidad válida y stock suficiente mediante find y retorno temprano.
// Autor: Pablo SG
// Investigación: Fuentes consultadas
//

import type { Product } from '../../../types/product';

export function canBuy(list: Product[], id: number, quantity: number): boolean {

  const product = list.find((p) => p.id === id);

  if (product === undefined) {
    return false;
  }
  return quantity > 0 && product.stock >= quantity;

}
