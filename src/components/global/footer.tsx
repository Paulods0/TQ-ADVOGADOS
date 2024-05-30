import { FOOTER_DOWM, SOCIAL_MEDIAS } from "@/constants"
import Container from "./container"

const Footer = () => {
  return (
    <footer className="w-full mt-28 flex-col flex justify-end">
      <section className="h-[560px] relative w-full ">
        <img
          src="footer-image-20.png"
          alt="footer-image"
          className="absolute w-full h-full inset-0 object-cover"
        />

        <Container className="relative">
          <form className="absolute top-14 right-1/2 px-8 lg:px-0 -translate-x-1/2 lg:-translate-x-0 lg:right-0 w-full lg:w-[400px] space-y-4 z-20">
            <h1 className="text-azul text-xl uppercase font-bold">
              fale connosco
            </h1>
            <h4 className="text-neutral-400 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h4>
            <input
              className="w-full border-b border-b-neutral-400 bg-transparent placeholder:text-neutral-400 text-neutral-400 outline-none"
              type="text"
              placeholder="Primeiro nome"
            />
            <input
              className="w-full border-b border-b-neutral-400 bg-transparent placeholder:text-neutral-400 text-neutral-400 outline-none"
              type="text"
              placeholder="Sobrenome"
            />
            <div className="flex gap-2 w-full">
              <input
                className="w-full border-b border-b-neutral-400 bg-transparent placeholder:text-neutral-400 text-neutral-400 outline-none"
                type="number"
                placeholder="Telefone"
              />
              <input
                className="w-full border-b border-b-neutral-400 bg-transparent placeholder:text-neutral-400 text-neutral-400 outline-none"
                type="email"
                placeholder="Email"
              />
            </div>
            <textarea className="w-full h-[150px] resize-none p-4 outline-none rounded-xl text-neutral-400 border-2 border-neutral-400 bg-white/70" />
            <div className="flex flex-col gap-4 w-full">
              <h4 className="text-neutral-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h4>
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {SOCIAL_MEDIAS.map((item, index) => (
                    <a key={index} className="size-8" href={item.link}>
                      <img src={item.icon} alt="icon" />
                    </a>
                  ))}
                </div>

                <button className="p-2 bg-azul text-white uppercase rounded-lg">
                  saber mais
                </button>
              </div>
            </div>
          </form>
        </Container>
      </section>

      <section className="w-full bg-azul lg:h-24 z-10 p-4">
        <Container className="h-full w-full flex-col lg:flex-row gap-4 lg:gap-0 flex items-start lg:items-center justify-between">
          {FOOTER_DOWM.map((data, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={data.icon} className="size-8" alt="" />
              <span className="text-white">{data.text}</span>
            </div>
          ))}
        </Container>
      </section>
    </footer>
  )
}

export default Footer
