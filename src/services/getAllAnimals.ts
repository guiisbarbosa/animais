import axios from "axios";
import { AnimalsResponse } from "../types/animalsResponse";

export async function getAllAnimals(page: number): Promise<AnimalsResponse> {
  try {
    const response = await axios.get<AnimalsResponse>(
      `http://localhost:8081/animals/animal/filter?page=${page}&size=8`
    );
    return response.data;
  } catch (error) {
    console.error("Erro:", error);
    throw new Error("Erro ao buscar os dados");
  }
}
