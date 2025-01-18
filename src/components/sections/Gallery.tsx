'use client';

import React, { useState } from 'react';
import yearImages from '@/data/gallery';
import '@/styles/gallery.css';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Counter, Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import GalleryImages from './GallaryImages';


type GalleryProps = {
  year: number;
};

const Gallery: React.FC<GalleryProps> = ({ year }) => {
  const slides = yearImages.filter(image => image.year === year).map(image => ({ src: image.image, alt: image.alt, year: image.year }));

  const [lightBoxImageIndex, setLightBoxImageIndex] = useState<number>(-1);
  const fullscreenRef = React.useRef(null);

  return (
    <div className="gallery-component">
      <GalleryImages data={slides}
        onClick={(currentIndex) => setLightBoxImageIndex(currentIndex)} />
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
