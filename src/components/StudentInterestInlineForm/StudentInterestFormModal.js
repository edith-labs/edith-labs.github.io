import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState, useEffect } from 'react';

import { rhythm } from 'utils/typography';

function StudentInterestFormModal({
  visible, defaultEmail, setIsVisible, clearParentEmail,
}) {
  const [firstName, setFirstName] = useState('');
  const [school, setSchool] = useState('');
  const [email, setEmail] = useState(defaultEmail);

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setEmail(defaultEmail);
  }, [defaultEmail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(
      email,
      {
        FNAME: firstName,
        SCHOOL: school,
        'group[26469][16]': '16',
      },
    ).then(() => {
      setIsSubmitted(true);
    });
  };

  const handleClose = () => {
    setEmail('');
    setFirstName('');
    setSchool('');
    setIsSubmitted(false);
    setIsVisible(false);
    clearParentEmail();
  };

  return (
    <div className={`modal ${visible ? 'is-active' : ''}`}>
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
                    {`Thanks for signing up for the waitlist. You should receive an email at ${email}. See you on Edith soon!`}
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
                      placeholder="School"
                      onChange={(e) => setSchool(e.target.value)}
                      value={school}
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
                      Join the Waitlist
                    </button>
                  </div>
                </form>
              )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudentInterestFormModal;
