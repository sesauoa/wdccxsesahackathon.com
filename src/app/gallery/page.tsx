'use client';
import { H1 } from '@/components/Typography';
import { SectionLayout } from '@/components/SectionLayout';
import FilterButton from '@/components/common/FilterButton';
import { useState } from 'react';
import GalleryImages from './_components/GallaryImages';
import yearImages from '@/data/gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import {
  Counter,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import React from 'react';
import { motion } from 'motion/react';

export default function GalleryPage() {
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [lightBoxImageIndex, setLightBoxImageIndex] = useState<number>(-1);
  const fullscreenRef = React.useRef(null);

  const years = [2024, 2023, 2022, 2021].sort((a, b) => b - a);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const toggleYear = (year: number) => {
    setSelectedYears(
      selectedYears.includes(year)
        ? selectedYears.filter((y) => y !== year)
        : [...selectedYears, year]
    );
  };

  // Group images by year
  const groupedImages = years.reduce(
    (acc, year) => {
      const yearFilteredImages = yearImages
        .filter(
          (image) =>
            selectedYears.length === 0 || selectedYears.includes(image.year)
        )
        .filter((image) => image.year === year)
        .map((image) => ({
          src: image.image,
          alt: image.alt,
          year: image.year,
        }));

      if (yearFilteredImages.length > 0) {
        acc[year] = yearFilteredImages;
      }
      return acc;
    },
    {} as Record<number, { src: string; alt: string; year: number }[]>
  );

  // Flatten images for lightbox
  const allFilteredImages = Object.values(groupedImages).flat();

  return (
    <SectionLayout className="flex flex-col">
      <H1>Gallery</H1>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4">
          {years.map((year) => (
            <FilterButton
              key={year}
              onClick={() => toggleYear(year)}
              isSelected={selectedYears.includes(year)}
            >
              {year}
            </FilterButton>
          ))}
        </div>
      </div>
      <motion.div
        className="w-full"
        key={selectedYears.join('-')}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {years.map((year) => {
          const images = groupedImages[year];
          if (!images) return null;

          return (
            <motion.div key={year} className="mb-12" variants={cardVariants}>
              <div className="sticky top-16 z-10 flex w-full justify-center backdrop-blur-sm">
                <h2 className="mb-4 mt-8 text-3xl font-bold">{year}</h2>
              </div>
              <GalleryImages
                data={images}
                onClick={(currentIndex) => {
                  const startIndex = allFilteredImages.findIndex(
                    (img) => img.src === images[currentIndex].src
                  );
                  setLightBoxImageIndex(startIndex);
                }}
              />
            </motion.div>
          );
        })}
        <Lightbox
          slides={allFilteredImages}
          open={lightBoxImageIndex >= 0}
          close={() => setLightBoxImageIndex(-1)}
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          counter={{ container: { style: { top: '0px' } } }}
          fullscreen={{ ref: fullscreenRef }}
          index={lightBoxImageIndex}
        />
      </motion.div>
    </SectionLayout>
  );
}
