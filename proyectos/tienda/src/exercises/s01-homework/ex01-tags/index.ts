// Enunciado: Convertir la lista de productos en un array de etiquetas de texto con formato "#<id> <name> - <price> €" usando map.
// Autor: Pablo SG
// Investigación: Fuentes consultadas
//

import type { Product } from '../../../types/product';

export function tags(list: Product[]): string[] {

  return list.map((p) => '#' + p.id + ' ' + p.name + ' - ' + p.price + ' €')

}

