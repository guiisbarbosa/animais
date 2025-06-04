import axios from "axios";

export const postExistedFoodToAnimal = async (animalId: string, foodId: string) => {
  try {
    const response = await axios.post(
      `http://localhost:8081/animals/food/addFoodToAnimal/${animalId}/${foodId}`
    );
    return response.data;
  } catch (error) {
    if(axios.isAxiosError(error)){
      if(error.response?.status === 500){
        alert("Alimento já existe para esse animal")
      } else{
        alert("Algo deu errado");
      }
    }
    
    throw error;
  }
};