import axios from 'axios'

type Food = {
  name: string
  whereToGet: string
  price: number
}

export type DetailedAnimalResponse = {
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
  foods?: Food[]
}

export async function getAnimalById(id: string): Promise<DetailedAnimalResponse> {
  try {
    const response = await axios.get<DetailedAnimalResponse>(
      `http://localhost:8081/animals/animal/${id}`
    )
    return response.data
  } catch (error) {
    console.error('Erro:', error)
    throw new Error('Erro ao buscar os dados')
  }
}