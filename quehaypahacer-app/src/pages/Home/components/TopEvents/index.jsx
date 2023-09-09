import { styled } from "styled-components"
import { COLORS } from "../../../../globalStyles"

const TopEventsContainer = styled.section`
  margin: 25px 0;
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


const EventWrapper = styled.div` //Dar estilos al envoltorio de los eventos//
  border: 3px solid #ccc;
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  overflow: hidden; //para que la imagen no pase por encima del borde sino que esté por debajo//

  &:hover{
    background-color: #dfd0d0;
    cursor: pointer;
  }
`

const EventContent = styled.div` //Darle estulo al contenido del evento //
  margin-left: 15px;
  h5{
    line-height: 1.2em;
    margin: 10px 0;
    font-size: 1.2em;
    }
  p{
    margin: 0;
  }
`

const FreeText = styled.p`
  background-color: ${COLORS.info};
  color: white;
  padding: 3px 4px;
  border-radius: 3px;
  display: inline;
`

//each event component Para usar el props de abajo tengo que meterlo dentro del paréntesis para que me traiga las props//
const Event = (props) => ( //Retorno puede ser implícito() y no uso palabra retorno o explícito{} y uso palabra return//
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
)

export const TopEvents = () => {

  return (
    <TopEventsContainer>
      <h3>Eventos Cercanos</h3>
      <section>
        {
          EVENTS_DATA.map(item => <Event {...item} />) //Recorremos el arreglo y se renderiza//
          //Script Operator = (...) coge un objeto y lo separa entre sus atributos//
        }
      </section>
    </TopEventsContainer>
  )
}