import { styled } from "styled-components"
import { Category } from "../Category"
import { IoMusicalNotes, IoColorPalette, IoFastFood, IoLaptop } from 'react-icons/io5'
import { useState } from "react"

const CategoriesContainer = styled.section`
  display: flex;
  margin: 0 15px;
  justify-content: center;

`
const CATEGORY_LIST = [
  {
    id:1,
    name: 'Art',
    icon: <IoColorPalette/>,
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
    icon: <IoLaptop/>,
    color: 'blue'
  },
]

const ALL_CATEGORIES = 0

export const Categories = () => {

  const [categorySelected, setCategorySelected] = useState (ALL_CATEGORIES)

  const onChangeCategory = (newCategoryId) => {
    //categorySelected = newCategoryId
    /*if (categorySelected === newCategoryId){
      setCategorySelected(0)
    } else {
      setCategorySelected(newCategoryId)
    }*/
    setCategorySelected(categorySelected === newCategoryId ? ALL_CATEGORIES : newCategoryId)
  }


  return (
    <CategoriesContainer>

      {
        CATEGORY_LIST.map(item => <Category
          isActive={categorySelected === item.id}
          {...item}
          onChangeCategory={onChangeCategory}
          />
        )
      }
    </CategoriesContainer>
  )
}
