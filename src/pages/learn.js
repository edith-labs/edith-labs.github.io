import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Navbar from 'components/Navbar';
import { rhythm } from 'utils/typography';
import './styles.scss';

function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC },
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
              author
              type
            }
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>

      <SEO title="Blog" />

      <Navbar />

      <div className="columns is-centered" style={{ margin: rhythm(1) }}>

        <div className="column is-10">
          <div className="tile is-ancestor is-vertical">
            {posts.map(({
              node: {
                fields: { slug }, frontmatter: {
                  title, excerpt, date, author,
                },
              },
            }, i) => (
              <div className="tile is-parent">
                <Link className="tile is-child" to={slug}>
                  <p className="text-link title">{title}</p>
                  <p className="text-link subtitle is-6">
                    {`Updated ${date}`}
                    <br />
                    {`by ${author}`}
                  </p>
                  <p className="text-link">{excerpt}</p>
                  {i !== posts.length - 1 && <hr />}
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>

    </Layout>
  );
}

export default BlogPage;
