import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from "gatsby-plugin-image"
import { H1 } from '../components/Heading'

const BlogPost = ({ data }) => {
    const { title, body, hero} = data.contentfulBlogPost

    return (
        <Layout>
          <GatsbyImage
          image={hero.gatsbyImageData}
          />
            <H1>{title}</H1>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    )
}

export default BlogPost;

export const pageQuery = graphql`
query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      hero {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          width: 960
        )
      }
    }
  }
`