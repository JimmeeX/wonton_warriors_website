import React from 'react';

import facebookLogo from '../images/facebook-logo.svg';
import instagramLogo from '../images/instagram-logo.svg';
import menulogLogo from '../images/menulog-logo.png';
import ubereatsLogo from '../images/ubereats-logo.png';

const Contact = () => (
  <div id='contact' className='section'>
    <div className='section-layout'>
      <div className='section-content-wrapper' style={{textAlign: 'left'}}>
        <h1>Contact</h1>
        <p className='contact-detail'><a href='tel:0297010558'>+(02) 9701 0558</a></p>
        <p className='contact-detail'><a href='mailto:wontonwarriorburwood@gmail.com'>wontonwarriorburwood@gmail.com</a></p>
        <h2>Address</h2>
        <p>135A Burwood Rd, Burwood NSW 2134</p>
        <h2>Opening Hours</h2>
        <p>Everyday, 11:30am - 9:00pm</p>
        <h2>Order Online</h2>
        <div className='icon-list'>
          <a href='https://www.menulog.com.au/restaurants-wonton-warriors/menu'>
            <div className='icon-wrapper'>
              <img src={menulogLogo} alt='menulogLogo' height='40px'/>
            </div>
          </a>
          <a href='https://www.ubereats.com/en-AU/sydney/food-delivery/wonton-warrior/QU8lJ8Y-Sge5RFCId4SUqA/'>
            <div className='icon-wrapper'>
              <img src={ubereatsLogo} alt='ubereatsLogo' width='40px' height='40px' />
            </div>
          </a>
        </div>
        <h2>Follow us</h2>
        <div className='icon-list'>
          <a href='https://www.facebook.com/Wonton-Warrior-2310086639271293/'>
            <div className='icon-wrapper'
              style={{
                backgroundColor: 'white',
                borderRadius: '25px'
              }}
            >
              <img src={facebookLogo} alt='facebookLogo' width='40px' height='40px' />
            </div>
          </a>
          <a href='https://www.instagram.com/wontonwarrior.au/'>
            <div className='icon-wrapper'
              style={{
                backgroundColor: 'white',
                borderRadius: '25px'
              }}
            >
              <img src={instagramLogo} alt='instagramLogo' width='40px' height='40px' />
            </div>
          </a>
        </div>
      </div>
      <div className='section-extra-wrapper'>
        <iframe title="wonton-warrior-map" width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=135A%20Burwood%20Rd%2C%20Burwood%20NSW%202134&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
      </div>
    </div>
  </div>
);

export default Contact;
