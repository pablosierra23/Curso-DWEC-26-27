// Enunciado: Buscar un producto por id usando find y devolver su precio, o null si no existe.
// Autor: Pablo SG
// Investigación: Fuentes consultadas
//

import type { Product } from '../../../types/product';

export function priceOf(list: Product[], id: number): number | null {

  const product = list.find((p) => p.id === id);

  if (product === undefined) {
    return null;
  }
  return product.price;

}

// Pregunta · ¿Por qué no es buena idea devolver 0 cuando el producto no existe?
// Respuesta: Porque 0 es un precio valido
