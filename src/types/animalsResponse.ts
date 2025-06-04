export type AnimalsResponse = {
  animals: {
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
  }[];
  totalItems: number;
  totalPages: number;
};
