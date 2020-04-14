import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import { rhythm } from 'utils/typography';
import BlogTile from './BlogTile';

function BlogSection() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 3,
        sort: { fields: [frontmatter___title], order: DESC },
        filter: {frontmatter: {type: {eq: "post"}}},
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
              excerpt
              type
            }
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <section className="hero" style={{ marginBottom: rhythm(2) }}>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <h1 className="title">
                Blog
              </h1>

              <h2 className="subtitle">
                The best resources to learn about student debt, income share agreements,
                and investing in human potential.
              </h2>
            </div>
          </div>

          <div className="tile is-ancestor">
            {posts.map(({
              node: { fields: { slug }, frontmatter: { title, excerpt } },
            }) => (
              <div className="tile is-parent is-4">
                <BlogTile title={title} excerpt={excerpt} permalink={slug} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default BlogSection;
