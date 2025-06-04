import { useQuery } from "@tanstack/react-query";
import { getAllAnimals } from "../services/getAllAnimals";
import { AnimalsResponse } from "../types/animalsResponse";

export function useAnimals(currentPage: number) {
  return useQuery<AnimalsResponse>({
    queryKey: ["allAnimals", currentPage],
    queryFn: () => getAllAnimals(currentPage),
  });
}
