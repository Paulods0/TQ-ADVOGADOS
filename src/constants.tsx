import { FiPhone } from "react-icons/fi"
import { GrActions } from "react-icons/gr"
import { IoHomeOutline } from "react-icons/io5"
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2"

export const HEADER_LINKS = [
  {
    label: "inicial",
    link: "/",
    icon: <IoHomeOutline />,
  },
  {
    label: "sobre nós",
    link: "/sobre-nos",
    icon: <HiOutlineQuestionMarkCircle />,
  },
  {
    label: "áreas de atuação",
    link: "/areas-de-atuacao",
    icon: <GrActions />,
  },
  {
    label: "contactos",
    link: "/contactos",
    icon: <FiPhone />,
  },
]

export const AREA_SECTION_DATA = [
  {
    icon: "icons/law.png",
    title: "DIREITO DO CONSUMIDOR",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, earum?",
  },
  {
    icon: "icons/family.png",
    title: "DIREITO DA FAMÍLIA",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, earum?",
  },
  {
    icon: "icons/hands.png",
    title: "DIREITO DO TRABALHISTA",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, earum?",
  },
  {
    icon: "icons/balance.png",
    title: "DIREITO DO CONSUMIDOR",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, earum?",
  },
]

export const SOCIAL_MEDIAS = [
  {
    icon: "icons/facebook.png",
    link: "https://facebook.com/",
  },
  {
    icon: "icons/instagram.png",
    link: "https://instagram.com/",
  },
  {
    icon: "icons/linkedin.png",
    link: "https://linkedin.com/",
  },
]

export const FOOTER_DOWM = [
  { icon: "icons/phone.png", text: "(+244) 946 710 515" },
  { icon: "icons/email.png", text: "ad.cassoma@tqadvogados.co.ao" },
  {
    icon: "icons/pin.png",
    text: "Av. 4 de Fevereiro, Marginal Edifício Kilamba 18º anda",
  },
]
