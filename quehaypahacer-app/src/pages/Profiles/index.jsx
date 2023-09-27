import { Layout } from '../../components/Layout'
import { Button } from '../../globalStyles'


export const Profile = () => {

  return (
    <Layout>
      <h3>Mi cuenta</h3>
      <hr />
      <p>Nombre: <strong>Juan</strong></p>
      <p>Correo: <strong>juan@gamil.com</strong></p>
      <p>Id: <strong>1102365101</strong></p>
      <p># Celular: <strong>3508162547</strong></p>

      <br /><br />
      <Button>Cerrar Sesión</Button>

    </Layout>


  )

}
