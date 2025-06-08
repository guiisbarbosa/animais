import z from "zod";

export const foodSchema = z.object({
  name: z.string().min(1, "*Informe qual a comida"),
  whereToGet: z.string().min(1, "*Informe onde comprar"),
  price: z
    .string()
    .min(1, "*Preço é obrigatório")
    .refine((value) => !Number.isNaN(Number(value.replace(",", "."))), {
      message: "*Preço deve ser um número válido",
    })
    .transform((value) => Number.parseFloat(value.replace(",", "."))),
});

export type FoodFormValues = z.infer<typeof foodSchema>;
