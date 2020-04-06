import React from 'react';

import '../styles.scss';
import BannerSection from './BannerSection';
import BlogSection from './BlogSection';
import InfoSection from './InfoSection';
import InterestForm from 'pages/Home/InterestForm';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import logo from 'images/logo-white.png';
import { rhythm } from 'utils/typography';

function Home() {
  return (
    <Layout>

      <SEO title='Homes' />

      <section
        class='hero is-bold wave-container'
        data-sal="fade"
        data-sal-easing="ease"
      >
        <div class='columns is-vcentered' style={{ margin: rhythm(1), marginBottom: rhythm(6), marginTop: rhythm(3) }}>
          <div class='column is-three-fifths has-text-centered'>
            <div class='columns is-centered is-mobile'>
              <div class='column is-three-fifths'>
                <img
                  alt='logo'
                  src={logo}
                  style={{ marginTop: 'auto', marginBottom: 'auto', display: 'flex', alignItems: 'center' }}
                />
              </div>
            </div>
            <h2 class='title is-hidden-touch'>
              Partnering students with mentors through income share agreements
            </h2>

            <h2 class='subtitle is-hidden-desktop'>
              Partnering students with mentors through income share agreements
            </h2>

          </div>
          <div class='column'>
            <InterestForm />
          </div>
        </div>
        <div class='wave'></div>

      </section>

      <InfoSection />

      <BannerSection />

      <BlogSection />

    </Layout>
  );
}

export default Home;
