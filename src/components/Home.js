import React from 'react';

import Carousel from './carousel';

import mainLogo from '../images/logo_main.png';

const Home = () => (
  <div id='home' className='section'>
    <div className='main-logo-wrapper'>
      <img src={mainLogo} alt='main-logo'></img>
    </div>
    <Carousel className='carousel' />
  </div>
);

export default Home;
