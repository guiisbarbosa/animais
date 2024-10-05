import * as S from '../styles/headerStyle'
import animaisLogo from '../assets/animaislogo.svg'
import { FaFilter } from 'react-icons/fa'

export function Header() {
  return (
    <S.Header>
      <img src={animaisLogo} alt="Logo Animais" />
      <ul>
        <li>
          <FaFilter />
        </li>
        <li>
          <a href="/">Filtro 1</a>
        </li>
        <li>
          <a href="/">Filtro 2</a>
        </li>
        <li>
          <a href="/">Filtro 3</a>
        </li>
      </ul>
    </S.Header>
  )
}
