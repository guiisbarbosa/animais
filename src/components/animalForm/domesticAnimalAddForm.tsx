import * as S from "./style";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  domesticAnimalSchema,
  DomesticAnimalFormValues,
} from "../../schemas/domesticAnimal";
import { usePostDomesticAnimalMutation } from "../../hooks/usePostDomesticAnimalMutations";

export default function DomesticAnimalAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DomesticAnimalFormValues>({
    resolver: zodResolver(domesticAnimalSchema),
  });

  const { mutate } = usePostDomesticAnimalMutation()

  const onSubmit = async (data: DomesticAnimalFormValues) => {
    console.log("Dados recebidos no submit:", data); // 🔍 VERIFICAÇÃO 1
    mutate(data);
  };

  return (
    <S.FormContent>
      <h4>Preencha os campos abaixo</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.InputContent>
          <S.Label htmlFor="animalName">Nome:*</S.Label>
          <S.InputField
            type="text"
            {...register("name")}
            placeholder="Nome do animal"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="animalName">Foto:</S.Label>
          <input type="file" {...register("photo")} />
          {errors.photo && <p>{errors.photo.message}</p>}
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="animalSex">Sexo:*</S.Label>
          <S.InputField
            type="text"
            {...register("gender")}
            placeholder="Sexo"
          />
          {errors.gender && <p>{errors.gender.message}</p>}
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="animalType">Espécie:*</S.Label>
          <S.InputField
            type="text"
            {...register("specie")}
            placeholder="Cachorro/Gato"
          />
          {errors.specie && <p>{errors.specie.message}</p>}
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="animalEspecie">Raça:</S.Label>
          <S.InputField type="text" {...register("race")} placeholder="Raça" />
          {errors.race && <p>{errors.race.message}</p>}
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="animalAge">Idade:</S.Label>
          <S.InputField
            type="text"
            {...register("age")}
            id="animalAge"
            placeholder="Idade"
          />
          {errors.age && <p>{errors.age.message}</p>}
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="animalOwner">Dono(a) do animal:</S.Label>
          <S.InputField
            type="text"
            {...register("owner")}
            id="animalOwner"
            placeholder="Dono(a)"
          />
          {errors.owner && <p>{errors.owner.message}</p>}
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="Author">Autor da postagem:</S.Label>
          <S.InputField
            type="text"
            {...register("author")}
            id="Author"
            placeholder="O seu nome"
          />
          {errors.author && <p>{errors.author.message}</p>}
        </S.InputContent>

        <S.Message>
          <p>Itens marcados com * são obrigatórios!</p>
        </S.Message>

        <S.SubmitBtn type="submit">Adicionar</S.SubmitBtn>
      </form>
    </S.FormContent>
  );
}
