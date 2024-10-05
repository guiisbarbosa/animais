import type { ReactNode } from 'react'
import * as S from '../styles/mainContentStyle'

interface MainContentProps {
  children: ReactNode
}

export function MainContent({ children }: MainContentProps) {
  return (
    <S.Main>
      <S.Screen>
        {children}
      </S.Screen>
    </S.Main>
  )
}