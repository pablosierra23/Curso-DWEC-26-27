// Enunciado: Ejercicio uso de arrays y tipado
// Autor: Pablo SG
// Investigación: Fuentes consultadas
//

//Como tipabamos un array
const activos: boolean[] = [true, false, true, true];
const nombres: string[] = ["pepe", "Luis", "carlos"];

//Nueva forma
const edades: Array<number = [12, 22, 18]
const precios = [65, 34, 23]
console.log(typeof precios);

//Arrays con mas de un tipo
const valores: (string | number)[] = ["Ana", 25, "Luis", 56];

//Comodo pero para empezar mejor no
const persona: [string, number] = ["Ana", 45];

//Leer elementos de un array
console.log(nombres[0]);   // <---"pepe"
nombres[0] = "Don Pepe";

//Insertar y eliminar al comienzo y en el ultimo lugar del array
//el metodo push muta el array (modifica el contenido del mismo, algo prohibido en React)
nombres.push("Sara");

//Eliminamos el ultimo elemento de un array
console.log(nombres.pop());  // <----- ademas este devuelve el nuevo array modificado

//Añadir al comienzo del array
nombres.unshift("Pedro");

//Eliminar del comienzo del array
nombres.shift();



//Metodos que mutan y no mutan
//
//push(), pop(), shift(), unshift(), splice(), sort(), reverse()   <------ MUTAN el array

//Metodo slice() <---- devuelve una parte del array sin mutar el array *****

const numeros: number[] = [10, 20, 30, 40, 50];
const parte: Array<number> = numeros.slice(1, 4);   // [20,30,40] <---- coge la primera posicion(1) pero no coge la ultima posicion(4) 

//Metodo splice() <---- eliminar, añadir o sustituir elementos del array

numeros.splice(1, 2); <----[10, 40, 50]

//Copiar arrays Spread Operator *******************************************************************************

const num: number[] = [1, 2, 3];
const copia: number[] = [...num]  // <------- tiene una copia con [1,2,3]
const copia2 = [...num, ...copia];

//Recorrer un array
//for(let i=0; i<num.length; i++)

//for of cuando solo queremos el valor

for (const precio of precios) {
  console.log(precio)
}

//forEach() se usa mucho en React
//Se usara el forEach() cada vez que queramos hacer algo con cada uno de los elementos de un array.
//Se parece al map, pero el map es mas potente en mucho casos

precios.forEach((precio: number, indice: number) => {
  console.log(´Precio al cuadrado: ${ precio** 2} - Posicion: ${ indice }´)

} )

//Metodos que usan funciones CallBack
//
//forEach(), map(), filter(), find() <---- ***** muy importantes para react
//un callback es una funcion por tanto esos metodos reciben como parametro una funcion







