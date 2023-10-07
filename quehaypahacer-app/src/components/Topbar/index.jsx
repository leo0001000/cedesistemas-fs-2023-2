import { TopbarContainer, TopbarIcon, TopbarTitle } from "./styles"
import { IoHomeOutline, IoPersonCircleOutline, IoLogInOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { UserContext } from "../../context/UserContext"
import { useContext } from "react"

export const Topbar = () => {

  const { user } = useContext(UserContext)
  //const isAuth = false

  return (
    <TopbarContainer>
      <TopbarIcon>
        <Link to ={'/'}>
          <IoHomeOutline />
        </Link>
      </TopbarIcon>
      <TopbarTitle>
        <h5>"Qué hay pa' hacer?"</h5>
      </TopbarTitle>
      <TopbarIcon>
        { //Ternaria
          user.isAuth
          ? <Link to ={'/profile'}><IoPersonCircleOutline /> : </Link> //para que se vaya al perfil del ususario
          : <Link to ={'/login'}><IoLogInOutline /> </Link> //Para que se vaya a iniciar sesión
        }
      </TopbarIcon>
      </TopbarContainer>
  )
}
