import Container from "../global-components/container"

const EnciclopediaSection = () => {
  return (
    <section className="mt-40 flex items-center justify-center w-full">
      <Container className="flex flex-col gap-6">
        <h1 className="text-base md:text-lg lg:text-2xl text-azul uppercase font-semibold">
          Enciclopédia jurídica
        </h1>

        <div className="relative h-[250px] flex items-center w-full p-4 rounded-lg border-azul border">
          <div className="flex items-center w-full justify-start h-full">
            <img
              src="/card-image.jpg"
              className="object-cover w-[250px] h-full rounded-xl"
              alt="imagem"
            />
            <div className="h-full w-1 bg-zinc-400 mx-6" />
            <div className="flex items-start justify-center gap-2 h-full flex-col">
              <h1 className="text-azul text-2xl font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="line-clamp-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                accusantium repellat ipsum necessitatibus, eveniet quae vel
                reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Autem eveniet labore amet libero rerum impedit, deserunt
                deleniti voluptate magnam similique nisi architecto, incidunt
                iure cumque enim eos distinctio dolorem sapiente! Architecto
                quam accusantium repellat ipsum dolor sit amet consectetur
                adipisicing elit. Autem eveniet labore amet libero rerum
                impedit, deserunt deleniti voluptate magnam similique nisi
                architecto, incidunt iure cumque enim eos distinctio dolorem
                sapiente! Architecto quam accusantium repellat ipsum
                necessitatibus, eveniet quae vel reiciendis!
              </p>
            </div>
          </div>

          <div className="flex flex-col absolute p-4 -right-1 rounded-r-lg bg-azul h-full ">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default EnciclopediaSection
