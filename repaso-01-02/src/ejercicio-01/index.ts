//1. Lecturas del termómetro


const lecturas = ['21.5', '19', '', '23.5', 'error', '20']

function analizarLecturas(lecturas: string[]): {
  let validas = 0
  let descartadas = 0
  let media = 0

  for (const lectura of lecturas) {
    
  const texto = lectura.trim()
  const valor = Number(texto)

    if(texto === '' || !Number.isFinite(valor)) {

      descartadas++
    }else {
      validas++
      media += valor
      console.log(`Lectura ${valor}: ${valor >= 22 ? 'Caluroso' : 'Fresco'}`)
    }
  }

  let media = 'Sin datos'

  if (validas > 0) {
    media = (media / validas).toFixed(1)
  }

  return {validas, descartadas, media}

}

export function ejercicio01(): void {
  console.log(analizarLecturas(lecturas))
}
