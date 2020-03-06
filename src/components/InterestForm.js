import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react';
import { Transition, SwitchTransition } from 'react-transition-group';
import styled from "styled-components";

import { rhythm } from '../utils/typography';

const FadeDiv = styled.div`
  transition: 0.25s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
`;

const FadeTransition = ({ children, ...rest }) => (
  <Transition {...rest}>
    {state => <FadeDiv state={state}>{children}</FadeDiv>}
  </Transition>
);

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
      <div class='card-content'>

        <SwitchTransition mode='out-in' >
          <FadeTransition
            key={isStudent ? "student" : "mentor"}
            timeout={150}
            unmountOnExit
            mountOnEnter
          >
            {isStudent ?
              <h2 class='title' style={{ marginBottom: rhythm(1) }}>Get started with finding a mentor to pay for school</h2>:
              <h2 class='title' style={{ marginBottom: rhythm(1) }}>Learn how you can partner with students as a mentor</h2>}
          </FadeTransition>
        </SwitchTransition>

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


