import * as S from './style'
import animaisLogo from '../../assets/animaislogo.svg'
import { FaFilter, FaPlus } from 'react-icons/fa'
import { AddButton } from '../ui/addButton'
import { LuDog } from 'react-icons/lu'
import { TbMeat } from 'react-icons/tb'
import { RadixDialog } from '../ui/radDialog'
import { FoodForm } from '../foodForm/foodForm'
import { mutationAddNewFood } from '../../services/mutations'
import { AnimalForm } from '../animalForm/animalForm'

export function Header() {

  const addNewFood = mutationAddNewFood();

  return (
    <S.Header>
      <div>
        <img src={animaisLogo} alt="Logo Animais" className="logo" />

        <RadixDialog
          title="Adicionar um novo animal"
          triggerButton={
            <AddButton>
              <>
                <FaPlus />
                <LuDog size={28} />
              </>
            </AddButton>
          }
        >
          <AnimalForm />
        </RadixDialog>

        <RadixDialog
          title="Adicionar uma nova comida"
          triggerButton={
            <AddButton>
              <FaPlus />
              <TbMeat size={28} />
            </AddButton>
          }
        >
          <FoodForm onSubmit={addNewFood.mutate}/>
        </RadixDialog>
      </div>
      <ul>
        <li>
          <FaFilter />
        </li>
        <li>
          <button type="button">Filtro 1</button>
        </li>
        <li>
          <button type="button">Filtro 2</button>
        </li>
        <li>
          <button type="button">Filtro 3</button>
        </li>
      </ul>
    </S.Header>
  )
}
