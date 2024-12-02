import { useState } from 'react'

import * as StRad from '../../styles/radSelectStyle'
import * as Select from '@radix-ui/react-select'

import { FaChevronDown } from 'react-icons/fa'
import { getAllFoods } from '../../services/getAllFoods'
import { useQuery } from '@tanstack/react-query'
import { Loader } from '../loader/loader'
import { mutationAddExistedFood } from '../../services/mutations'

export function RadixSelect({animalId}: {animalId: string}) {
  const [selectedFood, setSelectedFood] = useState<string>('')

  const addExistedFood = mutationAddExistedFood(animalId)

  const {
    data: detailedFood,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['detailedFood'],
    queryFn: () => getAllFoods(),
  })

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <p>Erro ao buscar dados: {error.message}</p>
  }

  console.log(selectedFood)

  return (
    <StRad.SelectDiv>
      <Select.Root value={selectedFood} onValueChange={setSelectedFood}>
        <StRad.SelectTrigger>
          <Select.Value placeholder="Selecione uma comida" />
          <StRad.SelectIcon>
            <FaChevronDown />
          </StRad.SelectIcon>
        </StRad.SelectTrigger>

        <StRad.SelectContent position="popper" sideOffset={3}>
          <StRad.SelectViewport>
            {detailedFood?.foods.map(food => (
              <StRad.SelectItem key={food.id} value={food.id}>
                <Select.ItemText>
                  {food.name} - {food.price.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}
                </Select.ItemText>
              </StRad.SelectItem>
            ))}
          </StRad.SelectViewport>
        </StRad.SelectContent>
      </Select.Root>
      <button className='btnSend' type="submit" disabled={!selectedFood} onClick={() => addExistedFood.mutate(selectedFood)}>Adicionar comida</button>
    </StRad.SelectDiv>

  )
}
