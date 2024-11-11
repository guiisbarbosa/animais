import axios from 'axios'

type AnimalsResponse = {
  animals: {
    id: string
    type: boolean
    kind: string
    animalSpecies?: string
    age?: number
    name?: string
    sex?: string
    owner?: string
    author: string
    habitat?: string
    imgUrl?: string
  }[]
  totalItems: number
  totalPages: number
}

export async function getAllAnimals(page: number): Promise<AnimalsResponse> {
  try {
    const response = await axios.get<AnimalsResponse>(
      `http://localhost:8081/animals/animal/filter?page=${page}&size=8`
    )
    return response.data
  } catch (error) {
    console.error('Erro:', error)
    throw new Error('Erro ao buscar os dados')
  }
}