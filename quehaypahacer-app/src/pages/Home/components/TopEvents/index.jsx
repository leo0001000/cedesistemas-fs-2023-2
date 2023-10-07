import { styled } from "styled-components"
import { COLORS } from "../../../../globalStyles"
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import { CategoryContext } from "../../../../context/CategoryContext"

const TopEventsContainer = styled.section`
  margin: 25px 0;
`
const EventWrapper = styled.div`
  border: 3px solid #ccc;
  border-radius: 10px;
  display: flex;
  margin: 10px 0;
  overflow: hidden;
  background-color: #ccc;

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`

const EventContent = styled.div`
  margin-left: 15px;
  h5 {
    font-size: 1.2em;
    line-height: 1.2em;
    margin: 10px 0;
    color: #222;
  }
  p {
    margin: 0;
    color: #222;
  }
`;

const FreeText = styled.p`
  background-color: ${COLORS.info};
  color: ${COLORS.primary};
  padding: 3px 4px;
  border-radius: 3px;
  display: inline;
`

//De donde se traen los datos de los eventos BASE_DE_DATOS//
const EVENTS_DATA = [
  {
    id: 1,
    title: 'Desfile de silleteros',
    image: 'https://www.eltiempo.com/files/image_640_428/uploads/2022/07/29/62e3d34873715.jpeg',
    location: 'Medellín, UD Belén',
    date: '10/09/2023',
    is_free: true,
    price: 0,
    category: 1,
  },
  {
    id: 2,
    image: 'https://lh5.googleusercontent.com/p/AF1QipMBFBeqhHIkgZRLA2s4FHCkXqy7bWNTYP5HBtq9',
    date: '10/09/2023',
    location: 'Poblado',
    is_free: false,
    price: 150000,
    category: 2,
    title: 'Encuentro de comida oriental',
  },
  {
    image: 'https://viajeronomada.com/wp-content/uploads/2020/01/quehacerenmedellin.jpg',
    title: 'Encuentro Cultural',
    date: '10/09/2023',
    location: 'Parque Berrio',
    is_free: true,
    price: 0,
    category: 1,
    id: 3,
  },
  {
    image: 'https://where.com.co/wp-content/uploads/2022/07/sIRVALO-PUES.jpg',
    title: 'Concierto música para tomar',
    date: '09/09/2023',
    location: 'Plaza de toros La Macarena',
    is_free: false,
    price: 240000,
    category: 3,
    id: 4,
  }
]


//each event component Para usar el props de abajo tengo que meterlo dentro del paréntesis para que me traiga las props//
const Event = (props) => ( //Retorno puede ser implícito() y no uso palabra retorno o explícito{} y uso palabra return//
  <Link to={ `/detail/${props.id}` }>
    <EventWrapper>
        <img src={props.image} width="200px" />
      <EventContent> {/*Lo traigo del const EventContent que cree para darle los estilos*/}
        <h5> {props.title}</h5>
        <p>{props.date}</p>
        <p>{props.location}</p>
        {
        //Para verificar si es gratuito  o no el evento//
          props.is_free ? <FreeText>Gratuito</FreeText> : <p> COP$ {props.price}</p> //Ternario//
        }
      </EventContent>
    </EventWrapper>
  </Link>
)

export const TopEvents = ({latitude= null, longitude = null}) => {//puedo recibir props pero también puedo descomnponerlo y traer solo lo qe necesito

  const { categoryState} = useContext(CategoryContext)
  const [events, setEvents] = useState(EVENTS_DATA)

  useEffect(() => {

   if (categoryState.categorySelected !== 0) {
    const eventsFilter = EVENTS_DATA.filter(item => item.category === categoryState.categorySelected
      )
    setEvents (eventsFilter)
   }else{
    setEvents (EVENTS_DATA)
   }
  }, [categoryState])

  return (
    <TopEventsContainer>
      <h3>Eventos Cercanos</h3>
      <p>{latitude}, {longitude}</p>
      <section>
        {
          events.map((item, key) => <Event key = {key} {...item} />) //Recorremos el arreglo y se renderiza//
          //Script Operator = (...) coge un objeto y lo separa entre sus atributos//
        }
      </section>
    </TopEventsContainer>
  )
}
