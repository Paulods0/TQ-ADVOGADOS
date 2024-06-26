import { useSearchParams } from "react-router-dom"
import Container from "../global/container"

const EncyclopediaSection = () => {
  const [searchParams, setSearchParams] = useSearchParams({ filter: "1" })

  const filter = searchParams.get("filter")

  function handleFilter(value: string) {
    setSearchParams((prev) => {
      prev.set("filter", value)
      return prev
    })
  }

  return (
    <Container className="mt-12 flex flex-col gap-8">
      <h1 className="text-3xl font-semibold uppercase text-azul">
        enciclopédia jurídica
      </h1>

      <div className="w-full flex items-center h-fit lg:h-[300px]">
        <div className="flex lg:flex-row flex-col items-center border-2 border-azul p-1 rounded-3xl w-full h-full">
          <div className="relative w-full lg:w-[380px] lg:h-full h-[240px] mb-4 lg:mb-0">
            <img
              src={`card/card-${filter}.jpg`}
              alt="card-image"
              className="object-cover rounded-3xl h-full absolute inset-0 w-full"
            />
          </div>

          <hr className="h-[80%] mx-6 w-[2px] bg-zinc-200" />

          <div className="flex flex-col w-full text-azul items-center lg:items-start justify-center h-full gap-6">
            <h1 className="text-2xl uppercase font-semibold">
              Lorem ipsum dolor ({filter}).
            </h1>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              hic nemo ducimus impedit fugit tempore libero laudantium
              perspiciatis labore voluptatibus. Facilis nihil nam commodi quo
              nostrum. Consectetur, minus beatae. Incidunt nulla corrupti
              obcaecati, odio suscipit ad vitae aut laboriosam iste dolorum id
              maxime delectus dolores non tenetur quibusdam eius perferendis!
            </p>
          </div>
        </div>

        <div className="h-1/2 hidden lg:flex mb-6 w-8 relative justify-center items-start flex-col">
          <button
            onClick={() => handleFilter("1")}
            className={`absolute shadow-xl left-0 top-0 text-white h-14 text-2xl transition-all duration-200 ease-in-out rounded-r-lg ${
              filter === "1"
                ? "bg-azul z-30 w-12"
                : filter === "3"
                ? "bg-neutral-500 z-5 w-8"
                : "bg-neutral-500 z-5 w-8"
            }`}
          >
            1
          </button>

          <button
            onClick={() => handleFilter("2")}
            className={`absolute left-0 shadow-xl top-12 text-white h-14 text-xl rounded-r-lg transition-all duration-200 ease-in-out ${
              filter === "2"
                ? "bg-azul z-20 w-12"
                : filter === "3"
                ? "w-10 bg-neutral-400"
                : "w-10 bg-neutral-400 z-20"
            }`}
          >
            2
          </button>

          <button
            onClick={() => handleFilter("3")}
            className={`absolute left-0 top-24 text-white h-14 text-lg rounded-r-lg transition-all duration-200 ease-in-out ${
              filter === "3" ? "bg-azul z-20 w-12" : "bg-neutral-200 z-0 w-8"
            }`}
          >
            3
          </button>
        </div>
      </div>
    </Container>
  )
}

export default EncyclopediaSection
