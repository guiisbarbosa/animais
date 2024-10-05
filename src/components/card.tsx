import * as S from '../styles/cardStyle'
import gato from '../assets/gato.png'
import elefante from '../assets/elefante.png'
import { FaEye } from 'react-icons/fa'

export function Card() {
  const selvagem = false;

  return (
    <S.Card>
      <div className="cardImg">
        <img src={selvagem ? elefante : gato} alt="imagem de gato" />
      </div>
      <div className="cardInfo">
        <h2>Jubileu</h2>
        {selvagem ? <p>Habitat: Selva</p> :
          <>
            <p>Dono(a): João</p>
            <p>Idade: 1 ano</p>
          </>}
      </div>
      <button type="button">
        <FaEye />
      </button>
    </S.Card>
  )
}
