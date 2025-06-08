import { useQuery } from "@tanstack/react-query";
import { getAnimalById } from "../services/getAnimalById";
import { DetailedAnimalResponse } from "../types/detailedAnimalsResponse";

export function useDetailedAnimal(id : string ) {
 return useQuery<DetailedAnimalResponse>({
   queryKey: ["detailedAnimal", id],
   queryFn: () => getAnimalById(id),
 });
}