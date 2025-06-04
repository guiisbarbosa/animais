import axios from 'axios'

interface FoodData {
  name: string
  whereToGet: string
  price: number
}

export const postNewFood = async (data: FoodData) => {
  const formattedData = {
    ...data,
    price: Number.parseFloat(data.price.toString().replace(',', '.')),
  }

  try {
    const response = await axios.post(
      'http://localhost:8081/animals/food',
      formattedData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    return response.data
  } catch (error) {
    console.error('Erro ao enviar os dados:', error)
    alert('Algo deu errado')
    throw error
  }
}
