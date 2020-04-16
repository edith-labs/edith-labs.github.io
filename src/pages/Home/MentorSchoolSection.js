import React from 'react';

import berkeley from 'images/schools/berkeley.png';
import duke from 'images/schools/duke.png';
import santaClara from 'images/schools/santa-clara.png';
import stanford from 'images/schools/stanford.png';
import uchicago from 'images/schools/uchicago.png';
import ucla from 'images/schools/ucla.png';
import LogoSection from './LogoSection';

function MentorSchoolSection() {
  const schools = [
    {
      src: berkeley,
      alt: 'berkeley',
      link: 'https://www.berkeley.edu',
    },
    {
      src: duke,
      alt: 'duke',
      link: 'https://duke.edu',
    },
    {
      src: santaClara,
      alt: 'santa-clara',
      link: 'https://www.scu.edu',
    },
    {
      src: stanford,
      alt: 'stanford',
      link: 'https://www.stanford.edu',
    },
    {
      src: uchicago,
      alt: 'uchicago',
      link: 'https://www.uchicago.edu',
    },
    {
      src: ucla,
      alt: 'ucla',
      link: 'http://www.ucla.edu',
    },
  ];

  return (
    <LogoSection title="Where Our Mentors Studied" logos={schools} />
  );
}

export default MentorSchoolSection;
