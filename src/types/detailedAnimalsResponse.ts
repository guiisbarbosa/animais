type Food = {
  name: string;
  whereToGet: string;
  price: number;
};

export type DetailedAnimalResponse = {
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
  foods?: Food[];
};
