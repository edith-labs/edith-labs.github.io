import React from 'react';
import { rhythm } from 'utils/typography';

function ProfileTile({
  bio, profilePic, name, company, delay,
}) {
  return (
    <div
      className="column is-one-third"
      data-sal="slide-up"
      data-sal-delay={200 + delay}
      data-sal-easing="ease"
      style={{ textAlign: 'center' }}
    >
      <div
        className="circular-portrait"
        style={{
          margin: 'auto',
          width: '100px',
          height: '100px',
          overflow: 'hidden',
          borderRadius: '50%',
          marginBottom: rhythm(0.25),
        }}
      >
        <img
          alt={name}
          style={{ width: '100%', height: 'auto' }}
          src={profilePic}
        />
      </div>
      <p className="subtitle is-4" style={{ marginBlockEnd: 0 }}>{name}</p>
      <p className="subtitle" style={{ marginBlockEnd: '0.5em' }}>{company}</p>

      <p>{bio}</p>
    </div>
  );
}

export default ProfileTile;
