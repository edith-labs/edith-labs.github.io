import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FaLink, FaRocket, FaUserFriends } from 'react-icons/fa';


import ProductDescription from './ProductDescription';
import { rhythm } from '../utils/typography';

function InfoSection() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "investor-mockup.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const descriptions = [
    {
      title: 'Find a mentor to help elevate your career',
      description: `
        Some lines about this. Some lines about this.Some lines about this.Some lines about this.
        Some lines about this.Some lines about this.Some lines about this. Some lines about this.
        Some lines about this.Some lines about this.Some lines about this.
      `,
      icon: <FaRocket size={32} style={{ marginBottom: rhythm(0.25) }} />,
    },
    {
      title: 'Partner with the next generation of students',
      description: `
        Some lines about this. Some lines about this.Some lines about this.Some lines about this.
        Some lines about this.Some lines about this.Some lines about this. Some lines about this.
        Some lines about this.Some lines about this.Some lines about this.
      `,
      icon: <FaUserFriends size={32} style={{ marginBottom: rhythm(0.25) }} />
    },
    {
      title: 'Edith takes care of the hard parts',
      description: `
        Some lines about this. Some lines about this.Some lines about this.Some lines about this.
        Some lines about this.Some lines about this.Some lines about this. Some lines about this.
        Some lines about this.Some lines about this.Some lines about this.
      `,
      icon: <FaLink size={32} style={{ marginBottom: rhythm(0.25) }} />,
    },
  ];

  return (
    <section class='hero is-light' >
      <div
        class='hero-body'
        data-sal="slide-up"
        data-sal-easing="ease"
      >
        <div class='container'>
          <div class='columns'>
            <div class='column'>

              <div class='columns'>
                {descriptions.map(({ title, description, icon }) => (
                  <ProductDescription
                    title={title}
                    description={description}
                    icon={icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;