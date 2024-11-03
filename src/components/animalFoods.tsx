type AnimalFood = {
  name: string
  whereToGet: string
  price: string
}

export function AnimalFoods({ name, whereToGet, price }: AnimalFood) {
  return (
    <>
      <p>Comida: {name}</p>
      <p>Onde comprar: {whereToGet}</p>
      <p>Valor: {price}</p>
    </>
  )
}
