import React from "react"
import { Link } from "gatsby"

const Footer = ({ siteTitle }) => {

  return (
    <footer className="bg-blue py-8">
      <div className="container ">
        <div className="flex flex-col justify-between items-center md:flex-row">

          <div className="flex flex-col md:flex-row items-center mt-8 md:mt-0">
            <ul className="flex flex-col items-center justify-between md:flex-row">
              <Link className="mr-8" to="/home">
                Home
              </Link>
              <Link to="/about">About</Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
