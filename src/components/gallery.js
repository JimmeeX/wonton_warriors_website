import React, { useEffect, useState } from 'react';

import { useTransition, animated } from 'react-spring'

// Import all files from a directory
function importAll(r) {
  return r.keys().map(r);
};

const images = importAll(require.context('../images/menu', false, /\.(png|jpe?g|svg)$/));

const imgWidth = 200;
const imgHeight = 133;
const marginW = 10;
const marginH = 10;

const Gallery = () => {
  const [stop, setStop] = useState(false);

  // Current Size of parent element
  const [gridW, setGridW] = useState(0);
  const [gridH, setGridH] = useState(0);
  const [index, setIndex] = useState(0);      // Index for order of gallery items
  const [active, setActive] = useState(null); // Gallery Item Clicked

  const numCols = Math.max(Math.floor(gridW / (imgWidth + (marginW*2))), 1);
  const numRows = Math.max(Math.floor(gridH / (imgHeight + (marginH*2))), 1);
  const numItems = numCols * numRows;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setGridW(document.getElementById('gallery-parent').offsetWidth);
      setGridH(document.getElementById('gallery-parent').offsetHeight);
    });
    // Initial Values
    setGridW(document.getElementById('gallery-parent').offsetWidth);
    setGridH(document.getElementById('gallery-parent').offsetHeight);

    window.addEventListener('mouseup', () => setActive(null));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!stop && active === null) setIndex(index => (index + numCols) % images.length)
    }, 5000);
    return () => clearInterval(interval);
  }, [stop, active, numCols]);

  let gridItems = images.map((item, i) => {
    if (item === active) {
      const el = document.getElementById('gallery-parent');
      // Expand, place in center
      const multiplier = Math.min(window.innerHeight / imgWidth, (window.innerWidth * 0.9) / imgHeight);
      const newWidth = imgWidth * multiplier;
      const newHeight = imgHeight * multiplier;
      const newX = window.innerWidth / 2 + window.scrollX - el.offsetLeft - newWidth / 2
      const newY = window.innerHeight / 2 + window.scrollY - el.offsetTop - newHeight / 2
      // console.log(newX, newY);
      return {
        item,
        xy: [newX, newY],
        width: newWidth,
        height: newHeight,
        opacity: 1
      }
    }

    // Shuffle numCol wise forwards
    const shiftIndex = (i - index + images.length) % images.length
    const col = shiftIndex % numCols;
    const row = Math.floor(shiftIndex / numCols);
    const x = gridW / numCols * col;
    const y = gridH / numRows * row;
    let opacity = 1;
    if (shiftIndex >= numItems) {
      opacity = 0;
    }
    // console.log(i, shiftIndex, row, col, item)
    return { item, xy: [x, y], width: imgWidth, height: imgHeight, opacity }
  });

  const transitions = useTransition(gridItems, item => item.item, {
    from: ({ xy, width, height, opacity }) => ({ xy, width, height, opacity }),
    // to: ({ xy, width, height, opacity }) => ({ xy, width, height, opacity }),
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height, opacity }) => ({ xy, width, height, opacity }),
    // leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 0
  });

  return (
    <div
      id='gallery-parent'
      className='section-extra-wrapper'
      onMouseEnter={() => setStop(true)}
      onMouseLeave={() => setStop(false)}
    >
      <div className='gallery'>
        {transitions.map(({ item, props: { xy, ...rest }, key }) => (
          <animated.div
            id={`gallery-card-${key}`}
            key={key}
            className={item.item === active ? 'gallery-card-active' : 'gallery-card'}
            onMouseDown={() => setActive(item.item)}
            // onMouseUp={() => setActive(null)}
            style={{
              backgroundImage: `url(${item.item})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              margin: `${marginH}px ${marginW}px ${marginH}px ${marginW}px`,
              transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
              ...rest
            }}
          >
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;