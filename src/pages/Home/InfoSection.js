import React from 'react';
import { FaLink, FaRocket, FaUserFriends } from 'react-icons/fa';


import ProductDescription from './ProductDescription';
import { rhythm } from 'utils/typography';

function InfoSection() {
  const descriptions = [
    {
      title: 'Find a mentor',
      description: `
      Partner with mentors from companies like Apple, Amazon, Citadel, and Adobe to help you pay for college and jumpstart your career. Sign up to learn more.
      `,
      icon: <FaRocket size={32} style={{ marginBottom: rhythm(0.25) }} />,
    },
    {
      title: 'Partner with students',
      description: `
      Help the next generation succeed by teaming up with motivated students. Because you’re partnered through an income share agreement, you directly share in their future success.
      `,
      icon: <FaUserFriends size={32} style={{ marginBottom: rhythm(0.25) }} />
    },
    {
      title: 'We do the rest',
      description: `
      We take care of the details like issuing the ISAs and transferring funds so students and mentors can focus on what’s really important – doing well in college and preparing for a successful career.
      `,
      icon: <FaLink size={32} style={{ marginBottom: rhythm(0.25) }} />,
    },
  ];

  return (
    <section class='hero is-primary'>
      <div
        class='hero-body'
        data-sal="slide-up"
        data-sal-easing="ease"
      >
        <div class='container' style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
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