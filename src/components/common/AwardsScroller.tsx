import React, { useState } from 'react';

interface AwardsScrollerProps {
  winnerPlace: string;

  setWinnerPlace: (place: string) => void;
}

const AwardsScroller: React.FC<AwardsScrollerProps> = ({
  winnerPlace,
  setWinnerPlace,
}) => {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setWinnerPlace(sectionId); // Update the selected button
  };

  if (winnerPlace === 'S') {
    console.log('Special Awards');
  }

  return (
    <div className="flex flex-col overflow-hidden text-ellipsis whitespace-nowrap text-xs">
      <button
        onClick={() => handleScrollToSection('1')}
        className={`text-left ${
          winnerPlace === '1' ? 'text-white' : 'text-xs text-gray-300'
        }`}
      >
        🏆 1st Place
      </button>
      <button
        onClick={() => handleScrollToSection('2')}
        className={`text-left ${
          winnerPlace === '2' ? 'text-white' : 'text-xs text-gray-300'
        }`}
      >
        🥈 2nd Place
      </button>
      <button
        onClick={() => handleScrollToSection('3')}
        className={`truncate text-left ${
          winnerPlace === '3' ? 'text-white' : 'text-xs text-gray-300'
        }`}
      >
        🏆 3rd Place
      </button>
      <button
        onClick={() => handleScrollToSection('S')}
        className={`truncate text-left ${
          winnerPlace === 'S' ? 'text-white' : 'text-xs text-gray-300'
        }`}
      >
        🌟 Special Awards
      </button>
    </div>
  );
};

export default AwardsScroller;
