import { products } from "../../data/products";

products.map(p => p.category) // <-- aqui me mostrara las categorias pero seguramente habra categorias repetidas 

// solucion : usar un Set para tener valores unicos
//
// no usa posiciones

// como se declara:    new Set<tipo>();
const tags = new Set<string>();

// como se añade
tags.add('Ciencia ficcion');
tags.add('Terror');

// como se ve el tamaño del set
tags.size; // <-- 2

// como se si un elemento esta dentro del set
tags.has('Terror') // <-- true muy rapido

// como se borra
tags.delete('Terrorrrrrrr') // <-- false porque no existe y por tanto no se borra


const categoriasNoRepetidas = new Set<string>(...products.map(p => p.category))



// Crear una funcion que le pase como parametro un array de numeros y devuelva true/false si hay repetidos o no

export function hasDuplicates(ids: number[]): boolean {
  new set(ids).size !== ids.legth
}

hasDuplicates([3, 4, 2, 1, 3, 4, 5]); // <-- true porque hay repetidas


// Ejemplifiquemos con un Set una lista de peliculas ya vistas
// Crear una funcion que llamemos firstView que reciba un array de ids de peliculas ya vistas y que devuelva un number o undefined con la primera pelicula repetida o que has visto mas de una vez
//

export const function firstView(ids: number[]): number | undefined {

  const see = new Set<number>()

  for (const id of ids) {
    //if(see.has(id)) return ids
    //  see.add(id)

    see.has(id) ? ids : see.add(id)
  }
  return undefined;
}




firstView([4, 3, 2, 6, 2, 7]) // <-- 2



