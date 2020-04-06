import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { useState } from 'react';

import Dropdown from 'components/Dropdown';
import SwapTransition from 'components/SwapTransition';

function BannerSection() {
  const data = useStaticQuery(graphql`
    query {
      student: file(relativePath: { eq: "student-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mentor: file(relativePath: { eq: "mentor-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [option, setOption] = useState('Student');
  const dropdownOptions = ['Student', 'Mentor'];

  return (
    <section className="hero">
      <div
        className="hero-body"
        data-sal="slide-up"
        data-sal-easing="ease"
      >
        <div className="container has-text-centered">
          <h1 className="title">
            {'How Edith works as a '}
            <Dropdown
              selectedOption={option}
              dropdownOptions={dropdownOptions}
              onSelect={(selectedOption) => setOption(selectedOption)}
            />
          </h1>

          <SwapTransition activeKey={option}>
            <div className="columns is-centered">
              <div className="column is-three-fifths">
                {option === 'Student'
                  ? <Img fluid={data.student.childImageSharp.fluid} />
                  : <Img fluid={data.mentor.childImageSharp.fluid} />}
              </div>
            </div>
          </SwapTransition>
        </div>
      </div>
    </section>

  );
}

export default BannerSection;
