import React from 'react';

import exteriorS from '../images/exterior-300w.jpg';
import exteriorM from '../images/exterior-768w.jpg';
import exteriorL from '../images/exterior-1280w.jpg';
import exteriorVL from '../images/exterior-1920w.jpg';

const About = () => (
  <div id="about" className="section">
    <div className="section-layout">
      <div className="section-content-wrapper">
        <h1 className="section-title">About</h1>
        <p>
          We are a young noodle house specialising in a variety of handmade
          wontons and noodles. We aim to deliver premium quality food at a
          reasonable price. Our head chef has over 40 years of experience
          locally and overseas. Our in-house recipe is unique in flavour and
          will bring you on a journey to the beautiful rice fields of eastern
          China.
        </p>
      </div>
      <img
        className="section-extra-wrapper"
        src={exteriorS}
        srcSet={`${exteriorS} 300w, ${exteriorM} 768w, ${exteriorL} 1280w, ${exteriorVL} 1920w`}
        alt="wonton-warrior-exterior-store"
        style={{
          objectFit: 'cover',
          width: '100%',
          opacity: '0.75',
        }}
      />
    </div>
  </div>
);

export default About;
