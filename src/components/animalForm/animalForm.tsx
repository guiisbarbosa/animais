import * as S from './style'
import { useState } from 'react'
import DomesticAnimalAdd from './domesticAnimalAdd'

export function AnimalForm() {
  const [formType, setFormType] = useState('domestico')

  return (
    <>
      <S.SelectType>
        <div>
          <input
            type="radio"
            id="domestico"
            name="animal"
            value="domestico"
            checked={formType === 'domestico'}
            onChange={() => setFormType('domestico')}
          />
          <label htmlFor="domestico">{' '}Doméstico</label>
        </div>
        <div>
          <input
            type="radio"
            id="selvagem"
            name="animal"
            value="selvagem"
            checked={formType === 'selvagem'}
            onChange={() => setFormType('selvagem')}
          />
          <label htmlFor="selvagem">{' '}Selvagem</label>
        </div>
      </S.SelectType>
      {formType === 'domestico' && <DomesticAnimalAdd />}
      {formType === 'selvagem' && <div> AnimalForm Selvagem </div>}
    </>
  )
}
