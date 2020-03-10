import { Link } from 'gatsby';
import React, { useState } from 'react';

import logo from '../images/logo-white.png';
import { rhythm } from '../utils/typography';

function Navbar() {
  const [isActive, setIsActive] =  useState(false);

  return (
    <nav class='navbar is-fixed-top has-shadow'>
      <div class='container'>
        <div class='navbar-brand'>
          <Link class='navbar-item' activeClassName='navbar-item'>
            <img src={logo} style={{ maxWidth: 400, marginTop: 'auto', marginBottom: 'auto', display: 'flex', alignItems: 'center' }} />
          </Link>
          <a
            class={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id='navbarMenuHeroA' class={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div class='navbar-end'>

            {/* <Link class='navbar-item' to='/blog' activeClassName='navbar-item is-active'>
              Blog
            </Link> */}

            <div class="buttons" style={{ marginLeft: rhythm(0.25)}}>
              <a class="button is-primary" href='https://app.edithlabs.com' target='_blank'>
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