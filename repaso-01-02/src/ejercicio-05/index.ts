//5. Precio con descuento


function precioFinal(precio: number, descuento: number): number | null{
  
  if(!Number.isFinite(precio) || !Number.isFinite(descuento)){
    return null

  }

  if(precio < 0 || descuento < 0 || descuento > 100){
    return null
  }

  return precio - (precio * descuento) / 100

}

const casos: Array<[number, number]> = [
  [80, 25],
  [0, 20],
  [80, 100],
  [-1, 10],
  [80, 120],
  [NaN, 10],
  [50, 0]
]

//no se hacer un export con ternario
