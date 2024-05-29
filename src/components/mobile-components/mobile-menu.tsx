import { TbMenuDeep } from "react-icons/tb"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import { HEADER_LINKS } from "@/constants"
import { NavLink } from "react-router-dom"

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="block lg:hidden" asChild>
        <TbMenuDeep className="text-4xl  text-azul" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <img src="logo.png" className="h-16 w-full object-contain" alt="" />
          </SheetTitle>
        </SheetHeader>
        <nav className="h-full mt-12">
          <ul className="flex flex-col gap-8 w-full">
            {HEADER_LINKS.map((link, index) => (
              <li key={index} className="w-full">
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center uppercase gap-2 text-2xl text-zinc-500"
                      : "flex items-center uppercase gap-2 text-2xl text-azul"
                  }
                >
                  {link.icon}
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
