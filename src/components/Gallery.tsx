import React from 'react';

type Files = {
  [index: string]: {
    [index: string]: any;
  };
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

const Gallery = () => {
  const ImgList = baseImgs.map((item, i) => {
    const key = i + 1;

    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        key={key}
        className="gallery-card"
        href={imgs[item][1920]}
      >
        <img
          id={`gallery-card-${key}`}
          key={key}
          src={imgs[item][300]}
          alt={`wonton-warrior-gallery-menu-${item}`}
          srcSet={`${imgs[item][300]} 300w, ${imgs[item][768]} 768w, ${imgs[item][1280]} 1280w, ${imgs[item][1920]} 1920w`}
          className="gallery-card-img"
        />
      </a>
    );
  });

  return (
    <div id="gallery-parent" className="section-extra-wrapper">
      <div className="gallery">{ImgList}</div>
    </div>
  );
};

export default Gallery;
