import axios from "axios";

export const postExistedFoodToAnimal = async (animalId: string, foodId: string) => {
  try {
    const response = await axios.post(
      `http://localhost:8081/animals/food/addFoodToAnimal/${animalId}/${foodId}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar os dados:", error);
    alert("Algo deu errado");
    throw error;
  }
};