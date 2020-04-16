import React from 'react';

import { rhythm } from 'utils/typography';

function LogoSection({ title, logos = [] }) {
  return (
    <section className="hero is-info">
      <div className="columns is-centered" style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
        <div className="column is-four-fifths" style={{ textAlign: 'center' }}>
          <h1 className="title is-4">{title}</h1>

          <div className="columns is-centered is-multiline">
            {logos.map(({ src, link, alt }) => (
              <div className="column is-one-third" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a href={link}><img src={src} alt={alt} style={{ maxHeight: '50px' }} /></a>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default LogoSection;
