import { graphql } from 'gatsby';
import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { rhythm } from 'utils/typography';
import Navbar from 'components/Navbar';

function PageTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark;
  const { title } = frontmatter;

  return (
    <Layout>
      <SEO title={`${title}`} />

      <Navbar />

      <div
        className="container"
        style={{ marginBottom: rhythm(1) }}
      >
        <div className="columns is-centered">
          <div className="column is-8">

            <section
              className="content"
              style={{ marginLeft: rhythm(0.5), marginRight: rhythm(0.5) }}
              dangerouslySetInnerHTML={{ __html: html }}
            />

          </div>
        </div>
      </div>

    </Layout>
  );
}

export default PageTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
