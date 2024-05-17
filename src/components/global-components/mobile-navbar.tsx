import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet"

import { LINKS } from "../../constants"
import { Link } from "react-router-dom"
import { RiMenu5Fill } from "react-icons/ri"

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex lg:hidden cursor-pointer" asChild>
        <div>
          <RiMenu5Fill size={36} />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex">
            <img
              src="/logo.png"
              className="w-40 h- object-contain"
              alt="logotipo"
            />
          </div>
        </SheetHeader>

        <ul className="flex flex-col font-serif text-azul gap-4 mt-12">
          {LINKS.map((link, index) => (
            <li key={index} className="w-full py-2 border-b">
              <Link
                className="uppercase flex items-center gap-2 text-xl"
                to={link.link}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar
