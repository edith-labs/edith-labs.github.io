import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import { rhythm } from 'utils/typography';
import ProfileTile from 'components/ProfileTile';
import sarah from 'images/sarah.jpeg';
import david from 'images/david.png';
import cem from 'images/cem.jpeg';

function fellow() {
  const gps = [
    {
      name: 'Cem Koc',
      company: 'Data Engineer @ Apple',
      profilePic: cem,
      bio: 'Some stuff about Cem',
    },
    {
      name: 'Sarah Choi',
      company: 'Product Manager @ ServiceNow',
      profilePic: sarah,
      bio: 'Some stuff about Sarah',
    },
    {
      name: 'David Liu',
      company: 'Tech Investment Banker @ Morgan Stanley',
      profilePic: david,
      bio: 'Some stuff about David',
    },
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero is-info" style={{ position: 'relative' }}>

        <Navbar />

        <div className="columns is-centered" style={{ marginTop: rhythm(5), marginBottom: rhythm(5) }}>
          <div className="column is-four-fifths">
            <h1 className="title is-1">
              Change your career by developing a life-long relationship with an Edith mentor.
            </h1>
          </div>
        </div>

      </section>

      <section className="hero">

        <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>
          <div className="column is-three-quarters" style={{ textAlign: 'center' }}>
            <h1 className="subtitle is-4">
              One paragraph on what the Edith fellow program is

            </h1>
          </div>
        </div>

        <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>

          <div className="column is-three-quarters">
            <h1 className="subtitle is-3">
              How It Works
            </h1>
          </div>
        </div>

        <div className="columns is-centered" style={{ marginBottom: rhythm(2) }}>
          <div className="column is-one-quarter">
            <p>
              Something about joining a community of LP, GP, Edith fellows from other cohorts
            </p>
          </div>

          <div className="column is-one-quarter">
            <p>
              Something about accountability through a weekly update
            </p>
          </div>

          <div className="column is-one-quarter">
            <p>
              Bi-weekly calls with mentors or something like that
            </p>
          </div>
        </div>

      </section>

      <section className="hero is-info">

        <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>
          <div className="column is-three-quarters">
            <h1 className="subtitle is-3">
              Some of Our Edith GPs
            </h1>
          </div>
        </div>

        <div className="columns is-centered" style={{ marginBottom: rhythm(2) }}>
          <div className="column is-three-quarters">
            <div className="tile is-ancestor">
              {gps.map((gpProps) => <ProfileTile {...gpProps} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="hero" style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <h1 className="subtitle is-3">
              FAQ
            </h1>
          </div>
        </div>

        <div className="columns is-centered" style={{ marginBottom: rhythm(2) }}>
          <div className="column is-one-third">
            <p>
              How isa works?
            </p>

            <p>
              How paying back works
            </p>

            <p>
              Who you partner with
            </p>
          </div>

          <div className="column is-one-third">
            <p>
              Change your career by developing a life-long relationship with an Edith mentor.
            </p>

            <p>
              Change your career by developing a life-long relationship with an Edith mentor.
            </p>
            <p>
              Change your career by developing a life-long relationship with an Edith mentor.
            </p>
          </div>

        </div>
      </section>

    </Layout>
  );
}

export default fellow;
