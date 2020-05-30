import React from 'react';

import nick from '../images/nick.jpg';
import kevin from '../images/kevin.jpg';
import ethan from '../images/ethan.jpg';
import { rhythm } from '../utils/typography';

function PostSubheader({ author, date }) {
  const getMetadata = () => {
    switch (author) {
      case 'Kevin Arifin':
        return { src: kevin, role: 'Edith Co-Founder' };
      case 'Nick Chua':
        return { src: nick, role: 'Edith Co-Founder' };
      case 'Ethan Ding':
        return { src: ethan, role: 'Founding Engineer' };
      default:
        return {};
    }
  };

  const { src, role } = getMetadata();

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
            {role}
          </p>
        </div>
      </div>

    </article>
  );
}

export default PostSubheader;
