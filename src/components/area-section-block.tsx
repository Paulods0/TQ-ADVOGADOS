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
    <div className="w-full lg:size-[290px] rounded-3xl flex p-8 flex-col justify-center items-start bg-azul text-white gap-4">
      <img src={data.icon} className="size-16" />
      <h1 className="font-bold uppercase text-xl">{data.title}</h1>
      <p className="text-sm">{data.description}</p>
      <button className="border rounded-lg border-white px-3 text-white self-end">
        Ler mais
      </button>
    </div>
  )
}

export default AreaSectionBlock
