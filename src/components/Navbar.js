import { Link } from 'gatsby';
import React, { useState } from 'react';

import logo from 'images/logo-white.png';
import { rhythm } from 'utils/typography';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar is-fixed-top has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" activeClassName="navbar-item" to="/">
            <img
              alt="logo"
              src={logo}
              style={{
                maxWidth: 400, marginTop: 'auto', marginBottom: 'auto', display: 'flex', alignItems: 'center',
              }}
            />
          </Link>
          <button
            type="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div id="navbarMenuHeroA" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">

            <Link className="navbar-item" to="/learn" activeClassName="navbar-item is-active">
              Blog
            </Link>

            <div className="buttons" style={{ marginLeft: rhythm(0.25) }}>

              <a className="button is-primary" href="/waitlist">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
