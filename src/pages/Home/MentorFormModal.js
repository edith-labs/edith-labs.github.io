import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react';

import { rhythm } from 'utils/typography';

function MentorFormModal() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setFirstName('');
    setEmail('');
    setIsVisible(false);
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(
      email,
      {
        FNAME: firstName,
        'group[26469][1]': '1',
      },
    ).then(() => {
      setIsSubmitted(true);
    });
  };

  return (
    <>
      <span
        style={{ padding: '0.75em', cursor: 'pointer' }}
        onClick={() => setIsVisible(true)}
      >
        Interested in mentoring?
      </span>
      <div className={`modal ${isVisible ? 'is-active' : ''}`}>
        <div
          className="modal-background"
          onClick={handleClose}
        />
        <div className="modal-card">
          <section className="modal-card-body">
            <div className="container is-fluid">
              {isSubmitted
                ? (
                  <div style={{ margin: rhythm(1.5), fontSize: '125%' }}>
                    <p>
                      Hi
                      {firstName}
                      {' '}
                      👋!
                    </p>
                    <br />
                    <p>
                      {`Thanks for your interest in being a mentor! You should receive an email at ${email} to schedule some time to chat so we can get to know you better. See you soon!`}
                    </p>
                    <br />
                    <p>Nick & Kevin</p>
                  </div>
                )
                : (
                  <form onSubmit={handleSubmit}>
                    <div className="field" style={{ margin: rhythm(1.5) }}>
                      <input
                        className="modal-input"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        required
                      />
                    </div>

                    <div className="field" style={{ margin: rhythm(1.5) }}>
                      <input
                        className="modal-input"
                        placeholder="Enter Email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                      />
                    </div>

                    <div className="field" style={{ margin: rhythm(1.5) }}>
                      <button className="button is-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default MentorFormModal;
