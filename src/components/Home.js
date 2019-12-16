import React from 'react';

import Carousel from './carousel';

import mainLogo from '../images/main_logo.png';

const Home = () => (
  <div id='home'>
    <div className='main-logo-wrapper'>
      <img src={mainLogo} alt='main_logo'></img>
    </div>
    <Carousel />
  </div>
);

export default Home;
