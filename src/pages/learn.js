import addToMailchimp from 'gatsby-plugin-mailchimp'
import { graphql, useStaticQuery, Link } from 'gatsby';
import React, { useState } from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { rhythm } from 'utils/typography';
import './styles.scss';

function BlogPage() {
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [isStudent, setIsStudent] = useState(true);

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
              author
              excerpt
            }
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  const handleSubmit = (e) => {
    e.preventDefault();
    const group = isStudent ? { 'group[26469][4]': '4' } : { 'group[26469][1]': '1' };
    addToMailchimp(email, group)
      .then(() => {
        setEmail('');
        setIsEmailSubmitted(true);
      });
  }

  console.log(posts);

  return (
    <Layout>

      <SEO title='Blog' />

      <div
        class='container'
        style={{ marginTop: rhythm(3) }}
      >
        <div class='columns is-centered' style={{ marginLeft: rhythm(1), marginRight: rhythm(1)}}>

          <div class='column is-6'>
            <section class='hero is-child is-primary is-bold notification' style={{ minHeight: '40vh'}}>
              <div class='hero-body'>
                <p class='title'>Edith Blog</p>
                <p class='subtitle'>
                  Learn about student debt, income share agreements, and investing in
                  human potential.
                </p>
              </div>
            </section>
          </div>

          <div class='column is-4'>

            <h3 class='title'>Featured</h3>

            <hr style={{ marginTop: rhythm(-0.5), }} />

            {posts.slice(0, 3).map(({ node: { fields: { slug }, frontmatter: { title, date } } }) => (
              <Link to={slug}>
                <section style={{ marginBottom: rhythm(0.5) }}>
                  <p class='text-link'>{date}</p>
                  <h3 class='title text-link is-4'>{title}</h3>
                </section>
              </Link>
            ))}
          </div>

        </div>

        <div class='columns is-centered' style={{ marginLeft: rhythm(1), marginRight: rhythm(1)}}>
          <div class='column is-10'>
            <hr />
          </div>
        </div>

        <div class='columns is-centered' style={{ marginLeft: rhythm(1), marginRight: rhythm(1)}}>

          <div class='column is-10'>
            <div class='tile is-ancestor is-vertical'>
              {posts.map(({ node: { fields: { slug }, frontmatter: { title, excerpt, date, author } } }) => (
                <div class="tile is-parent">
                  <Link class='tile is-child' to={slug}>
                    <p class='text-link title'>{title}</p>
                    <p class='text-link subtitle is-6'>
                      {`Updated ${date}`}
                      <br />
                      {`by ${author}`}
                    </p>
                    <p class='text-link'>{excerpt}</p>
                    <hr />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div class='columns is-centered' style={{ marginLeft: rhythm(1), marginRight: rhythm(1), marginBottom: rhythm(1) }}>
          <div class='column is-8 has-text-centered'>
            <h3 class='title is-4'>Keep up with the Edith blog</h3>
            <h3 class='subtitle is-5'>Get updates about our new blog posts and progress we've made as a company</h3>


          </div>
        </div>

        <div class='columns is-centered' style={{ marginLeft: rhythm(1), marginRight: rhythm(1), marginBottom: rhythm(1) }}>
          <div class='column is-4'>
            <form onSubmit={handleSubmit}>

              <div class="buttons has-addons is-centered">
                <button
                  class={`button is-outline ${isStudent ? 'is-primary' : ''}`}
                  onClick={() => setIsStudent(true)}
                  type='button'
                >
                  Student
                </button>
                <button
                  class={`button is-outline ${!isStudent ? 'is-primary' : ''}`}
                  onClick={() => setIsStudent(false)}
                  type='button'
                >
                  Mentor
                </button>
              </div>

              <input
                style={{ marginBottom: rhythm(1) }}
                placeholder='Email'
                type="email"
                value={email}
                name="EMAIL"
                class="input"
                id="mce-EMAIL"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                class='button is-fullwidth is-primary'
                type='submit'
                style={{ marginBottom: rhythm(0.5) }}
              >
                Learn more
              </button>

              {isEmailSubmitted && <h3 class='subtitle'>Thank you!</h3>}
            </form>
          </div>
        </div>

      </div>
    </Layout>
  );
}

export default BlogPage;
