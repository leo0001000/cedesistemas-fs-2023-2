import {styled} from 'styled-components'
import { Category } from "../Category/index"
import {IoMusicalNotes, IoColorPaletteOutline, IoFastFood, IoLaptopOutline} from 'react-icons/io5'

const CategoriesContainer = styled.section`
  display: flex;
  margin: 0 15px;
  justify-content: center;

`
const CATEGORY_LIST = [
  {
    id:1,
    name: 'Art',
    icon: <IoColorPaletteOutline/>,
    color: 'orange'
  },
  {
    id: 2,
    name: 'Gastronómico',
    icon: <IoFastFood/>,
    color: 'red'
  },
  {
    id:3,
    name: 'Música',
    icon: <IoMusicalNotes/>,
    color: 'black'
  },
  {
    id:4,
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
