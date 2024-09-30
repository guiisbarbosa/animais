import * as S from '../styles/cardStyle'
import gato from '../assets/gato.png'
import { FaEye } from 'react-icons/fa'

export function Card() {
  return (
    <S.Card>
      <div className="cardImg">
        <img src={gato} alt="imagem de gato" />
      </div>
      <div className="cardInfo">
        <h2>Jubileu</h2>
        <p>Dono: João</p>
        <p>Idade: 1 ano</p>
      </div>
      <button type="button">
        <FaEye />
      </button>
    </S.Card>
  )
}
