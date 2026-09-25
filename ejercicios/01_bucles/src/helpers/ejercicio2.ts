//Crear una funcion que se le pase como parametro un texto y lo encripte.
//Aniadir una funcion inversa que una funcion inversa la desencripte.
//Nota: Buscar alguna libreria que permita generar cadenas encriptadas de forma segura
//@autor: Pablo SG.
//Investigacion: dos funciones que te dejen encriptar, y cual de las dos usarias
//Dos funciones encriptar desencriptar
//3 textos minimos

import CryptoJS from "crypto-js"
const clave:string = "Que guay soy y que buen profe tengo"

/*
 * Recibe: string
 * Devuelve: texto_cifrado
 */



function encriptar(texto:string):string {
  textoEncriptado: string = CryptoJS.AES.encrypt(texto,clave).toString()
  return textoEncriptado
}

function desencriptar(texto:string):string {
  const textoCasiDesencriptado : string = CryptoJS.AES.decrypt(texto,clave)
  const textoOriginal : string = textoCasiDesencriptado.toString(CryptoJS.enc.Utf8)
  return textoOriginal
}


function ejecutarEjercicio2(): void {
  const mensaje: string = "Hola mundo"
  //encriptemos:
  const mensajeEncriptado: string = encriptar(mensaje)
  console.log("Mensaje encriptado: ",mensajeEncriptado)
  console.log(`El mensaje ${mensaje} encriptado se convierte en ${mensajeEncriptado}, 
              y al desencriptar se convierte en ${desencriptar(mensajeEncriptado)}`)
}
