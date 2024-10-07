import { styled } from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
`

export const DevDisplay = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  background-color: #594D39;
  display: flex;
  justify-content: center;
  padding: 20px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: #EDEBE7;
  font-size: 12px;

  a:link {
    font-style: italic;
    color: #EDEBE7;
  }

  a:visited {
    color: #EDEBE7;
  }

  a:hover {
    color: #7fd4b5;
  }
`