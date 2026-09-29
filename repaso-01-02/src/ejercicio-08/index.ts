//8. Media de notas válidas


const entradas = ['7', '4.5', '9', '3', '5.5', 'hola']

function mediaNotas(entradas: string[]): {
  validas: number
  media: string | null
}{
  let validas = 0
  let media= 0

  for (const entrada of entradas) {
    const texto = entrada.trim()
    const nota = Number(texto)

    if(texto !== '' && Number.isFinite(nota) && nota >= 0 && nota <= 10){
      validas++
      suma += nota
    }
  }

  const media = validas > 0 ? (suma / validas).toFixed(1) : null

  return {validas, media}
  
}

export function ejercicios08(): void{
  console.log(mediaNotas(entradas))
}
