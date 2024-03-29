import React from 'react';

import facebookLogo from '../images/facebook-logo.svg';
import instagramLogo from '../images/instagram-logo.svg';
import menulogLogo from '../images/menulog-logo.png';
import ubereatsLogo from '../images/ubereats-logo.png';

const Contact = () => (
  <section id="contact" className="section">
    <div className="section-layout">
      <div className="section-content-wrapper" style={{ textAlign: 'left' }}>
        <h1 className="section-title">Contact</h1>
        <address>
          <a className="contact-detail" href="tel:+61467406770">
            +(61) 467 406 770
          </a>
          <br />
          <a
            className="contact-detail"
            href="mailto:wontonwarriorburwood@gmail.com"
          >
            wontonwarriorburwood@gmail.com
          </a>
        </address>
        <h2 className="section-subtitle">Address</h2>
        <p>135A Burwood Rd, Burwood NSW 2134</p>
        <h2 className="section-subtitle">Opening Hours</h2>
        <p>Everyday, 11:30am - 9:00pm</p>
        <h2 className="section-subtitle">Order Online</h2>
        <div className="icon-list">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.menulog.com.au/restaurants-wonton-warrior/menu"
          >
            <div className="icon-wrapper">
              <img src={menulogLogo} alt="menulogLogo" height="40px" />
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.ubereats.com/en-AU/sydney/food-delivery/wonton-warrior/QU8lJ8Y-Sge5RFCId4SUqA/"
          >
            <div className="icon-wrapper">
              <img
                src={ubereatsLogo}
                alt="ubereatsLogo"
                width="40px"
                height="40px"
              />
            </div>
          </a>
        </div>
        <h2 className="section-subtitle" style={{ marginTop: '10px' }}>
          Follow us
        </h2>
        <div className="icon-list">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/Wonton-Warrior-2310086639271293/"
          >
            <div
              className="icon-wrapper"
              style={{
                backgroundColor: 'white',
                borderRadius: '25px',
              }}
            >
              <img
                src={facebookLogo}
                alt="facebookLogo"
                width="40px"
                height="40px"
              />
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/wontonwarrior.au/"
          >
            <div
              className="icon-wrapper"
              style={{
                backgroundColor: 'white',
                borderRadius: '25px',
              }}
            >
              <img
                src={instagramLogo}
                alt="instagramLogo"
                width="40px"
                height="40px"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="section-extra-wrapper">
        <iframe
          title="wonton-warrior-map"
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=135A%20Burwood%20Rd%2C%20Burwood%20NSW%202134&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
      </div>
    </div>
  </section>
);

export default Contact;
