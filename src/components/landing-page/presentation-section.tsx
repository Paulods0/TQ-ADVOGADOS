import Container from "../global/container"

const PresentationSection = () => {
  return (
    <Container className="flex lg:flex-row flex-col items-center mt-12 justify-between w-full gap-8">
      <div className="relative h-[400px] w-full lg:w-[460px]">
        <img
          src="woman.jpg"
          className="w-full h-full absolute inset-0 object-cover rounded-3xl"
        />
        <div className="w-full absolute text-white text-center capitalize z-10 bottom-2 flex flex-col left-1/2 -translate-x-1/2">
          <h1 className=" text-2xl">Lisandra Moura</h1>
          <h3 className=" text-lg">advogada</h3>
        </div>
      </div>

      <div className="w-full flex flex-col text-azul text-justify items-start justify-start gap-6">
        <h1 className="text-3xl font-semibold uppercase">o escritório</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          quia odio veniam earum quibusdam magni vero quasi rerum eaque totam
          molestiae eos, inventore, facere illo, eum iusto! Aperiam rem
          veritatis ut, atque veniam commodi minus aliquam quasi tempora magni
          obcaecati cupiditate ratione ullam aspernatur architecto fugiat
          officia nulla ea temporibus eum quidem consectetur voluptas! Eos
          suscipit nostrum, commodi similique sit, perspiciatis iure eum id
          aliquid ipsam, harum placeat odio nemo?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          quia odio veniam earum quibusdam magni vero quasi rerum eaque totam
          molestiae eos, inventore, facere illo, eum iusto! Aperiam rem
          veritatis ut, atque veniam commodi minus aliquam quasi tempora magni
          obcaecati cupiditate ratione ullam aspernatur architecto fugiat
          officia nulla ea temporibus eum quidem consectetur voluptas! Eos
          suscipit nostrum, commodi similique sit, perspiciatis iure eum id
          aliquid ipsam, harum placeat odio nemo?
        </p>
      </div>
    </Container>
  )
}

export default PresentationSection
