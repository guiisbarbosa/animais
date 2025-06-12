import axios from "axios";
import { DomesticAnimalFormValues } from "../schemas/domesticAnimal";

export const postNewDomesticAnimal = async (data: DomesticAnimalFormValues) => {
  const formData = new FormData();

  formData.append("type", String(false));
  formData.append("name", data.name);

  if (data.photo && data.photo.length > 0) {
    formData.append("photo", data.photo[0]); // arquivo
  }

  formData.append("sex", data.gender);
  formData.append("kind", data.specie);
  if (data.race) {
    formData.append("animalSpecies", data.race);
  }

  if (data.age !== undefined) {
    formData.append("age", data.age);
  }

  if (data.owner) {
    formData.append("owner", data.owner);
  }

  if (data.author) {
    formData.append("author", data.author);
  }

  try {
    const response = await axios.post(
      "http://localhost:8081/animals/animal",
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar os dados:", error);
    alert("Algo deu errado");
    throw error;
  }
};
