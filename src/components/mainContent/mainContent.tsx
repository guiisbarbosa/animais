import { useState } from "react";

import * as S from "./style";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Card } from "../card/card";
import { Loader } from "../loader/loader";

import { useAnimals } from "../../hooks/useAnimals";

export function MainContent() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const { data: allAnimals, isLoading, isError, error } = useAnimals(currentPage);

  if (isLoading) {
    return (
      <S.Main>
        <S.Screen>
          <Loader />
        </S.Screen>
      </S.Main>
    );
  }

  if (isError) {
    return (
      <S.Main>
        <S.Screen>
          <p>Erro ao buscar dados: {error.message}</p>
        </S.Screen>
      </S.Main>
    );
  }

  return (
    <S.Main>
      <S.Screen>
        {allAnimals?.animals?.map((animal) => (
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
          <FaChevronLeft />
        </button>
        <h4>
          Página: {currentPage + 1} de {allAnimals?.totalPages}
        </h4>
        <button
          type="button"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === (allAnimals?.totalPages ?? 0) - 1}
        >
          <FaChevronRight />
        </button>
      </S.PaginationContainer>
    </S.Main>
  );
}
