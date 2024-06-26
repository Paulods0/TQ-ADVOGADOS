import { Link, NavLink } from "react-router-dom"
import Container from "./container"
import { HEADER_LINKS } from "@/constants"
import Search from "./search"
import { useState } from "react"
import MobileMenu from "../mobile-components/mobile-menu"
import { motion } from "framer-motion"

const Header = () => {
  const [canChange, setCanChange] = useState(false)

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setCanChange(true)
    } else {
      setCanChange(false)
    }
  })

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
      className={`fixed w-full transition-all z-50 duration-200 ease-in-out ${
        canChange ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-5">
        <Link reloadDocument to="/">
          <img src="logo.png" className="h-8 lg:h-14 w-fit object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-12">
          <nav className="flex items-center gap-4">
            {HEADER_LINKS.map((link, index) => (
              <NavLink
                key={index}
                to={link.link}
                className={({ isActive }) =>
                  isActive
                    ? " text-azul underline capitalize"
                    : "text-azul  capitalize"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Search />
        </div>

        <MobileMenu />
      </Container>
    </motion.header>
  )
}

export default Header
