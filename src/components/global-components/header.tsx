import { Link } from "react-router-dom"
import Container from "./container"
import { LINKS } from "@/constants"

import { IoSearchOutline } from "react-icons/io5"
import MobileNavbar from "./mobile-navbar"
import { useEffect, useState } from "react"

const Header = () => {
  const [canChange, setCanChange] = useState(false)

  const handleChange = () => {
    if (window.scrollY >= 620) {
      setCanChange(true)
      // console.log("Can change")
    } else {
      setCanChange(false)
      // console.log("Cannot change")
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleChange)
    return () => document.removeEventListener("scroll", handleChange)
  }, [])

  return (
    <header
      className={`w-full fixed top-0 z-50 ${
        canChange
          ? "bg-white shadow-md transition-all duration-200 ease-in-out"
          : ""
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link to={"/"} className="relative w-56 h-16 md:w-64 lg:w-72">
          <img
            src="/logo.png"
            className="object-contain absolute w-full h-full inset-0"
            alt="logotipo"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-5">
          <ul className="flex items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Link className="text-azul capitalize" to={link.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 w-32 px-2 rounded-full border border-azul">
            <input
              type="text"
              className="border-none text-sm text-azul outline-none w-full bg-transparent"
            />
            <IoSearchOutline size={28} />
          </div>
        </nav>
        <MobileNavbar />
      </Container>
    </header>
  )
}

export default Header
