import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import React, { useState } from 'react';

import './styles.scss';
import BannerSection from '../components/BannerSection';
import BlogSection from '../components/BlogSection';
import InterestForm from '../components/InterestForm';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import StudentSection from '../components/StudentSection';
import { rhythm } from '../utils/typography';

function HomePage() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

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
          <div class='columns is-vcentered'>
            <div class='column is-three-fifths has-text-centered'>
              <div class='columns is-centered'>
                <div class='column is-three-fifths'>
                  <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </div>
              </div>
              <h2 class='title'>
                Partnering students with mentors through investments income share agreements.
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

      <BannerSection />

      <BlogSection />

    </Layout>
  );
}

export default HomePage;
