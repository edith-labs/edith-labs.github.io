import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react';

import logo from '../images/logo-text.png';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { rhythm } from '../utils/typography';
import './styles.scss';

function Waitlist() {
  const [email, setEmail] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const group = { 'group[26469][8]': '8' };
    addToMailchimp(email, group)
      .then(() => {
        setEmail('');
        setIsEmailSubmitted(true);
      });
  };

  return (
    <Layout>

      <SEO title="Waitlist" />

      <div
        className="container"
        style={{ marginTop: rhythm(3) }}
      >
        <div className="columns is-centered">
          <div className="column is-one-third">
            <img
              alt="logo"
              src={logo}
              style={{
                marginTop: 'auto', marginBottom: 'auto', display: 'flex', alignItems: 'center',
              }}
            />
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column is-half" style={{ marginLeft: rhythm(0.25), marginRight: rhythm(0.25) }}>
            <p>
              Hi there! Our mission at Edith Labs is to connect students with people who will
              invest in their future and help them succeed. As COVID-19 continues to impact
              universities around the world, we believe access to mentorship is more important
              than ever.
            </p>

            <br />

            <p>
              We&apos;re launching Edith to give students access to our growing network of mentors.
              They come from companies like Apple, Citadel, Morgan Stanley, and McKinsey. You can
              ask mentors individual questions, or post general asks such as resume reviews or
              requests for referrals.
            </p>

            <br />
            <p>
              If you want to ask college-specific questions, our mentors are graduates from
              UChicago, UC Berkeley, and UCLA and current students at places like
              Stanford Medical School.
            </p>

            <br />

            <p>
              While we want to help as many students as possible, we&apos;re limiting the first
              batch to 50 students – please sign up for the waitlist and we’ll add you as soon as
              possible. Welcome to Edith!
            </p>

            <br />
            <p>
              Nick & Kevin
            </p>
            <p>
              {'  Edith Co-founders'}
            </p>
          </div>
        </div>

        <div className="columns is-centered">
          <div className="column is-one-third" style={{ textAlign: 'center', marginRight: rhythm(0.25), marginLeft: rhythm(0.25) }}>
            <form onSubmit={handleSubmit}>
              <input
                style={{ marginBottom: rhythm(1) }}
                placeholder="Email"
                type="email"
                value={email}
                name="EMAIL"
                className="input"
                id="mce-EMAIL"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="button is-fullwidth is-primary"
                type="submit"
                style={{ marginBottom: rhythm(2) }}
              >
                Join the Waitlist
              </button>

              {isEmailSubmitted
                && <h3 className="subtitle">Thank you! We&apos;ll be reaching out shortly</h3>}

            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Waitlist;
