import React from "react"
import { graphql } from "gatsby"
import PageHeader from "@/sections/PageHeader"
import HalfSection from "@/sections/HalfSection"
import Gallery from "@/sections/Gallery"

const SliceZone = ({ data }) => {
  const sliceComponents = {
    page_header: PageHeader,
    content___image: HalfSection,
    gallery: Gallery,
  }

  const sliceZoneContent = data.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent data={slice} key={`slice-${index}`} />
    }
  })

  return <>{sliceZoneContent}</>
}

export default SliceZone

export const query = graphql`
  fragment PrismicSlices on PrismicPage {
    data {
      title {
        text
      }
      image {
        url
      }
      description
      body {
        ...PageHeader
        ...HalfSection
        ...Gallery
      }
    }
  }
`
