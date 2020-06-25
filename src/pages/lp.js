import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import ThreeColumns from 'components/ThreeColumns';
import LimitedPartnerFormModal from 'components/LimitedPartnerFormModal';
import { rhythm } from 'utils/typography';

function lp() {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero is-info" style={{ position: 'relative' }}>

        <Navbar />

        <div className="columns is-centered" style={{ marginTop: rhythm(5), marginBottom: rhythm(5) }}>
          <div className="column is-four-fifths">
            <h1 className="title is-1">
              Edith Limited Partners (LPs) are really important
            </h1>
          </div>
        </div>

      </section>

      <section className="hero">

        <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>
          <div className="column is-three-quarters" style={{ textAlign: 'center' }}>
            <h1
              className="subtitle is-4"
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              One paragraph on what it means to be an Edith Limited Partner
            </h1>

            <LimitedPartnerFormModal />
          </div>
        </div>

        <ThreeColumns
          descriptions={[
            'something about joining community of edith lp, gp, fellow',
            'something about accountability through weekly update',
            'something about partering 1-1 with a mentor',
          ]}
        />

      </section>

      <section className="hero is-info">
        <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>
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

export default lp;
