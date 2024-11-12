import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { FoodFormValues } from '../components/newFoodToAnimalForm/foodForm'
import { postNewFoodToAnimal } from './postNewFoodToAnimal'

export function useMutationWithId(id: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: FoodFormValues) => postNewFoodToAnimal(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['detailedAnimal', id],
      })
      alert('Dados enviados com sucesso!')
    },
    onError: () => {
      alert('Erro ao enviar os dados')
    },
  })
}
