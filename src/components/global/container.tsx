import { FC } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={twMerge("w-[800px]  md:w-[1200px] mx-auto", className)}
    >
      {children}
    </div>
  )
}

export default Container
