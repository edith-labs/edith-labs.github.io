import React from 'react';
import { rhythm } from '../utils/typography';

function PostDefinition({ definition }) {
  return (
    <div
      className="hero is-info"
      style={{
        padding: rhythm(1),
        marginBottom: rhythm(1.5),
        marginTop: rhythm(1),
        marginLeft: rhythm(0.5),
        marginRight: rhythm(0.5),
      }}
    >
      <p className="subtitle is-5">Definition</p>
      <p>
        {definition}
      </p>
    </div>
  );
}

export default PostDefinition;
