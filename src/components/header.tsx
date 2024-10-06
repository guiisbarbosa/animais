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
          <button>Filtro 1</button>
        </li>
        <li>
          <button>Filtro 2</button>
        </li>
        <li>
          <button>Filtro 3</button>
        </li>
      </ul>
    </S.Header>
  )
}
