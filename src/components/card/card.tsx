import gato from '../../assets/gato.png'
import elefante from '../../assets/elefante.png'

import * as S from './style'
import * as StRad from '../../styles/radDialogCard'

import * as Dialog from '@radix-ui/react-dialog'

import { FaEye, FaWindowClose } from 'react-icons/fa'

import { DetailedAnimal } from '../detailedAnimal/detailedAnimal'

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
  age,
  name,
  owner,
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
        <Dialog.Content asChild >
          <StRad.DiagContent>
            <StRad.DiagTitle>Detalhes do animal</StRad.DiagTitle>
            <Dialog.Description asChild aria-describedby="dialog-description">
              <div>
                <DetailedAnimal id={id} />
              </div>
            </Dialog.Description>
            <div>
              <Dialog.Close asChild>
                <StRad.DiagBtnClose type="button">
                  <FaWindowClose />
                </StRad.DiagBtnClose>
              </Dialog.Close>
            </div>
          </StRad.DiagContent>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
