//Jsx significa Javascript extendido//

import { GlobalStyles } from "./globalStyles"
import { Home } from "./pages/Home/index"
import { EventDetail } from "./pages/EventDetail"

export const App = () => { //export para que sea pública la función//

    return (
      <>
        <GlobalStyles />
        {/*Home /> */}
        <EventDetail/>
      </>
    )
}
