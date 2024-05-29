import { AREA_SECTION_DATA } from "@/constants"
import Container from "../global/container"
import AreaSectionBlock from "../area-section-block"

const AreasSection = () => {
  return (
    <Container className="mt-12 flex flex-col gap-8">
      <h1 className="text-3xl font-semibold uppercase">áreas de atuação</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 place-items-center w-full">
        {AREA_SECTION_DATA.map((data, i) => (
          <AreaSectionBlock key={i} data={data} />
        ))}
      </section>
    </Container>
  )
}

export default AreasSection
