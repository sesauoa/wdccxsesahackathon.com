import React from 'react';
import { H1, Section } from '../common/Typography';
import yearImages from '@/data/GallaryImages';
import { img } from 'framer-motion/client';

const Gallery = () => {
  return (
    <Section id="gallery">
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
    </Section>
  );
};

export default Gallery;
