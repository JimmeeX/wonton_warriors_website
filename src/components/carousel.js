import React, { useState, useEffect } from 'react';

import { useTransition, animated, config } from 'react-spring';

import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';


const slides = [img1, img2, img3];

const Carousel = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(() => void setInterval(() => set(state => (state + 1) % slides.length), 5000), []);

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{ ...props, backgroundImage: `url(${item})` }}
    />
  ));
};

export default Carousel;
