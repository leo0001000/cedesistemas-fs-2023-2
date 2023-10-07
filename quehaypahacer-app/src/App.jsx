//Jsx significa Javascript extendido//
import { GlobalStyles } from "./globalStyles"
import { Home } from "./pages/Home"
import { EventDetail } from "./pages/EventDetail"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Profile } from "./pages/Profiles"
import { Confirmation } from "./pages/Confirmation"
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { UserContextStore } from "./context/UserContext"

const router = createBrowserRouter ([ //[Significa la apertura de un arreglo
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/detail/:id',
    element: <EventDetail/>
  },
  {
    path: '/profile', //Para que se enlace con el perfil de usuario
    element: <Profile/>
  },
  {
    path: '/confirmation', //Para que se enlace con el perfil de usuario
    element: <Confirmation/>
  },
  {
    path: '/login', //Para que se enlace con el perfil de usuario
    element: <Login/>
  },
  {
  path: '/signup', //Para que se enlace con el perfil de usuario
  element: <SignUp/>
  }
])


export const App = () => { //export para que sea pública la función//

    return (
      <>
        <GlobalStyles />
        <UserContextStore>
          <RouterProvider router={router}/>
        </UserContextStore>
      </>
    )
}
