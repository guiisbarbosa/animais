import gato from '../assets/gato.png'
import elefante from '../assets/elefante.png'

import * as S from '../styles/cardStyle'
import * as StRad from '../styles/radDialogCard'

import * as Dialog from '@radix-ui/react-dialog'

import { FaEye, FaWindowClose } from 'react-icons/fa'

import { DetailedAnimal } from './detailedAnimal'

type AnimalData = {
  id: string
  type: boolean
  kind: string
  animalSpecies?: string
  age?: number
  name?: string
  sex?: string
  owner?: string
  author: string
  habitat?: string
  imgUrl?: string
}

export function Card({
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
    <Dialog.Root>
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
        <Dialog.Trigger asChild>
          <button type="button">
            <FaEye />
          </button>
        </Dialog.Trigger>
      </S.Card>

      <Dialog.Portal>
        <StRad.DiagOverlay />
        <StRad.DiagContent>
          <StRad.DiagTitle>Detalhes do animal</StRad.DiagTitle>
          <Dialog.Description>
            <DetailedAnimal
              id={id}
            />
          </Dialog.Description>
          <div>
            <Dialog.Close asChild>
              <StRad.DiagBtnClose type="button">
                <FaWindowClose />
              </StRad.DiagBtnClose>
            </Dialog.Close>
          </div>
        </StRad.DiagContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
