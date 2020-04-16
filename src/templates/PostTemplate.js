import { graphql, Link } from 'gatsby';
import React from 'react';

import Layout from 'components/Layout';
import PostDefinition from 'components/PostDefinition';
import PostSubheader from 'components/PostSubheader';
import SEO from 'components/SEO';
import { rhythm } from 'utils/typography';
import Navbar from 'components/Navbar';

function PostTemplate({ data, pageContext }) {
  const { frontmatter, html } = data.markdownRemark;
  const {
    title, date, definition, excerpt, author,
  } = frontmatter;

  const { previous, next } = pageContext;

  return (
    <Layout>
      <SEO title={`${title}`} />

      <Navbar />

      <section
        className="columns is-centered"
        style={{
          marginLeft: rhythm(2.5),
          marginRight: rhythm(2.5),
        }}
        data-sal="fade"
        data-sal-easing="ease"
      >
        <div className="column is-8">
          <div className="container">
            <h1 className="title is-2">
              {title}
            </h1>

            <h2 className="subtitle">
              {!definition && excerpt}
            </h2>

            <PostSubheader date={date} author={author} />

          </div>
        </div>
      </section>

      <div
        className="container"
        style={{ marginBottom: rhythm(1) }}
      >
        <div className="columns is-centered">
          <div className="column is-8">

            {definition && <PostDefinition definition={definition} />}

            <section
              className="content"
              style={{ marginLeft: rhythm(0.5), marginRight: rhythm(0.5) }}
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <hr style={{ marginTop: rhythm(1.5) }} />

          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ marginBottom: rhythm(1) }}
      >
        <div className="columns is-centered">
          <div className="column is-8">
            <nav>
              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  listStyle: 'none',
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ←
                    {' '}
                    {previous.frontmatter.title}
                  </Link>
                  )}
                </li>
                <li>
                  {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title}
                    {' '}
                    →
                  </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

    </Layout>
  );
}

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        excerpt
        definition
        author
      }
    }
  }`;
