// Enunciado: Filtrar la lista de productos para devolver los objetos completos que pertenezcan a una categoría dada usando filter.
// Autor: Pablo SG
// Investigación: Fuentes consultadas
//

import type { Category, Product } from '../../../types/product';

export function byCategory(list: Product[], category: Category): Product[] {

  return list.filter((p) => p.category === category);

}

// Pregunta-¿Qué devuelve byCategory([], 'audio')?
// Resultado: []
// ¿Da error o devuelve algo con sentido? ¿Por qué?: Devuelve algo con sentido, porque al no haber elementos, devuelve un array vacio sin dar error
