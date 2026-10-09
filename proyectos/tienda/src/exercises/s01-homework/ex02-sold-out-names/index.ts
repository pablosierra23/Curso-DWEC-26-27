// Enunciado: Obtener los nombres de los productos sin stock (stock === 0) encadenando filter y map.
// Autor: Pablo SG
// Investigación: Fuentes consultadas
//

import type { Product } from '../../../types/product';

export function soldOutNames(list: Product[]): string[] {

  return list
    .filter((p) => p.stock === 0)
    .map((p) => p.name)

}
