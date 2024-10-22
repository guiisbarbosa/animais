import { useState } from 'react'

import * as S from '../styles/mainContentStyle'

import { Card } from './card'

import { useQuery } from '@tanstack/react-query'
import { getAllAnimals } from '../services/getAllAnimal'
import { Loader } from './loader'

export function MainContent() {
  const [currentPage, setCurrentPage] = useState<number>(0)

  const {
    data: allAnimals,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['allAnimals', currentPage],
    queryFn: ({ queryKey }) => {
      const [, currentPage] = queryKey
      return getAllAnimals(currentPage as number)
    },
  })

  if (isLoading) {
    return (
      <S.Main>
        <S.Screen>
          <Loader />
        </S.Screen>
      </S.Main>
    )
  }

  if (error) {
    return (
      <S.Main>
        <S.Screen>
          <p>Erro ao buscar dados: {error.message}</p>
        </S.Screen>
      </S.Main>
    )
  }

  return (
    <S.Main>
      <S.Screen>
        {allAnimals?.map(animal => (
          <div key={animal.id}>
            <Card
              type={animal.type}
              kind={animal.kind}
              name={animal.name}
              habitat={animal.habitat}
              owner={animal.owner}
              age={animal.age}
              imgUrl={animal.imgUrl}
            />
          </div>
        ))}
      </S.Screen>
      <h3>Página atual: {currentPage + 1} | Total de páginas: {Math.round((allAnimals?.length ?? 0) / 8)}</h3>
    </S.Main>
  )
}
