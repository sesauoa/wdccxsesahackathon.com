'use client';

import React, { useState } from 'react';
import yearImages from '@/data/GallaryImages';
import '@/styles/gallery.css';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Counter, Fullscreen, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';


type GalleryProps = {
  year: number;
};

const Gallery: React.FC<GalleryProps> = ({ year }) => {
  const yearGallery = yearImages.filter(image => image.year === year);

  const [lightBoxImageIndex, setLightBoxImageIndex] = useState<number | null>(null);
  const fullscreenRef = React.useRef(null);
  const [openLightBox, setOpenLightBox] = useState<boolean>(false);

  return (
    <div className="gallery-component">
      <div className="img-grid">
        {yearGallery.map((image, index) => (
          <div key={index}
            className="gallery-img-wrapper">
            <Image
              src={image.image}
              alt={image.alt || `Image for ${year}`}
              width={500}
              height={500}
              className="gallery-image"
              onClick={() => { setLightBoxImageIndex(index); setOpenLightBox(true); }}
            />
          </div>
        ))}
      </div>
      <Lightbox
        slides={yearImages.filter(image => image.year === year).map(image => ({ src: image.image, alt: image.alt }))}
        open={openLightBox}
        close={() => setOpenLightBox(false)}
        plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
        counter={{ container: { style: { top: '0px' } } }}
        fullscreen={{ ref: fullscreenRef }}
      />
    </div >
  );
};

export default Gallery;
