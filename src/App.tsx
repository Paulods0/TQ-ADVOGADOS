import { Outlet } from "react-router-dom"
import Header from "./components/global/header"
import Footer from "./components/global/footer"

const App = () => {
  return (
    <main className="flex flex-col font-MerriWeather">
      <Header />
      <section className="min-h-screen">
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}

export default App
