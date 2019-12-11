import React from 'react';

import logo from '../images/logo.jpg';

const Header = () => (
  <div className='header'>
    <img src={logo} height='50px' alt='logo' />
    <ul>
      <li>About</li>
      <li>Menu</li>
      <li>Gallery</li>
    </ul>
    <div className='header-translate'>
      <div>English</div>
      <div>Chinese</div>
    </div>
  </div>
);

export default Header;
