import React from 'react';

import './styles.scss';
import BannerSection from '../components/BannerSection';
import BlogSection from '../components/BlogSection';
import InterestForm from '../components/InterestForm';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import InfoSection from '../components/InfoSection';
import logo from '../images/logo-white.png';
import { rhythm } from '../utils/typography';

function HomePage() {
  return (
    <Layout>

      <SEO title='Home' />

      <section
        class='hero is-bold'
        data-sal="fade"
        data-sal-easing="ease"
      >
        <div
          class='hero-head'
          style={{ margin: rhythm(1.5), marginTop: rhythm(3), marginBottom: rhythm(0.5) }}
        >
          <div class='columns is-vcentered'>
            <div class='column is-three-fifths has-text-centered'>
              <div class='columns is-centered is-mobile'>
                <div class='column is-three-fifths'>
                  <img src={logo} style={{ marginTop: 'auto', marginBottom: 'auto', display: 'flex', alignItems: 'center' }} />
                </div>
              </div>
              <h2 class='title is-hidden-mobile'>
                Partnering students with mentors through investments income share agreements
              </h2>

              <h2 class='subtitle is-hidden-desktop'>
                Partnering students with mentors through investments income share agreements
              </h2>

            </div>
            <div class='column'>
              <InterestForm />
            </div>
          </div>
        </div>

      </section>

      <InfoSection />

      <BannerSection />

      {/* <BlogSection /> */}

    </Layout>
  );
}

export default HomePage;
