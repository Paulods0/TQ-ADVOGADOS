import { NavLink } from "react-router-dom"
import Container from "./container"
import { HEADER_LINKS } from "@/constants"
import Search from "./search"

const Header = () => {
  return (
    <header className="fixed z-10 w-full ">
      <Container className="flex items-center bg-red-300 justify-between py-5">
        <img src="logo.png" className="h-14 w-fit object-contain" />

        <div className="flex items-center gap-12">
          <nav className="flex items-center gap-4">
            {HEADER_LINKS.map((link, index) => (
              <NavLink
                key={index}
                to={link.link}
                className={({ isActive }) =>
                  isActive ? "text-azul capitalize" : "text-black capitalize"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Search />
        </div>
      </Container>
    </header>
  )
}

export default Header
