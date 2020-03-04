import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react';

import { rhythm } from '../utils/typography';

function InterestForm() {
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email)
      .then(() => {
        setEmail('');
        setIsEmailSubmitted(true);
      });
  }

  return (
    <div class='card'>
      <div class='card-content'>
        <h2 class='title'>Let's stay connected</h2>

        <form onSubmit={handleSubmit}>

          <input
            style={{ marginBottom: rhythm(1) }}
            placeholder='Email'
            type="email"
            value={email}
            name="EMAIL"
            class="input"
            id="mce-EMAIL"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            class='button is-fullwidth is-primary'
            type='submit'
            style={{ marginBottom: rhythm(0.5) }}
          >
            Learn more
          </button>

          {isEmailSubmitted && <h3 class='subtitle'>Thank you!</h3>}
        </form>
      </div>
    </div>
  );
}

export default InterestForm;