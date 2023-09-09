//Jsx significa Javascript extendido//

import { GlobalStyles } from "./globalStyles"
import { Home } from "./pages/Home/index"

export const App = () => { //export para que sea pública la función//

    return (
      <>
        <GlobalStyles />
        <Home />
      </>
    )
}
