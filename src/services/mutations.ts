import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FoodFormValues } from "../schemas/foodSchema";
import { postNewFoodToAnimal } from './postNewFoodToAnimal'
import { postExistedFoodToAnimal } from './postExistedFoodToAnimal'
import { postNewFood } from './postNewFood'

export function mutationAddNewFoodToAnimal(id: string) {
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

export function mutationAddNewFood() {

  return useMutation({
    mutationFn: (data: FoodFormValues) => postNewFood(data),
    onSuccess: () => {
      alert('Comida adicionada com sucesso!')
    },
    onError: () => {
      alert('Erro ao enviar os dados')
    },
  })
}