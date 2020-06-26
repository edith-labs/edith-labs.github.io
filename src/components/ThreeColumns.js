import React from 'react';

import { rhythm } from 'utils/typography';

function ThreeColumns({ descriptions }) {
  const baseDelay = 300;

  return (
    <>
      <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>
        <div className="column is-three-quarters">
          <h1 className="subtitle is-3">
            How It Works
          </h1>
        </div>
      </div>

      <div className="columns is-centered" style={{ marginBottom: rhythm(2) }}>
        {descriptions.map((description, i) => (
          <div
            className="column is-one-quarter"
            data-sal="slide-up"
            data-sal-delay={baseDelay + i * 100}
            data-sal-easing="ease"
          >
            <p className="subtitle">{description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ThreeColumns;
