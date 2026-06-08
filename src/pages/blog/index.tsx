import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

interface BlogIndexProps {
  data: any
}

const BlogIndex = ({ data }: BlogIndexProps) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <SEO title="Blog" />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <article
              key={post.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-semibold mb-2 text-white">
                  <Link
                    to={`/blog/${post.frontmatter?.slug || post.id}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {post.frontmatter?.title}
                  </Link>
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {new Date(post.frontmatter?.date).toLocaleDateString()}
                </p>
                <p className="text-gray-300 line-clamp-3">
                  {post.frontmatter?.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default BlogIndex

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { draft: { ne: true } } }) {
      nodes {
        id
        frontmatter {
          title
          date
          description
          slug
        }
      }
    }
  }
`
