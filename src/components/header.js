import React, { useState, useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Headerlogo from '../images/logo_header.png';

const Header = () => {
  const [active, setActive] = useState('home');
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const offset = 0.90;
      if (window.scrollY < window.innerHeight*offset) setActive('home');
      else if (window.scrollY < window.innerHeight*offset * 2) setActive('about');
      else if (window.scrollY < window.innerHeight*offset * 3) setActive('menu');
      else setActive('location');
    })
  }, []);

  return (
    <BrowserRouter>
      <div className='header'>
        <div className='header-logo-wrapper'>
          <Link smooth to="#home">
            <img className='header-logo' src={Headerlogo} alt='header-logo' />
          </Link>
        </div>
        <ul className='header-menu'>
          <li><Link smooth to="#home" className={active === 'home' ? 'menu-item-active' : 'menu-item'}>Home</Link></li>
          <li><Link smooth to="#about" className={active === 'about' ? 'menu-item-active' : 'menu-item'}>About</Link></li>
          <li><Link smooth to="#menu" className={active === 'menu' ? 'menu-item-active' : 'menu-item'}>Menu</Link></li>
          <li><Link smooth to="#contact" className={active === 'location' ? 'menu-item-active' : 'menu-item'}>Contact</Link></li>
        </ul>
        {/* <div className='header-translate'>
          <div>English</div>
          <div>Chinese</div>
        </div> */}
      </div>
    </BrowserRouter>
  )
};

export default Header;
