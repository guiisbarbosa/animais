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
    queryFn: () => getAllAnimals(currentPage),
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
        {allAnimals?.animals?.map(animal => (
          <div key={animal.id}>
            <Card
              id={animal.id}
              type={animal.type}
              kind={animal.kind}
              animalSpecies={animal.animalSpecies}
              age={animal.age}
              name={animal.name}
              sex={animal.sex}
              owner={animal.owner}
              author={animal.author}
              habitat={animal.habitat}
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
        <h4>Página: {currentPage + 1}</h4>
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
