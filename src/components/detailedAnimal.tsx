import gato from '../assets/gato.png'
import elefante from '../assets/elefante.png'

import * as S from '../styles/detailedAnimalStyle'

import * as Accordion from '@radix-ui/react-accordion'

import { useQuery } from '@tanstack/react-query'
import { getAnimalById } from '../services/getAnimalById'
import { Loader } from './loader'
import { AnimalFoods } from './animalFoods'

export function DetailedAnimal({ id }: { id: string }) {
  const sections = [
    { title: 'Seção 1', content: '<ContentSection1 />' },
    { title: 'Seção 2', content: '<ContentSection2 />' },
    { title: 'Seção 3', content: '<ContentSection3 />' },
  ]

  const {
    data: detailedAnimal,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['detailedAnimal'],
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
      <Accordion.Root type="single" collapsible className="accordion-root">
        <Accordion.Item value={'section-1'} className="accordion-item">
          <Accordion.Header>
            <Accordion.Trigger className="accordion-trigger">
              Comidas:
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content">
            {detailedAnimal?.foods?.map(food => (
              <AnimalFoods 
              key={food.name} 
              name={food.name} 
              whereToGet={food.whereToGet} 
              price={food.price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })} />))
            }
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value={'section-2'} className="accordion-item">
          <Accordion.Header>
            <Accordion.Trigger className="accordion-trigger">
              título 2
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content">
            conteúdo 2
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value={'section-3'} className="accordion-item">
          <Accordion.Header>
            <Accordion.Trigger className="accordion-trigger">
              título 3
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content">
            conteúdo 3
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  )
}
