import React from 'react';

import mainLogoS from '../images/logo_main-300w.png';
import mainLogoM from '../images/logo_main-768w.png';
import mainLogoL from '../images/logo_main-1280w.png';

import Carousel from '../components/Carousel';

function Home() {
  return (
    <section id="home" className="section">
      <div className="main-logo-wrapper">
        <img
          src={mainLogoS}
          alt="wonton-warrior-main-logo"
          srcSet={`${mainLogoS} 300w, ${mainLogoM} 768w, ${mainLogoL} 1280w`}
          className="main-logo"
        />
      </div>
      <Carousel />
    </section>
  );
}

export default Home;
