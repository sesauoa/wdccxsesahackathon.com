'use client';

import React, { useState } from 'react';
import yearImages from '@/data/gallery';
import '@/styles/gallery.css';

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import GalleryImages from './GallaryImages';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Counter, Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';


type GalleryProps = {
  year: number;
};

const Gallery: React.FC<GalleryProps> = ({ year }) => {
  const slides = yearImages.filter(image => image.year === year).map(image => ({ src: image.image, alt: image.alt, year: image.year }));

  const [lightBoxImageIndex, setLightBoxImageIndex] = useState<number>(-1);
  const fullscreenRef = React.useRef(null);

  return (
    <div className="gallery-component">
      <div className="sticky top-16 z-10 flex justify-center items-center backdrop-blur-sm w-screen">
        <h2 className="mb-4 mt-8 text-3xl font-bold">{year}</h2>
      </div>
      <GalleryImages
        data={slides}
        onClick={(currentIndex) => setLightBoxImageIndex(currentIndex)}
      />
      <Lightbox
        slides={slides}
        open={lightBoxImageIndex >= 0}
        close={() => setLightBoxImageIndex(-1)}
        plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
        counter={{ container: { style: { top: '0px' } } }}
        fullscreen={{ ref: fullscreenRef }}
        index={lightBoxImageIndex}
      />
    </div >
  );
};

export default Gallery;
