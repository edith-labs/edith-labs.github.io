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
    <section class='hero' >
      <div
        class='hero-body'
        data-sal="slide-up"
        data-sal-easing="ease"
      >
        <div class='container has-text-centered'>
          <h1 class='title'>
            {`How Edith works as a `}
            <Dropdown
              selectedOption={option}
              dropdownOptions={dropdownOptions}
              onSelect={(option) => setOption(option)}
            />
          </h1>

          <SwapTransition activeKey={option}>
            <div class='columns is-centered'>
              <div class='column is-three-fifths'>
                {option === 'Student' ?
                  <Img fluid={data.student.childImageSharp.fluid} /> :
                  <Img fluid={data.mentor.childImageSharp.fluid} />}
              </div>
            </div>
          </SwapTransition>
        </div>
      </div>
    </section>

  );
}

export default BannerSection;