import React from 'react';

import exteriorS from '../images/exterior-300w.jpg';
import exteriorM from '../images/exterior-768w.jpg';
import exteriorL from '../images/exterior-1280w.jpg';
import exteriorVL from '../images/exterior-1920w.jpg';


const About = () => (
  <div id='about' className='section'>
    <div className='section-layout'>
      <div className='section-content-wrapper'>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod at in sunt nostrum molestias? Debitis sapiente magnam dolorum eum ullam repellendus, vero animi perferendis perspiciatis consectetur, totam vitae iste nam, quam ea distinctio cum ipsum possimus id voluptatem quia sequi.</p>
      </div>
      <img
        className='section-extra-wrapper'
        src={exteriorS}
        srcSet={`${exteriorS} 300w, ${exteriorM} 768w, ${exteriorL} 1280w, ${exteriorVL} 1920w`}
        style={{
          objectFit: 'cover',
          width: '100%',
          opacity: '0.75'
        }}
      />
    </div>
  </div>
);

export default About;
