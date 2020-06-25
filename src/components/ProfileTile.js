import React from 'react';

function ProfileTile({
  bio, profilePic, name, company,
}) {
  return (
    <div className="tile is-parent">
      <article className="tile is-child notification is-success">
        <div className="content">
          <p>{bio}</p>
        </div>
        <div className="columns">
          <div className="column is-one-third">
            <div
              className="circular-portrait"
              style={{
                width: '64px',
                height: '64px',
                overflow: 'hidden',
                borderRadius: '50%',
              }}
            >
              <img
                alt={name}
                style={{ width: '100%', height: 'auto' }}
                src={profilePic}
              />
            </div>
          </div>

          <div className="column is-two-thirds">
            <p className="title">{name}</p>
            <p className="subtitle">{company}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProfileTile;
