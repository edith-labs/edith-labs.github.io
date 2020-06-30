import React from 'react';

import { rhythm } from 'utils/typography';

function ThreeColumns({ title, descriptions }) {
  const baseDelay = 300;

  return (
    <>
      <h1 className="subtitle is-3">
        {title}
      </h1>
      <div className="columns is-centered">
        {descriptions.map((description, i) => (
          <div
            className="column is-one-third"
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
