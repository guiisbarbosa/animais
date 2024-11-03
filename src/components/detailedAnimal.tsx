import gato from '../assets/gato.png'
import elefante from '../assets/elefante.png'

import * as S from '../styles/detailedAnimalStyle'

import type { AnimalData } from '../types/interfaces'

export function DetailedAnimal({
  id,
  type,
  kind,
  animalSpecies,
  age,
  name,
  sex,
  owner,
  author,
  habitat,
  imgUrl,
}: AnimalData) {
  
  const selvagem = type

  return (
    <S.DetailContent>
      <S.AnimalImg>
        <img
          src={imgUrl ? imgUrl : selvagem ? elefante : gato}
          alt="Foto do animal"
        />
      </S.AnimalImg>
      <S.AnimalData>
        <ul>
          <li>Nome: {name ? name : 'Não especificado'}</li>
          <li>Tipo: {type ? 'Selvagem' : 'Doméstico'}</li>
          <li>Animal: {kind ? kind : 'Não especificado'}</li>
          <li>Espécie/Raça: {animalSpecies ? animalSpecies : 'Não especificado'}</li>
          <li>Idade: {age ? age : 'Não especificado'}</li>
          <li>Dono(a): {owner ? owner : 'Não especificado'}</li>
          <li>Habitat: {habitat ? habitat : 'Não especificado'}</li>
          <li>Autor: {author ? author : 'Não especificado'}</li>
        </ul>
      </S.AnimalData>
    </S.DetailContent>
  )
}
