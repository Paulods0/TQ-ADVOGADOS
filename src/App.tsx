import { Route, Routes } from "react-router-dom"
// import Header from "./components/global-components/header"
// import HomePage from "./pages/home-page"
// import Footer from "./components/global-components/footer"
import NotFound from "./pages/not-found"
import { lazy, Suspense } from "react"

const HomePage = lazy(() => import("./pages/home-page"))
const Header = lazy(() => import("./components/global-components/header"))
const Footer = lazy(() => import("./components/global-components/footer"))

function App() {
  return (
    <main className="h-screen flex flex-col font-serif">
      <Suspense
        fallback={
          <h1 className="w-full text-center font-semibold">Loading...</h1>
        }
      >
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </main>
  )
}

export default App
