import { z } from 'zod'

export const domesticAnimalSchema = z.object({
  name: z.string().min(1, "Informe o nome do animal"),
  photo: z.instanceof(FileList).refine((files) => files.length > 0, { message: "Selecione uma foto" }).optional(),
  gender: z.string().min(4, "Informe o sexo do animal"),
  specie: z.string().min(1, "Informe a especie do animal"),
  race: z.string().min(3, "Informe a raca do animal").optional(),
  age: z.string().refine((val) => !isNaN(Number(val)), { message: "Informe a idade do animal"} ).optional(),
  owner: z.string().min(1, "Informe o proprietario do animal").optional(),
  author: z.string().min(1, "Informe o seu nome").optional()
})

export type DomesticAnimalFormValues = z.infer<typeof domesticAnimalSchema>