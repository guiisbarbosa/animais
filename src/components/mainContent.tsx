import { useState } from 'react'

import * as S from '../styles/mainContentStyle'

import { Card } from './card'

import { useQuery } from '@tanstack/react-query'
import { getAllAnimals } from '../services/getAllAnimal'
import { Loader } from './loader'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

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

  console.log(allAnimals)

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
        {allAnimals?.animals?.map(animal => (
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
      <S.PaginationContainer>
        <button
          type="button"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <FaLessThan />
        </button>
        <h4>Página atual: {currentPage + 1}</h4>
        <button
          type="button"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === (allAnimals?.totalPages ?? 0) - 1}
        >
          <FaGreaterThan />
        </button>
      </S.PaginationContainer>
    </S.Main>
  )
}
