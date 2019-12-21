import React, { useState, useEffect } from 'react';

import { useTransition, animated, config } from 'react-spring';

// Import all files from a directory
const importAll = (r) => {
  const files = {};

  const parse_regex = /(.+)-(\d+)w.(?:jpg|png)/;

  r.keys().map(key => {
    const match = parse_regex.exec(key);
    const base_file = match[1];
    const file_size = match[2];
    if (!(base_file in files)) files[base_file] = {}
    files[base_file][file_size] = r(key);
    return null;
  })
  return files;
};

const imgs = importAll(require.context('../images/carousel', false, /-\d+w\.(png|jpe?g|svg)$/));
const base_imgs = Object.keys(imgs);

const Carousel = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(base_imgs[index], item => item, {
    from: { opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(() => void setInterval(() => set(state => (state + 1) % base_imgs.length), 5000), []);

  return transitions.map(({ item, props, key }) => (
    <animated.img
      key={key}
      className='carousel-img'
      style={{ ...props }}
      src={imgs[item][300]}
      srcSet={`${imgs[item][300]} 300w, ${imgs[item][768]} 768w, ${imgs[item][1280]} 1280w, ${imgs[item][1920]} 1920w`}
      alt={`carousel-menu-${item}`}
    />
  ));
};

export default Carousel;
