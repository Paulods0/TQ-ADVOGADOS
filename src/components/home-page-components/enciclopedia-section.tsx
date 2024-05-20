import { useSearchParams } from "react-router-dom"
import Container from "../global-components/container"
import HomeCard from "../home-card"

const EnciclopediaSection = () => {
  const [search, setSearch] = useSearchParams({ p: "1" })

  const handleFilter = (value: string) => {
    setSearch((prev) => {
      prev.set("p", value)
      return prev
    })
  }

  return (
    <section className="mt-40 flex items-center justify-center w-full">
      <Container className="flex flex-col gap-6">
        <h1 className="text-base md:text-lg lg:text-2xl text-azul uppercase font-semibold">
          Enciclopédia jurídica
        </h1>

        <HomeCard />
        
      </Container>
    </section>
  )
}

export default EnciclopediaSection
