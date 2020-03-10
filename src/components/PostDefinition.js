import React from 'react';
import { rhythm } from '../utils/typography';

function PostDefinition({ definition }) {
  return (
    <div class='hero is-info' style={{ padding: rhythm(1), marginBottom: rhythm(1.5), marginTop: rhythm(1), marginLeft: rhythm(0.5), marginRight: rhythm(0.5) }}>
      <p class='subtitle'>Definition</p>
      <p>
        {definition}
      </p>
    </div>
  );
}

export default PostDefinition;