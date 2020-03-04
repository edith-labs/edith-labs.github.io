import React from 'react';

import './styles.scss';
import BlogSection from '../components/BlogSection';
import InterestForm from '../components/InterestForm';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import StudentSection from '../components/StudentSection';
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
          style={{ margin: rhythm(1.5), marginTop: rhythm(3) }}
        >
          <div class='columns'>
            <div class='column is-three-fifths'>
              <h2 class='title'>
                Connecting students and mentors through investments in human potential.
              </h2>
            </div>
            <div class='column'>
              <InterestForm />
            </div>
          </div>
        </div>

      </section>

      <a name='students' />

      <StudentSection />

      <BlogSection />

    </Layout>
  );
}

export default HomePage;
