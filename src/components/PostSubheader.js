import React from 'react';

import nick from '../images/nick.jpg';
import kevin from '../images/kevin.jpg';
import { rhythm } from '../utils/typography';

function PostSubheader({ author, date }) {
  const getMetadata = () => {
    switch (author) {
      case 'Kevin Arifin':
        return { src: kevin };
      case 'Nick Chua':
        return { src: nick };
      default:
        return {};
    }
  };

  const { src } = getMetadata();

  return (
    <article className="media" style={{ marginTop: rhythm(2) }}>

      <figure className="media-left">
        <p className="image is-64x64">
          <img alt="avatar" className="is-rounded" src={src} />
        </p>
      </figure>

      <div className="media-content">
        <div className="content">
          <p>
            <strong>{author}</strong>
            {' '}
            <small>{date}</small>
            <br />
            Edith Co-founder
          </p>
        </div>
      </div>

    </article>
  );
}

export default PostSubheader;
