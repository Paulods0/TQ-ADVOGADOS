import { useRef } from "react"
import Container from "../global-components/container"
import IntroCard from "./intro-card"
import { motion, useInView } from "framer-motion"

const variants = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
}

const IntroductionSection = () => {
  const ref = useRef(null)

  const inView = useInView(ref, {
    // once: true,
    margin: "-300px",
  })

  return (
    <motion.section
      ref={ref}
      // variants={variants}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
      className="lg:h-screen flex items-center justify-center w-full"
    >
      <Container className="flex flex-col-reverse items-center gap-12 md:grid md:grid-cols-2 md:place-items-center lg:place-items-start lg:gap-0">
        <motion.div>
          <IntroCard />
        </motion.div>

        <motion.div className="flex flex-col items-start gap-2">
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
        </motion.div>
      </Container>
    </motion.section>
  )
}

export default IntroductionSection
