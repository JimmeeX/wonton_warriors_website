import React, { useEffect, useState } from 'react';

import { useTransition, animated } from 'react-spring';

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

const imgs = importAll(require.context('../images/gallery', false, /-\d+w\.(png|jpe?g|svg)$/));
const base_imgs = Object.keys(imgs);

const baseWidth = 150;
const aspectRatio = 1.5; // W:H
const maxExpandWidth = 1000;
const expandFrac = 0.8;

const marginW = 10;
const marginH = 10;

const Gallery = () => {
  const [stop, setStop] = useState(false);

  // Current Size of parent element
  const [gridW, setGridW] = useState(0);
  const [gridH, setGridH] = useState(0);
  const [index, setIndex] = useState(0);      // Index for order of gallery items
  const [active, setActive] = useState(null); // Gallery Item Clicked

  const numCols = Math.max(Math.floor(gridW / (baseWidth + (marginW*2))), 1);
  const width = gridW / numCols - (marginW*2); // Flex Grow
  const height = width / aspectRatio;
  const numRows = Math.max(Math.floor(gridH / (height + (marginH*2))), 1);
  const numItems = numCols * numRows;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setGridW(document.getElementById('gallery-parent').offsetWidth);
      setGridH(document.getElementById('gallery-parent').offsetHeight);
    });
    // Initial Values
    setGridW(document.getElementById('gallery-parent').offsetWidth);
    setGridH(document.getElementById('gallery-parent').offsetHeight);

    document.addEventListener('scroll', () => setActive(null));

    return () => {
      window.removeEventListener("resize", () => {
        setGridW(document.getElementById('gallery-parent').offsetWidth);
        setGridH(document.getElementById('gallery-parent').offsetHeight);
      });
      document.removeEventListener('scroll', () => setActive(null));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!stop && active === null) setIndex(index => (index + numCols) % base_imgs.length)
    }, 5000);
    return () => clearInterval(interval);
  }, [stop, active, numCols]);

  let gridItems = base_imgs.map((item, i) => {
    if (item === active) {
      const el = document.getElementById('gallery-parent');

      // Expand, place in center
      const newWidth = Math.min(window.innerHeight * expandFrac * aspectRatio, window.innerWidth * expandFrac, maxExpandWidth);
      const newHeight = newWidth / aspectRatio;
      const newX = window.innerWidth / 2 + window.scrollX - el.offsetLeft - newWidth / 2
      const newY = window.innerHeight / 2 + window.scrollY - el.offsetTop - newHeight / 2
      return {
        item,
        xy: [newX, newY],
        width: newWidth,
        height: newHeight,
        opacity: 1,
        hidden: false
      }
    }

    // Shuffle numCol wise forwards
    const shiftIndex = (i - index + base_imgs.length) % base_imgs.length
    const col = shiftIndex % numCols;
    const row = Math.min(Math.floor(shiftIndex / numCols), numRows);

    // Dimensions of cell holding image
    const cellWidth = gridW / numCols;
    const cellHeight = gridH / numRows;

    // Center image in cell
    const x = cellWidth * col + cellWidth / 2 - width / 2;
    const y = cellHeight * row + cellHeight / 2 - height / 2;

    // Handle hidden images
    const opacity = shiftIndex >= numItems ? 0 : 1;
    const hidden = shiftIndex >= numItems ? true : false;
    return { item, xy: [x, y], width, height, opacity, hidden }
  });

  const transitions = useTransition(gridItems, item => item.item, {
    from: ({ xy, width, height, opacity }) => ({ xy, width, height, opacity }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height, opacity }) => ({ xy, width, height, opacity }),
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 0
  });

  const handleClick = (item) => {
    if (item.hidden || active === item) setActive(null);
    else setActive(item);
  };

  return (
    <div
      id='gallery-parent'
      className='section-extra-wrapper'
      onMouseEnter={() => setStop(true)}
      onMouseLeave={() => setStop(false)}
    >
      <div className='gallery'>
        {transitions.map(({ item, props: { xy, ...rest }, key }) => (
          <animated.img
            id={`gallery-card-${key}`}
            key={key}
            src={imgs[item.item][300]}
            alt={`wonton-warrior-gallery-menu-${item.item}`}
            srcSet={`${imgs[item.item][300]} 300w, ${imgs[item.item][768]} 768w, ${imgs[item.item][1280]} 1280w, ${imgs[item.item][1920]} 1920w`}
            className={item.item === active ? 'gallery-card-active' : (item.hidden === true ? 'gallery-card-hidden' : 'gallery-card')}
            onClick={() => handleClick(item.item)}
            style={{
              transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
              ...rest
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;