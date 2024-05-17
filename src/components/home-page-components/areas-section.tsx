import { ImHammer2 } from "react-icons/im"
import Container from "../global-components/container"
import AreaCard from "./area-card"
import { GoLaw } from "react-icons/go"
import { MdFamilyRestroom } from "react-icons/md"
import { FaHandshake } from "react-icons/fa6"

//hammer" | "family" | "handshake" | "law"

const CARDS_CONTENT = [
  {
    icon: <ImHammer2 size={35} />,
    title: "direito do consumidor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur numquam illo necessitatibus officiis ut quisquam ducimus molestiae harum quis repudiandae.",
  },
  {
    icon: <MdFamilyRestroom size={35} />,
    title: "direito da família",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur numquam illo necessitatibus officiis ut quisquam ducimus molestiae harum quis repudiandae.",
  },
  {
    icon: <FaHandshake size={35} />,
    title: "direito do trabalhista",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur numquam illo necessitatibus officiis ut quisquam ducimus molestiae harum quis repudiandae.",
  },
  {
    icon: <GoLaw size={35} />,
    title: "direito do consumidor",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur numquam illo necessitatibus officiis ut quisquam ducimus molestiae harum quis repudiandae.",
  },
]

const AreasSection = () => {
  return (
    <section className="flex items-center justify-center w-full">
      <Container className="flex flex-col gap-6">
        <h1 className="uppercase text-base md:text-lg lg:text-2xl text-azul font-semibold">
          áreas de atuação
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:w-auto ">
          {CARDS_CONTENT.map((card, index) => (
            <AreaCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AreasSection
