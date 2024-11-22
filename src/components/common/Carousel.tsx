'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

type Winner = {
  image: string;
};

interface CarouselProps {
  winners: Winner[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  winners,
  currentIndex,
  setCurrentIndex,
}) => {
  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? winners.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === winners.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl ">
      {/* Carousel Content */}
      <div className="rounded-4xl overflow-hidden shadow-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {winners.map((winner, index) => (
            <div key={index} className="flex w-full flex-shrink-0">
              <img
                src={winner.image}
                alt={`Slide ${index}`}
                className="w-full rounded-2xl object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination with Feather Chevrons */}
      <div className="mt-6 flex items-center justify-center space-x-8">
        {/* Left Chevron */}
        <button onClick={handlePrev} className="text-gray-600 hover:text-black">
          <ChevronLeft size={40} />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center space-x-3">
          {winners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-5 w-5 rounded-full ${
                currentIndex === index ? 'bg-white' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>

        {/* Right Chevron */}
        <button onClick={handleNext} className="text-gray-600 hover:text-black">
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
