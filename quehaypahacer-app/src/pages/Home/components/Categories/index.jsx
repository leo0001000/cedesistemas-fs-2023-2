import {styled} from 'styled-components'
import { Category } from "../Category/index"
import {IoMusicalNotes, IoColorPaletteOutline, IoFastFood, IoLaptopOutline} from 'react-icons/io5'

const CategoriesContainer = styled.section`
  display: flex;
  margin: 0 15px;

`
const CATEGORY_LIST = [
  {
    name: 'Art',
    icon: <IoColorPaletteOutline/>,
    color: 'orange'
  },
  {
    name: 'Gastronómico',
    icon: <IoFastFood/>,
    color: 'red'
  },
  {
    name: 'Música',
    icon: <IoMusicalNotes/>,
    color: 'black'
  },
  {
    name: 'Geek',
    icon: <IoLaptopOutline/>,
    color: 'blue'
  },

]

export const Categories = () => {

  return (
    <CategoriesContainer>
      {
        CATEGORY_LIST.map(item => <Category name = {item.name} icon={item.icon} color={item.color}/>)
      }
    </CategoriesContainer>
  )
}
