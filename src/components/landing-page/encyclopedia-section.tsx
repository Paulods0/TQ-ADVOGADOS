import Container from "../global/container"

const EncyclopediaSection = () => {
  return (
    <Container className="mt-12 flex flex-col gap-8">
      <h1 className="text-3xl font-semibold uppercase text-azul">
        enciclopédia jurídica
      </h1>
      <div className="border-[1px] border-azul p-4 rounded-[30px] w-full h-[250px] flex items-start">
        <img
          src="card-image.jpg"
          alt="card-image"
          className="object-cover rounded-[30px] h-full w-52"
        />

        <hr className="h-full mx-6 w-[2px] bg-zinc-200" />

        <div className="flex flex-col text-azul items-start justify-center h-full gap-6">
          <h1 className="text-2xl uppercase font-semibold">
            Lorem ipsum dolor.
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
    </Container>
  )
}

export default EncyclopediaSection
