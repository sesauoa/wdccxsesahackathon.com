'use client';

import React from 'react';
import { H1 } from '../common/Typography';
import yearImages from '@/data/GallaryImages';
import '@/styles/gallery.css';

type GalleryProps = {
  year: number;
};

const Gallery: React.FC<GalleryProps> = ({ year }) => {
  const yearGallery = yearImages.find((collection) => collection.year === year);

  if (!yearGallery) {
    return <p>No data available for this year.</p>; // Handle cases where the year doesn't match any data
  }

  const { images } = yearGallery;

  return (
    <div className="gallery-component">
      <div className="year-display">
        <H1>{year}</H1>
      </div>
      <div className="img-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-img-wrapper">
            <img
              src={image.image}
              alt={image.alt || `Image for ${year}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
