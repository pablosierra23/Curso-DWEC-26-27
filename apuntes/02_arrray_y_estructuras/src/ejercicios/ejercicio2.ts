// Enunciado: Ejercicio repaso de metodo de los array
// Autor: Pablo SG
// Investigación: Fuentes consultadas
//

//-------------------- Declaracion de variables ----------------------

const notas: number[] = [6, 8, 4, 9, 7]

//-------------------- Declaracion de funciones ----------------------


//Funcion que muestre todas las notas

function mostrarNotas(notas: number[]): void {

  //console.log(notas) <--una forma

  for (const nota of notas) {
    console.log(" ", nota)
  }

  //notas.forEach((nota: number) => console.log(" ", nota))

  //console.log([...notas])

}

//Funcion que muestre la media de las notas

function calcularMedia(notas: number[]): void {

  let suma = 0;

  for (const nota of notas) {
    suma += nota;
  }

  console.log("La media es: ", suma / notas.length)
}

//Funcion que muestra la mayor nota y la posicion de esa nota



//Funcion que calcule la mediana de las notas



//Funcion que devuelva un array con notas junto con la nota pasada como parametro



//Funcion que elimina una nota, recibe el array de notas y como segundo parametro 1 o -1, si es 1, elimina la primera posicion del array y devuelve una copia, si es -1 elimina la ultima posicion del array delvuelve una copia. No mutamos el array del parametro ojo y me lo demuestras haciendo un clg de array del parametro para asegurar que no lo has mutado.

function deleteGrade(notas: number[], t: (1 | -1)): void {

  const copyNotas = [...notas];
  if (t === 1) {
    copyNotes.shift()
    console.log("CopyNotes: ", copyNotes)
  } else if (t === -1) {
    copyNotes.pop()
  }
  console.log("CopyNotes: ", copyNotes)


  console.log(notas)
}


//-------------------- Funcion de ejecucion ----------------------


export function ejercicio2(): void {

  mostrarNotas(notas);
  calcularMedia(notas);
  deleteGrade(notas);

}


