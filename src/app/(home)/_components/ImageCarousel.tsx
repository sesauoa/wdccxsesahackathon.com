'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { motion } from 'motion/react'; // No need for drag

import { imgs } from '@/app/(home)/_data/CarouselImages';

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export default function ImageCarousel() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const handlePrevious = () => {
    setImgIndex((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-[50vw] w-[100%] overflow-hidden py-8 lg:h-[25vw]">
      <motion.div
        style={{ translateX: `-${imgIndex * 100}%` }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        className="flex h-[100%] items-center"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="btn btn-circle absolute left-5 top-1/2 -translate-y-1/2 transform"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="btn btn-circle absolute right-5 top-1/2 -translate-y-1/2 transform"
      >
        ❯
      </button>
    </div>
  );
}

const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          transition={SPRING_OPTIONS}
          className="h-[100%] w-[100%] shrink-0"
        />
      ))}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex ? 'bg-neutral-50' : 'bg-neutral-500'
          }`}
        />
      ))}
    </div>
  );
};
