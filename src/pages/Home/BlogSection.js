import React from 'react';

import { rhythm } from 'utils/typography';

function BlogSection() {
  return (
    <section className="hero">
      <div className="columns is-centered" style={{ minHeight: '500px' }}>

        <div
          className="column is-one-third"
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            margin: rhythm(2),
          }}
        >
          <div
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="200"
            data-sal-easing="ease"
          >
            <h1 className="title is-4">
              The Edith Blog
            </h1>
            <p style={{ textAlign: 'left', marginBottom: rhythm(1) }}>
              Learn more about what we’re building at Edith, our research on the future of
              financing education, and how to be an effective student or mentor on our platform.
            </p>
          </div>

          <a className="button is-primary" href="/learn">Read More</a>

        </div>

        <div className="column is-two-third" style={{ overflow: 'hidden', marginBottom: '0.75em' }}>
          <div className="skewedImageBlog" />
        </div>

      </div>
    </section>
  );
}

export default BlogSection;
