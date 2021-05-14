import React from "react"
import { graphql } from "gatsby"

import Layout from "@/components/Layout"
import SliceZone from "@/components/SliceZone"

const IndexPage = ({ data }) => {
  const document = data.prismicPage.data

  return (
    <Layout>
      <SliceZone data={document.body} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    prismicPage(uid: { eq: "home" }) {
      uid
      ...PrismicSlices
    }
  }
`
