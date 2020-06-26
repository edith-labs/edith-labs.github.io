import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'
import { rhythm } from 'utils/typography';

function Toggle({ title, content }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'row', marginBottom: rhythm(0.5) }}>
        <div
          onClick={() => setVisible(!visible)}
          style={{ marginRight: rhythm(0.5), marginTop: rhythm(0.25), cursor: 'pointer' }}
        >
          {visible ? <FaMinus /> : <FaPlus  />}
        </div>

        <div>
          <div
            onClick={() => setVisible(!visible)}
            style={{ marginBottom: rhythm(0.25), cursor: 'pointer' }}
          >
            <p className="subtitle is-4">{title}</p>
          </div>

          {visible &&
            <div>
              <p>{content}</p>
            </div>}

        </div>

      </div>
    </>
  );
}

export default Toggle;