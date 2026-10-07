// Enunciado: Analizar el comportamiento y caso límite de every() cuando se evalúa sobre un array vacío.
// Autor: Pablo SG
// Investigación: Fuentes consultadas
//

import type { Product } from '../../../types/product';

export const allInStock = (list: Product[]): boolean => list.every((p) => p.stock > 0);


// Pregunta 1 · ¿Qué devuelve allInStock([])?
// Resultado: true

// Pregunta 2 · ¿Es una respuesta razonable para una tienda sin productos? ¿Por qué?
// Respuesta: No, porque no hay productos para vender.

// Pregunta 3 · ¿Cómo cambiarías la función para que una tienda vacía devuelva false?
// Respuesta (escribe el código en una línea): export const allInStock = (list: Product[]): boolean => list.length > 0 && list.every((p) => p.stock > 0);
