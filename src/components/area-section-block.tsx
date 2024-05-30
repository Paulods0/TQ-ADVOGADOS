import { FC } from "react"

type Data = {
  icon: string
  title: string
  description: string
  link?: string
}
type Props = {
  data: Data
}

const AreaSectionBlock: FC<Props> = ({ data }) => {
  return (
    <div className="w-full lg:size-[280px] rounded-3xl flex py-2 px-4 flex-col justify-center items-start bg-azul text-white gap-2">
      <img src={data.icon} className="size-16" />
      <h1 className="font-bold uppercase text-xl w-[150px]">{data.title}</h1>
      <p className="text-base line-clamp-3 w-full">{data.description}</p>
      <button className="border rounded-lg border-white px-3 text-white self-end">
        Ler mais
      </button>
    </div>
  )
}

export default AreaSectionBlock
