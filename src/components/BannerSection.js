import React, { useState } from 'react';
import Dropdown from './Dropdown';

import SwapTransition from './SwapTransition';

function BannerSection() {
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
            <h1 class='title'>
            {option === 'Student' ?
              'Your Student Banner Here' :
              'Your Investor Banner Here'}
            </h1>
          </SwapTransition>
        </div>
      </div>
    </section>

  );
}

export default BannerSection;