import { FiPhone } from "react-icons/fi"
import { GrActions } from "react-icons/gr"
import { IoHomeOutline } from "react-icons/io5"
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2"

export const LINKS = [
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
