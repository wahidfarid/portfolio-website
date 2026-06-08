import { GatsbyNode } from "gatsby"
import path from "path"

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw Error(result.errors[0].message)
  }

  const posts = result.data.allMdx.nodes

  posts.forEach((post: any) => {
    const slug = post.frontmatter?.slug || post.id
    createPage({
      path: `/blog/${slug}`,
      component: path.resolve(__dirname, `src/templates/blog-post.tsx`),
      context: {
        id: post.id,
      },
    })
  })
}
