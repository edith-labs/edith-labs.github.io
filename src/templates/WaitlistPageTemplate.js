import { graphql } from 'gatsby';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import 'pages/styles.scss';
import { rhythm } from 'utils/typography';
import Navbar from 'components/Navbar';

function WaitlistPageTemplate({ data }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [school, setSchool] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { html } = data.markdownRemark;

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(
      email,
      {
        FNAME: firstName,
        SCHOOL: school,
        'group[26469][16]': '16',
      },
    ).then(() => {
      setEmail('');
      setFirstName('');
      setSchool('');
      setIsSubmitted(true);
    });
  };

  return (
    <Layout>

      <SEO title="Waitlist" />

      <Navbar />

      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8" style={{ maxWidth: 500 }}>

            <section
              className="content"
              style={{ marginLeft: rhythm(0.5), marginRight: rhythm(0.5) }}
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <form
              onSubmit={handleSubmit}
              style={{ marginLeft: rhythm(0.5), marginRight: rhythm(0.5) }}
            >
              <span className="form-label">First Name</span>
              <input
                style={{ marginBottom: rhythm(0.5) }}
                placeholder="First Name"
                value={firstName}
                name="FNAME"
                className="input"
                id="mce-FNAME"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <span className="form-label">Email</span>
              <input
                style={{ marginBottom: rhythm(0.5) }}
                placeholder="Email"
                type="email"
                value={email}
                name="EMAIL"
                className="input"
                id="mce-EMAIL"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <span className="form-label">School</span>
              <input
                style={{ marginBottom: rhythm(1) }}
                placeholder="School"
                value={school}
                name="SCHOOL"
                className="input"
                id="mce-SCHOOL"
                onChange={(e) => setSchool(e.target.value)}
                required
              />
              <button
                className="button is-fullwidth is-primary"
                type="submit"
                style={{ marginBottom: rhythm(1) }}
              >
                Join the Waitlist
              </button>

              {isSubmitted
                && <h3 className="subtitle">Thank you! We&apos;ll be reaching out shortly</h3>}

            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WaitlistPageTemplate;

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
