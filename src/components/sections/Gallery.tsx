'use client';

import React, { useCallback, useState } from 'react';
import yearImages from '@/data/GallaryImages';
import '@/styles/gallery.css';
import Image from 'next/image';

type GalleryProps = {
  year: number;
};

const Gallery: React.FC<GalleryProps> = ({ year }) => {
  const yearGallery = yearImages.filter(image => image.year === year);

  const [lightBoxImageIndex, setLightBoxImageIndex] = useState<number | null>(null);

  const openLightBox = (imageIndex: number) => {
    setLightBoxImageIndex(imageIndex);
  };

  const closeLightBox = () => {
    setLightBoxImageIndex(null);
  };

  const showNextImage = () => {
    if (lightBoxImageIndex !== null) {
      setLightBoxImageIndex((lightBoxImageIndex + 1) % yearGallery.length);
    }
  };

  const showPreviousImage = () => {
    if (lightBoxImageIndex !== null) {
      setLightBoxImageIndex((lightBoxImageIndex - 1 + yearGallery.length) % yearGallery.length);
    }
  };

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
              onClick={() => openLightBox(index)}
            />
          </div>
        ))}
      </div>

      {lightBoxImageIndex !== null && (
        <div className="lightbox" onClick={closeLightBox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={showPreviousImage} className="prev-button">
              &larr;
            </button>
            <div className="lightbox-image-wrapper">
              <Image
                src={yearGallery[lightBoxImageIndex].image}
                alt={yearGallery[lightBoxImageIndex].alt || `Image for ${year}`}
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
      )
      }
    </div >
  );
};

export default Gallery;
