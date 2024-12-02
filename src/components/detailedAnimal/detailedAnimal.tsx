import gato from '../../assets/gato.png'
import elefante from '../../assets/elefante.png'

import * as S from './style'

import { Loader } from '../loader/loader'
import { RadixAccordion } from '../ui/radAccordion'

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
            <li>
              Sexo:{' '}
              {detailedAnimal?.sex ? detailedAnimal.sex : 'Não especificado'}
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
              Autor(a):{' '}
              {detailedAnimal?.author
                ? detailedAnimal.author
                : 'Não especificado'}
            </li>
          </ul>
        </S.AnimalData>
      </S.DetailContent>

      <RadixAccordion id={detailedAnimal!.id} detailedAnimal={detailedAnimal!}  />
    </>
  )
}
