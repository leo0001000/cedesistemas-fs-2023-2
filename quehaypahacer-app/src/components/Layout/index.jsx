import {styled} from 'styled-components'
import { Topbar } from '../Topbar'

const ContentLayout = styled.section`
  margin-top: 60px; //Para que la pagina incie 60px debajo, es decir por debajo del topbar
  padding: 10px 15px; //Todas las paginas quedan personalizadas con este padding//

`

export const Layout = (props) =>{

  return(

    <> {/*Fragmento para crear dos returns*/}
      <Topbar/>{/*Siempre debe tener el toolbar en todas las páginas*/}
      <ContentLayout>
        { props.children }
      </ContentLayout>
      {/*<footer>Todos los derechos reservados</footer>}*/}
    </>
    )
}
