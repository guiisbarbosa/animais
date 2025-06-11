import * as S from './style'

export default function DomesticAnimalAdd() {
  return (
    <S.FormContent>
          <h4>Preencha os campos abaixo</h4>
      <form>
        <S.InputContent>
          <S.Label htmlFor="animalName">Nome:*</S.Label>
          <S.InputField
            type="text"
            id="animalName"
            placeholder="Nome do animal"
          />
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="animalName">Foto:</S.Label>
          <input type="file" />
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="animalSex">Sexo:*</S.Label>
          <S.InputField type="text" id="animalSex" placeholder="Sexo" />
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="animalType">Espécie:*</S.Label>
          <S.InputField
            type="text"
            id="animalType"
            placeholder="Cachorro/Gato"
          />
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="animalEspecie">Raça:</S.Label>
          <S.InputField type="text" id="animalEspecie" placeholder="Raça" />
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="animalAge">Idade:</S.Label>
          <S.InputField type="text" id="animalAge" placeholder="Idade" />
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="animalOwner">Dono(a) do animal:</S.Label>
          <S.InputField type="text" id="animalOwner" placeholder="Dono(a)" />
        </S.InputContent>

        <S.InputContent>
          <S.Label htmlFor="Author">Autor da postagem:</S.Label>
          <S.InputField
            type="text"
            id="Author"
            placeholder="O seu nome"
          />
        </S.InputContent>

        <S.Message>
          <p>Itens marcados com * são obrigatórios!</p>
        </S.Message>

        <S.SubmitBtn type="submit">Adicionar</S.SubmitBtn>
      </form>
    </S.FormContent>
  )
}
