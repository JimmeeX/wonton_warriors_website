import React, { useState, useEffect, Fragment } from 'react';

import Gallery from './gallery';

import menuPDF from '../menu.pdf';

const Menu = () => {
  const [pageWidth, setPageWidth] = useState(document.body.offsetWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setPageWidth(document.body.offsetWidth));

    return () => window.removeEventListener('resize', () => setPageWidth(document.body.offsetWidth))
  }, []);

  const section = (
    <div className='section-content-wrapper'>
      <h1>Menu</h1>
      <p>Wonton Warrior specialises in unique, freshly hand-crafted wontons. We also offer a comprehensive range of other Chinese delicacies including dumplings, noodles and specialty dishes to suit all taste palettes and appetites.</p>
      <p><a href={menuPDF} className='menu-link'>Download Menu</a></p>
    </div>
  );

  const menuItems = pageWidth <= 700 ? (
    <Fragment>
      {section}
      <Gallery />
    </Fragment>
  ) : (
    <Fragment>
      <Gallery />
      {section}
    </Fragment>
  );

  return (
    <div id='menu' className='section'>
      <div className='section-layout'>
        {menuItems}
      </div>
    </div>
  )
};

export default Menu;