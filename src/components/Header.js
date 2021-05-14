import React, { useState } from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white py-8 sticky top-0 z-60">
      <div className="container ">
        <div className="flex justify-between items-center">

          <div className="relative">
            <ul className="border-none flex p-0 flex-row items-center justify-between visible opacity-100 relative">
              <Link className="mr-8" to="/home">
                Home
              </Link>
              <Link to="/about">About</Link>
            </ul>

            <button
              aria-label="Open mobile menu"
              className="nav__btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
