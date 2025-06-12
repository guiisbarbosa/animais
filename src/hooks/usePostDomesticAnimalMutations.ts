import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postNewDomesticAnimal } from "../services/postNewDomesticAnimal";
import { DomesticAnimalFormValues } from "../schemas/domesticAnimal";

export function usePostDomesticAnimalMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: DomesticAnimalFormValues) => postNewDomesticAnimal(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allAnimals"] });
      alert("Animal adicionado com sucesso");
    },
  });
}
