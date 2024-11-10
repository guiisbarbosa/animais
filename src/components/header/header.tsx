import * as S from './style'
import animaisLogo from "../../assets/animaislogo.svg";
import { FaFilter } from "react-icons/fa";

export function Header() {
	return (
		<S.Header>
			<img src={animaisLogo} alt="Logo Animais" />
			<ul>
				<li>
					<FaFilter />
				</li>
				<li>
					<button type="button">Filtro 1</button>
				</li>
				<li>
					<button type="button">Filtro 2</button>
				</li>
				<li>
					<button type="button">Filtro 3</button>
				</li>
			</ul>
		</S.Header>
	);
}
