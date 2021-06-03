import React, { useCallback, useEffect, useState } from 'react';

import { useTransition, animated } from 'react-spring';

type Files = {
  [index: string]: {
    [index: string]: any;
  };
};

type GalleryItem = {
  item: string;
  xy: number[];
  width: number;
  height: number;
  opacity: number;
  hidden: boolean;
  key: number;
};

// Import all files from a directory
/* global __WebpackModuleApi */
const importAll = (r: __WebpackModuleApi.RequireContext) => {
  const files: Files = {};

  const parseRegex = /(.+)-(\d+)w.(?:jpg|png)/;

  r.keys().map((key) => {
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
  require.context('../images/gallery', false, /-\d+w\.(png|jpe?g|svg)$/)
);
const baseImgs = Object.keys(imgs);

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
  const [index, setIndex] = useState(0); // Index for order of gallery items
  const [active, setActive] = useState<string | null>(null); // Gallery Item Clicked
  const [isLoaded, setIsLoaded] = useState(false); // Performance Fix on Load
  const [isUserActive, setIsUserActive] = useState(true);

  const numCols = Math.max(Math.floor(gridW / (baseWidth + marginW * 2)), 1);
  const width = gridW / numCols - marginW * 2; // Flex Grow
  const height = width / aspectRatio;
  const numRows = Math.max(Math.floor(gridH / (height + marginH * 2)), 1);
  const numItems = numCols * numRows;

  const onResize = useCallback(() => {
    const el = document.getElementById('gallery-parent');
    setGridW(el!.offsetWidth);
    setGridH(el!.offsetHeight);
  }, [setGridW, setGridH]);

  const onVisibility = useCallback(() => {
    setIsUserActive(!document.hidden);
  }, [setIsUserActive]);

  useEffect(() => {
    // Initial Values
    const el = document.getElementById('gallery-parent');
    setGridW(el!.offsetWidth);
    setGridH(el!.offsetHeight);

    setTimeout(() => setIsLoaded(true), 750);

    window.addEventListener('resize', () => onResize());
    document.addEventListener('scroll', () => setActive(null));
    document.addEventListener('visibilitychange', () => onVisibility());

    return () => {
      window.removeEventListener('resize', () => onResize());
      document.removeEventListener('scroll', () => setActive(null));
      document.removeEventListener('visibilitychange', () => onVisibility());
    };
  }, [onResize, onVisibility]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!stop && active === null)
        setIndex((index) => (index + numCols) % baseImgs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [stop, active, numCols]);

  const gridItems = baseImgs.map((item, i) => {
    if (item === active) {
      const el = document.getElementById('gallery-parent');

      // Expand, place in center
      const newWidth = Math.min(
        window.innerHeight * expandFrac * aspectRatio,
        window.innerWidth * expandFrac,
        maxExpandWidth
      );
      const newHeight = newWidth / aspectRatio;
      const newX =
        window.innerWidth / 2 + window.scrollX - el!.offsetLeft - newWidth / 2;
      const newY =
        window.innerHeight / 2 + window.scrollY - el!.offsetTop - newHeight / 2;
      return {
        item,
        xy: [newX, newY],
        width: newWidth,
        height: newHeight,
        opacity: 1,
        hidden: false,
        key: i + 1,
      };
    }

    // Shuffle numCol wise forwards
    const shiftIndex = (i - index + baseImgs.length) % baseImgs.length;
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
    const hidden = shiftIndex >= numItems;
    return { item, key: i + 1, xy: [x, y], width, height, opacity, hidden };
  });

  const transitions = useTransition(gridItems, (item) => item.item, {
    enter: ({ xy, width, height, opacity }) => ({ xy, width, height, opacity }),
    update: ({ xy, width, height, opacity }) => ({
      xy,
      width,
      height,
      opacity,
    }),
    config: { mass: 1, tension: 500, friction: 100 },
    trail: 0,
  });

  const handleClick = (item: GalleryItem) => {
    if (item.hidden === true || active === item.item) setActive(null);
    else setActive(item.item);
  };

  return (
    <div
      id="gallery-parent"
      className="section-extra-wrapper"
      onMouseEnter={() => setStop(true)}
      onMouseLeave={() => setStop(false)}
    >
      <div className="gallery">
        {isLoaded &&
          isUserActive &&
          // @ts-ignore: TODO: Fix
          transitions.map(({ item, props: { xy, ...rest }, key }) => (
            <animated.img
              id={`gallery-card-${key}`}
              key={key}
              src={imgs[item.item][300]}
              alt={`wonton-warrior-gallery-menu-${item.item}`}
              srcSet={`${imgs[item.item][300]} 300w, ${
                imgs[item.item][768]
              } 768w, ${imgs[item.item][1280]} 1280w, ${
                imgs[item.item][1920]
              } 1920w`}
              className={
                item.item === active
                  ? 'gallery-card-active'
                  : item.hidden === true
                  ? 'gallery-card-hidden'
                  : 'gallery-card'
              }
              onClick={() => handleClick(item)}
              style={{
                transform: xy.interpolate(
                  (x: number, y: number) => `translate3d(${x}px,${y}px,0)`
                ),
                ...rest,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
