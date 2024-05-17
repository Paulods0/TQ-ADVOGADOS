import { twMerge } from "tailwind-merge"

type Props = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge("px-4 w-full lg:px-40", className)}>{children}</div>
  )
}

export default Container
