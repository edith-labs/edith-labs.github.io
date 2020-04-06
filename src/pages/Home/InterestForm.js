import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react';

import { rhythm } from 'utils/typography';
import SwapTransition from 'components/SwapTransition';

function InterestForm() {
  const [email, setEmail] = useState('');
  const [isStudent, setIsStudent] = useState(true);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const group = isStudent ? { 'group[26469][4]': '4' } : { 'group[26469][1]': '1' };

    addToMailchimp(email, group)
      .then(() => {
        setEmail('');
        setIsEmailSubmitted(true);
      });
  }

  return (
    <div class='card'>
      <div class='card-content' style={{ padding: rhythm(0.8)}}>

        <SwapTransition activeKey={isStudent ? "student" : "mentor"}>
          <h2 class='title' style={{ marginBottom: rhythm(1) }}>
            {isStudent ?
              `Find mentorship and capital to help you succeed` :
              `Learn how you can partner with students as a mentor`}
          </h2>
        </SwapTransition>

        <form onSubmit={handleSubmit}>

          <div class="buttons has-addons is-centered">
            <button
              class={`button is-outline ${isStudent ? 'is-primary' : ''}`}
              onClick={() => setIsStudent(true)}
              type='button'
            >
              Student
            </button>
            <button
              class={`button is-outline ${!isStudent ? 'is-primary' : ''}`}
              onClick={() => setIsStudent(false)}
              type='button'
            >
              Mentor
            </button>
          </div>

          <input
            style={{ marginBottom: rhythm(1) }}
            placeholder='Email'
            type="email"
            value={email}
            name="EMAIL"
            class="input"
            id="mce-EMAIL"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            class='button is-fullwidth is-primary'
            type='submit'
            style={{ marginBottom: rhythm(0.5) }}
          >
            Learn more
          </button>

          {isEmailSubmitted && <h3 class='subtitle'>Thank you! We'll be reaching out shortly</h3>}
        </form>
      </div>
    </div>
  );
}

export default InterestForm;


