import React from "react"
import { graphql } from "gatsby"

const PageHeader = ({ data }) => {
  return (
    <section className="py-20 sm:py-48 relative bg-blue overflow-hidden">
      <div className="container relative">
        <div className="max-w-3xl mx-auto z-20 relative text-center">
          <h1 className="">{data.primary.title1.text}</h1>
          {data.primary.content.text && <p>{data.primary.content.text}</p>}
        </div>
      </div>
    </section>
  )
}

export default PageHeader

export const query = graphql`
  fragment PageHeader on PrismicPageBodyPageHeader {
    slice_type
    primary {
      title1 {
        text
      }
      content {
        text
      }
    }
  }
`
