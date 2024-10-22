import { IoPaw } from 'react-icons/io5'

import * as S from '../styles/loaderStyle'

export const Loader = () => {
  return (
    <S.Wrapper>
      <div className="loader">
        <div className='bubble'><IoPaw /></div>
        <div className='bubble'><IoPaw /></div>
        <div className='bubble'><IoPaw /></div>
      </div>
    </S.Wrapper>
  )
}