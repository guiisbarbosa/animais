import gato from '../assets/gato.png'
import elefante from '../assets/elefante.png'

import * as S from '../styles/cardStyle'
import { FaEye } from 'react-icons/fa'
import * as Dialog from '@radix-ui/react-dialog'
import { StyledRadContent, StyledRadOverlay } from '../styles/radDialogCard'

interface CardProps {
  type: boolean
  kind: string
  name?: string
  habitat?: string
  owner?: string
  age?: number
  imgUrl?: string
}

export function Card({
  type,
  kind,
  name,
  habitat,
  owner,
  age,
  imgUrl,
}: CardProps) {
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
        <StyledRadOverlay />
        <StyledRadContent>
          <Dialog.Description>{selvagem ? kind : name}</Dialog.Description>
          <div>
            <Dialog.Close asChild>
              <button type="button">Fechar</button>
            </Dialog.Close>
          </div>
        </StyledRadContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
