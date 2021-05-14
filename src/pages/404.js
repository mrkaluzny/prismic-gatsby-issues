import * as React from "react"

import Layout from "@/components/Layout"
import Logo from "@/icons/Logo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <section className="bg-white py-16">
      <div className="container text-center">
        <div className="flex items-center justify-center flex-col">
          <Logo />
          <p className="text-green text-lg ">Error 404</p>
          <h1 className="text-h2 mb-4">Page not found</h1>
          <p>Sorry, we can't find the page you are looking for</p>
          <Link className="btn mt-8 ">Back to homepage</Link>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
