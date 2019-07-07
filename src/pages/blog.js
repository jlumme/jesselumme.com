import React from "react"
import Layout from "../components/Layout"

const IndexPage = ({ data }) => {
  return <Layout data={data}>Hello world!</Layout>
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { eq: "jesse.png" }) {
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
