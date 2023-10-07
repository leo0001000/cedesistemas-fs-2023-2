import styled from 'styled-components'
import { COLORS } from '../../../../globalStyles'

const CategoryWrapper = styled.div`
width: 80px;
height: 80px;
//background-color:${COLORS.secondary};
background-color: ${ props => props.isActive ? COLORS.primary : COLORS.secondary};
border-radius: 5px;
margin: 0 5px;
display: flex; //Para ajustarlo con flebox//
flex-direction: column; //uno abajo del otro//
align-items: center; //Cetra horizontalmente//
justify-content: center; //Centra verticalmente//


p {
  color : white;
  font-size: 0.6em;
  line-height: 0;
}

&:hover { //Para cuando pase el cursor por encima del ítem//
  cursor: pointer; //se vea la mano//
  background-color: ${COLORS.primary}; //Color primario definido//
}

`
const IconWrapper = styled.div`
  svg{
    color : white;
    font-size: 1.9em;
  }

`

export const Category = (props) => { //Función donde Se reciben propiedades//

  const categorySelection = () => {
   // alert('clicked' + props.id)
   props.onChangeCategory(props.id)
  }


  return (
    <CategoryWrapper isActive={props.isActive} onClick={categorySelection}>
      <IconWrapper>{props.icon}</IconWrapper>
      <p>{props.name} </p>
    </CategoryWrapper>
  )
}
