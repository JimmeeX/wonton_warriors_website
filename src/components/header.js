import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import logo from '../images/logo.jpg';

const Header = () => (
  <BrowserRouter>
    <div className='header'>
      <img className='header-logo' src={logo} height='50px' alt='logo' />
      <ul className='header-menu'>
        <li><Link smooth to="#home">Home</Link></li>
        <li><Link smooth to="#about">About</Link></li>
        <li><Link smooth to="#menu">Menu</Link></li>
      </ul>
      <div className='header-translate'>
        <div>English</div>
        <div>Chinese</div>
      </div>
    </div>
  </BrowserRouter>
);

export default Header;
