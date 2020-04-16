import React from 'react';

import citadel from 'images/companies/citadel.png';
import apple from 'images/companies/apple.png';
import creditSuisse from 'images/companies/credit-suisse.png';
import mckinsey from 'images/companies/mckinsey.png';
import morganStanley from 'images/companies/morgan-stanley.png';
import serviceNow from 'images/companies/service-now.jpeg';
import LogoSection from './LogoSection';

function MentorWorkSection() {
  const companies = [
    {
      src: apple,
      link: 'https://www.apple.com',
      alt: 'apple',
    },
    {
      src: citadel,
      link: 'https://www.citadel.com',
      alt: 'citadel',
    },
    {
      src: morganStanley,
      link: 'https://www.morganstanley.com',
      alt: 'morgan-stanley',

    },
    {
      src: mckinsey,
      link: 'https://www.mckinsey.com',
      alt: 'mckinsey',
    },
    {
      src: serviceNow,
      link: 'https://www.servicenow.com',
      alt: 'service-now',
    },
    {
      src: creditSuisse,
      link: 'https://www.credit-suisse.com/us/en.html',
      alt: 'credit-suisse',
    },
  ];

  return (
    <LogoSection title="Where Our Mentors Worked" logos={companies} />
  );
}

export default MentorWorkSection;
