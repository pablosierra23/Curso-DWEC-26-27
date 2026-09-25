
//Crear una funcion que mientras sea verdad compruebe todos los numeros de un array pasado como parametro, 
//guarde los positivos en un array llamado positivos y los negativos en un array llamado negativos, 
//y que calcule la suma de cada uno de los arrays
//@autor: Pablo SG.

function clasificarNumeros(numeros:number){
  const negativos:number[] = []
  const positivos:number[] = []
  let sumaPositivos:number = 0
  let sumaNegativos:number = 0

  for(const numero of numeros){
    if(numero > 0){
      //añadimos el numero al array de positivos
      //con el metodo push
      positivos.push(numero)
      sumaPositivos += numero
    }else {
      negativos.push(numero)
      sumaNegativos += numero
    }
  }
  //antes de salir retornamos los valores pedidos
  return {
    positivos,
    negativos,
    sumaPositivos,
    sumaNegativos
  }

}

//----------- Inicio de la aplicacion ------------

const datos:number[] = [1,-10,25,11,9,5,-6,8,-5,9,12,-10]

const resultado = clasificarNumeros(datos)

console.log("El array de positivos es: ",resultado.positivos)
console.log("----------- Suma del array positivos: ", resultado.sumaPositivos)
console.log(`El array de negativos es: ${resultado.negativos}`)
console.log("----------- Suma del array de negativos: ", resultado.sumaNegativos)

