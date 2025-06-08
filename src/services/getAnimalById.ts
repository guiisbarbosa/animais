import axios from 'axios'
import { DetailedAnimalResponse } from '../types/detailedAnimalsResponse'

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