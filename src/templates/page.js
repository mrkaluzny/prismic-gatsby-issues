import React from "react"
import { graphql } from "gatsby"
import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import SliceZone from "@/components/SliceZone"

const Page = ({ data }) => {
  if (!data) return null
  const document = data.prismicPage.data

  return (
    <Layout>
      {/* <SEO title={document.title.text} /> */}
      <SliceZone data={document.body} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($uid: String) {
    prismicPage(uid: { eq: $uid }) {
      uid
      ...PrismicSlices
    }
  }
`

export default Page
