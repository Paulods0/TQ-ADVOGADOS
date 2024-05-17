import Container from "./container"
import { LuPhoneCall } from "react-icons/lu"
import { LiaMapMarkerAltSolid } from "react-icons/lia"
import { MdOutlineMailOutline } from "react-icons/md"

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
    <footer className="relative flex flex-col w-full mt-4">
      <div className="absolute -top-1 h-1 mx-auto left-1/2 -translate-x-1/2 bg-azul w-[300px] lg:w-[calc(100%-80px)]" />

      <img
        src="/footer-image.png"
        className="relative w-full h-[550px] object-cover"
      />

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
