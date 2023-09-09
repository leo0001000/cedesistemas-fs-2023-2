
import { Layout } from "../../components/Layout/index"
import { Topbar } from "../../components/Topbar/index"
import { Categories } from "./components/Categories/index"
import { TopEvents } from "./components/TopEvents/"

export const Home = () => {

  return(
    <Layout>
      <Categories />
      <TopEvents />
    </Layout>
  )
}
