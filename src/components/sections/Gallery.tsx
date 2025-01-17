'use client';

import React, { useCallback, useState } from 'react';
import { H1 } from '../common/Typography';
import yearImages from '@/data/GallaryImages';
import '@/styles/gallery.css';
import Image from 'next/image';

type GalleryProps = {
  year: number;
};

const Gallery: React.FC<GalleryProps> = ({ year }) => {
  const yearGallery = yearImages.find((collection) => collection.year === year);

  if (!yearGallery) {
    return <p>No data available for this year.</p>; // Handle cases where the year doesn't match any data
  }

  const { images } = yearGallery;

  const [lightBoxImageIndex, setLightBoxImageIndex] = useState<number | null>(null);
  const openLightBox = (imageIndex: number) => {
    setLightBoxImageIndex(imageIndex);
  };

  const closeLightBox = () => {
    setLightBoxImageIndex(null);
  };

  const showNextImage = useCallback(() => {
    if (lightBoxImageIndex !== null) {
      setLightBoxImageIndex((lightBoxImageIndex + 1) % images.length);
    }
  }, [lightBoxImageIndex, images.length]);


  const showPreviousImage = useCallback(() => {
    if (lightBoxImageIndex !== null) {
      setLightBoxImageIndex((lightBoxImageIndex - 1) % images.length);
    }
  }, [lightBoxImageIndex, images.length]);

  return (
    <div className="gallery-component">
      <div className="year-display">
        <H1>{year}</H1>
      </div>
      <div className="img-grid">
        {images.map((image, index) => (
          <div key={index}
            className="gallery-img-wrapper">
            <Image
              src={image.image}
              alt={image.alt || `Image for ${year}`}
              width={500}
              height={500}
              className="gallery-image"
              onClick={() => openLightBox(index)}
            />
          </div>
        ))}
      </div>

      {lightBoxImageIndex !== null && (
        <div className="lightbox" onClick={closeLightBox}>
          <div className="lightbox-content">
            <button onClick={showPreviousImage} className="prev-button">
              &larr;
            </button>
            <div className="lightbox-image-wrapper">
              <Image
                src={images[lightBoxImageIndex].image}
                alt={images[lightBoxImageIndex].alt || `Image for ${year}`}
                width={1000}
                height={1000}
                className='lightbox-image'
                loading="lazy"
              />
            </div>
            <button onClick={showNextImage} className="next-button">
              &rarr;
            </button>
            <button onClick={closeLightBox} className="close-button">
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
