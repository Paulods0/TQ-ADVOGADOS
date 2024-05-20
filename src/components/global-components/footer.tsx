import Container from "./container"
import { LuPhoneCall } from "react-icons/lu"
import { LiaMapMarkerAltSolid } from "react-icons/lia"
import { MdOutlineMailOutline } from "react-icons/md"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

const ICON_SIZE = 16

const END_FOOTER = [
  {
    text: "946710515",
    icon: <LuPhoneCall size={ICON_SIZE} />,
  },
  {
    text: "ad.cassoma@tqadvogados.co.ao",
    icon: <MdOutlineMailOutline size={ICON_SIZE} />,
  },
  {
    text: "Av. 4 Fevereiro, Marginal Edifício Kilamba 18º andar",
    icon: <LiaMapMarkerAltSolid size={ICON_SIZE} />,
  },
]

const Footer = () => {
  return (
    <footer className="relative mt-16 flex flex-col w-full">
      <div className="absolute -top-1 h-1 mx-auto left-1/2 -translate-x-1/2 bg-azul w-[300px] lg:w-[calc(100%-80px)]" />

      <img
        loading="lazy"
        src="/footer-image.png"
        className="relative w-full h-[550px] object-cover"
      />

      <div className="absolute right-20 p-8 flex flex-col w-[400px]">
        <h1 className="text-azul text-2xl uppercase">fale connosco</h1>
        <h4 className="text-zinc-500 capitalize text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
          similique!
        </h4>

        <form className="space-y-3 w-full mt-4">
          <input
            className="w-full placeholder:text-zinc-500 outline-none bg-transparent border-b-zinc-500 border-b"
            type="text"
            placeholder="Primeiro Nome"
          />
          <input
            className="w-full placeholder:text-zinc-500 outline-none bg-transparent border-b-zinc-500 border-b"
            type="text"
            placeholder="Último Nome"
          />
          <div className="flex gap-3 w-full items-center">
            <input
              className="bg-transparent placeholder:text-zinc-500 outline-none border-b-zinc-500 border-b"
              type="number"
              placeholder="Tel"
            />
            <input
              className="w-full placeholder:text-zinc-500 outline-none bg-transparent border-b-zinc-500 border-b"
              type="email"
              placeholder="Email"
            />
          </div>

          <textarea
            rows={6}
            className="w-full resize-none outline-none rounded-lg px-3 py-2 text-zinc-500 border border-zinc-500 bg-white/70"
          />
          <h4 className="text-zinc-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, autem.
          </h4>

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-white p-2 rounded-full bg-azul"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-white p-2 rounded-full bg-azul"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-white p-2 rounded-full bg-azul"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <button className="px-3 rounded-lg uppercase py-1 text-white bg-azul">
              enviar
            </button>
          </div>
        </form>
      </div>

      <Container className="bg-azul">
        <ul className="flex items-center justify-between text-white py-4">
          {END_FOOTER.map((text, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="p-2 rounded-full bg-white text-black">
                {text.icon}
              </span>
              <span>{text.text}</span>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  )
}

export default Footer
