import React from 'react';

import facebookLogo from '../images/facebook-logo.svg';
import instagramLogo from '../images/instagram-logo.svg';

const Contact = () => (
  <div id='contact' className='section'>
    <div className='section-layout'>
      <div className='section-content-wrapper' style={{textAlign: 'left'}}>
        <h1>Contact</h1>
        <h2>Address</h2>
        <p>135A Burwood Rd, Burwood NSW 2134</p>
        <h2>Opening Hours</h2>
        <p>Everyday, 11:30am - 9:00pm</p>
        <h2>Follow us</h2>
        <div className='icon-list'>
          <a href='https://www.facebook.com/Wonton-Warrior-2310086639271293/'><div className='icon-wrapper'><img src={facebookLogo} alt='facebookLogo'></img></div></a>
          <a href='https://www.instagram.com/wontonwarrior.au/'><div className='icon-wrapper'><img src={instagramLogo} alt='instagramLogo'></img></div></a>
        </div>
      </div>
      <div className='section-extra-wrapper'>
      </div>
    </div>
  </div>
);

export default Contact;
