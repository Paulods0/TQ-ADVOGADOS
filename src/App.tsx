import { Route, Routes } from "react-router-dom"
import Header from "./components/global-components/header"
import HomePage from "./pages/home-page"
// import Footer from "./components/global-components/footer"
import NotFound from "./pages/not-found"

function App() {
  return (
    <main className="h-screen flex flex-col font-serif">
      <Header />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      {/* <Footer /> */}
    </main>
  )
}

export default App
