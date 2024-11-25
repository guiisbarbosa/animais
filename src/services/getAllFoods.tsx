import axios from 'axios'

interface FoodsResponse {
  foods: {
    id: string
    name: string
    whereToGet: string
    price: number
  }[]
}

export async function getAllFoods(): Promise<FoodsResponse> {
  try {
    const response = await axios.get<FoodsResponse>(
      'http://localhost:8081/animals/food'
    )
    return response.data
  } catch (error) {
    console.error('Erro:', error)
    throw new Error('Erro ao buscar os dados')
  }
}
