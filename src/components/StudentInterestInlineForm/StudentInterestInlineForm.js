import React, { useState } from 'react';

import { rhythm } from 'utils/typography';
import StudentInterestFormModal from './StudentInterestFormModal';

function StudentInterestInlineForm() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div style={{ marginTop: rhythm(2) }} className="columns">
        <div className="column">
          <input
            className="cta-input"
            placeholder="Enter Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="column">
          <button
            className="button is-primary"
            onClick={() => setIsVisible(true)}
            style={{ fontSize: '100%' }}
            type="button"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
      <StudentInterestFormModal
        visible={isVisible}
        defaultEmail={email}
        setIsVisible={setIsVisible}
        clearParentEmail={() => setEmail('')}
      />
    </>
  );
}

export default StudentInterestInlineForm;
