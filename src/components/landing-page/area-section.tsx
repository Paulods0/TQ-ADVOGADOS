import Container from "../global/container"

const AreasSection = () => {
  return (
    <Container className="mt-12 flex flex-col gap-8">
      <h1 className="text-3xl font-semibold uppercase">áreas de atuação</h1>
      <section className="grid grid-cols-4 gap-12">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="size-[290px] rounded-3xl flex p-8 flex-col justify-center items-start bg-azul text-white gap-4"
          >
            <p className="uppercase">icon</p>
            <h1 className="font-bold uppercase text-xl">
              Lorem ipsum dolor, sit amet consectetur.
            </h1>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              sequi ratione.
            </p>
            <button className="border rounded-lg border-white px-3 text-white self-end">
              Ler mais
            </button>
          </div>
        ))}
      </section>
    </Container>
  )
}

export default AreasSection
