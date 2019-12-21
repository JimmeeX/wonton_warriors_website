import React, { useState, useEffect } from 'react';

import { useTransition, animated, config } from 'react-spring';

// Import all files from a directory
function importAll(r) {
  return r.keys().map(r);
};

const slides = importAll(require.context('../images/carousel', false, /\.(png|jpe?g|svg)$/));

const Carousel = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], item => item, {
    from: { opacity: 0 },
    enter: { opacity: 0.3 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(() => void setInterval(() => set(state => (state + 1) % slides.length), 5000), []);

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className='carousel-img'
      style={{ ...props, backgroundImage: `url(${item})` }}
    />
  ));
};

export default Carousel;
