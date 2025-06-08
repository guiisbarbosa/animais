import * as S from "./styles";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef } from "react";

import { foodSchema } from "../../schemas/foodSchema";
import { FoodFormValues } from "../../schemas/foodSchema";

type FoodFormProps = {
  onSubmit: (data: FoodFormValues) => void;
};

export const FoodForm = forwardRef<HTMLFormElement, FoodFormProps>(
  ({ onSubmit }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<FoodFormValues>({
      resolver: zodResolver(foodSchema),
    });

    const handleFormSubmit = (data: FoodFormValues) => {
      onSubmit(data);
      reset();
    };

    return (
      <form ref={ref} onSubmit={handleSubmit(handleFormSubmit)}>
        <S.InputContent>
          <S.Label htmlFor="name">*Comida:</S.Label>
          <S.InputField
            type="text"
            {...register("name")}
            id="name"
            placeholder="Ração"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="whereToGet">*Onde comprar:</S.Label>
          <S.InputField
            type="text"
            {...register("whereToGet")}
            id="whereToGet"
            placeholder="PetShop"
          />
          {errors.whereToGet && <p>{errors.whereToGet.message}</p>}
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="price">*Preço:</S.Label>
          <S.InputField
            type="text"
            {...register("price")}
            id="price"
            placeholder="25,00"
          />
          {errors.price && <p>{errors.price.message}</p>}
        </S.InputContent>
        <S.Message>
          <p>Itens marcados com * são obrigatórios!</p>
        </S.Message>

        <S.SubmitBtn type="submit">Adicionar Comida</S.SubmitBtn>
      </form>
    );
  }
);
