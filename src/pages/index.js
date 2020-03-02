import React from "react"
import { Link } from "gatsby"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Post from "../components/Post"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <StaticQuery
      query={indexQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                body={node.excerpt}
                date={node.frontmatter.date}
                description={node.frontmatter.description}
                fluid={node.frontmatter.image.childImageSharp.fluid}
              />
            ))}
          </div>
        )
      }}
    ></StaticQuery>
  </Layout>
)

export default IndexPage

const indexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "LWC" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            category
            description
            path
            title
            date
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
