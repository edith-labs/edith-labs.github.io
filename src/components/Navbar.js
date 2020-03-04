import { Link } from 'gatsby';
import React from 'react';

import logo from '../images/logo-white.png';

function Navbar() {
  return (
      <nav class='navbar is-fixed-top has-shadow'>
        <div class='container'>
          <div class='navbar-brand'>
            <Link class='navbar-item' activeClassName='navbar-item'>
              <img src={logo} style={{ maxWidth: 400, marginTop: 'auto', marginBottom: 'auto', display: 'flex', alignItems: 'center' }} />
            </Link>
          </div>
          <div id='navbarMenuHeroA' class='navbar-menu'>
            <div class='navbar-end'>

              <Link class='navbar-item' to='/' activeClassName='navbar-item is-active'>
                Home
              </Link>

              <Link class='navbar-item' to='/blog' activeClassName='navbar-item is-active'>
                Blog
              </Link>

            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;