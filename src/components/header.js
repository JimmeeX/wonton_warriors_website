import React from 'react';

import logo from '../images/logo.jpg';

const Header = () => (
  <div className='header'>
    <img className='header-logo' src={logo} height='50px' alt='logo' />
    <ul className='header-menu'>
      <li><a>About</a></li>
      <li><a>Menu</a></li>
      <li><a>Gallery</a></li>
    </ul>
    <div className='header-translate'>
      <div>English</div>
      <div>Chinese</div>
    </div>
  </div>
);

export default Header;
