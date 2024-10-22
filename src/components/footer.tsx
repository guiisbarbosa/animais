import * as S from "../styles/footerStyle";

export function Footer() {
	return (
		<S.Footer>
			<S.DevDisplay>
				<p>
					Desenvolvedores - Backend: <a href="/">Gabriel Inácio</a> | Frontend:{" "}
					<a href="/">Guilherme Barbosa</a>
				</p>
			</S.DevDisplay>
		</S.Footer>
	);
}
