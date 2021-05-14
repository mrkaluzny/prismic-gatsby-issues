import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

const HalfSection = ({ data, buttons, textSide }) => {
  let section = data.primary

  return (
    <section className="py-8 md:py-16">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-1/2">
            <div className="markdown-body">
              <RichText render={section.content.raw} />
            </div>
          </div>
          <div className="w-full md:w-5/12 mb-4 md:m-0">
            Image alt {section.image1.alt}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HalfSection

export const query = graphql`
  fragment HalfSection on PrismicPageBodyContentImage {
    slice_type
    primary {
      content {
        raw
      }
      image1 {
        fluid(maxWidth: 600, imgixParams: { q: 70 }) {
          ...GatsbyPrismicImageFluid_noBase64
        }
        alt
      }
      reversed
    }
    items {
      type
      button_text
      link {
        slug
        link_type
        uid
        url
      }
      alt_link
    }
  }
`
