import { Layout } from "../../components/Layout"
import { CategoryContextStore } from "../../contents/CategoryContext"
import { Categories } from "./components/Categories"
import { TopEvents } from "./components/TopEvents"

export const Home = () => {

  return(
    <Layout>
      <CategoryContextStore>
        <Categories />
        <TopEvents />
      </CategoryContextStore>
    </Layout>
  )
}
