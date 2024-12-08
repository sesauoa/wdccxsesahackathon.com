'use client';

import React, { useState } from 'react';
import { H1, Section } from '../common/Typography';
import yearImages from '@/data/GallaryImages';
import { img } from 'framer-motion/client';
import '@/styles/gallery.css';


const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState(2024); // Default year selection. Update to most recent year.
  const yearGallery = yearImages.find((year) => year.year === selectedYear);

  if (!yearGallery) return <p>No data available for this year.</p>; //Might want to look into this to handle invalid inputs (shouldn't be any invalid inputs).

  const { year, images } = yearGallery;


  return (
    <div className='gallery-component'>
      {yearImages.map((collection) => (
        <div className="img-grid">
          {collection.images.map((image, index) => (
            <div className='gallery-img-wrapper'>
              <img
                key={index}
                src={image.image}
                alt={image.alt}
                className='gallery-image'
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
