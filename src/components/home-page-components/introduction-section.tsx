import Container from "../global-components/container"
import IntroCard from "./intro-card"

const IntroductionSection = () => {
  return (
    <section className="lg:h-screen flex items-center justify-center w-full">
      <Container className="flex flex-col-reverse items-center gap-12 md:grid md:grid-cols-2 md:place-items-center lg:place-items-start lg:gap-0">
        <div className="">
          <IntroCard />
        </div>

        <div className="flex flex-col items-start gap-2">
          <h1 className="text-azul md:text-xl lg:text-2xl uppercase font-semibold">
            o escritório
          </h1>
          <p className="text-azul md:text-sm lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            libero eveniet quam deleniti exercitationem facilis quidem laborum
            labore delectus dolores, expedita cupiditate nostrum voluptatum
            saepe inventore sequi ex illo nulla. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            libero eveniet quam deleniti exercitationem facilis quidem laborum
            labore delectus dolores, expedita cupiditate nostrum voluptatum
            saepe inventore sequi ex illo nulla. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dolor, libero eveniet quam deleniti
            exercitationem facilis quidem laborum labore delectus dolores,
            expedita cupiditate nostrum voluptatum saepe inventore sequi ex illo
            nulla.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default IntroductionSection
