import { Link } from 'gatsby';
import React from 'react';

import logo from 'images/logo-white.png';
import { rhythm } from 'utils/typography';

function Navbar({ showLogin = false }) {
  return (
    <div className="nav-grid">
      <Link to="/" className="nav-child">
        <img
          alt="logo"
          src={logo}
          style={{
            maxWidth: 250, display: 'flex', alignItems: 'center', margin: rhythm(0.5),
          }}
        />
      </Link>

      {showLogin
        && (
        <a
          href="https://app.edithlabs.com"
          className="button is-primary nav-child"
          style={{ marginRight: rhythm(1) }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a>
        )}

    </div>
  );
}

export default Navbar;
