import React from 'react';

import '../styles.scss';
import InterestForm from 'pages/Home/InterestForm';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import logo from 'images/logo-white.png';
import { rhythm } from 'utils/typography';
import InfoSection from './InfoSection';
import BlogSection from './BlogSection';
import BannerSection from './BannerSection';

function Home() {
  return (
    <Layout>

      <SEO title="Home" />

      <section
        className="hero is-bold wave-container"
        data-sal="fade"
        data-sal-easing="ease"
      >
        <div className="columns is-vcentered" style={{ margin: rhythm(1), marginBottom: rhythm(6), marginTop: rhythm(3) }}>
          <div className="column is-three-fifths has-text-centered">
            <div className="columns is-centered is-mobile">
              <div className="column is-three-fifths">
                <img
                  alt="logo"
                  src={logo}
                  style={{
                    marginTop: 'auto', marginBottom: 'auto', display: 'flex', alignItems: 'center',
                  }}
                />
              </div>
            </div>
            <h2 className="title is-hidden-touch">
              Partnering students with mentors through income share agreements
            </h2>

            <h2 className="subtitle is-hidden-desktop">
              Partnering students with mentors through income share agreements
            </h2>

          </div>
          <div className="column">
            <InterestForm />
          </div>
        </div>
        <div className="wave" />

      </section>

      <InfoSection />

      <BannerSection />

      <BlogSection />

    </Layout>
  );
}

export default Home;
