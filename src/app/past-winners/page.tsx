'use client';

import React, { useState } from 'react';
import Carousel from '@/components/common/Carousel';
import pastWinners from '@/data/PastWinners';

export default function PastWinnersPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSetIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const currentWinner = pastWinners[currentIndex];

  return (
    <div className="h-screen w-full p-20">
      {/* Static Heading */}
      <h1 className="mb-8 text-left text-4xl font-bold">Past Winners</h1>

      {/* Dynamic Title */}
      <h2 className="mb-8 text-center text-2xl font-bold">
        {currentWinner.place}: {currentWinner.teamName}
      </h2>

      {/* Carousel Component */}
      <Carousel
        winners={pastWinners.map((winner) => ({ image: winner.image }))}
        setCurrentIndex={handleSetIndex}
        currentIndex={currentIndex}
      />

      {/* Dynamic Description */}
      <p className="mt-8 text-center text-gray-600">
        {currentWinner.description}
      </p>
    </div>
  );
}
