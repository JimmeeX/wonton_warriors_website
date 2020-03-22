import React from 'react';

import Carousel from '../components/Carousel';

import mainLogoS from '../images/logo_main-300w.png';
import mainLogoM from '../images/logo_main-768w.png';
import mainLogoL from '../images/logo_main-1280w.png';

const Home = () => (
  <div id="home" className="section">
    <div className="main-logo-wrapper">
      <img
        src={mainLogoS}
        alt="wonton-warrior-main-logo"
        srcSet={`${mainLogoS} 300w, ${mainLogoM} 768w, ${mainLogoL} 1280w`}
      />
    </div>
    <Carousel className="carousel" />
  </div>
);

export default Home;
