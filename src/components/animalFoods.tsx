import * as S from '../styles/animalFoodStyle'

type AnimalFood = {
  name: string
  whereToGet: string
  price: string
}

export function AnimalFoods({ name, whereToGet, price }: AnimalFood) {
  return (
    <S.FoodContent>
      <p>Comida: {name}</p>
      <p>Onde comprar: {whereToGet}</p>
      <p>Valor: {price}</p>
    </S.FoodContent>
  )
}
