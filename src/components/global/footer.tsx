import { FOOTER_DOWM, SOCIAL_MEDIAS } from "@/constants"
import Container from "./container"

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-16">
      <section
        style={{
          backgroundImage: "url('footer-image.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "680px",
          marginTop: "56px",
          position: "relative",
        }}
      >
        <div className="w-[80%] mx-auto h-1 bg-azul absolute -top-1 left-1/2 -translate-x-1/2" />

        <Container className="flex items-center justify-end h-full">
          <form className="bg-transparent space-y-8 w-full lg:w-[450px]">
            <div className="w-full">
              <h1 className="text-2xl text-azul uppercase font-semibold">
                fale connosco
              </h1>
              <h4 className="text-base text-zinc-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h4>
            </div>

            <input
              type="text"
              placeholder="Primeiro nome"
              className="w-full bg-transparent placeholder:text-zinc-500 text-zinc-500 border-b-2 border-zinc-400 outline-none"
            />
            <input
              type="text"
              placeholder="Sobrenome"
              className="w-full bg-transparent placeholder:text-zinc-500 text-zinc-500 border-b-2 border-zinc-400 outline-none"
            />

            <div className="flex items-center gap-2 w-full">
              <input
                className="border-b-2 placeholder:text-zinc-500 text-zinc-500 border-zinc-400 bg-transparent w-full outline-none"
                type="number"
                placeholder="Tel"
              />
              <input
                className="border-b-2 placeholder:text-zinc-500 text-zinc-500 border-zinc-400 bg-transparent w-full outline-none"
                type="email"
                placeholder="Email"
              />
            </div>

            <textarea className="w-full outline-none p-4 placeholder:text-zinc-500 text-zinc-500 bg-zinc-100/70 resize-none rounded-xl border-2 border-zinc-400 h-[200px]" />

            <div className="flex flex-col">
              <p className="text-zinc-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, nisi.
              </p>

              <div className="w-full flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  {SOCIAL_MEDIAS.map((item, index) => (
                    <a key={index} className="size-8" href={item.link}>
                      <img src={item.icon} alt="icon" />
                    </a>
                  ))}
                </div>

                <button className="px-3 py-2 text-white bg-azul uppercase rounded-lg">
                  saber mais
                </button>
              </div>
            </div>
          </form>
        </Container>
      </section>

      <section className="w-full h-auto lg:h-24 bg-azul">
        <Container className="flex items-start gap-4 lg:gap-0 py-4 lg:py-0 lg:items-center lg:flex-row flex-col h-full justify-between text-white text-lg">
          {FOOTER_DOWM.map((data, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={data.icon} className="size-8" alt="" />
              <span>{data.text}</span>
            </div>
          ))}
        </Container>
      </section>
    </footer>
  )
}

export default Footer
