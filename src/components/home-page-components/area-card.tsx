import { Link } from "react-router-dom"

type Props = {
  icon: React.JSX.Element
  title: string
  description: string
}

const AreaCard = ({ icon, title, description }: Props) => {
  return (
    <div className="bg-azul text-white p-3 w-full items-start justify-between rounded-lg flex flex-col gap-2">
      <div className="">{icon}</div>
      <h1 className="uppercase text-xl">{title}</h1>
      <p className=" text-sm line-clamp-4">{description}</p>
      <Link to={"#"} className=" border p-1 rounded-lg text-xs self-end">
        Ler mais
      </Link>
    </div>
  )
}

export default AreaCard
