import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

type Files = {
  [index: string]: {
    [index: string]: any;
  };
};

// Import all files from a directory
const importAll = (r: any) => {
  const files: Files = {};

  const parseRegex = /(.+)-(\d+)w.(?:jpg|png)/;

  r.keys().map((key: string) => {
    const match = parseRegex.exec(key);

    if (!match) return null;
    const baseFile = match[1];
    const fileSize = match[2];
    if (!(baseFile in files)) files[baseFile] = {};
    files[baseFile][fileSize] = r(key);
    return null;
  });
  return files;
};

const imgs = importAll(
  (require as any).context(
    '../images/carousel',
    false,
    /-\d+w\.(png|jpe?g|svg)$/
  )
);
const baseImgs = Object.keys(imgs);

function Carousel() {
  const [index, set] = useState(0);
  const transitions = useTransition(baseImgs[index], {
    from: { opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () =>
      void setInterval(
        () => set((state) => (state + 1) % baseImgs.length),
        5000
      ),
    []
  );

  return (
    <>
      {transitions((style: any, item: string) => (
        <animated.img
          key={item}
          className="carousel-img"
          style={style}
          src={imgs[item][300]}
          srcSet={`${imgs[item][300]} 300w, ${imgs[item][768]} 768w, ${imgs[item][1280]} 1280w, ${imgs[item][1920]} 1920w`}
          alt={`carousel-menu-${item}`}
        />
      ))}
    </>
  );
}

export default Carousel;
