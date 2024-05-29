import { FC } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div className={twMerge("w-full px-8 lg:px-0 lg:w-[1200px] mx-auto", className)}>
      {children}
    </div>
  )
}

export default Container
