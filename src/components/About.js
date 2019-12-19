import React from 'react';

import exterior from '../images/exterior.jpg';

const About = () => (
  <div id='about' className='section'>
    <div className='section-layout'>
      <div className='section-content-wrapper'>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod at in sunt nostrum molestias? Debitis sapiente magnam dolorum eum ullam repellendus, vero animi perferendis perspiciatis consectetur, totam vitae iste nam, quam ea distinctio cum ipsum possimus id voluptatem quia sequi.</p>
      </div>
      <div
        className='section-extra-wrapper'
        style={
          {
            backgroundImage: `url(${exterior})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: '0.75'
          }
        }
      >
      </div>
    </div>
  </div>
);

export default About;
