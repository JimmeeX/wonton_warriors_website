import React from 'react';

import Gallery from './gallery';

import sample from '../images/menu/DSC05835.jpg';

import menuPDF from '../menu.pdf';

const Menu = () => (
  <div id='menu' className='section'>
    <div className='section-layout'>
      <div id='gallery-parent' className='section-extra-wrapper'>
        <Gallery />
      </div>
      <div className='section-content-wrapper'>
        <h1>Menu</h1>
        <p>Wonton Warrior specialises in unique, freshly hand-crafted wontons. We also offer a comprehensive range of other Chinese delicacies including dumplings noodles and specialty dishes to suit all taste palettes and appetites.</p>
        <p><a href={menuPDF} className='menu-link'>Download Menu</a></p>
      </div>
    </div>
  </div>
);

export default Menu;