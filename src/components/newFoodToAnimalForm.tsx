import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postNewFoodToAnimal } from '../services/postNewFoodToAnimal'

// Esquema de validação com zod
const foodSchema = z.object({
  name: z.string().min(1, 'Informe qual a comida'),
  whereToGet: z.string().min(1, 'Informe onde comprar'),
  price: z
    .string()
    .min(1, 'Preço é obrigatório')
    .refine(value => !Number.isNaN(Number(value.replace(',', '.'))), {
      message: 'Preço deve ser um número válido',
    })
    .transform(value => Number.parseFloat(value.replace(',', '.'))),
})

type FoodFormValues = z.infer<typeof foodSchema>


export function NewFoodToAnimalForm({ id }: { id: string }) {
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FoodFormValues>({
    resolver: zodResolver(foodSchema),
  })

  const mutation = useMutation({
    mutationFn: (data: FoodFormValues) => postNewFoodToAnimal(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['detailedAnimal', id],
      })
      reset()
      alert('Dados enviados com sucesso!')
    },
    onError: () => {
      alert('Erro ao enviar os dados')
    },
  })

  const onSubmit = (data: FoodFormValues) => {
    mutation.mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" {...register('name')} id="name" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="whereToGet">Local de Compra:</label>
        <input type="text" {...register('whereToGet')} id="whereToGet" />
        {errors.whereToGet && <p>{errors.whereToGet.message}</p>}
      </div>

      <div>
        <label htmlFor="price">Preço:</label>
        <input type="text" {...register('price')} id="price" />
        {errors.price && <p>{errors.price.message}</p>}
      </div>

      <button type="submit">Adicionar Comida</button>
    </form>
  )
}
