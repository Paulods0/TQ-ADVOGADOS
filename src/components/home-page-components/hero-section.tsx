import Container from "../global-components/container"
import { Button } from "../ui/button"

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center ">
      <img
        src="/hero-image.jpg"
        className="hidden md:flex absolute h-full w-full inset-0  md:object-cover"
      />
      <img
        src="/hero-image-mobile.jpg"
        className="lg:hidden flex absolute h-full w-full inset-0 object-cover"
      />

      <Container className="grid-cols-1 absolute bottom-28  lg:gap-0 lg:grid-cols-2 h-fit place-items-start">
        <div className="relative flex flex-col">
          <div className="hidden lg:flex absolute top-1/2 -z-5 left-12 rounded-full -translate-y-1/2 size-60 bg-white blur-3xl" />

          <div className="z-10 gap-6 flex flex-col">
            <div className="text-4xl md:text-6xl text-wrap flex flex-col items-start text-azul capitalize">
              <p>sociedade</p>
              <p>de advogados, RL</p>
            </div>

            <Button className="bg-azul text-white text-sm md:text-base uppercase w-fit">
              saber mais
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 h-1 bg-azul w-[300px] lg:w-[calc(100%-80px)]" />
    </section>
  )
}

export default HeroSection
