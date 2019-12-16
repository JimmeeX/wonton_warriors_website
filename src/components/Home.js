import React from 'react';

import sample1 from '../images/sample.jpg';
import mainLogo from '../images/main_logo.png';

const Home = () => (
  <div id='home'>
    <div className='main-logo-wrapper'>
      <img src={mainLogo} alt='main_logo'></img>
    </div>
    <div className='carousel-wrapper'>
      <img src={sample1} alt='sample1' />
    </div>
  </div>
);

export default Home;
