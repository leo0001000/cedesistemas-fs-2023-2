import { useContext } from 'react'
import { Layout } from '../../components/Layout'
import { Button } from '../../globalStyles'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'


export const Profile = () => {

  const {user, logout} = useContext(UserContext)
  const navigate = useNavigate()

  const closeSession = () => {
    setTimeout(() =>{
      logout ()
      navigate('/')
    }, 1500)
  }
  return (
    <Layout>
      <h3>Mi cuenta</h3>
      <hr />
      <p>Nombre: <strong>{user.name}</strong></p>
      <p>Correo: <strong>{user.email}</strong></p>
      <p>Id: <strong>{user.document}</strong></p>
      <p># Celular: <strong>{user.phone}</strong></p>

      <br /><br />
      <Button onClick={closeSession}>Cerrar Sesión</Button>

    </Layout>


  )

}
