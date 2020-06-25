import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react';

import { rhythm } from 'utils/typography';

function LimitPartnerFormModal() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setSchool('');

    setIsVisible(false);
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(
      email,
      {
        FNAME: firstName,
        LNAME: lastName,
        SCHOOL: school,
        'group[26469][2048]': '2048',
      },
    ).then(() => {
      setIsSubmitted(true);
    });
  };

  return (
    <>
      <span
        className="button is-primary"
        onClick={() => setIsVisible(true)}
      >
        Get In Touch
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
                      {`Hi ${firstName} 👋!`}
                    </p>
                    <br />
                    <p>
                      {`
                        Thanks for your interest in being an Edith General Partner! You should
                        receive an email at ${email} to schedule some time to chat so we can get
                        to know you better. See you soon!
                      `}
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
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
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
                      <input
                        className="modal-input"
                        placeholder="School"
                        onChange={(e) => setSchool(e.target.value)}
                        value={school}
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

export default LimitPartnerFormModal;
