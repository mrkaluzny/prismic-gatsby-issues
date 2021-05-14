import React from "react"
import { graphql, Link } from "gatsby"
import { RichText } from "prismic-reactjs"

const Gallery = ({ data }) => {
  const gallery = data.items
  const section = data.primary
  console.log("gallery", data)
  return (
    <section className="py-20 relative bg-white overflow-hidden">
      <div className="container relative">
        {section.title2 && (
          <h1 className="text-center mb-16">{section.title2.text}</h1>
        )}
        {section.content && (
          <div className="markdown-body">
            <RichText render={section.content.raw} />
          </div>
        )}

        <div
          className="gallery__grid 
        "
        ></div>
        <div className="flex justify-center items-center">
          {section.alt_link && (
            <Link
              className="  rounded-xxl text-white bg-red flex justify-center items-center py-4 px-8 mx-auto mt-16"
              to={`/${section.alt_link}`}
            >
              View full gallery
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default Gallery

export const query = graphql`
  fragment Gallery on PrismicPageBodyGallery {
    slice_type
    primary {
      alt_link
      title2 {
        text
      }
    }
    items {
      image1 {
        fluid(maxWidth: 350, maxHeight: 250, imgixParams: { q: 70 }) {
          ...GatsbyPrismicImageFluid_noBase64
        }
      }
    }
  }
`
