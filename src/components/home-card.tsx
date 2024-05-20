import { FC, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { twMerge } from "tailwind-merge"

const HomeCard = () => {
  const [filter, setFilter] = useSearchParams({ filter: "1" })
  const currentFilter = filter.get("filter")
  const handleFilter = (value: string) => {
    setFilter((prev) => {
      prev.set("filter", value)
      return prev
    })
  }

  return (
    <div className="w-full h-[220px] flex items-center">
      <div className="relative h-full flex items-center w-full p-4 rounded-3xl border-azul border">
        <div className="flex items-center w-full justify-start h-full">
          <img
            src="/card-image.jpg"
            className="object-cover w-[250px] h-full rounded-3xl"
            alt="imagem"
          />
          <div className="h-full w-1 bg-zinc-400 mx-6" />
          <div className="flex items-start justify-center gap-2 h-full flex-col">
            <h1 className="text-azul text-2xl font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="line-clamp-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              accusantium repellat ipsum necessitatibus, eveniet quae vel
              reiciendis! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Autem eveniet labore amet libero rerum impedit, deserunt
              deleniti voluptate magnam similique nisi architecto, incidunt iure
              cumque enim eos distinctio dolorem sapiente! Architecto quam
              accusantium repellat ipsum dolor sit amet consectetur adipisicing
              elit. Autem eveniet labore amet libero rerum impedit, deserunt
              deleniti voluptate magnam similique nisi architecto, incidunt iure
              cumque enim eos distinctio dolorem sapiente! Architecto quam
              accusantium repellat ipsum necessitatibus, eveniet quae vel
              reiciendis!
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-start  justify-center uppercase h-[240px]">
        {Array.from({ length: 3 }).map((_, i) => (
          <CardButton
            key={i}
            label={(i + 1).toString()}
            handleFilter={handleFilter}
            active={currentFilter === (i + 1).toString()}
            pos={i + 1 <= 1 ? "top" : i + 1 === 2 ? "mid" : "bottom"}
          />
        ))}
      </div>
    </div>
  )
}

export default HomeCard

type Props = {
  handleFilter: (value: string) => void
  label: string
  active: boolean
  pos: "top" | "mid" | "bottom"
}

const CardButton: FC<Props> = ({ handleFilter, label, active, pos }) => {
  return (
    <button
      onClick={() => handleFilter(label)}
      className={`${
        active ? "bg-azul px-6 text-white" : "bg-cinza text-neutral-800"
      } px-4 py-5 rounded-r-2xl`}
    >
      {label}
    </button>
  )
}
