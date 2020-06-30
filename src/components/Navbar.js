import { Link } from 'gatsby';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import logo from 'images/logo-white.png';
import { rhythm } from 'utils/typography';

function Navbar({ path }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <>
      <div className="nav-grid is-hidden-touch">
        <Link to="/">
          <img
            alt="logo"
            src={logo}
            style={{
              maxWidth: 250, display: 'flex', alignItems: 'center', margin: rhythm(0.5),
            }}
          />
        </Link>

        {/* <Link to="/fellow" className={`nav-child nav-link ${path == '/fellow' && 'active'}`}>Students</Link> */}
        {/* <Link to="/gp" className={`nav-child nav-link ${path == '/gp' && 'active'}`}>Mentors</Link> */}
        <span />
        <span />

        <a
          href="https://app.edithlabs.com"
          className="button is-primary nav-child"
          style={{ marginRight: rhythm(1) }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a>

      </div>
      <div className="nav-grid-mobile is-hidden-desktop">
        <Link to="/">
          <img
            alt="logo"
            src={logo}
            style={{
              maxWidth: 250, display: 'flex', alignItems: 'center', margin: rhythm(0.5),
            }}
          />
        </Link>

        <div className="nav-child-mobile">
          <FaBars style={{ fontSize: '120%' }} onClick={() => setIsDropdownVisible(!isDropdownVisible)} />
        </div>

        {isDropdownVisible
          && (
          <div className="nav-dropdown">
            {/* <Link to="/fellow" className="nav-child nav-link" style={{ margin: '0.5em' }}>Students</Link>
            <Link to="/gp" className="nav-child nav-link" style={{ margin: '0.5em' }}>Mentors</Link>
 */}
            <a
              href="https://app.edithlabs.com"
              className="nav-child nav-link"
              target="_blank"
              style={{ margin: '0.5em' }}
              rel="noopener noreferrer"
            >
              Log In
            </a>
          </div>
          )}

      </div>
    </>
  );
}

export default Navbar;
