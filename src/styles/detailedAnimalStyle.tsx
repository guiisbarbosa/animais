import { styled } from 'styled-components'

export const DetailContent = styled.div`
  display: flex;
  gap: 16px;
`
export const AnimalImg = styled.div`
    min-width: 400px;
    max-width: 400px;
    height: 285px;
    border-radius: 16px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`

export const AnimalData = styled.div`
    ul {
      list-style: none;
      font-size: 16px;

      li {
        margin-bottom: 8px;
      }

      li:first-child {
        font-size: 24px;
      }
    }
`
