import Container from "../global/container"

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("hero-image.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "115vh",
        display: "flex",
        padding: 50,
        alignItems: "center",
        zIndex: -1,
        position: "relative",
      }}
      className=""
    >
      <Container className="relative mt-14">
        <div className="w-fit items-start justify-center flex flex-col gap-12">
          <div className="flex flex-col text-4xl md:text-7xl text-azul">
            <h1>Sociedade</h1>
            <h1>de Advogados, RL</h1>
          </div>
          <button className="px-4 py-3 rounded-lg bg-azul text-white uppercase">
            Saber mais
          </button>
        </div>
      </Container>

      <div className="absolute -bottom-1 w-[80%] left-1/2 -translate-x-1/2 mx-auto h-1 bg-azul" />
    </section>
  )
}

export default HeroSection
