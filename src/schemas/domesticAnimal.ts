import { z } from 'zod'

export const domesticAnimalSchema = z.object({
  name: z.string().min(1, "Informe o nome do animal"),

  photo: z
    .instanceof(FileList)
    .optional()
    .refine((files) => !files || files.length > 0, {
      message: "Selecione uma foto",
    }),

  gender: z.string().min(4, "Informe o sexo do animal"),

  specie: z.string().min(1, "Informe a espécie do animal"),

  race: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string().min(3, "Informe a raça do animal").optional()
  ),

  age: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z
      .string()
      .refine((val) => !val || !isNaN(Number(val)), {
        message: "Informe a idade do animal",
      })
      .optional()
  ),

  owner: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string().min(3, "Informe o proprietário do animal").optional()
  ),

  author: z.preprocess(
    (val) => (val === "" ? undefined : val),
    z.string().min(3, "Informe o seu nome").optional()
  ),
});

export type DomesticAnimalFormValues = z.infer<typeof domesticAnimalSchema>