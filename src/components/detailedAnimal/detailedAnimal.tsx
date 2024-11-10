import gato from '../../assets/gato.png'
import elefante from '../../assets/elefante.png'

import * as S from './style'
import * as StRad from '../../styles/radAccordion'
import * as Accordion from '@radix-ui/react-accordion'
import { FaChevronDown } from 'react-icons/fa'

import { AnimalFoods } from '../animalFoods/animalFoods'
import { Loader } from '../loader/loader'
import { NewFoodToAnimalForm } from '../newFoodToAnimalForm/newFoodToAnimalForm'

import { useQuery } from '@tanstack/react-query'

import { getAnimalById } from '../../services/getAnimalById'

export function DetailedAnimal({ id }: { id: string }) {
  const {
    data: detailedAnimal,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['detailedAnimal', id],
    queryFn: () => getAnimalById(id),
  })

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <p>Erro ao buscar dados: {error.message}</p>
  }

  const selvagem = detailedAnimal?.type

  return (
    <>
      <S.DetailContent>
        <S.AnimalImg>
          <img
            src={
              detailedAnimal?.imgUrl
                ? detailedAnimal?.imgUrl
                : selvagem
                  ? elefante
                  : gato
            }
            alt="Foto do animal"
          />
        </S.AnimalImg>
        <S.AnimalData>
          <ul>
            <li>
              Nome:{' '}
              {detailedAnimal?.name ? detailedAnimal.name : 'Não especificado'}
            </li>
            <li>Tipo: {detailedAnimal?.type ? 'Selvagem' : 'Doméstico'}</li>
            <li>
              Animal:{' '}
              {detailedAnimal?.kind ? detailedAnimal.kind : 'Não especificado'}
            </li>
            <li>
              Espécie/Raça:{' '}
              {detailedAnimal?.animalSpecies
                ? detailedAnimal.animalSpecies
                : 'Não especificado'}
            </li>
            <li>
              Idade:{' '}
              {detailedAnimal?.age ? detailedAnimal.age : 'Não especificado'}
            </li>
            <li>
              Dono(a):{' '}
              {detailedAnimal?.owner
                ? detailedAnimal.owner
                : 'Não especificado'}
            </li>
            <li>
              Habitat:{' '}
              {detailedAnimal?.habitat
                ? detailedAnimal.habitat
                : 'Não especificado'}
            </li>
            <li>
              Autor:{' '}
              {detailedAnimal?.author
                ? detailedAnimal.author
                : 'Não especificado'}
            </li>
          </ul>
        </S.AnimalData>
      </S.DetailContent>

      <Accordion.Root type="single" collapsible>
        <Accordion.Item value={'section-1'}>
          <Accordion.Header>
            <StRad.AccordionTrigger>
              <p>Comidas</p>
              <FaChevronDown className="animateArrow" />
            </StRad.AccordionTrigger>
          </Accordion.Header>
          <StRad.AccordionContent>
            <div className="foodContent">
              {detailedAnimal?.foods && detailedAnimal.foods.length > 0 ? (
                detailedAnimal.foods.map(food => (
                  <AnimalFoods
                    key={food.name}
                    name={food.name}
                    whereToGet={food.whereToGet}
                    price={food.price.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  />
                ))
              ) : (
                <p>Nenhuma comida cadastrada</p>
              )}
            </div>
          </StRad.AccordionContent>
        </Accordion.Item>

        <Accordion.Item value={'section-2'}>
          <Accordion.Header>
            <StRad.AccordionTrigger>
              <p>
                Adicione uma nova comida para{' '}
                {detailedAnimal?.name ? detailedAnimal.name : 'esse animal'}
              </p>
              <FaChevronDown className="animateArrow" />
            </StRad.AccordionTrigger>
          </Accordion.Header>
          <StRad.AccordionContent>
            {detailedAnimal?.id && <NewFoodToAnimalForm id={id} />}
          </StRad.AccordionContent>
        </Accordion.Item>

        <Accordion.Item value={'section-3'}>
          <Accordion.Header>
            <StRad.AccordionTrigger>
              <p>Título 3</p>
              <FaChevronDown className="animateArrow" />
            </StRad.AccordionTrigger>
          </Accordion.Header>
          <StRad.AccordionContent>conteúdo 3</StRad.AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </>
  )
}
