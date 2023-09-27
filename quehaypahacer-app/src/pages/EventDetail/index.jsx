import {useParams} from 'react-router-dom'
import {Layout} from '../../components/Layout'
import { Button, COLORS } from '../../globalStyles'

export const EventDetail = () => {

  const { id } = useParams()

  return(
    <Layout>
      <h2>Título del evento {id} </h2>
      <div>
        <img src="https://www.eltiempo.com/files/image_640_428/uploads/2022/07/29/62e3d34873715.jpeg" />
      </div>
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nisi ducimus, vero suscipit, omnis magni ipsam voluptate obcaecati et vitae, temporibus consequatur quos! Ea debitis cumque ducimus placeat hic porro.</p>
        <p>Ubicación</p>
        <p>Fecha</p>
        <p>Precio</p>
    </div>
    <Button color={COLORS.secondary}>Quiero Participar</Button> {/*solo traigo el color que le quierdo dar de acuerdo al global styles*/}
    </Layout>
  )
}
