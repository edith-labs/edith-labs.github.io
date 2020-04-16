import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { FaEnvelope, FaTwitter } from 'react-icons/fa';

import { rhythm } from '../utils/typography';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
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
              type
            }
          }
        }
      }
      placeholderImage: file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      {children}
      <footer className="hero is-dark" style={{ padding: 0, margin: 0 }}>
        <div className="hero-body">
          <div className="container">
            <div className="column is-2 is-hidden-mobile" style={{ padding: 0 }}>
              <Link to="/">
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              </Link>
            </div>

            <div className="columns" style={{ marginTop: rhythm(1.5), marginBottom: rhythm(1.5) }}>

              <div className="column is-4">
                <Link to="/">
                  <h4 className="subtitle">Home</h4>
                </Link>
              </div>

              <div className="column is-4">

                {/* <Link to="/learn"> */}
                <h4 className="subtitle" style={{ marginBottom: rhythm(1) }}>Blog</h4>
                {/* </Link> */}

                {posts.map(({ node: { fields: { slug }, frontmatter: { title } } }) => (
                  <Link to={slug}><p className="footer-link">{title}</p></Link>
                ))}

              </div>

              <div className="column is-4">

                <h4 className="subtitle" style={{ marginBottom: rhythm(1) }}>Social</h4>

                <a
                  href="https://twitter.com/edith_labs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="footer-link"><FaTwitter /></p>
                </a>
                <a href="mailto:hello@edithlabs.com">
                  <p className="footer-link"><FaEnvelope /></p>
                </a>

              </div>

            </div>

            <p style={{ color: 'rgb(124, 124, 124)' }}>
              Copyright ©
              {' '}
              {new Date().getFullYear()}
              {' '}
              Edith Labs
            </p>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
