import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head'
import blogStyles from './blog.module.scss'



const BlogPage = () => {
//     const mdData = useStaticQuery(graphql`
//     query{
//         allMarkdownRemark{
//             edges{
//               node{
//                 frontmatter{
//                   title
//                   date
//                 },
//                 fields{
//                   slug
//                 }
//               }
//             }
//           }
//         }
//     `)


  const CfData = useStaticQuery(graphql`
  query{
    allContentfulPost (
      sort: {
        fields: publishedDate,
        order: DESC
      }
    ){
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMM Do, YYY")
        }
      }
    }
  }
  `)


    return(
<Layout>
<Head title="Blog" />
<h1>Blog</h1>
<ol className={blogStyles.posts}>
        {CfData.allContentfulPost.edges.map(element => {
            return (<li key={Math.random()} className={blogStyles.post}>
                <Link to={`/blog/${element.node.slug}`}>
                <h2>{element.node.title}</h2>
                <p>{element.node.date}</p>
                </Link>
            </li>);
        }
        )}
</ol>
</Layout>
)
}

export default BlogPage