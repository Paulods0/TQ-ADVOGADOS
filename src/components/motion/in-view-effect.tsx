import { FC, ReactNode } from "react"
import { motion } from "framer-motion"

type Props = {
  children: ReactNode
}

const whileInViewVariant = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
}

const InViewEffect: FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={whileInViewVariant}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  )
}

export default InViewEffect
