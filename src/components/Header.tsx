import React, { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';

import Headerlogo from '../images/logo_header-300w.png';

const isShow = (elId: string) => {
  const headerEl = document.getElementsByClassName('header')[0];
  const el = document.getElementById(elId);
  if (el == null || headerEl == null) return false;
  const headerHeight = headerEl.getBoundingClientRect().height;
  return el.getBoundingClientRect().top <= headerHeight;
};

const getScrollTo = (elId: string) => {
  const headerEl = document.getElementsByClassName('header')[0];
  const el = document.getElementById(elId);
  if (el == null || headerEl == null) return 0;
  const headerHeight = headerEl.getBoundingClientRect().height;
  return el.offsetTop - headerHeight + 1;
};

const Header = () => {
  const [active, setActive] = useState('home');

  const index = [
    { name: 'home', id: 0 },
    { name: 'about', id: 1 },
    { name: 'menu', id: 2 },
    { name: 'contact', id: 3 },
  ];

  // Show Active Header Item
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (isShow('contact')) setActive('contact');
      else if (isShow('menu')) setActive('menu');
      else if (isShow('about')) setActive('about');
      else setActive('home');
    });
  }, []);

  // Animate Scroll (user scroll => stop animation)
  let stopScroll = false;
  const [, setY] = useSpring(() => ({ y: 0 }));

  const onWheel = () => {
    stopScroll = true;
    window.removeEventListener('wheel', onWheel);
  };

  const scrollToTarget = (item: string) => {
    const value = getScrollTo(item);

    window.addEventListener('wheel', onWheel);

    setY({
      y: value,
      reset: true,
      from: { y: window.scrollY },
      onRest: () => {
        stopScroll = false;
        window.removeEventListener('wheel', onWheel);
      },
      // @ts-ignore: TODO: Fix
      onFrame: (props) => {
        if (!stopScroll) window.scroll(0, props.y);
      },
    });
  };

  return (
    <header className="header">
      <div className="header-logo-wrapper">
        <div
          onClick={() => scrollToTarget('home')}
          onKeyPress={() => scrollToTarget('home')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
        >
          <img className="header-logo" src={Headerlogo} alt="header-logo" />
        </div>
      </div>
      <ul className="header-menu">
        {index.map(({ name, id }) => (
          <li key={id}>
            <div
              className={active === name ? 'menu-item-active' : 'menu-item'}
              onClick={() => scrollToTarget(name)}
              onKeyPress={() => scrollToTarget(name)}
              role="button"
              tabIndex={0}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
