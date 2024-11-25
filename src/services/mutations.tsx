import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { FoodFormValues } from '../components/foodForm/foodForm'
import { postNewFoodToAnimal } from './postNewFoodToAnimal'
import { postExistedFoodToAnimal } from './postExistedFoodToAnimal'

export function mutationAddNewFood(id: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: FoodFormValues) => postNewFoodToAnimal(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['detailedAnimal', id],
      })
      alert('Comida adicionada com sucesso!')
    },
    onError: () => {
      alert('Erro ao enviar os dados')
    },
  })
}


export function mutationAddExistedFood(animalId : string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (foodId: string) => postExistedFoodToAnimal(animalId, foodId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['detailedAnimal', animalId],
      })
      alert('Comida adicionada com sucesso!')
    },
    onError: () => {
      alert('Erro ao enviar os dados')
    },
  })
}