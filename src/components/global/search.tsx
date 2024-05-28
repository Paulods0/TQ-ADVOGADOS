import { GoSearch } from "react-icons/go"
// import { motion } from "framer-motion"

const Search = () => {
  return (
    <div className="w-[120px] flex items-center gap-2 border rounded-full border-azul px-2 ">
      <input type="text" className="border-none outline-none w-full bg-transparent" />
      <GoSearch className="cursor-pointer text-3xl" />
    </div>
  )
}

export default Search
