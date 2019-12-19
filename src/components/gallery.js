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

const GalleryCard = (props) => {
  return (
    <div className='gallery-card'
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
    </div>
  );
};

const Gallery = () => {
  // Current Size of parent element
  const [gridW, setGridW] = useState(0);
  const [gridH, setGridH] = useState(0);
  const [index, setIndex] = useState(0);

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
  }, []);

  useEffect(() => void setInterval(
    () => setIndex(index => (index + 8) % images.length), 5000
  ), []);

  // const items = images.slice(index, (index + numItems) % images.length);

  // const items = images.slice(index, (index + numItems) % images.length).concat()

  let gridItems = images.map((item, i) => {
    // Shuffle numCol wise forwards
    const shiftIndex = (i - index + images.length) % images.length
    const col = shiftIndex % numCols;
    const row = Math.floor(shiftIndex / numCols);
    let x = gridW / numCols * col;
    let y = gridH / numRows * row;
    let opacity = 1;
    if (shiftIndex >= numItems) {
      opacity = 0;
      x = 1000;
      y = 1000;
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
    trail: 25
  });

  // console.log(gridItems)

  // console.log(gridItems);

  // console.log(gridW, gridH);
  // console.log(numCols, numRows);
  // console.log(index, numCols);
  // console.log(bind);
  // console.log(transitions);

  return (
    <div className='gallery'>
      {/* {gridItems.map((item, i) =>
        <div
          key={i}
          style={{
            backgroundImage: `url(${item.item})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            transform: `translate3d(${item.x/2}, ${item.y/2}, 0)`,
            height: `${item.height}px`,
            width: `${item.width}px`,
            margin: `${marginH}px ${marginW}px ${marginH}px ${marginW}px`
          }}
        ></div>
      )} */}
      {transitions.map(({ item, props: { xy, ...rest }, key }) => (
        <animated.div
          key={key}
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
  );
};

export default Gallery;