import { styled } from 'styled-components'

export const Card = styled.div`
  width: 280px;
  height: 330px;
  background-color: #F3F3F2;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  margin: 100px;
  box-shadow: 5px 5px 10px #6e6961;

  .cardImg {
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  }

  
  .cardInfo {
      width: 100%;
      height: 100%;
      padding: 0 16px;

      h2 {
        font-size: 32px;
        margin: 12px 0;
        font-family: "Fredoka", system-ui;
        font-weight: 500;
      }

      p {
        font-weight: 500;
        margin-bottom: 4px;
        font-size: 16px;
      }
    }

    button {
      border: none;
      background-color: #4C8D75;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      position: absolute;
      right: 10px;
      bottom: 10px;
      color: #F3F3F2;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      outline: none;
    }
`