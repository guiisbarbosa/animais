type AnimalsResponse = {
  id: string,
  type: boolean,
  kind: string,
  animalSpecies?: string,
  age?: number,
  name?: string,
  sex?: string,
  owner?: string,
  author: string,
  habitat?: string,
  imgUrl?: string,
}

export async function getAllAnimals(page: number): Promise<AnimalsResponse[]> {
  try {
      const response = await fetch(`http://localhost:8081/animals/animal/filter?page=${page}&size=8`);
      if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Erro:", error);
      throw error;
  }
}
