import * as StRad from './radAccordionStyle'
import * as Accordion from '@radix-ui/react-accordion'
import { FaChevronDown } from 'react-icons/fa'

import { AnimalFoods } from '../animalFoods/animalFoods'
import { FoodForm } from '../foodForm/foodForm'
import { RadixSelect } from './radSelect'

import { mutationAddNewFoodToAnimal } from '../../services/mutations'
import type { DetailedAnimalResponse } from '../../services/getAnimalById'

interface AccordionProps {
  id: string
  detailedAnimal?: DetailedAnimalResponse
}

export function RadixAccordion({ id, detailedAnimal }: AccordionProps) {
  const addNewFoodToAnimal = mutationAddNewFoodToAnimal(id)

  return (
    <>
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value={'section-1'}>
          <Accordion.Header>
            <StRad.AccordionTrigger>
              Comidas
              <FaChevronDown className="animateArrow" />
            </StRad.AccordionTrigger>
          </Accordion.Header>
          <StRad.AccordionContent asChild>
            <StRad.FoodContent>
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
            </StRad.FoodContent>
          </StRad.AccordionContent>
        </Accordion.Item>

        <Accordion.Item value={'section-2'}>
          <Accordion.Header>
            <StRad.AccordionTrigger>
              Adicione uma nova comida para{' '}
              {detailedAnimal?.name ? detailedAnimal.name : 'esse animal'}
              <FaChevronDown className="animateArrow" />
            </StRad.AccordionTrigger>
          </Accordion.Header>
          <StRad.AccordionContent asChild>
            {detailedAnimal?.id && (
              <FoodForm onSubmit={addNewFoodToAnimal.mutate} />
            )}
          </StRad.AccordionContent>
        </Accordion.Item>

        <Accordion.Item value={'section-3'}>
          <Accordion.Header>
            <StRad.AccordionTrigger>
              Selecione e adicione uma comida existente
              <FaChevronDown className="animateArrow" />
            </StRad.AccordionTrigger>
          </Accordion.Header>
          <StRad.AccordionContent asChild>
            <div>
              <RadixSelect animalId={detailedAnimal!.id} />
            </div>
          </StRad.AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </>
  )
}
