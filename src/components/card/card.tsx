import gato from '../../assets/gato.png'
import elefante from '../../assets/elefante.png'

import * as S from './style'

import { FaEye } from 'react-icons/fa'
import { RadixDialog } from '../ui/radDialog'
import { DetailedAnimal } from '../detailedAnimal/detailedAnimal'
import { AnimalData } from '../../types/animalsResponse'

export function Card({
  id,
  type,
  kind,
  age,
  name,
  owner,
  habitat,
  imgUrl,
}: AnimalData) {
  const selvagem = type

  return (
    <S.Card>
      <div className="cardImg">
        <img
          src={imgUrl ? imgUrl : selvagem ? elefante : gato}
          alt="imagem do animal"
        />
      </div>
      <div className="cardInfo">
        <h2>{selvagem ? kind : name}</h2>
        {selvagem ? (
          <p>Habitat: {habitat}</p>
        ) : (
          <>
            <p>Dono(a): {owner}</p>
            <p>Idade: {age}</p>
          </>
        )}
      </div>
      <RadixDialog
        title="Detalhes do animal"
        triggerButton={
          <button type="button">{<FaEye />}</button>
        }
      >
        <DetailedAnimal id={id} />
      </RadixDialog>
    </S.Card>
  )
}
