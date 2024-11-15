import * as StRad from '../../styles/radAccordion'
import * as Accordion from '@radix-ui/react-accordion'
import { FaChevronDown } from 'react-icons/fa'

import { AnimalFoods } from '../animalFoods/animalFoods'
import { FoodForm } from '../foodForm/foodForm'

import { mutationAddNewFood } from "../../services/mutations"
import type { DetailedAnimalResponse } from '../../services/getAnimalById'


interface AccordionProps {
  id: string,
  detailedAnimal?: DetailedAnimalResponse
}

export function RadixAccordion({id, detailedAnimal}: AccordionProps ) {

  const addNewFoodToAnimal = mutationAddNewFood(id)

  return (
    <>
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
            {detailedAnimal?.id && (
              <FoodForm onSubmit={addNewFoodToAnimal.mutate} />
            )}
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