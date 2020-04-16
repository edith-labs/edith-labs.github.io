import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react';

import { rhythm } from 'utils/typography';

function StudentInterestInlineForm() {
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const group = { 'group[26469][16]': '16' };

    addToMailchimp(email, group)
      .then(() => {
        setEmail('');
        setIsEmailSubmitted(true);
      });
  };

  return (
    <>
      <div style={{ marginTop: rhythm(2) }} className="columns">
        <div className="column">
          <input
            className="cta-input"
            placeholder="Enter Email"
            type="email"
            id="mce-EMAIL"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="column">
          <button
            className="button is-primary"
            onClick={handleSubmit}
            style={{ fontSize: '100%' }}
            type="button"
          >
            Join the Waitlist
          </button>

        </div>
      </div>
      <div>
        {isEmailSubmitted && 'Thank you! We\'ll be reaching out shortly'}
      </div>
    </>
  );
}

export default StudentInterestInlineForm;
