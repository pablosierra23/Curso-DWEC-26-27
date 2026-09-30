//Ejercicio uso de filter map y otros en TypeScript

//Crear un programa que muestre el nombre de todos los alumnos
//Calcule la nota media de cada alumno
//Mostrar alumno con nota media mas alta
//Calcular la media global de la clase

//Para declarar tipos de objetos en TypeScript uso type y el objeto comienza siempre en mayuscula

//-------- Declaracion de tipos ---------


type Alumno = {
  nombre: string;
  edad: number;
  notas: number[];

}

//-------- Declaracion de variables ---------

const alumnado : Alumno[] = [

  {nombre: "Luis", edad: 22, notas: [5,4,6,3]},
  {nombre: "Pedro", edad: 24, notas: [8,1,3,10]},
  {nombre: "Ana", edad: 21, notas: [8,7,4,9]},
  {nombre: "Jose", edad: 23, notas: [2,6,5,10]},
  {nombre: "Marta", edad: 20, notas: [4,3,2,4]},
  {nombre: "Maria", edad: 19, notas: [4,9,5,8]}

]


//Obten los nombres (solo los nombres) de todos los alumnos

function obtenerNombres(alumnos : Alumno[]) {

  return alumnos.map( (alumno) => alumno.nombre )

}

const obtenerNombresV2 = (alumnos: Alumno[]) => alumnos.map( (alumno) => alumno.nombre ) 

//-------- Inicializar ejercicio ---------

console.log("El nombre de los alumnos es: ")
console.log(obtenerNombres(alumnado))
