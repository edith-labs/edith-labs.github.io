import React from 'react';

import { rhythm } from 'utils/typography';

function Step({ number, title, description }) {
  return (
    <div
      style={{
        display: 'flex', marginTop: rhythm(1), marginBottom: rhythm(1), alignItems: 'middle',
      }}
      data-sal="slide-up"
      data-sal-delay={200}
      data-sal-easing="ease"
    >
      <div className="numberCircle" style={{ marginRight: rhythm(1), flex: '0 0 60px' }}>{number}</div>

      <div>
        <h1 className="title is-4" style={{ marginBottom: rhythm(1) }}>
          {title}
        </h1>
        <h1 className="subtitle is-4" style={{ marginBottom: rhythm(1) }}>
          {description}
        </h1>
      </div>
    </div>
  );
}

export default Step;