type Food = {
  name: string
  whereToGet: string
  price: number
}

type DetailedAnimalResponse = {
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
    const response = await fetch(
      `http://localhost:8081/animals/animal/${id}`
    )
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erro:', error)
    throw error
  }
}
