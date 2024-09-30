import { styled } from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: #4C8D75;
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    height: 100%;
  }

  ul {
    display: flex;
    gap: 24px;
    list-style: none;

    li:first-child {
      color: #594D39;
      font-size: 20px;
    }

    a {
      font-family: "Fredoka", system-ui;
      font-size: 16px;
      text-decoration: none;
      color: #EDEBE7;
      position: relative;
    }

    a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px; /* Espaço entre o link e a linha */
      width: 0;
      height: 2px; /* Altura da linha */
      background-color: #EDEBE7;
      transition: width 0.4s ease-out;
    }

    a:hover::after {
      width: 100%; /* Expande a linha de 0 a 100% */
    }

  }
`
