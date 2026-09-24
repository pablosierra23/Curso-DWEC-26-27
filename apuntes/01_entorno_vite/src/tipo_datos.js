// Funcion que le pase como parametro un numero en grados celsius y lo 
// transforme a grados kelvin

//  V1 (casi nunca usaremos algo tan verboso)

function celsiusToKelvin(celsius){
  let kelvin = celsius + 273.15
  return kelvin
}


// V2 (version donde preorizamos el menor numero de lineas)

function celsiusToKelvin(celsius){
  return celsius + 273.15
}


//V3 (modo pro usando arrow function)

const celToKel = (celsius) => {
  return celsius + 273.15
} 


//V4 (modo dios pro max)

const cToK = ( c ) => c + 273.15

//EJ1-Funcion que le pase como parametro dos numeros y me los ordene

function ordNum (num1, num2){

  if(num1 <= num2){

    return[num1, num2]

  }else{

    return[num2, num1]

  }
}

//EJ2-Funcion que pase de celsius a kelvin pero comprobando que celsius es un numero, 
//que la temperatura no puede estar por debajo del 0 absoluto (-273  ºK)
//y el resultado me lo das con solo dos cifras decimales

//isNaN <--- is not a number
// ¿como truncamos un numero a 2 cifras decimales?

function celToKel(celsius){

  if(isNaN(celsius)){
    
    return "No es un numero valido"

  }

  if(celsius < 273.15) 

    return "La temperatura es menor a -273"

  }

  let kelvin = celsius + 273.15

  return Number(kelvin.toFixed(2))
}

//BLOQUE A

//EJ1:

const nota = 9
  if (nota >= 5) console.log('Aprobado')
  if (nota >= 9) console.log('Sobresaliente')
const etiqueta = nota >= 5 ? 'Superado' : 'Pendiente'
console.log(etiqueta)

//Con 9 va a salir sobresaliente, superado
//Con 7, aprobado, superado
//Con 4 va a salir Pendiente

//EJ2:




