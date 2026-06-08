import * as React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Markdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import Layout from "../components/layout"

interface BlogPostProps {
  data: any
}

const BlogPostTemplate = ({ data }: BlogPostProps) => {
  const post = data.mdx
  const title = post.frontmatter?.title || "Blog Post"
  const date = post.frontmatter?.date

  return (
    <Layout>
      <SEO title={title} />
      <main className="flex-grow relative overflow-hidden">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 pattern-grid" aria-hidden="true" />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <article className="prose prose-invert lg:prose-xl max-w-none mx-auto 
            prose-headings:font-bold prose-h1:text-5xl prose-h2:text-3xl prose-h3:text-2xl
            prose-p:leading-relaxed prose-a:text-blue-400 hover:prose-a:text-blue-300
            prose-pre:bg-black/50 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded">
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">{title}</h1>
              {date && (
                <p className="text-gray-400 text-lg">
                  {new Date(date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              )}
            </header>

            <div className="blog-content">
              <Markdown
                components={{
                  h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-8 text-white">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-3xl md:text-4xl font-semibold mb-4 mt-7 text-white border-b border-gray-700 pb-2">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-2xl md:text-3xl font-medium mb-3 mt-6 text-white">{children}</h3>,
                  p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-300">{children}</p>,
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "")
                    const isInline = inline ?? !match
    
                    return !isInline && match ? (
                      <div className="relative my-6 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
                        <SyntaxHighlighter
                          style={oneDark}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  },
                }}
              >
                {post.body}
              </Markdown>
            </div>
          </article>
        </div>
      </main>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
        description
      }
    }
  }
`
