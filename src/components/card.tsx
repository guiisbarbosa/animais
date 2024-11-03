import gato from '../assets/gato.png'
import elefante from '../assets/elefante.png'

import * as S from '../styles/cardStyle'
import {
  StRadDiagOverlay,
  StRadDiagContent,
  DiagBtnClose,
  StRadDiagTitle,
} from '../styles/radDialogCard'

import * as Dialog from '@radix-ui/react-dialog'

import { FaEye, FaWindowClose } from 'react-icons/fa'

import { DetailedAnimal } from './detailedAnimal'

import type { AnimalData } from '../types/interfaces'

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
        <StRadDiagOverlay />
        <StRadDiagContent>
          <StRadDiagTitle>Detalhes do animal</StRadDiagTitle>
          <Dialog.Description>
            <DetailedAnimal
              id={id}
              type={type}
              kind={kind}
              animalSpecies={animalSpecies}
              age={age}
              name={name}
              sex={sex}
              owner={owner}
              author={author}
              habitat={habitat}
              imgUrl={imgUrl}
            />
          </Dialog.Description>
          <div>
            <Dialog.Close asChild>
              <DiagBtnClose type="button">
                <FaWindowClose />
              </DiagBtnClose>
            </Dialog.Close>
          </div>
        </StRadDiagContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
