export type AnimalData = {
  id: string;
  type: boolean;
  kind: string;
  animalSpecies?: string;
  age?: number;
  name?: string;
  sex?: string;
  owner?: string;
  author: string;
  habitat?: string;
  imgUrl?: string;
};

export type AnimalsResponse = {
  animals: AnimalData[];
  totalItems: number;
  totalPages: number;
};
