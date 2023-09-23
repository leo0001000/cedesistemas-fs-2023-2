//Jsx significa Javascript extendido//
import { GlobalStyles } from "./globalStyles"
import { Home } from "./pages/Home"
import { EventDetail } from "./pages/EventDetail"
import { createBrowserRouter, RouterProvider } from '../node_modules/react-router-dom/dist/index'


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
    path: '/detail/:id', //Se pone id para identificar el evento que quiero mostrar//
    element: <EventDetail/>
  }

])


export const App = () => { //export para que sea pública la función//

    return (
      <>
        <GlobalStyles />
        <RouterProvider router={router}/>
      </>
    )
}
